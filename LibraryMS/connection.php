<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "libraryms_db";

$con = mysqli_connect($host, $user, $pass, $db);

// Better error handling
if (!$con) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
