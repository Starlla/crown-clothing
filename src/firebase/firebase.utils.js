import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBiXVwuKcDKfew2XtrQpAwN0QBMemuVN0k",
  authDomain: "crown-db-241ca.firebaseapp.com",
  projectId: "crown-db-241ca",
  storageBucket: "crown-db-241ca.appspot.com",
  messagingSenderId: "534155013572",
  appId: "1:534155013572:web:468b30926b32a896aa8891"
};

export const createUserProfileDocument = async (userAuth, additionaData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionaData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
