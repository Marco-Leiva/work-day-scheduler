//Displays the Current Date and Hour in Header
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));

var currentHour = moment().hour();

//Formating Text Areas in the Calender
$(".time-block").each(function(){
    var blockHour = $(this).attr("id").split("-")[1];
    var textEntry = localStorage.getItem(blockHour);
    var textArea = $(this).find(".description");
    textArea.val (textEntry);
    
    //If/Else Statements to Appropriate Coloring
    if (blockHour < currentHour){
        $(this).find(".description").addClass("past");
    }else if(blockHour == currentHour){
        $(this).find(".description").addClass("present");
    }else{
        $(this).find(".description").addClass("future");
     }
});

//Save Button Functionality
$(".saveBtn").on("click", function(){
    var key = $(this).parent().attr("id").split("-")[1];
    var value = $(this).parent().find(".description").val();
    localStorage.setItem(key,value);
});
