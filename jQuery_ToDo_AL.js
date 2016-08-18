$(document).ready(function(){
  //waiting to run JS until everything has loaded
  $('#add').on('click', function(e){
    //selecting the button and creating an event listener for on click
    var newEl = $('#NewItem').val();
    // creating a variable for the value entered into the form
    $('#To_Do_List').append('<li>' + newEl);
    // inserting a list tag then inserting the value for the newEl variable
    $('#NewItem').val('');
    // inserting string "" for the form
    $('li').on('click', function(e){
      //creating a new event listener for when the list is clicked
      $(this).wrap('<strike>').css('background-color', 'red');
      //wraping the html code for the li(this) that is clicked in <Strike>
      setTimeout(function(){$(this).remove()}.bind(this),1000);
      //creating a 1 second delay in running this code which will remove the li element, binding 'this' to the 'this' above scope
    });
  });
  $('li').on('click', function(e){
    $(this).wrap('<strike>').css('background-color', 'red');
    setTimeout(function(){$(this).remove()}.bind(this),1000);
  });
});
