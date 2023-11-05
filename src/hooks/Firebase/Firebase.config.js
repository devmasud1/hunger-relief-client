// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// const app = initializeApp(firebaseConfig);
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCIHYTmACPZCXx0Vhh7EbDyrvDGD6D2AM",
  authDomain: "hunger-relief0.firebaseapp.com",
  projectId: "hunger-relief0",
  storageBucket: "hunger-relief0.appspot.com",
  messagingSenderId: "806979425536",
  appId: "1:806979425536:web:db89aef0e1189ef694cfe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;