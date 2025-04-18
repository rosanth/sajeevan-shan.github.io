const track = document.querySelector('.certification-track');
const button = document.getElementById('nextCerts');
let offset = 0;
const cardWidth = 300; // Adjust based on card + gap
const visibleCards = 4;

button.addEventListener('click', () => {
  const totalCards = document.querySelectorAll('.certification-card').length;
  const maxOffset = Math.floor(totalCards / visibleCards) * cardWidth;

  offset += cardWidth * visibleCards;

  if (offset >= maxOffset) {
    offset = 0; // loop back
  }

  track.style.transform = `translateX(-${offset}px)`;
});
