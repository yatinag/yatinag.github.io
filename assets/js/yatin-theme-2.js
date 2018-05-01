/* ========================================================================

AVOIR: theme.js
Main Theme JS file

@Author: Andrew ch 
@URL: http://andrewch.eu
 
=========================================================================
 */

    var content_quote_nika;
    var randomNumber2 = Math.floor(Math.random() * 13)+1;
    if (randomNumber2 == 1) {
    content_quote_nika='PROXIMITY';
    } else if (randomNumber2 == 2) {
    content_quote_nika='AFFECTION';
    } else if (randomNumber2 == 3) {
    content_quote_nika='ETHEREAL';
    } else if (randomNumber2 == 4) {
    content_quote_nika='LIMERENCE';
    } else if (randomNumber2 == 5) {
    content_quote_nika='ELOQUENCE';
    } else if (randomNumber2 == 6) {
    content_quote_nika='BREVITY';
    } else if (randomNumber2 == 7) {
    content_quote_nika='MELLIFLUOUS';
    } else if (randomNumber2 == 8) {
    content_quote_nika='INEFFABLE';
    } else if (randomNumber2 == 9) {
    content_quote_nika='SERENDIPITY';
    } else if (randomNumber2 == 10) {
    content_quote_nika='IRIDESCENT';
    } else if (randomNumber2 == 11) {
    content_quote_nika='SYZGY';
    } else if (randomNumber2 == 12) {
    content_quote_nika='PHOSPHENES';
    } else{
    content_quote_nika='NEFARIOUS';
    }  
    var divq = document.getElementById('amazing-quote-nika');
    divq.innerHTML = divq.innerHTML + content_quote_nika;

'use strict';


jQuery(document).ready(function( $ ) {

	// Loader
	//===================

	$(window).load(function(){
		setTimeout(function(){
			$('.loading').addClass("hidden");
			$('.loader-logo').addClass("slideOutUp");
			$('.loader').addClass("slideOutUp");
			$('body').addClass("body-animated");
		}, 900);
	});

	// Header Opacity
	//===================

	$(window).on('scroll', function() {
		var element = $('.header-introduction-small, .header-introduction');
		var ft = $(this).scrollTop();
		element.css({ 'opacity' : (1 - ft/400) });
	});

    
	// Home Masonry
	//===================

	masonry: {
		selector: "ul.masonry-wrap"
		var base = this, container = $(base.selector);
		container.each(function() {
			var item = $(this);
			win.load(function() {
				item.isotope({
					layoutMode: "packery",
					itemSelector: ".masonry-item",
					transitionDuration: "0.5s",
					columnWidth: 25,
					resizesContainer: true,
					masonry: {
						columnWidth: ".masonry-item"
					}
				});
			});
		});
	}

	// Countdown
	//===================

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// Portfolio Overlay effect
	//===================

	$('ul.masonry-wrap li .masonry-item , ul.grid-wrap li .grid-item , ul.fullscreen-wrap li .grid-item , .parallax-item').hover(
		function() {
			TweenMax.to($(this).find('img'), .01, {opacity: '.01', ease: Quart.easeOut});
			TweenMax.to($(this).find('h2'), .2, {opacity: '1', y: '-50', ease: Quart.easeOut});
			TweenMax.to($(this).find('p'), .2, {opacity: '1', y: '-30', delay: .25, ease: Quart.easeOut});
	},
		function() {
			TweenMax.to($(this).find('img'), .1, {opacity: '1', delay: .10, ease: Quart.easeOut});
			TweenMax.to($(this).find('h2'), .2, {opacity: '0', y: '0', delay: .10, ease: Quart.easeOut});
			TweenMax.to($(this).find('p'), .2, {opacity: '0', y: '0', ease: Quart.easeOut});
	});

	// Mobile Menu
	//===================

	$('#navicon').on('click', function () {
		$(".mobile-navigation").toggleClass("visible");
		$(".mobile-navigation ul li").toggleClass("list-animation");
		$(".mobile-navigation").toggleClass("bounce");
	});

	// Hamburger Icon Animation

	(function () {
		var active;
		active = true;
		$('#navicon').on('click', function () {
			if (active === true) {
				$('#navicon').removeClass('inactive').addClass('active');
				active = false;
			} else {
				$('#navicon').removeClass('active').addClass('inactive');
				active = true;
			}
		});
	}.call(this));

	// Dropdown
	$('.mobile-dropdown').simpleexpand();

	// On Scroll Animations
	//===================

	function onScrollInit( items, trigger ) {
		items.each( function() {
			var osElement = $(this),
				osAnimationClass = osElement.attr('data-os-animation'),
				osAnimationDelay = osElement.attr('data-os-animation-delay');
		 
			osElement.css({
				'-webkit-animation-delay':  osAnimationDelay,
				'-moz-animation-delay':     osAnimationDelay,
				'animation-delay':          osAnimationDelay
			});
		 
			var osTrigger = ( trigger ) ? trigger : osElement;
		 
			osTrigger.waypoint(function() {
				osElement.addClass('animated').addClass(osAnimationClass);
			},{
				triggerOnce: true,
				offset: '90%'
			});
		});
	}

	setTimeout(function() {
		onScrollInit( $('.os-animation') );
		onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	}, 600);
	
	// Back to top button
	//===================

	$('.go-top').on('click', function (event) {
		event.preventDefault();
		{$('html, body').velocity('scroll',{duration: 1000, offset:0});}
	});

});
