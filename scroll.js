$(document).ready(function(){
    if(window.pageYOffset >620){
        $('navigation').addClass('hidden')
        $('#navigation').removeClass('hidden')
    }
    window.onscroll = function(){
        if (this.window.pageYOffset >=640){
            $('navigation').addClass('hidden')
            $('#navigation').removeClass('hidden')
        }
        else{
            $('navigation').removeClass('hidden');
            $('#navigation').addClass('hidden')
        }
    }
})