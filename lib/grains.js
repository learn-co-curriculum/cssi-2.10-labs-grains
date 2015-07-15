function square(num){
  // Your code here
};

function total(numOfSquares){
  // Your code here
};


// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$( "#target" ).submit(function( event ) {
  event.preventDefault();
  var input = parseInt($("#in").val());
  //alert( "Handler for .submit() called. with input " + square(input) );
  $('#square-result').text(square(input));
  $('#total-result').text(total(input));
});
