<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate the form data
  if (empty($name) || empty($email) || empty($message)) {
    // Return an error message if any of the fields are empty
    echo "Please fill out all the required fields";
  } else {
    // Process the form data, for example, by sending an email
    $to = "j6wen@ucsd.edu";
    $subject = "New message from $name";
    $headers = "From: $email\r\n";
    mail($to, $subject, $message, $headers);

    // Return a success message
    echo "Your message was sent successfully";
  }
}
?>