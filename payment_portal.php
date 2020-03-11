<?php
session_start();

$name = $_POST["name"];
$name = htmlspecialchars($name);
$_SESSION['name'] = $name;

$college = $_POST["college"];
$college = htmlspecialchars($college);
$_SESSION['college']=$college;

$contingent_boys = $_POST["conti_b"];
$contingent_boys = htmlspecialchars($contingent_boys);
$_SESSION['contingent_boys']=$contingent_boys;

$contingent_girls = $_POST["conti_g"];
$contingent_girls = htmlspecialchars($contingent_girls);
$_SESSION['contingent_girls']=$contingent_girls;

$email = $_POST["email"];
$email = htmlspecialchars($email);
$_SESSION['email']=$email;

$ph_no = $_POST["ph_no"];
$ph_no = htmlspecialchars($ph_no);
$_SESSION['ph_no'] = $ph_no;

$payment = 0;

$day1=$day2=$day3="NO";

if (isset($_POST['day1'])) {
    $day1 = "YES";
    $_SESSION['day1']="YES";
}
else $_SESSION['day1']="NO";

if (isset($_POST['day2'])) {
    $day2 = "YES";
    $_SESSION['day2']="YES";
}
else $_SESSION['day2']="NO";

if (isset($_POST['day3'])) {
    $day3 = "YES";
    $_SESSION['day3']="YES";
}
else $_SESSION['day3']="NO";

if ($day1 == "YES" && $day2 == "YES" && $day3 == "YES") $payment = 1300;
else if (($day1 == "YES" && $day2 == "YES") || ($day3 == "YES" && $day2 == "YES") || $day1 == "YES" && $day3 == "YES") $payment = 1000;
else if ($day1 == "YES" || $day2 == "YES" || $day3 == "YES") $payment = 600;


$no_events = 39; // enter number of events
$events_list = array("Synchronians", "Exodia Idol", "Game of Street", "Band Slam", "Groove Fanatics", "Rap Battle", "Pair on Stage", "Street Play", 'Mono Act', 'Stage Play', 'Canvas', 'Live Sketching', 'Face Painting', 'Portrait Photography', 'Doodle', 'Street Photography', 'Photo Hunt', 'Advertisement Making', 'Art of Photoshop', 'Couture', 'Dementia', 'Debug', 'Line Follower', 'Robo Soccer', 'Fury Road', 'Junkyard Wars', 'Nitro Racing', 'Cadathon', 'Crane-o-Mania', 'Cad-X', 'Quizzar', 'Zenith', 'IPL Auction', 'Disrupt', 'India Quiz', 'Sports Quiz', 'iot workshop', 'ai_ml workshop', 'bionic_works workshop'); // enter events names 
$payments = array(2000, 200, 500, 600, 300, 300, 300, 1500, 200, 1500, 200, 100, 200, 0, 0, 0, 400, 400, 0, 2000, 0, 100, 500, 500, 500, 500, 500, 500, 500, 300, 0, 0, 200, 0, 150, 150, 1200, 1200, 1200);

$partic_events_str = "";
$counter = 0;

for ($x = 1; $x <= $no_events; $x++) {
    if ($_POST[sprintf("event%u", $x)] == "YES" && $_POST[sprintf("eventcount%u", $x)] == "") {
        echo "<script type='text/javascript'>
        alert('Your Registration was Failed Kindly fill the Number Of Teams properly');
        document.location = 'register.html';
        </script>";
    }
    if ($_POST[sprintf("event%u", $x)] == "YES") {
        $counter = (int) $_POST[sprintf("eventcount%u", $x)];
        $payment += $payments[$x-1]*$counter;
    }
    if ($_POST[sprintf("event%u", $x)] == "YES") {
        $partic_events_str  = $partic_events_str . ", " . $events_list[$x - 1] . "-->" . $_POST[sprintf("eventcount%u", $x)];
    }
}

