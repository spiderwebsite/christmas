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
