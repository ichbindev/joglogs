$(function() {
  $("#setup-submit").on("click", function(event) {
    event.preventDefault();

    // collect all of the form data
    var setup = {};
    setup.mpw = $("#mpw").val();
    var days = [];

    // day of week functionality, this feature is a work in progress
    // $("input[type=checkbox]").each(function() {
    //   if ($(this).is(":checked")) {
    //     days.push($(this).val());
    //   }
    // });
    // setup.days = days;
    setup.goalDistance = $($("#goal-distance")).val();
    setup.raceName = $("#raceName").val();
    setup.endDate = $("#raceDate").val();

    // POST the form data to our api
    $.ajax({
      method: "POST",
      url: "/api/calendar",
      data: setup,
      error: calendarError
    }).then(function() {
      window.location.href = "/calendar";
    });
  });

  function calendarError() {
    // TODO: give visual indication to user here
    console.log("429: Calendar limit exceeded");
  }

  // logout button functionality
  $("#logout").on("click", function() {
    $.ajax({
      method: "POST",
      url: "/api/user/logout"
    }).then(function() {
      window.location.href("/");
    })
  });
});
