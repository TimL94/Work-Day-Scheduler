// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  $('.saveBtn').on('click', function(){

    var saveTextBtn = $(this).parent().attr('id');
    localStorage.setItem(saveTextBtn, $(this).siblings('.description').val());
  })
 
  
  // TODO: Add code to display the current date in the header of the page.
  
  
});


