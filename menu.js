$(document).ready(function () {
    $('.accordion > h1').click(function () {
    if($(this).next().is(':visible') == false){
        $('li').slideUp();
    }
    $(this).next().slideToggle();
    });
});
