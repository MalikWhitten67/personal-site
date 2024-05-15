let json = await import('./data/data.json', { assert: { type: "json" } }).then((data) => data.default);

function ai(prompt, trainingData, context, memory) {
    let sensitivity = calculateSensitivity(context);
    let bestMatch = { input: "", output: "", score: 0 };

    if(prompt.length <= 1) {
        return "Please provide a longer prompt!";
    }    
    if(prompt === ".exit") {
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
        updateMemory(memory, bestMatch.input, bestMatch.output);
        return bestMatch.output;
    } else {
        // If input is a special token
        if (prompt.startsWith("@")) {
            return handleSpecialToken(prompt, memory, trainingData);
        }

        // If not a special token, check conversation history
        let lastResponse = memory.lastResponse;
        if (lastResponse) {
            let inferredResponse = inferResponse(lastResponse, trainingData);
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
function updateMemory(memory, input, output) {
    memory.rememberedInput = input;
    memory.rememberedOutput = output;

    // Save last response to a file 
    localStorage.setItem('lastResponse', output);
    memory.lastResponse = output;
}
 
export function ask(prompt, context, memory) {
    return ai(prompt, json, context, memory);
}
