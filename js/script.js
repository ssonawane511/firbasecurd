/** @format */

var db = firebase.firestore();

// this this the reference to all elements

let alert = document.getElementById("alert");
let email = document.getElementById("inputEmail");
let name = document.getElementById("inputName");
let address = document.getElementById("inputAddress");
let phone = document.getElementById("inputPhone");
let password = document.getElementById("inputPassword");
let privacy = document.getElementById("privacy").checked;
let form = document.getElementById("registraion__form");
let submit_button = document
  .getElementById("submit_button")
  .addEventListener("click", formsubmit);

function formsubmit() {
  if (form.checkValidity()) {
    addToFirestore();
  }
}

function addToFirestore() {
  db.collection("users")
    .add({
      name: name.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      password: password.value,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      docRef.set(
        {
          id: docRef.id,
        },
        { merge: true }
      );
      alert.classList.remove("hide");
      document.getElementById("alert__email").textContent = email.value;

      name.value = "";
      email.value = "";
      address.value = "";
      phone.value = "";
      password.value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
