<?php
// Replace these with your actual database connection details
$servername = "%";
$username = "telesphoreuwabera";
$password = "j/2L*LRdKVxzO@rM";
$dbname = "subscription";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

// Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO inquiries (first_name, last_name, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $first_name, $last_name, $email);

if ($stmt->execute()) {
    $stmt->close();
    $conn->close();
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}
?>