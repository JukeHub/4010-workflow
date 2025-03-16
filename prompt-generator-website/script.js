// Arrays of content options
const prompts = [
    "Write about a person who discovers they can control the weather with their emotions.",
    "Describe a world where everyone's memories are traded like currency.",
    "Create a story about the last library on Earth.",
    "Write about a character who wakes up and finds everyone else has vanished.",
    "Describe a day in the life of someone who can hear plants think."
];

const storyStarters = [
    "The old clock struck midnight as the door slowly creaked open...",
    "She found the mysterious package on her doorstep exactly one year after...",
    "The message in the bottle was written in a language that hadn't existed for centuries...",
    "Every night at exactly 3:33 AM, the painting would change...",
    "The day all the birds started flying backwards was when everything changed..."
];

const characters = [
    "A retired superhero working as a high school janitor",
    "A time-traveling chef trying to preserve ancient recipes",
    "A librarian who can read minds but only when people are reading books",
    "A garden gnome that comes to life during full moons",
    "An immortal barista who has been serving coffee for centuries"
];

// Function to generate random content
function generate(type) {
    let content;
    switch(type) {
        case 'prompt':
            content = prompts[Math.floor(Math.random() * prompts.length)];
            break;
        case 'story':
            content = storyStarters[Math.floor(Math.random() * storyStarters.length)];
            break;
        case 'character':
            content = characters[Math.floor(Math.random() * characters.length)];
            break;
        default:
            content = "Please select a valid option";
    }
    
    // Display the generated content
    document.getElementById('result').textContent = content;
}