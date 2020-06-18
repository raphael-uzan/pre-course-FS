const GITHUB_URL = "https://github.com/raphael-uzan";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });


// Footer //

const footerWords = ["HTML", "CSS", "JavaScript"];
let footerSentence = document.querySelector('.sentence');

footerSentence.innerText = `This page was built using: ${footerWords[0]}, ${footerWords[1]} and ${footerWords[2]}`
' ,footerwords[i]'





  //About page//

const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const maps = document.querySelectorAll('.invisible');
let mapSelected = 0;

previousButton.addEventListener('click',function(){
  maps[mapSelected].classList.remove("visible");
  mapSelected -= 1;
  maps[mapSelected].classList.add("visible");
  nextButton.disabled = false;

  if (mapSelected === 0) {
      previousButton.disabled = true;
  }  
});

nextButton.addEventListener('click',function(){
  maps[mapSelected].classList.remove("visible");
  mapSelected += 1;
  maps[mapSelected].classList.add("visible");
  previousButton.disabled = false;

  if (mapSelected +1 === maps.length) {
      nextButton.disabled = true;
  }
});