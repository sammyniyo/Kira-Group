<?php
// Get form data
$email = $_POST['email'];
$phone = $_POST['phone'];
$enquiry = $_POST['enquiry'];

// Define the path to your CSV file
$csvFilePath = 'form_data.csv';

// Open the CSV file for writing
$csvFile = fopen($csvFilePath, 'a');

// Check if the file opened successfully
if ($csvFile !== false) {
    // Write the data to the CSV file
    fputcsv($csvFile, [$email, $phone, $enquiry]);

    // Close the CSV file
    fclose($csvFile);
    
    echo 'Form submitted successfully!';
} else {
    echo 'Failed to submit the form. Please try again later.';
}
?>
