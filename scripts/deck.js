class deck {
    constructor() {
        this.cards = [];
    }

    shuffle() {}
    //Shuffle logic

    draw() {
        return this.cards.pop();
    }
}