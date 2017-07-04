$(document).ready(function() {
    console.log("LogIn app loaded");
    //Grab data from sign in form
    $("#sign_in_btn").on("click", function(event){

        event.preventDefault();

        var userData = {
            emailOrUsername: $("#emailOrUsername_form").val().trim(),
            password: $("#password_form").val().trim(),
            
        };

        $.post("/login", {
            email: userData.emailOrUsername,
            password: userData.password
        },(res)=>{
            location.reload(res);
        });

    });

    // Sign Out functionality
    $("#sign_out_btn").on("click", function(event){
        event.preventDefault();
        $.get("/logout", (res)=>{
            location.reload(res);
        })
    });


});