$(document).ready(function() {
    console.log("Register app loaded");
    //Grab data from sign in form
    $("#submit_btn").on("click", function(event){

        event.preventDefault();

        var userData = {
            emailOrUsername: $("#emailOrUsername_form").val().trim(),
            password: $("#password_form").val().trim(),
            
        };

        $.post("/register", userData, function(res){
            //Grab the response from the database if it successfull creates new database
            if (res) {
                console.log("Successfully added to the database");
                window.location = ('/');
            }
        });

    });


});