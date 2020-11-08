var timeBlock = $('.time-block');
var hour = $('.hour');
var save = $('.saveBtn');
var userEntry = $('.text-area')


// displays the current day 
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

// sets colors of the textareas based on the time 
// past is purple
if (moment().hour() < save.val()) {
    userEntry.attr('class', 'past')
} 
// present is orange
if (moment().hour() === save.val()) {
    userEntry.attr('class', 'present')
} 
// future is green 
if (moment().hour() > save.val()) {
    userEntry.attr('class', 'future')
} 

console.log(save.val());
console.log(moment().hour());

// // when user clicks save buttons entered data in the text field will be saved to local storage 
// // if nothing is in the field and the user clicks save, they will be sent an alert to enter a value
// save.on('click', function(event){
//     event.preventDefault();

//     if (timeBlock !== null) {
//         localStorage.setItem($(this).val(), $('.text-area').value);
//         // var displayEvent = localStorage.getItem()
//     } else {
//         alert("Please enter the event you would like to schedule for this hour before saving.");
//     }
// })


console.log();