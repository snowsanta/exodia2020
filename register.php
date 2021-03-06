<?php
session_start();
?>

<!DOCTYPE html>
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
        document.location = "corona_has_delayed_the_fest.html";
    </script>
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
                <a href="register.php">
                    <h4 class="text-white">Register</h4>
                </a>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>

    <!-- register page -->
    <div class="text-center" id="heading_of_page"
        style="padding-bottom: 5%;padding-top:15%;margin-bottom: 5%; background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(Registration.jpg); background-attachment: fixed; background-repeat: no-repeat;background-size: cover;">
        <h1 style="color: rgb(255, 111, 105);">Register</h1>
    </div>
    <form method="POST">
        <div class="container">
            <script>
                if (screen.width <= 700) {
                    var x = document.getElementById('heading_of_page');
                    x.style.paddingTop = "20%";
                    x.style.marginBottom = "5%"
                }
            </script>
            <div class="row">

                <div class="col-sm-12" style="margin-bottom: 5%;">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Name</span>
                        </div>
                        <input id="msg" type="text" class="form-control" name="name" placeholder="name" required>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">College</span>
                        </div>
                        <input id="msg" type="text" class="form-control" name="college" placeholder="college" required>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Email Id</span>
                        </div>
                        <input id="msg" type="email" class="form-control" name="email" placeholder="email id" required>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">No. of boys</span>
                        </div>
                        <input id="msg" type="number" class="form-control boy_count" name="conti_b" placeholder="number of boys"
                            required>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">No. of girls</span>
                        </div>
                        <input id="msg" type="number" class="form-control girl_count" name="conti_g" placeholder="number of girls"
                            required>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Contingent contact</span>
                        </div>
                        <input id="msg" type="number" class="form-control" name="ph_no"
                            placeholder="Kindly provide a number to reach to you. This number will be validated further"
                            required>
                    </div>
                </div>
                <div class="col-sm-1"></div>

                <div class="col-sm-12">
                    <h3 class="heading-form" style="margin-left: 10% !important;">Select your accomodation</h3>
                    <div class="alert alert-primary alert-dismissible fade show">
                        <strong>Accomodation prices are as follows:</strong><br>
                        ₹1300 for 3 days <br>
                        ₹1000 for 2 days <br>
                        ₹600 for 1 day <br>
                        <i>Faculty charges: ₹1000 for 3 days</i>
                        <br>
                        <strong>Kindly fill in the number of teams for that particular event to the right of the event
                            name</strong>
                        <!-- <button type="button" class="close" data-dismiss="alert">&times;</button> -->
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="accomodation" value="YES" name="day1"> Day 1</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="accomodation" value="YES" name="day2"> Day 2</label>
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="accomodation" value="YES" name="day3"> Day 3</label>
                    </div>
                </div>
            </div>

            <div class="row" style="margin-top: 5%;">
                <!-- <div class="col-sm-1"></div> -->
                <div class="col-sm-12">
                    <div class="alert alert-primary alert-dismissible fade show">
                        <h3>Note:</h3>
                        <strong>Kindly fill in the following information in the box to the right of the event:</strong>
                        <ul>
                            <li>if the event is team based, strictly enter the number of teams and not the total
                                participants</li>
                            <li>if the event allows individual participation, fill in the total number of participants
                                participating in the event</li>
                        </ul>
                        <p>For further information regarding events visit <a href="events.html">our events page.</a></p>
                        <!-- <button type="button" class="close" data-dismiss="alert">&times;</button> -->
                    </div>
                </div>
                <div class="col-sm-4">
                    <h3 class="heading-form">Cultural</h3>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event1" value="YES">
                            Synchronians</label>
                        <input type="number" class="tentacles" name="eventcount1" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event2" value="YES"> Exodia
                            Idol</label>
                        <input type="number" class="tentacles" name="eventcount2" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event3" value="YES"> Game of
                            Street</label>
                        <input type="number" class="tentacles" name="eventcount3" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event4" value="YES"> Band
                            Slam</label>
                        <input type="number" class="tentacles" name="eventcount4" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event5" value="YES"> Groove
                            Fanatics</label>
                        <input type="number" class="tentacles" name="eventcount5" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event6" value="YES"> Rap
                            Battle</label>
                        <input type="number" class="tentacles" name="eventcount6" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event7" value="YES"> Pair on
                            Stage</label>
                        <input type="number" class="tentacles" name="eventcount7" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event8" value="YES"> Street
                            Play</label>
                        <input type="number" class="tentacles" name="eventcount8" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event9" value="YES"> Mono Act</label>
                        <input type="number" class="tentacles" name="eventcount9" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event10" value="YES"> Stage
                            Play</label>
                        <input type="number" class="tentacles" name="eventcount10" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event11" value="YES"> Canvas</label>
                        <input type="number" class="tentacles" name="eventcount11" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event12" value="YES"> Live
                            Sketching</label>
                        <input type="number" class="tentacles" name="eventcount12" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event13" value="YES"> Face
                            Painting</label>
                        <input type="number" class="tentacles" name="eventcount13" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event14" value="YES"> Portrait
                            Photography</label>
                        <input type="number" class="tentacles" name="eventcount14" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event15" value="YES"> Doodle</label>
                        <input type="number" class="tentacles" name="eventcount15" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event16" value="YES"> Street
                            Photography</label>
                        <input type="number" class="tentacles" name="eventcount16" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event17" value="YES"> Photo
                            Hunt</label>
                        <input type="number" class="tentacles" name="eventcount17" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event18" value="YES"> Advertisement
                            Making</label>
                        <input type="number" class="tentacles" name="eventcount18" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event19" value="YES"> Art of
                            Photoshop</label>
                        <input type="number" class="tentacles" name="eventcount19" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event20" value="YES"> Couture</label>
                        <input type="number" class="tentacles" name="eventcount20" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event35" value="YES"> India
                            Quiz</label>
                        <input type="number" class="tentacles" name="eventcount35" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event36" value="YES"> Sports
                            Quiz</label>
                        <input type="number" class="tentacles" name="eventcount36" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                </div>
                <div class="col-sm-4">
                    <h3 class="heading-form">Technical</h3>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event21" value="YES">
                            Dementia</label>
                        <input type="number" class="tentacles" name="eventcount21" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event22" value="YES"> Debug</label>
                        <input type="number" class="tentacles" name="eventcount22" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event23" value="YES"> Line
                            Follower</label>
                        <input type="number" class="tentacles" name="eventcount23" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event24" value="YES"> Robo
                            Soccer</label>
                        <input type="number" class="tentacles" name="eventcount24" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event25" value="YES"> Fury
                            Road</label>
                        <input type="number" class="tentacles" name="eventcount25" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event26" value="YES"> Junkyard
                            Wars</label>
                        <input type="number" class="tentacles" name="eventcount26" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event27" value="YES"> Nitro
                            Racing</label>
                        <input type="number" class="tentacles" name="eventcount27" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event28" value="YES">
                            Cadathon</label>
                        <input type="number" class="tentacles" name="eventcount28" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event29" value="YES">
                            Crane-o-Mania</label>
                        <input type="number" class="tentacles" name="eventcount29" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event30" value="YES"> Cad-X</label>
                        <input type="number" class="tentacles" name="eventcount30" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event31" value="YES"> Quizzar</label>
                        <input type="number" class="tentacles" name="eventcount31" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event32" value="YES"> Zenith</label>
                        <input type="number" class="tentacles" name="eventcount32" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event33" value="YES"> IPL
                            Auction</label>
                        <input type="number" class="tentacles" name="eventcount33" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event34" value="YES"> Disrupt</label>
                        <input type="number" class="tentacles" name="eventcount34" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                </div>
                <div class="col-sm-4">
                    <h3 class="heading-form">Workshop</h3>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event37" value="YES"> IoT </label>
                        <input type="number" class="tentacles" name="eventcount37" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" class="event_checkbox" name="event38" value="YES"> AI/ML
                            Workshop</label>
                        <input type="number" class="tentacles" name="eventcount38" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                    <div class="checkbox disabled">
                        <label><input type="checkbox" class="event_checkbox" name="event39" value="YES"> Bionic
                            Works</label>
                        <input type="number" class="tentacles" name="eventcount39" min="1" max="100" placeholder="Teams"
                            style="position: absolute;right: 20%;">
                    </div>
                </div>
                <div class="col-sm-3"></div>
                <div class="col-sm-6" style="padding:5% !important;padding-bottom: 0 !important">
                    <button class="btn btn-block mysubmit payment_button" type="submit" formaction="payment_portal.php" formmethod="POST" id='rounded' style="font-family: cursive;">Pay Now: ₹ 0/-</button>
                </div>
                <div class="col-sm-3"></div>
                <div class="col-sm-3"></div>
                <div class="col-sm-6" style="padding:5% !important;">
                    <button class="btn btn-block mysubmit" id='rounded' type="submit">PAY LATER</button>
                </div>
            </div>
        </div>
    </form>
    <!-- register page -->

    <!--footer start -->
    <script src="./script.js"></script>
    <script src="./filler.js"></script>
    <script src="./total_find.js"></script>
</body>

</html>