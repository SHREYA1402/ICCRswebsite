<!DOCTYPE html>

<html>

<head>

    <title>LOGIN</title>

    <link rel="stylesheet" type="text/css" href="style_login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

     <form action="login.php" method="post">

       
        
    <div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
            <h1>LOGIN</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-google fa-2x"></i></a>
					<a href="#" class="social"><i class="fab fa fa-linkedin fa-2x"></i></a>
				</div>
				
                

                 <input type="text" name="uname" placeholder="Enter Email"><br>

                 <input type="password" name="password" placeholder="Enter Password"><br> 
                 <a href="#">Forgot your password?</a>
                 <br>
				 <br>
                <button type="submit">Login</button>
			
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h2>Institute Portal</h2>
					<img src="4.png">
				</div>
			</div>
		</div>
	</div>
	</form>
        <?php if (isset($_GET['error'])) { ?>

            <p class="error"><?php echo $_GET['error']; ?></p>

        <?php } ?>

      

   

</body>

</html>