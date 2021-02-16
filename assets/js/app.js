$(document).ready(function(){


    $('.fa-align-justify').click(function(){

        var status = $('.fa-align-justify').attr('switch');

        if (status === 'off'){
            $('.fa-align-justify').attr('switch', 'on');
            $('#nav-menu').removeClass('navbar-expand-md');
            $('#nav-menu').addClass(' navbar-expand-md-click');
            $('.header-area').css('height', '750px');
        }else{
            $('.fa-align-justify').attr('switch', 'off');
            $('#nav-menu').removeClass('navbar-expand-md-click');
            $('#nav-menu').addClass(' navbar-expand-md');
            $('.header-area').css('height', '560px');
        }
    });



    window.goUp = function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}


    setInterval(function(){
		if (this.scrollY > 200) {
			$('#scroller-button').fadeIn();
		}else{
			$('#scroller-button').fadeOut();
		}
	});

})