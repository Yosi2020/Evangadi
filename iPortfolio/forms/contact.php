<?php
    ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	// Import PHPMailer classes into the global namespace
	// These must be at the top of your script, not inside a function
	require __DIR__ . '/src/autoload.php';
    require __DIR__ . '/src/Exception.php';
require __DIR__ . '/src/PHPMailer.php';
require __DIR__ . '/src/SMTP.php';

	// Instantiate a new PHPMailer object
	$mail = new PHPMailer(true); // true enables exceptions

	try {
		// Server settings
		$mail->SMTPDebug = 0; // Enable verbose debug output
		$mail->isSMTP(); // Send using SMTP
		$mail->Host = 'mail.eyosiyastibebu.com'; // Set the SMTP server to send through
		$mail->SMTPAuth = true; // Enable SMTP authentication
		$mail->Username = 'info@eyosiyastibebu.com'; // SMTP username
		$mail->Password = '%8NpH6m%'; // SMTP password
		$mail->SMTPSecure = 'tls'; // Enable TLS encryption
		$mail->Port = 587; // TCP port to connect to

		// Recipients
		$recipient_name = 'Eyosiyas Tibebu'; // Replace with the recipient's name
		$recipient_email = 'eyosiyas.tibebuendalamaw@gmail.com'; // Replace with the recipient's email address
		$mail->setFrom('info@eyosiyastibebu.com', 'Eyosiyas Tibebu'); // Set the sender's email address and name
		$mail->addAddress($recipient_email, $recipient_name); // Add a recipient

		// Content
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$mail->isHTML(true); // Set email format to HTML
		$mail->Subject = $subject;
		$mail->Body = "<h3>Message from $name &lt;$email&gt;:</h3><p>$message</p>";

		$mail->send();
		echo 'OK';
	} catch (Exception $e) {
		echo "Mailer Error: " . $mail->ErrorInfo;
	}
?>
