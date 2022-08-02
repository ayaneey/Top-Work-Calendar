// A function to execute after the DOM is ready.
$(document).ready(function () {
  // Display current date and time
  var currentDay = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").html(currentDay);

  // Assign event listener to btn

  ".saveBtn".on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(this);
  });

  // Save items in localStorage
  localStorage.setItem(time, text);

  //Retrieve items from localStorage
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
});
