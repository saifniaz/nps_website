<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $mailTo = "contact@nsppropertymanagement.com";
    $headers = "From: ".$email;
    $txt = "Email from ".$name."\r\n \r\n".$message;
    
    mail($mailTo, null, $txt, $headers);
    header("Location: ..\sent.html");
}
?>