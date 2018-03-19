//Initialise Firebase


  var config = {
    apiKey: "AIzaSyDUU6hmnxXfdv7vyhkTtXu9RUIYPfG7nZY",
    authDomain: "pottfolio-contact-form.firebaseapp.com",
    databaseURL: "https://pottfolio-contact-form.firebaseio.com",
    projectId: "pottfolio-contact-form",
    storageBucket: "pottfolio-contact-form.appspot.com",
    messagingSenderId: "54153992766"
  };
  firebase.initializeApp(config);


// Reference collected messages //

var messageRef = firebase.database().ref("messages");




// Event Listener - Form Submit //

document.getElementById("contactForm").addEventListener("submit", submitForm);


// Submit form
function submitForm(e){

    e.preventDefault();

    //Get Inputs //

    var firstname = getInput("fname");
    var lastname = getInput("lname");
    var email = getInput("Email");
    var message = getInput("subject");

    // Save message
    saveMessage(firstname, lastname, email, message);

    document.getElementById("contactForm").reset();

    //Email sent alert

    document.querySelector("#alert").style.display = "block";

    // Hide Alert after 3 seconds

    setTimeout(function() {

        document.querySelector("#alert").style.display = "none";

    },3000);

}


// Function to get values //

function getInput(id) {
    return document.getElementById(id).value;
}

// Function to Save Messages //

function saveMessage(firstname, lastname, email, message) {

    var newMessageRef = messageRef.push();

    newMessageRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
    })
}