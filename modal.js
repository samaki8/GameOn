/*/*function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/
// DOM Elements
/*const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
  if (topNavbar == null)throw new Error ("No topnav found");
  topNavbar.classlist.toggle("responsive");
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
const closemodal = document.querySelector(".close");
closemodal.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(input, message) {
  const formData = input.parentElement;
  formData.className = 'formData';
  const small = formData.querySelector('[data-error]');
  small.innerText = message;
  small.setAttribute('data-error-visible', 'true');
  input.style.border = '2px solid #e54858';
}

function showSuccess(input) {
  const formData = input.parentElement;
  formData.className = 'form-control success';
  const small = formData.querySelector('[data-error]');
  small.innerText = '';
  small.removeAttribute('data-error-visible');
  input.style.border = '';
}

// Gestion de l'événement submit sur le formulaire de partage. 

function validate() {
  var firstName = document.forms["reserve"]["first"].value;
  var lastName = document.forms["reserve"]["last"].value;
  var email = document.forms["reserve"]["email"].value;
  var birthdate = document.forms["reserve"]["birthdate"].value;
  var quantity = document.forms["reserve"]["quantity"].value;
  var location = document.forms["reserve"]["location"].value;
  var checkbox1 = document.forms["reserve"]["checkbox1"].checked;
  var checkbox2 = document.forms["reserve"]["checkbox2"].checked;

  if (firstName.length < 2 || lastName.length < 2) {
    alert("Le prénom et le nom doivent comporter au moins 2 lettres.");
    showError(document.forms["reserve"]["first"], "Le prénom doit comporter au moins 2 lettres.");
    showError(document.forms["reserve"]["last"], "Le nom doit comporter au moins 2 lettres.");
    error.setAttribute('data-error-visible', 'true');
    console.log (firstName, lastName);
    return false;
    
   //} else {
    //showSuccess(document.forms["reserve"]["first"]);
    //showSuccess(document.forms["reserve"]["last"]);

  }
  console.log (firstName, lastName);
  if (!validateEmail(email)) {
    //alert("Veuillez entrer un email valide.");
    showError(document.forms["reserve"]["email"], "Veuillez entrer un email valide2.");
    return false;
  //} else {
    //showSuccess (document.forms["reserve"]["email"], "L'émail est valide valide.")
   
  }
  console.log(email);
  var today = new Date();
  var birthDate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  if (age < 18) {
      alert("Vous devez être majeur pour vous inscrire.");
      return false;
  }

  if (firstName == "" || lastName == "" || email == "" || birthdate == "" || quantity == "" || location == "") {
      alert("Veuillez remplir tous les champs.");
      return false;
  }

  if (!checkbox1) {
      alert("Veuillez accepter les conditions d'utilisation.");
      return false;
  }

  alert("Merci ! Votre réservation a été reçue.");
  return true;
}

*/

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

const modalBody = document.querySelector(".modal-body");
const modalSuccess = document.querySelector(".modal-success")
const modalCloseSucess = document.querySelector('.modal-success-close');

const formFirst = document.getElementById('first'); // Get firstname input
const formLast = document.getElementById('last'); // Get lastname input
const formEmail = document.getElementById('email'); // Get email input
const formBirthdate = document.getElementById('birthdate'); // Get birthdate input
const formQuantity = document.getElementById('quantity'); // Get quantity of number of tournament participated input
const formLocation = document.querySelector('input[name="location"]'); // Get location input radio
let formLocationCheck = document.querySelector('input[name="location"]:checked'); // Get location of next tournament input radio check
const formTermsConditions = document.getElementById('checkbox1'); // Get terms conditions input checkbox
const checkbox2 = document.getElementById('checkbox2'); // Get newletter imput

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^[a-z-A-Z ,.'-]+$/;
let formIsValid; // initialize form validation;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", function () {
  closeModal();
  if (modalbg.classList.contains('formSubmitted')) {
    restartModal();
  }
});

