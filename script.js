const frontImages = [
    'https://i.imgur.com/vSJftv3.jpg', 
    'https://i.imgur.com/HzFuOTS.jpg', 
    'https://i.imgur.com/DwkiG4P.jpg',
    'https://i.imgur.com/vSJftv3.jpg', 
    'https://i.imgur.com/HzFuOTS.jpg', 
    'https://i.imgur.com/DwkiG4P.jpg',
    'https://i.imgur.com/vSJftv3.jpg', 
    'https://i.imgur.com/HzFuOTS.jpg', 
    'https://i.imgur.com/DwkiG4P.jpg',
  ];
  
  const backImages = [
    'https://i.imgur.com/v0kceC8.jpg', 
    'https://i.imgur.com/lR62C6g.jpg', 
    'https://i.imgur.com/8kXNEZ7.jpg',
    'https://i.imgur.com/v0kceC8.jpg', 
    'https://i.imgur.com/lR62C6g.jpg', 
    'https://i.imgur.com/8kXNEZ7.jpg',
    'https://i.imgur.com/v0kceC8.jpg', 
    'https://i.imgur.com/lR62C6g.jpg', 
    'https://i.imgur.com/8kXNEZ7.jpg',
  ];
  
console.log('Script loaded'); // This will log a message as soon as the script is loaded

const frontImages = [
  'https://i.imgur.com/DwkiG4P.jpg',
  // other URLs
];

const backImages = [
  'https://i.imgur.com/v0kceC8.jpg',
  // other URLs
];

const flipCardContainer = document.getElementById('flipCardContainer');

for (let i = 0; i < 9; i++) {
  console.log(`Creating card ${i + 1}`); // This will log a message for each card being created

  const flipCard = document.createElement('div');
  flipCard.classList.add('flip-card');

  const flipCardInner = document.createElement('div');

  flipCardInner.classList.add('flip-card-inner');
  
  const flipCardFront = document.createElement('div');
  flipCardFront.classList.add('flip-card-front');
  const frontImg = document.createElement('img');
  frontImg.src = frontImages[i % frontImages.length];
  frontImg.alt = `Front Image ${i + 1}`;
  flipCardFront.appendChild(frontImg);

  const flipCardBack = document.createElement('div');
  flipCardBack.classList.add('flip-card-back');
  const backImg = document.createElement('img');
  backImg.src = backImages[i % backImages.length];
  backImg.alt = `Back Image ${i + 1}`;
  flipCardBack.appendChild(backImg);

  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCard.appendChild(flipCardInner);
  flipCardContainer.appendChild(flipCard);
}
  
  window.addEventListener('scroll', function() {
    const video = document.getElementById('videoContainer');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { 
      video.style.display = 'none';
    } else {
      video.style.display = 'block';
    }
  });