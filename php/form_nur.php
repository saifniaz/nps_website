<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $mailTo = "nur.mohammed@century21.ca";
    $headers = "From: ".$email;
    $txt = "Email from ".$name.".\n\n".$message;
    
    mail($mailTo, null, $txt, $headers);
    header("Location:contact.html?mailsend");
}