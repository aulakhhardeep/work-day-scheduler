var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");

var hour = moment().hours();
var userInput;
var hourSpan;
  
function initialize()
{

    var init9 = JSON.parse(localStorage.getItem("9AM"));
    nineAm.val(init9);
    
    var init10 = JSON.parse(localStorage.getItem("10AM"))
    tenAm.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11AM"))
    elevenAm.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12PM"))
    twelvePm.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("1PM"))
    onePm.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("2PM"))
    twoPm.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("3PM"))
    threePm.val(init3);
    
    var init4 = JSON.parse(localStorage.getItem("4PM"))
    fourPm.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("5PM"))
    fivePm.val(init5);
}

function text() {
      
    $(".description").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
  }

  
$(document).ready(function() //load html and CSS before JavaScript
{
    
        initialize(); 
        text();
      
        // button function 
        $(".saveBtn").on("click", function(){
          userInput = $(this).siblings(".description").val().trim();
          console.log(userInput);
          hourSpan = $(this).siblings(".hour").text().trim();
          console.log(hourSpan);
          localStorage.setItem(hourSpan, JSON.stringify(userInput));
      
})
});

