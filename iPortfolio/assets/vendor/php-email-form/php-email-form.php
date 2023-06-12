<?php
// Check if the form has been submitted
if (isset($_POST['submit'])) {
  // Retrieve the form data
  $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
  $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

  // Validate the form data
  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    // Handle validation errors
    echo "Please fill in all required fields.";
  } else {
    // Set up the email message
    $to = 'eyosiyas.tibebuendalamaw@gmail.com';
    $from = "$name <$email>";
    $headers = "From: $from" . "\r\n";
    $body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
      // Handle successful email delivery
      echo "Thank you for contacting us. We will get back to you soon.";
    } else {
      // Handle email delivery errors
      echo "Sorry, there was a problem sending your message. Please try again later.";
    }
  }
}
?>
