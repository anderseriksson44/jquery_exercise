function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function() {
    $("#fade>div").click(function() {
        $(this).toggleClass("faded");
    });
    $("#drag").draggable();
    $("#size").resizable();
    $("#drop").droppable({drop: function(){
        $(this).css("background-color", "grey");
        $(this).html("Hokus Pokus, bollen är borta!");
        $("#drag").fadeTo("slow", 0);
        }
    });
    $("#hover").mouseenter(function(){
        $(this).css("background-color", getRandomColor());
        $(this).effect("shake");
    });
//    $("#hover").mouseleave(function(){
//        $(this).css("background-color", getRandomColor());
//    });
    
});
