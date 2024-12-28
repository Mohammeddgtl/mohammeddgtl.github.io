let animeclick = document.querySelector("video"); // Selecting the video

animeclick.addEventListener("click", RunAnime); // Run the function RunAnime (Video)

// Function to play the video on click
function RunAnime() {
  let video = document.querySelector("video");
  video.play();
}
 
document.addEventListener("DOMContentLoaded", () => {                         //LOGO
  const video = document.querySelector("video");
  const logoContainer = document.querySelector(".logo-container");

  video.addEventListener("ended", () => {
    video.style.display = "none"; // Hide the video
    logoContainer.style.display = "block"; // Show the logo              
  });
});

document.addEventListener("DOMContentLoaded", () => {                         //Mohammed
  const video = document.querySelector("video");
  const logoContainer = document.querySelector(".logo-containerr");

  video.addEventListener("ended", () => {
    video.style.display = "none"; // Hide the video
    logoContainer.style.display = "none"; // Show the logo              
  });
});

document.addEventListener("DOMContentLoaded", () => {                         //Blank1
  const video = document.querySelector("video");
  const logoContainer = document.querySelector(".Blank");

  video.addEventListener("ended", () => {
    video.style.display = "none"; // Hide the video
    logoContainer.style.display = "block"; // Show the logo              
  });
});

document.addEventListener("DOMContentLoaded", () => {                         //Blank1
  const video = document.querySelector("video");
  const logoContainer = document.querySelector(".Blank3");

  video.addEventListener("ended", () => {
    video.style.display = "none"; // Hide the video
    logoContainer.style.display = "block"; // Show the logo              
  });
});


document.addEventListener("DOMContentLoaded", () => {                         //Blank1
  const video = document.querySelector("video");
  const logoContainer = document.querySelector(".Blank2");

  video.addEventListener("ended", () => {
    video.style.display = "none"; // Hide the video
    logoContainer.style.display = "block"; // Show the logo              
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('.logo-container');
  const hoverImage = document.querySelector('.logo-containerr');

  logoContainer.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
  });

  logoContainer.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('.Blank');
  const hoverImage = document.querySelector('.logo-containerr1');

  logoContainer.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
  });

  logoContainer.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const logoContainer0 = document.querySelector('.Blank2');
  const hoverImage0 = document.querySelector('.logo-containerrr');

  logoContainer0.addEventListener('mouseover', () => {
    hoverImage0.style.display = 'block';
  });

  logoContainer0.addEventListener('mouseout', () => {
    hoverImage0.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoContainer1 = document.querySelector('.Blank3');
  const hoverImage1 = document.querySelector('.logo-containerrrr');

  logoContainer1.addEventListener('mouseover', () => {
    hoverImage1.style.display = 'block';
  });

  logoContainer1.addEventListener('mouseout', () => {
    hoverImage1.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.logoo1');

  image.addEventListener('click', () => {
  window.location.href = 'https://youtube.com';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.logoo2');

  image.addEventListener('click', () => {
  window.location.href = 'https://youtube.com';
  });
});









