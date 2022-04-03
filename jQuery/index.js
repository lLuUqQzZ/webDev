$("h1").click(function () { 
    $("h1").css("color","green");
});

$("button").click(function (e) { 
    $("h1").slideToggle();
});

$("h1").on("mouseover", function () {
    $("h1").css("color","orange");
});
