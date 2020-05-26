$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    //slider
    $(".slider").slider({full_width : true});
    //paralax
    $('.parallax').parallax();
    $(".myreviews").carousel({
        numVisibvle: 7, //number of images
        shift: 55,
        padding: 55
    });
})

function  toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}