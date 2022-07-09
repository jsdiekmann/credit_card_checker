const movies = [
    {genre: 'movie',
     author: 'Joe Dirt',
     quote: "Keep on, keepin' on"},
    {genre: 'movie',
     author: 'Goodfellas',
     quote: "As far back as I can remember I always wanted to be a gangster."},
     {genre: 'movie',
     author: 'Pulp Fiction',
     quote: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who in the name of charity and good will shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee."},
     {genre: 'movie',
     author: 'National Treasure',
     quote: "I'm gonna steal the Declaration of Independence"},
     {genre: 'movie',
     author: 'Fight Club',
     quote: "You met me at a very strange time in my life."}
];

const inspirational = [
    {genre: 'inspiration',
    author: 'Maya Angelou',
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."},
    {genre: 'inspiration',
    author: 'Gandhi',
    quote: "Be the change that you wish to see in the world."},
    {genre: 'inspiration',
    author: 'George Eliot',
    quote: "It is never too late to be what you might have been."},
    {genre: 'inspiration',
    author: 'Ralph Waldo Emerson',
    quote: "For every minute you are angry you lose sixty seconds of happiness."},
    {genre: 'inspiration',
    author: 'Anaïs Nin',
    quote: "We don't see things as they are, we see them as we are."}
];

const comedic = [
    {genre: 'funny',
    author: 'Mitch Hedberg',
    quote: "My fake plants died because I did not pretend to water them."},
    {genre: 'funny',
    author: 'Yogi Berra',
    quote: "No one goes there nowadays, it's too crowded."},
    {genre: 'funny',
    author: 'Chris Rock',
    quote: "I used to work at McDonald's making minimum wage. You know what that means when someone pays you minimum wage? You know what your boos was trying to say? 'Hey if I could pay you less, I would, but it's against the law.'"},
    {genre: 'funny',
    author: 'Bob Newhart',
    quote: "I don't like country music, but I don't mean to denigrate those who do. And for those who like country music, denigrate means to 'put down'"},
    {genre: 'funny',
    author: 'Steven Wright',
    quote: "I went to a restaurant that serves 'breakfast at any time'. So I ordered French Toast during the Renaissance."},
];

const genres = [movies, inspirational, comedic];

const returnGenre = () => {
    return genres[Math.floor(Math.random() * 3)];
}
const returnSelection = () => {
    return Math.floor(Math.random() * 5);
};

const quoteGenerator = () => {
    const genre = returnGenre();
    const selector = returnSelection();
    const choice = genre[selector];
    let greeting = '';
    if (genre === movies) {
        greeting = 'a random movie';
    } else if (genre === inspirational) {
        greeting = 'an inspirational';
    } else {
        greeting = 'a funny';
    };
    console.log(`You look like you could use ${greeting} quote!\n\n${choice.quote}\n  -${choice.author}`);
};