import {
  auth,
  serverTimestamp,
  deleteDoc,
  query,
  orderBy,
  onAuthStateChanged,
  doc,
  getDoc,
  db,
  signOut,
  addDoc,
  collection,
  getDocs,
} from "./firebase.js";

let currentUser;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    userData(uid);
    currentUser = uid;
    // ...
  } else {
    window.location.href = "signin.html";
  }
});

async function userData(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { firstname, lastname } = docSnap.data();
    console.log(firstname);
    console.log(lastname);

    // authorname.innerHTML = `${firstname} ${lastname}`;
    // document.querySelector(".user-name").innerHTML = `${firstname} ${lastname}`;
    // document.querySelector(
    //   "#author-name"
    // ).innerHTML = `${firstname} ${lastname}`;
  } else {
    console.log("No such document!");
  }
}

const singOut = document.getElementById("singout");

singOut.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "signin.html";
    })
    .catch((error) => {
      // An error happened.
    });
});

const btnPublish = document.getElementById("publish");
const title = document.querySelector("input");
const body = document.querySelector("textarea");

btnPublish.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "posts"), {
      title: title.value,
      postContent: body.value,
      authorId: currentUser,

      time: serverTimestamp(),
    });
    alert("Posted");
    title.value = "";
    body.value = "";
    // getBlog();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
