// A function to execute after the DOM is ready.
$(document).ready(function () {
  // Display current date and time
  var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(currentDay);

  // Assign event listener to btn
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save items in localStorage
    localStorage.setItem(text, time);
  });

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

  //   function - track time
  function hourTracker() {
    // get current numbers of hours
    var currentHour = moment().hour();
    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      // to check the time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });

    let nowHour = currentDay;
    $(".description").addClass(function () {
      return +this.id === nowHour
        ? "present"
        : +this.id < nowHour
        ? "past"
        : "future";
    });
  }
  hourTracker();
});
