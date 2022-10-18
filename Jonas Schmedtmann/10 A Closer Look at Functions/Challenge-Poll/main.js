'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get the answer
        const answer = +prompt(`${this.question} \n ${this.options.join(`\n`)}\n(Write option number)`);

        // register the answer
            // Check with short circiting. 
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
    },
    
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        }else if(type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// to put different values like [5, 2, 3] in displayResults() insted of this.answers
// you have to make an new obj inside call method with the same Key to make function work witout errors
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
