$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
    saveState();
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(350, function() {
        $(this).remove();
        saveState();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash aria-hidden='true'></i></span> " + todoText + "</li>");
        saveState();
    }
});

// load whatever is in the local storage
if (localStorage.getItem('todos')) {
    $('#todos').html(localStorage.getItem('todos'));
}

/*
// deletes all contents of the local storage
$('#clear').click(function() {
    window.localStorage.clear();
    location.reload();
    return false;
});
*/

$(".fa-plus-circle").click(function() {
    $("input[type='text']").fadeToggle();
});

//Saves current html from the ul with id="todos"
function saveState() {
    var todos = $("#todos").html();
    localStorage.setItem("todos", todos);
    return false;
}