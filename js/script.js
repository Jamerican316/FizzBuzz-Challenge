$(document).ready(function(){
      var userNumber = prompt("Please pick a number...");
      +userNumber;
    for( var i=1; i<=userNumber; i++ ) {
            if( (i%3) === 0 && (i%5) === 0 ) {
                    $('body').append('FizzBuzz');
            }else if( (i%3) === 0 ) {
                    $('body').append('<div>Fizz</div>');
            }else if( (i%5) === 0 ) {
                    $('body').append('<div>Buzz</div>');
            }else{
                    $('body').append('<div>'+i+'</div>');
            }
    }
});