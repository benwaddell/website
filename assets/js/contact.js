function submitToAPI(e) {
    e.preventDefault();

    // reset/rehide error messages
    document.getElementById("name-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("message-error").style.display = "none";

    // check for valid name (2+ characters)
    var nameRegEx = /[A-Za-z]{1}[A-Za-z]/;
    if (!nameRegEx.test($("#name").val())) {
        document.getElementById("name-error").style.display = "block";
        return;
    }

    // check for valid email (x@x.xx)
    var emailRegEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (($("#email").val()=="") || !emailRegEx.test($("#email").val())) {
        document.getElementById("email-error").style.display = "block";
        return;
    }

    // check for valid message (2+ characters)
    var messageRegEx = /[A-Za-z]{1}[A-Za-z]/;
    if (!messageRegEx.test($("#message").val())) {
        document.getElementById("message-error").style.display = "block";
        return;
    }

    // set vars from form data
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var data = {
       name : name,
       email : email,
       subject : subject,
       message : message
     };

    // POST data to Lambda API
    $.ajax({
      type: "POST",
      url : "https://up22wffs5dxa6qa6cw4zb4g3sa0zzcuw.lambda-url.us-east-1.on.aws/",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      success: function () {
        // clear form and show a success message
        document.getElementById("contact-div").style.display = "none";
        document.getElementById("contact-success-div").style.display = "block";
        location.replace("#contact-success");
      },

      error: function () {
        // show an error message
        alert("An error has occurred. Please try again.");
      }
    });
  }