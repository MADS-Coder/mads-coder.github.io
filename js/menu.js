/**Criando os icons para os responsivos */
$(document).ready(function () {
    $('#label-toggle').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    });

});


