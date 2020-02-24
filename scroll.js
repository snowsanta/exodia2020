$(document).ready(function(){
    if(window.pageYOffset >620){
        $('navigation').addClass('hidden')
        $('#navigation').removeClass('hidden')
    }
    window.onscroll = function(){
        if (this.window.pageYOffset >=660){
            $('navigation').fadeOut(500)
            $('#navigation').fadeIn(500)
        }
        else{
            $('navigation').fadeIn(500);
            $('#navigation').fadeOut(500);
        }
    }
})