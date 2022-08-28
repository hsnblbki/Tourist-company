import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'jquery-validation/dist/jquery.validate.min.js';
import 'jquery-validation/dist/localization/messages_ar.min.js';
import '../sass/style.scss';


$(window).scroll(function(){
    if($(this).scrollTop() >= 100){
        $("#navbar").addClass("noTransparent");
    }
    else{
        $("#navbar").removeClass("noTransparent");
    }
});

var date=new Date();
var year=date.getFullYear();
document.getElementById("date").innerHTML = year;

$(document).ready(function(){
    $("form").validate();
});
