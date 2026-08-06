class card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

// Cards
const aceOfSpades = new card('Spades', 'Ace', 11);

console.log(aceOfSpades);