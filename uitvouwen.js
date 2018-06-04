/**
 * Created by cas on 26-4-2018.
 */

$("#opdracht-1-uitgevouwen").hide();
$(document).ready(function(){
    $("#opdracht-1").click(function(){
        setTimeout( function () {
            $("#opdracht-1-uitgevouwen").toggle("blind", 800);
        } , 1000);
        $("#opdracht-2-uitgevouwen").hide("blind", 800);
        $("#opdracht-3-uitgevouwen").hide("blind", 800);
        $("#opdracht-4-uitgevouwen").hide("blind", 800);
        $("#opdracht-5-uitgevouwen").hide("blind", 800);
    });
});
$("#opdracht-2-uitgevouwen").hide();
$(document).ready(function(){
    $("#opdracht-2").click(function(){
        setTimeout( function () {
            $("#opdracht-2-uitgevouwen").toggle("blind", 800);
        } , 1000);
        $("#opdracht-1-uitgevouwen").hide("blind", 800);
        $("#opdracht-3-uitgevouwen").hide("blind", 800);
        $("#opdracht-4-uitgevouwen").hide("blind", 800);
        $("#opdracht-5-uitgevouwen").hide("blind", 800);
    });
});
//$("#opdracht-3-uitgevouwen").hide();
$(document).ready(function(){
    $("#opdracht-3").click(function(){
        setTimeout( function () {
            $("#opdracht-3-uitgevouwen").toggle("blind", 800);
        } , 1000);
        $("#opdracht-2-uitgevouwen").hide("blind", 800);
        $("#opdracht-1-uitgevouwen").hide("blind", 800);
        $("#opdracht-4-uitgevouwen").hide("blind", 800);
        $("#opdracht-5-uitgevouwen").hide("blind", 800);
    });
});
$("#opdracht-4-uitgevouwen").hide();
$(document).ready(function(){
    $("#opdracht-4").click(function(){
        setTimeout( function () {
            $("#opdracht-4-uitgevouwen").toggle("blind", 800);
        } , 1000);
        $("#opdracht-2-uitgevouwen").hide("blind", 800);
        $("#opdracht-3-uitgevouwen").hide("blind", 800);
        $("#opdracht-1-uitgevouwen").hide("blind", 800);
        $("#opdracht-5-uitgevouwen").hide("blind", 800);
    });
});
$("#opdracht-5-uitgevouwen").hide();
$(document).ready(function(){
    $("#opdracht-5").click(function(){
        setTimeout( function () {
            $("#opdracht-5-uitgevouwen").toggle("blind", 800);
        } , 1000);
            $("#opdracht-2-uitgevouwen").hide("blind", 800);
            $("#opdracht-3-uitgevouwen").hide("blind", 800);
            $("#opdracht-4-uitgevouwen").hide("blind", 800);
            $("#opdracht-1-uitgevouwen").hide("blind", 800);
    });
});
