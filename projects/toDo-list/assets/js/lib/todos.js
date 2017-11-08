$("ul").on("click", "li", function() {
    //console.log("li clicado");
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(350, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash aria-hidden='true'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-circle").click(function() {
    $("input[type='text']").fadeToggle();
});