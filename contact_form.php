<?php
require 'phpmailer/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
// Setting up PHPMailer
$mail->IsSMTP();                                      // Set mailer to use SMTP
// Visit http://phpmailer.worxware.com/index.php?pg=tip_srvrs for more info on server settings
// For GMail    => smtp.gmail.com
//     Hotmail  => smtp.live.com
//     Yahoo    => smtp.mail.yahoo.com
//     Lycos    => smtp.mail.lycos.com
//     AOL      => smtp.aol.com
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
//This is the email that you need to set so PHPMailer will send the email from 
$mail->Username = 'yatin.agarwal.9@gmail.com';             // SMTP username
$mail->Password = '42isthekeytoLIFE';                           // SMTP password
$mail->SMTPSecure = 'tls';
$mail->Port = 587;                                    // TCP port to connect to
// Add the address to send the mail to
$mail->AddAddress('yatin.agarwal.9@gmail.com');
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->IsHTML(true);                                  // Set email format to HTML

// add your company name here
$company_name = 'YatinAg Website';

// choose which fields you would like to be validated separated by |
// options required - check input has content valid_email - check for valid email
$field_rules = array(
    'name' => 'required',
    'email'   => 'required|valid_email',
    'message' => 'required'
);

// change your error messages here
$error_messages = array(
    'required'    => 'This field is required',
    'valid_email' => 'Please enter a valid email address'
);

// success message
$success_message            = new stdClass();
$success_message->message   = 'Thank you! Your message has been sent';
$success_message->field     = 'submitButton';
$success_message->placement = $error_placements['submitButton'];

// mail failure message
$mail_error_message            = new stdClass();
$mail_error_message->message   = 'Sorry your mail was not sent - please try again later';
$mail_error_message->field     = 'submitButton';
$mail_error_message->placement = $error_placements['submitButton'];

$fields = $_POST;

$returnVal           = new stdClass();
$returnVal->status   = 'error';
$returnVal->messages = array();

if (!empty($fields)) {
    //Validate each of the fields
    foreach ($field_rules as $field => $rules) {
        $rules = explode('|', $rules);

        foreach ($rules as $rule) {
            $result = null;

            if (isset($fields[$field])) {
                if (!empty($rule)) {
                    $result = $rule($fields[$field]);
                }

                if ($result === false) {
                    $error = new stdClass();
                    $error->field = $field;
                    $error->message = $error_messages[$rule];
                    $error->placement = $error_placements[$field];

                    $returnVal->messages[] = $error;
                    // break from the rule loop so we only get 1 error at a time
                    break;
                }
            } else {
                $returnVal->messages[] =  $field . ' ' . $error_messages['required'];
            }
        }
    }

    if (empty($returnVal->messages)) {                         // Enable encryption, 'ssl' also accepted
        $email = stripslashes(safe($fields['email']));
        $body = stripslashes(safe($fields['message']));
        // The sender of the form/mail
        $mail->From = $email;
        $mail->FromName = stripslashes(safe($fields['name']));
        $mail->Subject = '[' . $company_name . ']';
        $content = $email . " sent you a message from your contact form:<br><br>";
        $content .= "-------<br>" . $body . "<br><br><br><br>Email: " . $email;      
        $mail->Body = $content;

        if(@$mail->Send()) {
            $returnVal->messages[] = $success_message;
            $returnVal->status = 'ok';
        } else {            
            $mail_error_message->message .= '<br> <small>' . $mail->ErrorInfo . '</small>';
            $returnVal->messages[] = $mail_error_message;
        }
    }
    echo json_encode($returnVal);
}

function required($str, $val = false)
{
    if (!is_array($str)) {
        $str = trim($str);
        return ($str == '') ? false : true;
    } else {
        return !empty($str);
    }
}

function valid_email($str)
{
    return (!preg_match("/^(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){255,})(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){65,}@)(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22))(?:\\.(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\\]))$/iD", $str)) ? false : true;
}

function safe($name)
{
    return(str_ireplace(array("\r", "\n", '%0a', '%0d', 'Content-Type:', 'bcc:','to:','cc:'), '', $name));
}
