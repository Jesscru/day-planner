var timeBlock = $('.time-block');
var hour = $('.hour');
var save = $('.saveBtn');
var clear = $('.clearBtn');
var textArea = $('.text-area');
var userEntry = $.trim($('.text-area').val());
var hourArray = [];


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
save.on('click', function(event){
    event.preventDefault();

    if (textArea !== undefined) {
        // hourArray.push(userEntry);
        localStorage.setItem($(this).val(), $(textArea).val());
        var displayEvent = localStorage.getItem($(this).val());
        textArea.text(displayEvent);
    } else {
        alert("Please enter the event you would like to schedule for this hour before saving.");
    }
})

clear.on('click', function(event){
    event.preventDefault();

    localStorage.clear();
})



// save.on('click', function(event){
//   
//     event.preventDefault();

//     if (userEntry !== '') {
       
//         hourArray.push($(this).val());
//         localStorage.setItem($(this).val(), userEntry);
       

//         for (var i = 0; i<hourArray.length; i++) {
//           if ($(this).val() === $('name')) {
//             var displayEvent = localStorage.getItem($(this).val);
//             userEntry.text(displayEvent);
//           }
//         }

//     } 
    // else {
    //     alert("Please enter the event you would like to schedule for this hour before saving.");
    // }
    
    
    
    console.log(hourArray);
    console.log($($('this')).val());

