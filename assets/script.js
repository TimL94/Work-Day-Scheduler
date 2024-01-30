$(function () {

  updateTimeColors();
  loadSavedText();

  // uses dayjs to call the current date and the format option to format the date into the desired orientation
  $('#currentDay').text(dayjs().format('dddd, MMMM DD, YYYY'));

  //creates an event listener which looks for any click of the saveBtn and set the text in the textarea to local storage using the current containers Id as its key
  $('.saveBtn').on('click', function(){

    var saveTextBtn = $(this).parent().attr('id');
    localStorage.setItem(saveTextBtn, $(this).siblings('.description').val());

  })
 
});


function updateTimeColors() {

  var currentTime = dayjs().hour();

  $('.time-block').each(function() {

    var idTime = parseInt($(this).attr('id').split('-')[1]);

    if (idTime > currentTime){

      $(this).removeClass('past present').addClass('future');

    } else if (idTime === currentTime){

      $(this).removeClass('future past').addClass('present');

    }else if (idTime < currentTime){

      $(this).removeClass('present future').addClass('past');

    }
  })

}



function loadSavedText(){
  $('.time-block').each(function(){

    $(this).children('textarea').val(localStorage.getItem($(this).attr('id')))

  })
}





