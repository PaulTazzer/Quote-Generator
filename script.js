const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving them.", author: "Zig Ziglar" },
  { text: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "If you want to achieve greatness, stop asking for permission.", author: "Anonymous" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Keep going. Be all in.", author: "Bryan Hutchinson" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Little by little, one travels far.", author: "J.R.R. Tolkien" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "You don’t have to be perfect to be amazing.", author: "Anonymous" },
  { text: "Don’t limit your challenges—challenge your limits.", author: "Jerry Dunn" },
  { text: "A river cuts through rock not because of its power, but because of its persistence.", author: "Jim Watkins" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
  { text: "Your limitation—it’s only your imagination.", author: "Anonymous" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
  { text: "Dream it. Wish it. Do it.", author: "Anonymous" },
  { text: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
  { text: "Great things take time.", author: "Anonymous" },
  { text: "Don’t stop until you’re proud.", author: "Anonymous" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Anonymous" }
];


const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const newQuoteApiBtn = document.getElementById('new-quote-api');


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.text}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener('click', getRandomQuote);
