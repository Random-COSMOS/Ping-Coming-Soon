$(function(){
    $(".f").on("mouseover",function(){
        $(this).attr("src", "../images/facebook.svg");
    });
    $(".f").on("mouseout",function(){
        $(this).attr("src", "../images/facebook-before.svg");
    })
});

$(function(){
    $(".i").on("mouseover",function(){
        $(this).attr("src", "../images/instagram.svg");
    });
    $(".i").on("mouseout",function(){
        $(this).attr("src", "../images/instagram-before.svg");
    })
});

$(function(){
    $(".t").on("mouseover",function(){
        $(this).attr("src", "../images/twitter.svg");
    });
    $(".t").on("mouseout",function(){
        $(this).attr("src", "../images/twitter-before.svg");
    })
});