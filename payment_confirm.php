<?php
session_start();

$servername = "localhost";
$username = "login_exodia";
$password = "password231099";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_SESSION['name'];
$college = $_SESSION['college'];
$day1 = $_SESSION['day1'];
$day2 = $_SESSION['day2'];
$day3 = $_SESSION['day3'];
$email = $_SESSION['email'];
$ph_no = $_SESSION['ph_no'];
$partic_events_str = $_SESSION['partic_events_str'];
$contingent_boys = $_SESSION['contingent_boys'];
$contingent_girls = $_SESSION['contingent_girls'];
$payment = $_SESSION['payment'];
$reference = htmlspecialchars($_POST['reference']);


$sql = "INSERT INTO Registration (Name, College, Contingent_boys, Contingent_girls, Phone_no, Day1, Day2, Day3, Events, email,payment,reference_number) VALUES ('$name', '$college', $contingent_boys, $contingent_girls, $ph_no, '$day1', '$day2', '$day3', '$partic_events_str', '$email','$payment','$reference');";

// die("$reference");

session_unset();
session_destroy();

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
    echo "<script type='text/javascript'>
        alert('Your Registration was Succesful');
        document.location = 'index.html';
    </script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

?>