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
            $("html, body").animate({ scrollTop: 3812 }, "slow");
        }

        if($(window).width() >= 1440 && $(window).width() <= 2559) {
            $("html, body").animate({ scrollTop: 4202 }, "slow");
        }

        if($(window).width() >= 1024 && $(window).width() <= 1439) {
            $("html, body").animate({ scrollTop: 4703 }, "slow");
        }

        if($(window).width() >= 768 && $(window).width() <= 1023) {
            $("html, body").animate({ scrollTop: 5486 }, "slow");
        }

        if($(window).width() >= 425 && $(window).width() <= 767) {
            $("html, body").animate({ scrollTop: 8540 }, "slow");
        }

        if($(window).width() >= 300 && $(window).width() <= 424) {
            $("html, body").animate({ scrollTop: 9005 }, "slow");
        }


    })


    $('#blog').click(function(){
        
        if($(window).width() >= 2560) {
            $("html, body").animate({ scrollTop: 2391 }, "slow");
        }

        if($(window).width() >= 1440 && $(window).width() <= 2559) {
            $("html, body").animate({ scrollTop: 2393 }, "slow");
        }

        if($(window).width() >= 1024 && $(window).width() <= 1439) {
            $("html, body").animate({ scrollTop: 2500 }, "slow");
        }

        if($(window).width() >= 768 && $(window).width() <= 1023) {
            $("html, body").animate({ scrollTop: 3207 }, "slow");
        }

        if($(window).width() >= 425 && $(window).width() <= 767) {
            $("html, body").animate({ scrollTop: 5353 }, "slow");
        }

        if($(window).width() >= 300 && $(window).width() <= 424) {
            $("html, body").animate({ scrollTop: 5353 }, "slow");
        }

    })


    $('#service').click(function(){
        
        if($(window).width() >= 2560) {
            $("html, body").animate({ scrollTop: 596 }, "slow");
        }

        if($(window).width() >= 1440 && $(window).width() <= 2559) {
            $("html, body").animate({ scrollTop: 605 }, "slow");
        }

        if($(window).width() >= 1024 && $(window).width() <= 1439) {
            $("html, body").animate({ scrollTop: 480 }, "slow");
        }

        if($(window).width() >= 768 && $(window).width() <= 1023) {
            $("html, body").animate({ scrollTop: 480 }, "slow");
        }

        if($(window).width() >= 425 && $(window).width() <= 767) {
            $("html, body").animate({ scrollTop: 750 }, "slow");
        }

        if($(window).width() >= 300 && $(window).width() <= 424) {
            $("html, body").animate({ scrollTop: 750 }, "slow");
        }

    })


    $('#plans').click(function(){
        
        if($(window).width() >= 2560) {
            $("html, body").animate({ scrollTop: 1127 }, "slow");
        }

        if($(window).width() >= 1440 && $(window).width() <= 2559) {
            $("html, body").animate({ scrollTop: 1128 }, "slow");
        }

        if($(window).width() >= 1024 && $(window).width() <= 1439) {
            $("html, body").animate({ scrollTop: 991 }, "slow");
        }

        if($(window).width() >= 768 && $(window).width() <= 1023) {
            $("html, body").animate({ scrollTop: 994 }, "slow");
        }

        if($(window).width() >= 425 && $(window).width() <= 767) {
            $("html, body").animate({ scrollTop: 1689 }, "slow");
        }

        if($(window).width() >= 300 && $(window).width() <= 424) {
            $("html, body").animate({ scrollTop: 1689 }, "slow");
        }

    })


    console.log($(window).width());
    // console.log($(document).height());
    setInterval(function(){
        console.log(window.scrollY);
    }, 5000)

})