const snowflakesContainer = document.getElementById('snowflakes');
const snowflakeSymbols = ['❄', '❅', '❆'];

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;

  snowflakesContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000); // Remove after animation
}

setInterval(createSnowflake, 200);

// Initialize the SpeechRecognition API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

// Function to start the voice recognition
function startVoiceRecognition() {
    const status = document.getElementById('voiceStatus');
    status.textContent = "Listening...";

    recognition.start(); // Start the voice recognition
}

// Event listener for when speech is recognized
recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const status = document.getElementById('voiceStatus');

    if (transcript.toLowerCase() === 'sales family') {
        status.textContent = "Password correct. Loading...";
        window.location.href = 'index1.html'; // Redirect to the loading page
    } else {
        status.textContent = "Incorrect password, try again!";
    }
}

// Event listener for any errors
recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
    document.getElementById('voiceStatus').textContent = "Error occurred. Please try again.";
}
