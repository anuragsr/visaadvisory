<?php

$destination = $_POST["destination"];
$nationality = $_POST["nationality"];
$severalnationalities = $_POST["severalnationalities"];
$location = $_POST["location"];
$more3months = $_POST["more3months"];
$day = $_POST["day"];
$Month = $_POST["Month"];
$Year = $_POST["Year"];
if($_POST["soonaspossible"]){
    $soonaspossible = $_POST["soonaspossible"];
}else{
    $soonaspossible = '';
}
$insuredstartdate = $_POST["insuredstartdate"];
$servicesadvantage = $_POST["servicesadvantage"];
$documents = $_POST["documents"];
$telephonenumber = $_POST["telephonenumber"];
$email = $_POST["email"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$housenumber = $_POST["housenumber"];
$Yearofbirth = $_POST["Yearofbirth"];
$Postcode = $_POST["Postcode"];
$locations = $_POST["locations"];

$servicesArray = implode(", ",$servicesadvantage);


$to = "info@visaadvisory.com";
$subject = "VisaAdvisory Post Job";


$message = "
<html>
<head>
<title>VisaAdvisory Post Job</title>
</head>
<body>
<p>Post Job </p>
<table>
<tr>
<th>Destination</th>
<th>".$destination."</th>
</tr>
<tr>
<th>Nationality</th>
<th>".$nationality."</th>
</tr>
<tr>
<th>Several Nationalities</th>
<th>".$severalnationalities."</th>
</tr>
<tr>
<th>Location</th>
<th>".$location."</th>
</tr>
<tr>
<th>More 3 months</th>
<th>".$more3months."</th>
</tr>
<tr>
<th>Day</th>
<th>".$day."</th>
</tr>
<tr>
<th>Month</th>
<th>".$Month."</th>
</tr>
<tr>
<th>Year</th>
<th>".$Year."</th>
</tr>
<tr>
<th>Soon as possible</th>
<th>".$soonaspossible."</th>
</tr>
<tr>
<th>Insured Start Date</th>
<th>".$insuredstartdate."</th>
</tr>
<tr>
<th>Services Advantage</th>
<th>".$servicesArray."</th>
</tr>
<tr>
<th>Documents</th>
<th>".$documents."</th>
</tr>
<tr>
<th>Telephone Number</th>
<th>".$telephonenumber."</th>
</tr>
<tr>
<th>Email</th>
<th>".$email."</th>
</tr>
<tr>
<th>First Name</th>
<th>".$firstname."</th>
</tr>
<tr>
<th>Last Name</th>
<th>".$lastname."</th>
</tr>
<tr>
<th>House Number</th>
<th>".$housenumber."</th>
</tr>
<tr>
<th>Year of Birth</th>
<th>".$Yearofbirth."</th>
</tr>
<tr>
<th>Postcode</th>
<th>".$Postcode."</th>
</tr>
<tr>
<th>Location</th>
<th>".$locations."</th>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: '.$email. "\r\n";
$headers .= 'Cc: ashok.11122@gmail.com' . "\r\n";

mail($to,$subject,$message,$headers);
?>
