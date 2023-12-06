$(document).ready(function() {
   
    $('#Email, #Senha').on('input', function() {
        var inputLength = $(this).val().length;
        
        if (inputLength >= 5) {
            $(this).removeClass('invalido').addClass('valido');
        } else {
            $(this).removeClass('valido').addClass('invalido');
        }
    });
});

$(document).ready(function() {
    $('button.confirmar').hover(
        function() {
            $(this).addClass('moveUp');
        },
        function() {
            $(this).removeClass('moveUp');
        }
    );
});

$(document).ready(function() {
    $('h1').hover(
        function() {
            $(this).addClass('moveUp');
        },
        function() {
            $(this).removeClass('moveUp');
        }
    );
});