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
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];

// Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO subscriptions (first_name, surname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $surname, $email);

if ($stmt->execute()) {
    $stmt->close();
    $conn->close();
    echo "Subscription submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}
?>