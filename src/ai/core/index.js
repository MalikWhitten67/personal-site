let json = await import('./data/data.json', { assert: { type: "json" } }).then((data) => data.default);

function ai(prompt, trainingData, context, memory) {
    let sensitivity = calculateSensitivity(context);
    let bestMatch = { input: "", output: "", score: 0 };

    if (prompt.length <= 1) {
        return "Please provide a longer prompt!";
    }
    if (prompt === ".exit") {
        console.log("Goodbye!");
        process.exit();
    }
    // Tokenize the prompt
    let promptTokens = tokenize(prompt);

    // Look for a match in training data
    for (let i = 0; i < trainingData.length; i++) {
        let input = trainingData[i].input;
        let output = trainingData[i].output;
        let inputTokens = tokenize(input);
        let score = calculateScore(inputTokens, promptTokens);
        if (score > bestMatch.score) {
            bestMatch.input = input;
            bestMatch.output = output;
            bestMatch.score = score;
        }
    }

    // If a suitable match is found
    if (bestMatch.score >= sensitivity) {
        updateMemory(memory, bestMatch.input, bestMatch.output, prompt);
        return bestMatch.output;
    } else {
        // If input is a special token
        if (prompt.startsWith("@")) {
            return handleSpecialToken(prompt, memory, trainingData);
        }

        // If not a special token, check conversation history
        let lastResponse = memory.lastResponse;
        if (lastResponse) {
            let inferredResponse = inferResponse(lastResponse, trainingData, memory);
            if (inferredResponse) return inferredResponse;
        }

        // Fallback to asking for input
        return getRandomResponse();
    }
}

function inferResponse(prompt, trainingData, memory) {
    // Infer response based on context
    let contextTokens = tokenize(memory.lastResponse || "");
    for (let i = 0; i < trainingData.length; i++) {
        let input = trainingData[i].input;
        let output = trainingData[i].output;

        // Check if any input token is present in the prompt and not too low in context
        let inputTokens = tokenize(input);
        let promptTokens = tokenize(prompt);
        let matchCount = 0;
        for (let token of inputTokens) {
            if (promptTokens.includes(token) && !isLowContext(token, contextTokens)) {
                matchCount++;
            }
        }
        // If more than half of the tokens match and they are not low in context, return the output
        if (matchCount / inputTokens.length > 0.5) {
            return output;
        }
    }
    return null;
}

function isLowContext(token, contextTokens) {
    // Check if the token is low in context
    // For simplicity, let's define low context as common words like "like", "a", "the", "and", etc.
    // You can adjust this list based on your specific needs
    let commonWords = ["like", "a", "the", "and", "it", "is", "I", "you", "he", "she", "they", "we"];
    return commonWords.includes(token) || contextTokens.includes(token);
}

function tokenize(input) {
    // Tokenization without removing stop words
    return input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/);
}

function calculateScore(inputTokens, promptTokens) {
    // Calculate the Jaccard similarity score based on token overlap
    let intersection = 0;
    let union = new Set([...inputTokens, ...promptTokens]);
    for (let token of inputTokens) {
        if (promptTokens.includes(token)) {
            intersection++;
        }
    }
    return intersection / union.size;
}

function calculateSensitivity(context) {
    // Fixed sensitivity for now
    return context.sensitivity || 0.5;
}

function getRandomResponse() {
    let responses = [
        "hm, I'm not sure, can you provide more information?",
        "I'm not sure, can you help me?",
        "whoops my data is limited, can you provide more information?",
        "beep boop beep, im not sure, can you provide more information?..."
    ];
    let randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Handle special tokens
function handleSpecialToken(prompt, memory, trainingData) {
    if (prompt === "@remember") {
        let rememberedInput = memory.rememberedInput;
        let rememberedOutput = memory.rememberedOutput;
        learn(trainingData, rememberedInput, rememberedOutput);
        console.log("Thank you for the information!");
        return getRandomResponse();
    } else if (prompt === "@ask") {
        console.log("I'm not sure, can you help me?");
        return getRandomResponse();
    } else {
        // If it's not a special token, return the remembered output if any
        if (memory.rememberedInput && memory.rememberedInput === prompt) {
            return memory.rememberedOutput;
        }
    }
}

// Learn new input-output pair
function learn(trainingData, input, output) {
    trainingData.push({ input: input, output: output });
}

// Update memory with new input-output pair
function updateMemory(memory, input, output, prompt) {
    memory.rememberedInput = input;
    memory.rememberedOutput = output;
    memory.lastResponse = output;
    sessionStorage.setItem('lastResponse', output)
    sessionStorage.setItem('lastPrompt', prompt)
}

// Check if the last response contains certain patterns
function checkLast(lastResponse) {
    let patterns = ["would you", "do you", "could you", "can you"];
    for (let pattern of patterns) {
        if (lastResponse.toLowerCase().includes(pattern)) {
            return true;
        }
    }
    return false;
}

// Check if the user's response is affirmative
function isAffirmative(response) {
    let affirmatives = ["yes", "yeah", "sure", "of course", "absolutely", "definitely"];
    for (let affirmative of affirmatives) {
        if (response.toLowerCase().includes(affirmative)) {
            return true;
        }
    }
    return false;
}

export function ask(prompt, context, memory) {
    let response = ai(prompt, json, context, memory);
    let lastResponse = sessionStorage.getItem('lastResponse')
    let lastPrompt = sessionStorage.getItem('lastPrompt')

    console.log(lastResponse, checkLast(lastResponse), isAffirmative(prompt))
    if (lastResponse && checkLast(lastResponse)) {
        // Trigger action to find more information
        if (isAffirmative(prompt)) {
            response = "Sure, I'll find more information for you.";
            let context = extractContext(lastResponse);
            let matchingInput = findMatchingInput(lastPrompt, lastResponse, lastPrompt, json)
            if (matchingInput) {
                response = matchingInput.output;
            } else {
                response = `Sorry I could not find any information on ${lastPrompt}`;
            }
        }
    }

    // Extract context from the last response
    function extractContext(lastResponse) {
        // Here you can implement your logic to extract context from the last response.
        // For demonstration purpose, let's just return the last word of the last response.
        let words = lastResponse.split(/\s+/);
        if (words.length > 0) {
            return words[words.length - 1];
        }
        return null;
    }

    // Find a matching input from the training data based on the context
    // Find a matching input from the training data based on the context
    function findMatchingInput(context, lastResponse, lastPrompt, trainingData) {
        let lastPromptTokens = tokenize(lastPrompt)
        let filteredData = trainingData.filter(data => data.output !== lastResponse);
        let bestMatch = { input: "", output: "", score: 0 };
        for (let data of filteredData) {
            let inputTokens = tokenize(data.input);
            let scoreInputToLastResponse = calculateScore(inputTokens, lastPromptTokens);
            if (scoreInputToLastResponse >= bestMatch.score) {
                bestMatch.input = data.input;
                bestMatch.output = data.output;
            }
        } 
        if (bestMatch.score >= context.sensitivity) {
            return bestMatch;
        }

        return null;
    }


    return response;
}
