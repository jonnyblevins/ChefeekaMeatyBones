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
  
  const flipCardContainer = document.getElementById('flipCardContainer');
  
  for (let i = 0; i < 9; i++) {
    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');
  
    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
    const frontImg = document.createElement('img');
    frontImg.src = frontImages[i % frontImages.length];
    frontImg.alt = `Front Image ${i + 1}`;
    flipCardFront.appendChild(frontImg);
  
    console.log('Front Image Element:', frontImg); // Debug log
  
    const flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
    const backImg = document.createElement('img');
    backImg.src = backImages[i % backImages.length];
    backImg.alt = `Back Image ${i + 1}`;
    flipCardBack.appendChild(backImg);
  
    console.log('Back Image Element:', backImg); // Debug log
  
    flipCard.appendChild(flipCardFront);
    flipCard.appendChild(flipCardBack);
  
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