$(function(){
    _navEvent();

    $("img").on("mousedown", function(e) {
        e.preventDefault()
    })
});


function _navEvent(){
    if($('nav').length == 0){
        return;
    }
    var len = $('nav a.active').text().length;
    var $item = $('nav a.active').parent();
    var offset = $item.offset();
    var uo = $('nav').offset();

    var $bg = $('nav>span.abg');
    var left = offset.left - uo.left;
    $bg.css({
        'width': len+'em',
        'left': left
    });

    $('nav a').hover(function(){
        var len2 = $(this).text().length;
        var $item2 = $(this).parent();
        var offset2 = $item2.offset();
        var left2 = offset2.left - uo.left;

        $bg.css({
            'width': len2+'em',
            'left': left2
        })

    },function(){
        $bg.css({
            'width': len+'em',
            'left': left
        });
    })
}
