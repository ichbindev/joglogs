$(function() {
  // load the calendar immediately when the page loads
  let url = "/api/plans/";
  console.log(url);
  $.ajax({
    method: "GET",
    url: url
  }).then(function(response) {
    console.log(response);
    // display the calendar once returned
    let iframe =
      "https://calendar.google.com/calendar/embed?src=" +
      response +
      "&ctz=America%2FChicago";
    console.log(iframe);
    $("#calendar").attr("src", iframe);
  });

  // logout button functionality
  $("#logout").on("click", function() {
    console.log("logging out");
    $.ajax({
      method: "POST",
      url: "/api/user/logout"
    });
  });
});
