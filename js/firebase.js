// Firebase SDK imports
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYTw8x_TlqSrXo-pn0J4_0sKle93opHD8",
  authDomain: "bk-floatydangles-feedback.firebaseapp.com",
  projectId: "bk-floatydangles-feedback",
  storageBucket: "bk-floatydangles-feedback.firebasestorage.app",
  messagingSenderId: "283795978052",
  appId: "1:283795978052:web:99a61538c2925a25f4c911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);