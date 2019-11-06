$(function() {
  // submit user and password on login
  $("#login").on("click", function() {
    let username = $("#defaultForm-email").val();
    let password = $("#defaultForm-pass").val();

    let login = {
      username: username,
      password: password
    };

    $.ajax({
      method: "POST",
      data: login,
      url: "/api/user/login",
      error: loginFail
    }).then(function() {
      $.ajax({
        method: "GET",
        url: "/api/plans/",
        // check if the user already has a calendar
        success: hasCalendar,
        error: noCalendar
      })
    });  
  });

  // if they have a calendar, direct them to the calendar display page
  function hasCalendar() {
    window.location.href = "/calendar";
  }

  // if they don't, direct them to fill out the form to create a calendar
  function noCalendar() {
    window.location.href = "/setup";
  }

  // either username doesn't exist or password didn't match
  // error message is purposefully vague
  function loginFail() {
    $("#loginFail").text("Incorrect Username or Password");
    $("#loginFail").attr("style", "color:red;");
  }
    
  function signupFail() {
    $("#signupFail").text("This email has already signed up.");
    $("#signupFail").attr("style", "color:red;");
  }

  // submit email and password for creating an account
  $("#sign-up").on("click", function() {
    let username = $("#orangeForm-email").val();
    let password = $("#orangeForm-pass").val();

    let signup = {
      username: username,
      password: password
    };

    $.ajax({
      method: "POST",
      data: signup,
      url: "/api/user/signup"
    }).then(function() {
      $.ajax({
        method: "POST",
        data: signup,
        url: "/api/user/login",
        error: signupFail
      }).then(function() {
        // new users will not have a calendar so take them to the setup page
        window.location.href = "/setup";
      });
    });
  });
});
