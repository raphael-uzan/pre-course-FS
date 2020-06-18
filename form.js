
// Footer //

const footerWords = ["HTML", "CSS", "JavaScript"];
let footerSentence = document.querySelector('.sentence');

footerSentence.innerText = `This page was built using: ${footerWords[0]}, ${footerWords[1]} and ${footerWords[2]}`





// Contact page //

let inputFirstName = document.getElementById("firstname");
let genderSelected = document.getElementById("gender");
let inputLastName = document.getElementById("lastname");
let inputEmail = document.getElementById("email");
let inputComment = document.getElementById("comment");
let submitButton = document.getElementById('submit-button');

let firstname = "firstname";
let gender = "gender";
let lastName = "lastname";
let email = "email";
let comment = "comment";

function checkDisabled(){
  console.log("inside function")
  if (inputFirstName.value && genderSelected.value){
    submitButton.disabled=false;
  } else{
    submitButton.disabled=true;
  }
}


function sumsnumbers(q,b, checkDisabled){
  checkDisabled()
return q+b;
}
sumsnumbers(4,5)

// Events //

inputFirstName.addEventListener('input', checkDisabled);

inputLastName.addEventListener('change', checkDisabled();

genderSelected.addEventListener('input', 
  checkDisabled);

inputEmail.addEventListener("change", function() {
  email  = inputEmail.value;
  submitButton.classList.remove("disabled-3");
});

inputComment.addEventListener("change", function() {
  comment  = inputComment.value;
  submitButton.classList.remove("disabled-4");
});




// Submit Button //

submitButton.addEventListener('click',function(){
  console.log(`Firstname: ${firstname}, Last Name: ${lastName}, Email: ${email}, Comment: ${comment}, Gender: ${gender}`)
});