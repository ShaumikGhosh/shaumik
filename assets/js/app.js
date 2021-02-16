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

    $('#home').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    $('#contact').click(function(){
        if($(window).width() >= 2560) {
            $("html, body").animate({ scrollTop: 4352 }, "slow");
        }

        if($(window).width() >= 1440) {
            $("html, body").animate({ scrollTop: 4424 }, "slow");
        }

        if($(window).width() >= 1024) {
            $("html, body").animate({ scrollTop: 4871 }, "slow");
        }

        if($(window).width() >= 768) {
            $("html, body").animate({ scrollTop: 5650 }, "slow");
        }

        if($(window).width() >= 425) {
            $("html, body").animate({ scrollTop: 8650 }, "slow");
        }

        if($(window).width() >= 300) {
            $("html, body").animate({ scrollTop: 9200 }, "slow");
        }
    })

    console.log($(window).width());
    console.log($(document).height());

})