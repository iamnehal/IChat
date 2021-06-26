import firebase from 'firebase/app';
import  'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCxEa_Uw_kkW_fFoYQKB2iGr8CJMdDf7HY",
    authDomain: "ichat-nicks22.firebaseapp.com",
    projectId: "ichat-nicks22",
    storageBucket: "ichat-nicks22.appspot.com",
    messagingSenderId: "597549557929",
    appId: "1:597549557929:web:e7722ad7c4b3a6c39561b8",
    measurementId: "G-NP1Z1R0DTC"
  }).auth()
