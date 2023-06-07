// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var startHour = 6;
var endHour = 22;
var rootEl = $('#root');
var currentDayEl = $('#currentDay');
var clockEl = $('#currentTime');
var time = dayjs().format('hh:mm:ss')
var time24Hour = dayjs().hour();

currentDayEl.text(dayjs().format('MMMM D, YYYY'));

function setTime() {
  liveTime = dayjs().format('hh:mm:ss A');
  clockEl.text(liveTime);
}

setTime();
setInterval(setTime, 1000);

function createTimeBlock(hour) {

  var timeBlockEl = $('<div>');
  timeBlockEl.addClass('row time-block');
  timeBlockEl.attr('id', 'hour-' + hour);

  var hourEl = $('<div>');
  hourEl.addClass('col-2 col-md-1 hour text-center py-3');
  hourEl.text(hour)

  // need to assign an hour classifier

  console.log(time24Hour);

  var displayHour = hour;
  var amOrPm = '';

  if (hour > 12) {
    displayHour = (hour - 12);
    amOrPm = 'PM';
  } else if (hour === 12) {
    amOrPm = "PM";
  } else if (hour === 0) {
    displayHour = 12;
    amOrPm = "AM";
  } else {
    amOrPm = "AM";
  }

  hourEl.text(displayHour + amOrPm);

  timeBlockEl.append(hourEl);

  var textAreaEl = $('<textarea>');
  textAreaEl.addClass('col-8 col-md-10 description');
  textAreaEl.attr('rows', '3');

  timeBlockEl.append(textAreaEl);

  var saveButtonEl = $('<button>');
  saveButtonEl.addClass('btn saveBtn col-2 col-md-1');

  var saveIcon = $('<i>');
  saveIcon.addClass('fas fa-save');
  saveIcon.attr('aria-hidden', 'true');

  saveButtonEl.append(saveIcon);
  timeBlockEl.append(saveButtonEl);

  return timeBlockEl;

};

for (let hour = 6; hour <= 22; hour++) {
  var newTimeBlock = createTimeBlock(hour);
  rootEl.append(newTimeBlock);
};

$('.time-block').each(function() {
  var currentBlockHour = parseInt($(this).attr('id').split('-')[1]);

  // Add logic here to decide what color the block should be based on the current time
  if (currentBlockHour < time24Hour) {
      // If the time block is in the past, color it grey
      $(this).addClass('past');
  } else if (currentBlockHour === time24Hour) {
      // If the time block is in the present hour, color it red
      $(this).addClass('present');
  } else {
      // If the time block is in the future, color it green
      $(this).addClass('future');
  }
});

rootEl.on('click', '.saveBtn', function(event) {
  console.log(event.target);
});

rootEl.on('click', '.saveBtn', function(event){
  
})

function saveFunction() {

}

// need to create a save button and event listener where clicking on save button saves text in calendar



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
