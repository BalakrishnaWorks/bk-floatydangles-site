
import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const form = document.getElementById("feedbackForm");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("privacyConsent");
const submitButton = document.getElementById("submitButton");
const status = document.getElementById("status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = messageInput.value.trim();
  const email = emailInput.value.trim();

  if (message.length < 10 || message.length > 1000) {
    status.textContent = "Please enter feedback between 10 and 1000 characters.";
    return;
  }

  if (!consentInput.checked) {
    status.textContent = "Please confirm the feedback privacy notice.";
    return;
  }

  if (email && !emailInput.validity.valid) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  submitButton.disabled = true;
  status.textContent = "Sending your feedback...";

  try {
    const feedback = {
      message,
      createdAt: serverTimestamp()
    };

    if (email) {
      feedback.email = email;
    }

    await addDoc(collection(db, "feedback"), feedback);

    status.textContent = "Thank you! Your feedback was submitted successfully.";
    form.reset();
  } catch (error) {
    console.error("Feedback submission failed:", error);
    status.textContent =
      "We couldn't submit your feedback. Please try again later.";
  } finally {
    submitButton.disabled = false;
  }
});
