(function () {
  "use strict";

  let forms = document.querySelectorAll(".php-email-form");

  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;

      // Get the form input values
      let nameInput = thisForm.querySelector('input[name="name"]');
      let emailInput = thisForm.querySelector('input[name="email"]');
      let subjectInput = thisForm.querySelector('input[name="subject"]');
      let messageInput = thisForm.querySelector('textarea[name="message"]');

      // Validate the form input values
      if (nameInput.value.trim() === "") {
        displayError(thisForm, "Please enter your name");
        return;
      }
      if (emailInput.value.trim() === "") {
        displayError(thisForm, "Please enter a valid email address");
        return;
      }
      if (subjectInput.value.trim() === "") {
        displayError(thisForm, "Please enter a subject");
        return;
      }
      if (messageInput.value.trim() === "") {
        displayError(thisForm, "Please enter a message");
        return;
      }

      // Submit the form if validation passes
      let action = thisForm.getAttribute("action");
      let formData = new FormData(thisForm);
      php_email_form_submit(thisForm, action, formData);
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    // Submit the form using fetch API
    fetch(action, {
      method: "POST",
      body: formData,
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(
            `${response.status} ${response.statusText} ${response.url}`
          );
        }
      })
      .then((data) => {
        thisForm.querySelector(".loading").classList.remove("d-block");
        if (data.trim() == "OK") {
          thisForm.querySelector(".sent-message").classList.add("d-block");
          thisForm.reset();
        } else {
          throw new Error(
            data
              ? data
              : "Form submission failed and no error message returned from: " +
                action
          );
        }
      })
      .catch((error) => {
        displayError(thisForm, error);
      });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();
