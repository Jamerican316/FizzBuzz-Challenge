$(document).ready(function(){
    	for( var i=1; i<=100; i++ ) {

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