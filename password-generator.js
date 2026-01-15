// password-generator.js
// Import the installed 'generate-password' package.
const generator = require('generate-password');

// Function to generate and log a random password
function generateRandomPassword() {
  // Generate a single password with specific properties.
  const password = generator.generate({
    length: 12,           // Total length
    numbers: true,        // Include numbers
    symbols: true,        // Include symbols
    uppercase: true,      // Include uppercase letters
    excludeSimilarCharacters: true, // Exclude like 'i', 'l', '1', 'L', 'o', '0', 'O'
  });

  // Log the generated password to the console.
  console.log('Generated Password:', password);
}

// Call the function to execute it.
generateRandomPassword();
