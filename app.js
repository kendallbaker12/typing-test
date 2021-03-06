const SENTENCES = [
    "The quick brown fox jumped over the fence.",
    "It's been over a fence, I'm starting to think that tractor is never coming back.",
    "What do you believe to be the answer to my problems?",
]

var app = new Vue({
    el: "#app",
    data: {
        start: Date.now(),
        currentSentence: "",
        answer: "",
        time: "",
        finished: false,

    },
    methods: {
        startRace: function () {
            this.start = Date.now();
        },
        getRandomSentence: function () {
            var index = Math.floor(Math.random() * 3);
            this.currentSentence = SENTENCES[index];
            return this.currentSentence;
        },
        calculateTotalTime: function () {
            setTimeout(() => {
                this.time = Date.now() - this.start;
            });

        },
        resetTest: function () {
            this.answer= "";
            this.time = "";
        },
        resetWithNewSentence: function () {
            this.getRandomSentence();
            while (this.currentSentence == this.answer) {
                this.getRandomSentence();
            };
            this.answer = "";
            this.time = "";
        }
    },
    computed: {
        // this function runs whenever the sentence the user is typing changes
        // use it like a variable (v-if="finishedTyping")
        finishedTyping: function () {
            // you probably wanna use your variable here in place of these awful ones
            if (this.currentSentence == this.answer) {
                this.calculateTotalTime();
                this.finished = true;
            } else {
                this.finished = false;
            }
        }
    },
    created: function () {
        this.getRandomSentence();
    }
});

/*

extra cool additions:
 - Keep a high score that stays between attempts
 - Let the user pick the sentence that they will be typing
 - Show a timer on the screen as they are typing

*/
