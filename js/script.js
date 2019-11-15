const quoteArray = [
    {
        content: "Graphic design is building systems",
        author: "Michael Stinson"
    },
    {
        content: "I rarely agree with what clients ask me to do.",
        author: "Ross Lovegrove"
    },
    {
        content: "I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.",
        author: "Buzz Andersen"
    },
    {
        content: "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
        author: "Leo Burnett"
    },
    {
        content: "What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind &ndash; or on more likely, on paper &ndash; before a mouse cursor ever opened Photoshop.",
        author: "Kyle Meyer"
    },
    {
        content: "Designers tend to whisper, ad agencies tend to shout.",
        author: " David Stuart"
    },
    {
        content: "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
        author: "Paul Rand"
    },
    {
        content: "Tell it like it is, in a way they want to hear it.",
        author: "Wihan Meerholz"
    },
    {
        content: "The best way to find any and all errors is to publish your work.",
        author: "Dan Vore"
    },
    {
        content: "Creativity is piercing the mundane to find the marvelous.",
        author: "Bill Moyers"
    },
    {
        content: "I warn you against believing that advertising is a science.",
        author: "Bill Bernbach"
    }
];


//grab html elements
const button = document.getElementById('new-quote');
const quote = document.getElementById('text');
const author = document.getElementById('author');
const tweet = document.getElementById('tweet');

button.addEventListener('click', () => randomQuote());

//random quote function
const randomQuote = () => {
    //get a random number to pick a random quote object
    const random = Math.floor(Math.random() * quoteArray.length);
    //get that random quote's content
    quote.innerHTML = quoteArray[random].content;
    //get that random quote's author
    author.innerHTML = quoteArray[random].author;
}

randomQuote()
