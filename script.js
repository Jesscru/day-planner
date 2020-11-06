var timeBlock = $('.time-block');
var hour = $('.hour');
var save = $('.saveBtn');
var userEntry = $('.text-area')


// when user clicks save buttons entered data in the text field will be saved to local storage 
// if nothing is in the field and the user clicks save, they will be sent an alert to enter a value
save.on('click', function(event){
    event.preventDefault();

    if (timeBlock !== null) {
        localStorage.setItem($(this).val()), timeBlock.html;
        // var displayEvent = localStorage.getItem()
    } else {
        alert("Please enter the event you would like to schedule for this hour before saving.");
    }
})

