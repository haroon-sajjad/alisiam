$(document).ready(function () {

    $("#btn-logo").click(function () {
//        $('html, body').animate({
//            scrollTop: $("#home").offset().top
//        }, 1000);
//        return false;
        document.getElementById('home').scrollIntoView({
            behavior: 'smooth'
        });
    });
    $("#btn-prtflo").click(function () {
        document.getElementById('portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    });
    $("#btn-about").click(function () {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });

//    $('.nav-btn-contact').click(function () {
//        var mailto_link = 'mailto:contact@alisiam.com';// + email + '?subject=' + subject + '&body=' + body_message;
//
//        win = window.open(mailto_link, 'emailWindow');
//        if (win && win.open && !win.closed)
//            win.close();
//
//    });

    //statrtTyping(); // typing animation

});

var ci = 0;
var speed = 250;
var delay = 1000;

var curIndex = 0;
var arrText = [
    'Digital Modern Design',
    'Digital Modern Design'
];

function statrtTyping()
{
    if(curIndex < arrText.length)
    {
        var txt = arrText[curIndex];
        if (ci < txt.length) 
        {
            if(ci == 0) {
                document.getElementById("typewriter").innerHTML = "";
            }
            document.getElementById("typewriter").innerHTML += txt.charAt(ci);
//            console.log(document.getElementById("typewriter").innerHTML);
            ci++;
            setTimeout(statrtTyping, speed);
        }
        else 
        {
            curIndex++;
            ci = 0;
            if(curIndex == arrText.length) 
            {
                curIndex = 0;
            }
//            console.log('next: ' + curIndex);
            setTimeout(statrtTyping, delay);
        }
    }
    else {
        console.log('nothing to type');
    }
}

//$(window).resize(function() {
//  // This will execute whenever the window is resized
//  console.log($(window).width() + " X " + $(window).height()); 
//});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if($(window).width() < 768)
    {
        if (y >= ($("#about").offset().top + $("#about").height() - $('.skills-section').height() - 50)) {
            //slideme();
            $('.skills-section').addClass('slide-show');
        } else {
            //slideme();
            $('.skills-section').removeClass('slide-show');
        }
    }
    else {
        if (y >= ($("#about").offset().top - 5)) {
            //slideme();
            $('.skills-section').addClass('slide-show');
        } else {
            //slideme();
            $('.skills-section').removeClass('slide-show');
        }
    }
    
});

function slideme() {
    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = {direction: 'right'};

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('.skills-section').toggle(effect, options, duration);
}