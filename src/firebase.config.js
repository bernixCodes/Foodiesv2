import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCekr6ZANK322WbsS5w1jbjvvF-mR6LllY",
  authDomain: "restaurant-app-e9f44.firebaseapp.com",
  databaseURL: "https://restaurant-app-e9f44-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-e9f44",
  storageBucket: "restaurant-app-e9f44.appspot.com",
  messagingSenderId: "614883133457",
  appId: "1:614883133457:web:609718a9e86a62058f49b0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
