var timeBlock = $('.time-block');
var hour = $('.hour');
var save = $('.saveBtn');
var clear = $('.clearBtn');
var textArea = $('.text-area');
var userValues = [];


// displays the current day 
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

// sets colors of the textareas based on the time 
        // past is purple
    for (var i = 9; i < 18; i++) {
        if (parseInt(moment().hours()) > i) {
            $('#' + i).attr('class', 'past');
        }   // present is orange
         else if (parseInt(moment().hours()) === i) {
            $('#' + i).attr('class', 'present');
        }   // future is green 
         else {
            $('#' + i).attr('class', 'future');
        }
    }


// when user clicks save buttons entered data in the text field will be saved to local storage 
// if nothing is in the field and the user clicks save, they will be sent an alert to enter a value
save.on('click', function(event){
    event.preventDefault();

    var hours = $(this).val()  
    var userEntry = $('#' + hours).val().trim();

    if (userEntry !== null) {
        userValues.push(userEntry);
        localStorage.setItem(hours, userEntry);
        var getIt = localStorage.getItem(hours);
        $('#' + hours).text(getIt);
        console.log(getIt);
    } 
    
  
})

// clears local storage at midnight
function newDay (){
    if (parseInt(moment().hours()) === 24) {
        localStorage.clear();
    }
}

// clears data from local storage and thus, the page when the clear button is clicked
clear.on('click', function(event){
    event.preventDefault();

    localStorage.clear();
})

