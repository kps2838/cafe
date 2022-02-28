$(function(){
    $('#toggle').toggle(
        function(){
            $('#gnb > ul').addClass('on')
        },
        function(){
            $('#gnb > ul').removeClass('on')
        }
    )
    });