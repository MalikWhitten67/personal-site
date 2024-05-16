let json = await import('./data/data.json', { assert: { type: "json" } }).then((data) => data.default);
function calculateScore(inputTokens, promptTokens) {
    // Calculate the weighted Jaccard similarity score based on token overlap and importance
    let intersection = 0;
    let union = new Set([...inputTokens, ...promptTokens]);
    let promptTokenSet = new Set(promptTokens);

    // Assign importance weights to tokens
    let tokenWeights = {};
    for (let token of union) {
        tokenWeights[token] = getTokenWeight(token);
    }

    for (let token of inputTokens) {
        if (promptTokenSet.has(token)) {
            intersection += tokenWeights[token];
        }
    }

    // Calculate weighted Jaccard similarity score
    return intersection / union.size;
}

function getTokenWeight(token) {
    // Assign weights to tokens based on importance
    // You can customize this based on your requirements
    let weight = 1;
    if (token === "important_word") {
        weight = 2; // Increase weight for important words
    }
    return weight;
}

// Update AI function
function ai(prompt, trainingData, context, memory) {
    let sensitivity = calculateSensitivity(context);
    let bestMatches = [];

    if (prompt.length <= 1) {
        return "Please provide a longer prompt!";
    }
    if (prompt === ".exit") {
        console.log("Goodbye!");
        process.exit();
    }
    
    let promptTokens = tokenize(prompt);

    for (let i = 0; i < trainingData.length; i++) {
        let input = trainingData[i].input;
        let output = trainingData[i].output;
        let inputTokens = tokenize(input);
        let score = calculateScore(inputTokens, promptTokens);

        // Filter out low scoring matches
        if (score >= sensitivity) {
            bestMatches.push({ input: input, output: output, score: score });
        }
    }

    // Sort matches by score
    bestMatches.sort((a, b) => b.score - a.score);

    if (bestMatches.length > 0) {
        // Return the highest scoring match
        updateMemory(memory, bestMatches[0].input, bestMatches[0].output, prompt);
        return bestMatches[0].output;
    } else {
        // If no suitable match found, handle as before
        if (prompt.startsWith("@")) {
            return handleSpecialToken(prompt, memory, trainingData);
        }
        
        let lastResponse = memory.lastResponse;
        if (lastResponse) {
            let inferredResponse = inferResponse(lastResponse, trainingData, memory);
            if (inferredResponse) return inferredResponse;
        }

        return getRandomResponse();
    }
}

// Fine-tuned function to infer response based on context
function inferResponse(prompt, trainingData, memory) {
    let contextTokens = tokenize(memory.lastResponse || "");
    let bestMatch = { input: "", output: "", score: 0 };

    for (let i = 0; i < trainingData.length; i++) {
        let input = trainingData[i].input;
        let output = trainingData[i].output;

        let inputTokens = tokenize(input);
        let promptTokens = tokenize(prompt);
        let score = calculateScore(inputTokens, promptTokens);

        if (score > bestMatch.score) {
            bestMatch.input = input;
            bestMatch.output = output;
            bestMatch.score = score;
        }
    }

    // Adjust sensitivity for inference based on context
    if (bestMatch.score >= context.sensitivity) {
        return bestMatch.output;
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

function includesInformermedWord(lastResponse) {
    // words like would you like to learn more? or do you want to learn more?
    let informedWords = ["learn", "more", "information", "details", "know", "understand", "detailed", "more detailed"];
    for (let word of informedWords) {
        if (lastResponse.toLowerCase().includes(word)) {
            return true;
        }
    }
    return false;
}

export function ask(prompt, context, memory) {
    let response = ai(prompt, json, context, memory);
    let lastResponse = sessionStorage.getItem('lastResponse') || "";
    let lastPrompt = sessionStorage.getItem('lastPrompt') || "";
 
    if (lastResponse && checkLast(lastResponse)) { 
        if (isAffirmative(prompt) && includesInformermedWord(lastResponse)){ { 
            console.log(lastResponse)
            let matchingInput = findMatchingInput(lastPrompt, lastResponse, json);
            console.log(matchingInput);
            if (matchingInput) {
                return matchingInput.output;
            }
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

    console.log(response);
    
    // Find a matching input from the training data based on the context
function findMatchingInput(context, lastResponse, trainingData) {
    let contextTokens = tokenize(context);
    trainingData = trainingData.filter((item) => item.output !== lastResponse);
    // find closest match to last response
    let bestMatch = { input: "", output: "", score: 0 };
    for (let i = 0; i < trainingData.length; i++) {
        let input = trainingData[i].input;
        let output = trainingData[i].output;
        let inputTokens = tokenize(input);
        let score = calculateScore(inputTokens, tokenize(lastResponse));
        if (score > bestMatch.score) {
            bestMatch.input = input;
            bestMatch.output = output;
            bestMatch.score = score;
        }
    }
    if (bestMatch.score > context.sensitivity) {
        return bestMatch;
    }
    return null;
}

    
    return response;
}
