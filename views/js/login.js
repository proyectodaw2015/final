/**
 * Created by nico on 10/06/15.
 */

$('.switch').click(function () {
    limpiarRegistro();
    limpiarLogin();
    $(this).children('i').toggleClass('fa-pencil');
    $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$('.forgotClick').click(function(){
    limpiarForgot();
    limpiarLogin();
    $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('.forgot').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function limpiarRegistro() {
    $('#registerForm')[0].reset();
}

function limpiarLogin() {
    $('#loginForm')[0].reset();
}

function limpiarForgot() {
    $('#forgotForm')[0].reset();
}

