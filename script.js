var timeBlock = $('.time-block');
var hour = $('.hour');
var save = $('.saveBtn');
var textArea = $('.text-area');
var userEntry = JSON.stringify($('.text-area').value);


// displays the current day 
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

// sets colors of the textareas based on the time 
// past is purple
if (moment().hour() < save.val()) {
    textArea.attr('class', 'past');
} 
// present is orange
if (moment().hour() === save.val()) {
    textArea.attr('class', 'present');
} 
// future is green 
if (moment().hour() > save.val()) {
    textArea.attr('class', 'future');
} 



// when user clicks save buttons entered data in the text field will be saved to local storage 
// if nothing is in the field and the user clicks save, they will be sent an alert to enter a value
// save.on('click', function(event){
//     event.preventDefault();

//     if (userEntry !== null) {
//         localStorage.setItem($(this).val(), userEntry);
//         var displayEvent = localStorage.getItem($(this).val);
//         userEntry.text(localStorage.getItem($(this).val()));
//     } else {
//         alert("Please enter the event you would like to schedule for this hour before saving.");
//     }
// })



save.on('click', function(event){
    var hourArray = [];
    event.preventDefault();

    if (userEntry !== '') {
        hourArray.push($(this).val());
        localStorage.setItem($(this).val(), userEntry);
       

        for (var i = 0; i<hourArray.length; i++) {
          if ($(this).val() === $('name')) {
            var displayEvent = localStorage.getItem($(this).val);
            userEntry.text(displayEvent);
          }
        }

    } else {
        alert("Please enter the event you would like to schedule for this hour before saving.");
    }
    
    console.log(userEntry);

    console.log(hourArray);
})

