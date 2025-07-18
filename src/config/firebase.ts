import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth } from "firebase/auth/web-extension";
// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGdZLYzhL7NKgXZ2mLOf22fSgJNdZ2hoc",
  authDomain: "smart-e-commerce-app-8809e.firebaseapp.com",
  projectId: "smart-e-commerce-app-8809e",
  storageBucket: "smart-e-commerce-app-8809e.firebasestorage.app",
  messagingSenderId: "15538508902",
  appId: "1:15538508902:web:1971d570342c25615e49a7",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export { auth };
