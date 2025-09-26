<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in - ALMS</title>
    <link rel="stylesheet" href="index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Spectral+SC&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<div class="login-card">
  <h1>First City Providential College</h1>
  <h2>College Library</h2>

  <!-- ✅ form now posts to login.php -->
  <form action="login.php" method="POST">
    <input class="input" type="email" name="email" placeholder="Email" required>

    <div class="input-wrapper">
      <input id="password" class="input" type="password" name="password" placeholder="Password" required>
      <button type="button" class="toggle-pass" onclick="togglePassword()">
        <i id="eye-icon" class="far fa-eye-slash"></i>
      </button>
    </div>
    <?php
  // Show an error if redirected with ?error=1
  if (isset($_GET['error'])) {
      echo "<p style='color:red; font-size: 0.85rem; text-align: left; margin: -8px 0 16px 8px;'>Invalid email or password.</p>";
  }
  ?>

    <button type="submit" class="btn">Log In</button>
    <a href="#">Forgot Password</a>
  </form>

</div>

<script>
function togglePassword() {
  const pass = document.getElementById("password");
  const icon = document.getElementById("eye-icon");
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    pass.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
}
</script>

</body>
</html>
