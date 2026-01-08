<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $firstName = htmlspecialchars($_POST['first_name']);
  $lastName  = htmlspecialchars($_POST['last_name']);
  $email     = htmlspecialchars($_POST['email']);
  $message   = htmlspecialchars($_POST['message']);

  $to = "sales@rocketincentive.com";
  $subject = "New Contact Form Submission";
  
  $body = "
    First Name: $firstName\n
    Last Name: $lastName\n
    Email: $email\n\n
    Message:\n$message
  ";

  $headers = "From: $email\r\nReply-To: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Thank you! Your message has been sent.'); window.location.href='index.html';</script>";
  } else {
    echo "<script>alert('Email sending failed. Please try again later.');</script>";
  }
}
?>
