/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/
"use strict";

jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/



	/************** FlexSlider Plugin *********************/
	$('.flexslider').flexslider({
		animation : 'fade',
		controlNav : false,
		nextText : '',
		prevText : '',
	});

	$('.flex-caption').addClass('animated bounceInDown');

	$('.flex-direction-nav a').on('click', function() {
        $('.flex-caption').removeClass('animated bounceInDown');
        $('.flex-caption').fadeIn(0).addClass('animated bounceInDown');
    });


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});




/*------------------------------------------------------------------------*/
/*	2.	Site Specific Functions
/*------------------------------------------------------------------------*/


	/************** Go Top *********************/
	$('#go-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });



    /************** Responsive Navigation *********************/
	$('.toggle-menu').click(function(){
        $('.menu').stop(true,true).toggle();
        return false;
    });
    $(".responsive-menu .menu a").click(function(){
        $('.responsive-menu .menu').hide();
    });

});

const zakaz = document.querySelector('.zakaz-et');
const popup = document.querySelector('.popup')

const inputlar = document.querySelectorAll('input')

zakaz.addEventListener('click', () => {
	inputlar.forEach(input => {
		input.value = ''
    })
    popup.classList.add('active')
	setTimeout(() => {
		popup.classList.remove('active')
	}, 5000)
})

const login = document.querySelector('.ulgam')