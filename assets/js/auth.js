import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  db,
} from "./firebase.js";

const signIn = document.getElementById("singIn");
const signUp = document.getElementById("singUp");

var input = document.querySelectorAll("input");
var emptyFeild = document.querySelectorAll(".text-danger");

signIn.addEventListener("click", (event) => {
  event.preventDefault();
  let isValid = true;

  input.forEach((e, index) => {
    emptyFeild[index].textContent = "";

    if (!e.value) {
      emptyFeild[index].textContent = e.placeholder + " can't be empty";
      isValid = false;
    } else if (index === 2 && !e.value.includes("@")) {
      emptyFeild[2].textContent = e.placeholder + " must include an @";
      isValid = false;
    }
  });

  var email = input[0].value;
  var password = input[1].value;

  if (isValid) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});

signUp.addEventListener("click", (event) => {
  event.preventDefault();
  let isValid = true;

  input.forEach((e, index) => {
    emptyFeild[index].textContent = "";

    if (!e.value) {
      emptyFeild[index].textContent = e.placeholder + " can't be empty";
      isValid = false;
    } else if (index === 2 && !e.value.includes("@")) {
      emptyFeild[2].textContent = e.placeholder + " must include an @";
      isValid = false;
    } else if (index === 4 && e.value !== input[3].value) {
      emptyFeild[4].textContent =
        e.placeholder + " must match " + input[3].placeholder;
      isValid = false;
    }
  });

  var firstName = input[0].value;
  var lastName = input[1].value;
  var email = input[2].value;
  var password = input[3].value;

  if (isValid) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Add a new document in collection "cities"
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });
        alert("User Created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});
