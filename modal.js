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
//const modalSuccess = document.querySelector(".modal-success)
//const modalCloseSucess = document.querySelector('.modal-success-close');
const formFirst = document.getElementById('first'); // Get firstname input
const formLast = document.getElementById('last'); // Get lastname input
const formEmail = document.getElementById('email'); // Get email input
const formBirthdate = document.getElementById('birthdate'); // Get birthdate input
const formQuantity = document.getElementById('quantity'); // Get quantity of number of tournament participated input
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
//const formTermsConditions = document.getElementById('checkboess"x1'); // Get terms conditions input checkbox
//const formTermsConditions = Document.forms["reserve"]["checkbox1"].checked; // Get terms conditions input checkbox
const formTermsConditions = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
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
  //if (modalbg.classList.contains('formSubmitted')) {
    //restartModal();
  }
);
/*
modalCloseSucess.addEventListener("click", function () {
  closeModal();
  restartModal();
});
*/
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
/*
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
  */
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
    formIsValid = true;
  }
}
// Valider le nombre de tournois
function formQuantityIsValid() {
  if (formQuantity.value == "" || isNaN(formQuantity.value)) {
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formQuantity);
    formIsValid = true;
  }
}

// LOCATIONS CHECK
function formLocationIsValid() {
  const locations = document.querySelectorAll('#allLocations .checkbox-input');
  for (let i = 0; i < locations.length; i++) {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            formIsValid = true;
        }
    }
    formIsValid = false;
  }
}


//Valider les termes et conditions
function formTermsConditionsIsValid() {
  const checkbox1 = document.getElementById('checkbox1');
  if (!checkbox1.checked) {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    addFormErrorMessage(checkbox1, "Veuillez accepter les termes et conditions");
    formIsValid = false;
  } 
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  formIsValid = true;
}

function validate(event) {
  // Empêche la soumission du formulaire
  event.preventDefault();
  formFirstIsValid();
  formLastIsValid();
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();

  // Vérifie si chaque champ du formulaire est valide
  const formIsValid = formFirstIsValid() && formLastIsValid() && formEmailIsValid() && formBirthdateIsValid() && formQuantityIsValid() && formLocationIsValid() && formTermsConditionsIsValid();

  if (formIsValid) { 
    // Affiche le modal de remerciement
    modalbg.classList.add('thanks-modal-bg');
    modalBody.style.opacity = "0";
    modalSuccess.style.display = "flex";
    alert("Merci ! Votre réservation a été reçue.");
    showThanksSubmit();
    // Réinitialise le formulaire
    //document.querySelector('form').reset();
  }   
}
document.getElementById('form').addEventListener('submit', validate);

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

/*
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
    //showThanksModal();
    modalbg.classList.add('formSubmitted');
    modalBody.style.opacity = "0";
     modalSuccess.style.display = "flex";
    alert("Merci ! Votre réservation a été reçue.");
        return true;
  }
}  
  //} else {
    //alert ("Le formulaire est incomplets")
    //return false;
  //}
// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);

formFieldsValidation(formFirst, formFirstIsValid ,'focusout');
formFieldsValidation(formLast, formLastIsValid, 'focusout');
formFieldsValidation(formEmail,  formEmailIsValid, 'focusout');
formFieldsValidation(formBirthdate, formBirthdateIsValid, 'focusout');
formFieldsValidation(formQuantity, formQuantityIsValid, 'focusout');
formFieldsValidation(formLocation, formLocationIsValid, 'change');
formFieldsValidation(formTermsConditions, formTermsConditionsIsValid, 'change');  
}
// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
  formFirstIsValid();
  formLastIsValid();
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();
}

function formValidation() {
  if (formFirstIsValid() === true &&
      formLastIsValid() === true &&
      formEmailIsValid() === true &&
      formBirthdateIsValid() === true &&
      formQuantityIsValid() === true &&
      formLocationIsValid() === true &&
      formTermsConditionsIsValid() === true) {
      return true;
  }
   if (!formValidation) {
    event.preventDefault();
  }    
  return false;
}


// SEND FORM
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (formValidation() == true) {
    alert("formulaire validé");
    showThanksSubmit();
    document.querySelector('form').reset();
  } else {
      forAllFieldsValidation();
  }
});
*/
