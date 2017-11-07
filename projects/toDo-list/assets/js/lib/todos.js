$("li").on("click", function() {
    //console.log("li clicado");
    $(this).toggleClass("completed");
});

$("span").on("click", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});