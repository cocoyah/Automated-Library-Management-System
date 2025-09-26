<?php
session_start();
require 'connection.php';   // ✅ include the fixed connection

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input
    $email    = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Prepared statement to prevent SQL injection
    $stmt = $con->prepare("SELECT UserID, FirstName, LastName, Password FROM Users WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows === 1) {
        $row = $result->fetch_assoc();

        // ✅ If you stored **hashed** passwords:
        // if (password_verify($password, $row['Password'])) { ... }
        //
        // ⚠️ If you are still using plain text for testing, use a direct check (temporary only!):
        if ($password === $row['Password']) {

            // Create session variables
            $_SESSION['UserID']    = $row['UserID'];
            $_SESSION['FirstName'] = $row['FirstName'];
            $_SESSION['LastName']  = $row['LastName'];
            $_SESSION['Email']     = $email;

            // Redirect to dashboard or home page
            header("Location: navbar.php");
            exit;
        }
    }

    // Invalid login
    header("Location: index.php?error=1");
    unset($_SESSION['login_error']);   // <-- clear it here
    exit;
} else {
    // Direct access protection
    header("Location: index.php");
    exit;
}
?>
