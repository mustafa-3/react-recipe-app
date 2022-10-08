import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZXRn8bNO3poxyov2YwzgjScfep_wD_40",
  authDomain: "recipe-app-13a4e.firebaseapp.com",
  projectId: "recipe-app-13a4e",
  storageBucket: "recipe-app-13a4e.appspot.com",
  messagingSenderId: "474823168440",
  appId: "1:474823168440:web:684b1a03fba8ebf84fbf4d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

export const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })

    .catch((error) => {
      console.log(error);
    });
};
