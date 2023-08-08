<?php
// Replace these with your actual database connection details
$servername = "http://localhost/phpmyadmin";
$username = "my_username";
$password = "my_password";
$dbname = "clients";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$email = $_POST['email'];
$phone = $_POST['phone'];
$enquiry = $_POST['enquiry'];

// Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO inquiries (email, phone, enquiry) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $email, $phone, $enquiry);

if ($stmt->execute()) {
    $stmt->close();
    $conn->close();
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}
?>
