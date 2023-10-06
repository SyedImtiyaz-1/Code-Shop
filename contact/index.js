document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  messageInput.addEventListener("blur", validateMessage);
  let isValid = true;

  function validateName() {
    const nameError = document.getElementById("name-error");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.textContent = "";
      nameError.style.display = "none";
    }
  }

  function validateEmail() {
    const emailError = document.getElementById("email-error");
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Invalid email format";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
    }
  }

  function validateMessage() {
    const messageError = document.getElementById("message-error");
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required";
      messageError.style.display = "block";
      isValid = false;
    } else {
      messageError.textContent = "";
      messageError.style.display = "none";
    }
  }
  document
    .getElementById("my-form")
    .addEventListener("submit", function (event) {
      validateName();
      validateEmail();
      validateMessage();

      if (!isValid) {
        event.preventDefault();
      }
    });
});
