var id = 1;
var current = '';
$( function() {
    $( "#note" ).draggable();
  } );
$('#NewNote').click(function(){
    var newNote =         $('<div class="note btn-grad1" id="' + id + '">'
                          +        '<div><button type="button" onclick="return this.parentNode.parentNode.remove();" class="remove"><i class="fa fa-trash" aria-hidden="true"></i></button></div>'
                          +        '<div>'
                          +            '<textarea class="title" placeholder="Title" style="height: 64px;"></textarea>'
                          +            '<textarea class="content" placeholder="Enter notes here..." style="height: 200px;"></textarea>'
                          +        '</div>'
                          +'</div>').resizable().draggable({stack:'.sticky'});
    current = id;
    id++;
    $('#board').append(newNote);
    console.log(current);
});
$('#NewNote1').click(function(){
    var newNote =         $('<div class="note btn-grad1" id="' + id + '">'
                          +        '<div><button type="button" onclick="return this.parentNode.parentNode.remove();" class="remove"><i class="fa fa-trash" aria-hidden="true"></i></button></div>'
                          +        '<div>'
                          +            '<textarea class="title" placeholder="Title" style="height: 64px;"></textarea>'
                          +            '<textarea class="content" placeholder="Enter notes here..." style="height: 200px;"></textarea>'
                          +        '</div>'
                          +'</div>').resizable().draggable({stack:'.sticky'});
    current = id;
    id++;
    $('#board').append(newNote);
    console.log(current);
});
$('#board').on('click', '.content', function(){
    current = $(this).parent().parent().attr('id');
    console.log(current);
});
$('#board').on('click', '.title', function(){
    current = $(this).parent().parent().attr('id');
    console.log(current);
});
$('.box').click(function(){
    if(current != '')
    {
        var color = $(this).attr('class').split(' ')[0];
        $('#' + current).removeClass();
        $('#' + current).addClass('note ' + color);
        console.log(color);
    }
});
