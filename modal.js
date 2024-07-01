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
const formData = document.querySelectorAll(".formData");

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

/*
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} first 
 * @return {boolean}

function validerfirst(first) {
  if (first.length >= 2) {
    return true
  }
  return false
}
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} last 
 * @return {boolean}
 
function validerlast(last) {
  if (last.length >= 2) {
    console.log("Le nom est valide")
    return true

  }
  console.log("Le nom n'est pas valide")
  return false

}
/**
* Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
* @param {string} email 
* @return {boolean}
*/
/*
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegExp.test(email)) {
    return true
  }
  return false
}
*/
/*
* Cette fonction prend la date de naissance en paramètre et valide qu'il est au bon format. 
* @param {string} birthdate 
* @return {boolean}

function validerEmail(birthdate) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (emailRegExp.test(email)) {
    return true
  }
  return false
}

function estMajeur(dateNaissance) {
  var aujourdHui = new Date();
  var dateNaissance = new Date(dateNaissance);

  var age = aujourdHui.getFullYear() - dateNaissance.getFullYear();
  var m = aujourdHui.getMonth() - dateNaissance.getMonth();

  if (m < 0 || (m === 0 && aujourdHui.getDate() < dateNaissance.getDate())) {
    age--;
  }

  return age >= 18;
}

*/
//Show input error message

function showError(input, message) {
  const formData = input.parentElement;
  formData.className = 'formData';
  const small = formControl.querySelector('[data-error]');
  small.innerText = message;
  small.setAttribute('data-error-visible', 'true');
  input.style.border = '2px solid #e54858';
}

function showSuccess(input) {
  const formData = input.parentElement;
  formData.className = 'form-control success';
  const small = formControl.querySelector('[data-error]');
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
    return false;
  }

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

  alert("Votre formulaire a été soumis avec succès !");
  return true;
}

