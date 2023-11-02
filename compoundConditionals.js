// Scenario:
// You're building an application for a movie streaming platform. The platform 
// wants to recommend movies based on the user's mood and the time of day.


// Change these values to test different scenarios
let mood = 'sad';        // Possible values: "happy", "sad", "excited", "bored"
let timeOfDay = 'night'; // Possible values: "morning", "afternoon", "evening", "night"

let recommendedMovie;

// 1. Implement the recommendation logic using compound conditionals
// - If the user is "tired" OR it's "night", recommend "Relaxing Ambient Film".
// - If the user is "excited" AND it's NOT "morning", recommend "High-Octane Thriller".
// - If the user is "bored" AND it's "afternoon" OR "happy" AND it's "evening", recommend "Engaging Mystery Film".
// - In all other cases, recommend "Popular Choice Film".
if (mood = 'tired' || timeOfDay == 'night') {
  recommendedMovie = 'Relaxing Ambient Film';
} else if (mood == 'excited' && timeOfDay != 'morning') {
  recommendedMovie = 'High-Octane Thriller';
} else if (mood == 'bored' && (timeOfDay == 'afternoon' || timeOfDay == 'happy') && timeOfDay == 'evening') {
  recommendedMovie = 'Engaging Mystery Film';
} else {
  recommendedMovie = 'Popular Choice Film';
}

// 2. Console log the recommended movie
console.log(`It is ${timeOfDay} and the user is ${mood} so I recommend a ${recommendedMovie}.`);
