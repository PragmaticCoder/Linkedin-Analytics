$('.dropdown-trigger').dropdown();


$(".alert").delay(3000).fadeOut(200, function() {
    $(this).alert('close');
});



$(document).ready(function() {

    $('.fixed-action-btn').floatingActionButton();

    $('.sidenav').sidenav();

    $('.counter').counterUp({
        delay: 10,
        time: 400
    });
});