modalCloseSucess.addEventListener("click", function () {
  closeModal();
  restartModal();
});

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// restart modal form
function restartModal() {
  modalbg.classList.remove ('formSubmitted');
  modalBody.style.opacity = "1";
  modalSuccess.style.display = "none";
  formFirst.value = "";
  formLast.value = "";
  formEmail.value = "";
  formBirthdate.value = "";
  formQuantity.value = "";
  formLocationCheck.checked = false;
}
// Ajout de messages d'erreurs
function addFormErrorMessage(element, errorMessage) {
  element.parentElement.setAttribute('data-error', errorMessage);
  element.parentElement.setAttribute('data-error-visible', 'true');
}

// suppression de message erreurs
function removeFormErrorMessage(element) {
  element.parentElement.removeAttribute('data-error');
  element.parentElement.removeAttribute('data-error-visible');
}

// Valider le prénom
function formFirstIsValid() {
  if (formFirst.value == "" || formFirst.value.length < 2 || regexName.test(formFirst.value) != true) {
    alert("Le prénom et le nom doivent comporter au moins 2 lettres.");
    addFormErrorMessage(formFirst, "Veuillez entrer 2 caractères valide ou plus pour le champ du prénom.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formFirst);
  }
}

// Valider le nom
function formLastIsValid() {
  if (formLast.value == "" || formLast.value.length < 2 || regexName.test(formLast.value) != true) {
    addFormErrorMessage(formLast, "Veuillez entrer 2 caractères valide ou plus pour le champ du nom.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formLast);
  }
}

// Valider l'adresse mail
function formEmailIsValid() {
  if (regexEmail.test(formEmail.value) != true) {
    addFormErrorMessage(formEmail, "Veuillez entrer une adresse email valide.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formEmail);
  }
}

// Valider la date de naissance
function formBirthdateIsValid() {
  var today = new Date();
  var birthDate = new Date(formBirthdate.value);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (formBirthdate.value == "") {
    addFormErrorMessage(formBirthdate, "Vous devez entrer votre date de naissance.");
    formIsValid = false;
  } else if (Date.parse(formBirthdate.value) > Date.now()) {
    addFormErrorMessage(formBirthdate, "Vous devez entrer une date de naissance valide.");
    formIsValid = false;
  } else if (age < 13) {
    addFormErrorMessage(formBirthdate, "Vous devez avoir au moins 13 ans.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formBirthdate);
  }
}


// Valider le nombre de tournois
function formQuantityIsValid() {
  if (formQuantity.value == "" || isNaN(formQuantity.value)) {
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formQuantity);
  }
}

// Valider la localisation
function formLocationIsValid() {
  if (formLocationCheck == null) {
    addFormErrorMessage(formLocation, "Vous devez choisir une option.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formLocation);
  }
}
// Refresh form location check each time we submit
formLocationCheck = document.querySelector('input[name="location"]:checked');
formIsValid = true;

//Valider les termes et conditions
function formTermsConditionsIsValid() {
  if (!formTermsConditions.checked) {
    addFormErrorMessage(formTermsConditions, "Veuillez accepter les conditions d'utilisation.");
    formIsValid = false;
    alert ("conditions non validés")
  } else {
    removeFormErrorMessage(formTermsConditions);
  }
}

// Validation de formulaire
function validate(event) {
  //Prevent to submit form
  event.preventDefault();

  
  formFirstIsValid();
  formLastIsValid();
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();

  if (formIsValid) {
    alert("Merci ! Votre réservation a été reçue.");
   // modalbg.classList.add('formSubmitted');
   // modalBody.style.opacity = "0";
    //modalSuccess.style.display = "flex";
    return true;
  } else {
    alert ("Le formulaire est incomplets")
    return false;
  }
}



//Remerciment
const thanksModalBg = document.getElementsByClassName("thanks-modal-bg");
const closeBtnThanksModal = document.getElementById("close-btn-thanks-modal");
const closeThanksModal = document.getElementsByClassName("close-thanks-modal");

//display thankModalBg in index.html
function showThanksSubmit() {
  modalbg.style.display = "none";
  thanksModalBg[0].style.display = "block";
}

// close popup and reset border style
function closeSubmit() {
  thanksModalBg[0].style.display = "none";
  first.style.border = "none";
  last.style.border = "none";
  email.style.border = "none";
  birthdate.style.border = "none";
  tournament.style.border = "none";
}

//button for close popup
closeThanksModal[0].addEventListener("click", closeSubmit);
closeBtnThanksModal.addEventListener("click", closeSubmit);



