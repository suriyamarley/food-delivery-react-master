import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
import {getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDZ9iGgqtSMr-QHBZpBVJcUPl8HYa6bXu0",
    authDomain: "food-delivery-1f72d.firebaseapp.com",
    projectId: "food-delivery-1f72d",
    storageBucket: "food-delivery-1f72d.appspot.com",
    messagingSenderId: "142715411301",
    appId: "1:142715411301:web:fb4b7c7f53f83d7f97df8c",
    measurementId: "G-KQ06CG205M",
  };

const App = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore (App);
const storage = getStorage (App);

export {App, fireStore, storage};