if($payment==0){
    die("$payment;");
}

$_SESSION['payment']=$payment;
$_SESSION['partic_events_str']=$partic_events_str;

?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style_main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="icon" href="renders/logo.png">
    <link rel="stylesheet" href="preloader.css">
    <link rel="stylesheet" type="text/css" href="new.css">
    <title>Exodia - This time for tropical</title>
</head>

<body style="background-color: #FFEEAD;">
    <div class="preloader" id="preloader">
        <div id="sun">&nbsp;</div>
        <img id="cloud1" src="renders/melon.png" alt="">
        <img id="cloud2" src="renders/float.png" alt="">
    </div>
    <script>
        if (screen.width <= 700) {
            var x = document.getElementById('preloader');
            x.remove();
        }
    </script>
    <div class="pos-f-t fixed-top" id="navigation">
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <a href="index.html">
                    <h4 class="text-white">Home</h4>
                </a>
            </div>
            <div class="bg-dark p-4">
                <a href="events.html">
                    <h4 class="text-white">Events</h4>
                </a>
            </div>
            <div class="bg-dark p-4">
                <a href="team.html">
                    <h4 class="text-white">Team</h4>
                </a>
            </div>
            <div class="bg-dark p-4">
                <a href="workshopevents.html">
                    <h4 class="text-white">Workshops</h4>
                </a>
            </div>
            <div class="bg-dark p-4">
                <a href="register.html">
                    <h4 class="text-white">Register</h4>
                </a>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>

    <div class="text-center" id="heading_of_page" style="padding-bottom: 5%;padding-top:15%;margin-bottom: 5%; background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(Registration.jpg); background-attachment: fixed; background-repeat: no-repeat;background-size: cover;">
        <h1 style="color: rgb(255, 111, 105);">Payment</h1>
    </div>

    <form action="payment_confirm.php" method="POST">
        <div class="container">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6" style="padding:5% !important;padding-bottom: 5% !important">
                    <p class="btn btn-block mysubmit" id='rounded' style="font-family: cursive;">Your Due payment: ₹<?php echo "$payment" ?>/-</p>
                </div>

                <div class="alert alert-primary alert-dismissible fade show col-sm-12" style="margin: 10px;">
                    <h3>Note:</h3>
                    <p>
                        <strong>Step1: </strong> Kindly make the payment with following credentials:
                    </p>
                    <p>
                        <table>
                            <tr>
                                <td>Account number</td>
                                <td>36299062221</td>
                            </tr>
                            <tr>
                                <td>IFSC number</td>
                                <td>SBIN0013711</td>
                            </tr>
                            <tr>
                                <td>Account name</td>
                                <td>IIT MANDI Exodia 2019</td>
                            </tr>
                            <tr>
                                <td>Bank name</td>
                                <td>State Bank of India, Kamand Branch, Distt. Mandi</td>
                            </tr>
                        </table>
                    </p>
                    <p>
                        <strong>Step2: </strong>Enter the reference number for the proof of the payment.
                    </p>
                    <p>
                        <strong>Step3: </strong>Your payment will will be verified by our team. In case of any doubts, feel free to contact us.
                    </p>
                </div>

                <div class="col-sm-12" style="margin: 0 5% 0 0;">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Reference number</span>
                        </div>
                        <input id="msg" type="text" class="form-control" name="reference" placeholder="Enter the reference number of the payment." required>
                    </div>
                </div>



                <div class="col-sm-3"></div>
                <div class="col-sm-6" style="padding:5% !important;padding-bottom: 0 !important">
                    <button class="btn btn-block mysubmit payment_button" type="submit" formaction="payment_confirm.php" id='rounded' style="font-family: cursive;">Submit payment</button>
                </div>
            </div>
        </div>
    </form>

    <!--footer start -->
    <script src="./script.js"></script>
    <script src="./filler.js"></script>
</body>

</html>

