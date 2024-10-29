const purposes = [
    "Become an expert in spaghetti measurement",
    "Help a pigeon cross the road",
    "Invent a new dance move called 'The Sideways Shuffle'",
    "Start a collection of tiny spoons",
    "Learn to whistle like a tea kettle",
    "Teach ants how to do yoga",
    "Write a book on the life of socks",
    "Discover a new way to open doors",
    "Become the world champion of staring contests",
    "Find the world's roundest pebble",
    "Learn to balance 5 pencils on your nose",
    "Invent a language only cats understand",
    "Convince the sun to take Sundays off",
    "Train goldfish to do synchronized swimming",
    "Create a map of all invisible places"
];

function generatePurpose() {
    const randomIndex = Math.floor(Math.random() * purposes.length);
    document.getElementById("purpose").textContent = purposes[randomIndex];
}