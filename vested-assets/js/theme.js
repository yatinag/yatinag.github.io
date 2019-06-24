/* ========================================================================

AVOIR: theme.js
Main Theme JS file

@Author: Andrew ch 
@URL: http://andrewch.eu
 
=========================================================================
 */
    var content_quote;
    randomNumber = Math.floor(Math.random() * 13)+1;
    if (randomNumber == 1) {
    content_quote='"A fiery eruption of light and sound was felt, which sprayed dusty debris into the air and annihilated everything within its radius."';
    } else if (randomNumber == 2) {
    content_quote='"Alex’s strategy comprised pleading to, or rather extorting God to appear and carefully providing him with an explanation for his acts if he did."';
    } else if(randomNumber == 3) {
    content_quote='"While the books would suggest red skies accompanied by a band of overly clichéd thunder, the day still seemed pretty unordinary, with just slightly dusty winds suggesting corruption, to all except the sinner."';
    } else if (randomNumber == 4) {
    content_quote='"These different approaches even lead him to question if love was highly subjective. That would certainly explain how it has no specific, fixed definition."';
    } else if(randomNumber == 5) {
    content_quote='"After all he had already gone to great extents to reach the purpose he had always wanted, scarce reason was not going to pose as a barrier towards his quest for the probable eternal knowledge."';
    } else if(randomNumber == 6) {
    content_quote='"Questions of doubt intertwined with fear started to blend in. Could it be true that finding God is impossible, he thought."';
    } else if (randomNumber == 7) {
    content_quote='"Yet, for a true devotee all such facts were frivolous, all that really mattered was the purpose and achieving it."';
    } else if(randomNumber == 8) {
    content_quote='"Walking around miles at a stretch, possible signs of fatigue were possibly overshadowed by his faith in the path."';
    } else if(randomNumber == 9) {
    content_quote='"He wondered that what if instead of rewarding him for his devotion with the answers he was seeking, God would choose to punish him for his sins."';
    } else if(randomNumber == 10) {
    content_quote='"For long have we humans faced the question of the purpose of our existence. The availability of no apparent concrete answer has lead us all to live lives with scanty reason to justify any of the actions that we undertake."';
    } else if(randomNumber == 11) {
    content_quote='"It was at this moment that Alex decided to accept his fate, he would not fight it or question it, he told himself that he would be satisfied with the outcome of this action."';
    } else if(randomNumber == 12) {
    content_quote='" But, the fact of the hour is that the dilemma of not knowing did now not trouble him at all. For he now knew all that there was to be known, he had found purpose, he had met God."';
    } else{
    content_quote='"Hadn’t he done all there was to be done? Considering it as his last hope to find God, Alex leaped off the cliff into the violent tides."';
    }  
    var divq = document.getElementById('amazing-quote');
    divq.innerHTML = divq.innerHTML + content_quote;


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
