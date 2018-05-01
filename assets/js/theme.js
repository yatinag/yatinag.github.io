/* ========================================================================

AVOIR: theme.js
Main Theme JS file

@Author: Andrew ch 
@URL: http://andrewch.eu
 
=========================================================================
 */

$("#secret").click(function() {
    $("body").children().each(function() {
        $(this).html($(this).html().replace(/01010111 01101000 01100001 01110100 00100000 01100100 01101001 01100100 00100000 01110100 01101000 01100101 00100000 01110000 01101111 01110100 01100001 01110100 01101111 00100000 01110011 01100001 01111001 00100000 01110100 01101111 00100000 01110100 01101000 01100101 00100000 01101011 01100101 01110100 01100011 01101000 01110101 01110000 00100000 01100010 01101111 01110100 01110100 01101100 01100101 00111111 00100000 01010111 01100101 01101100 01101100 00101100 00100000 01101110 01101111 01110100 01101000 01101001 01101110 01100111 00100000 01110011 01101001 01101100 01101100 01111001 00100000 01100010 01100101 01100011 01100001 01110101 01110011 01100101 00100000 01110000 01101111 01110100 01100001 01110100 01101111 01100101 01110011 00100000 01100100 01101111 01101110 00100111 01110100 00100000 01110011 01110000 01100101 01100001 01101011 00101110/g,"What did the potato say to the ketchup bottle? Well, nothing silly because potatoes don't speak."));
        $(this).html($(this).html().replace(/O Lord Yatin! Please decipher this stuff!/g,"Alright young padawan, there you go!"));
    });
});

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
	var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
    function Input(input, placeholder) {
        _classCallCheck(this, Input);

        this.isFocused = false;
        this.size = 0;
        this.animation = "jello";
        $(input).addClass("input");
        this.$element = $(document.createElement("div"));
        this.$element.addClass("textZone");
        this.$element.attr("tabindex", 0);
        $(input).append(this.$element);
        this.cursor = new Cursor(this);
        this.setEvents();
        Keyboard.readCharacters(this);
        Keyboard.readSpecialCharacters(this);
        this.placeholder = new Placeholder(placeholder, this);
    }

    _createClass(Input, [{
        key: "setEvents",
        value: function setEvents() {
            var input = this;

            this.$element.on("click", function (event) {
                input.focus();
                event.stopPropagation();
            });

            $(document).on("click", function (event) {
                input.unfocus();
            });
        }
    }, {
        key: "focus",
        value: function focus() {
            if (this.size == 0) {
                this.$element.prepend(this.cursor.$element);
            } else {
                this.cursor.$element.insertAfter(this.$element.children().last());
            }
            this.cursor.show();
            this.isFocused = true;
        }
    }, {
        key: "unfocus",
        value: function unfocus() {
            if (this.size == 0) {
                this.placeholder.show();
            }
            this.cursor.hide();
            this.isFocused = false;
        }
    }, {
        key: "write",
        value: function write(character) {
            this.size++;
            this.placeholder.hide();
            character.setEvents(this);
            character.$element.insertAfter(this.cursor.$element);
            character.animate(this.animation);
            this.cursor.move("right");
        }
    }, {
        key: "erase",
        value: function erase() {
            var last = this.cursor.$element.prev();
            if (last.length && this.size > 0) {
                this.size--;
                this.cursor.move("left");
                last.remove();
                if (this.size == 0) {
                    this.placeholder.show();
                }
            }
        }
    }, {
        key: "suppress",
        value: function suppress() {
            var next = this.cursor.$element.next();
            if (next.length && this.size > 0) {
                this.size--;
                next.remove();
                if (this.size == 0) {
                    this.placeholder.show();
                }
            }
        }
    }]);

    return Input;
}();

var Placeholder = function () {
    function Placeholder(placeholder, input) {
        _classCallCheck(this, Placeholder);

        this.input = input;
        this.$element = $(document.createElement("div"));
        this.$element.text(placeholder);
        this.$element.addClass("placeholder");
        this.show();
    }

    _createClass(Placeholder, [{
        key: "show",
        value: function show() {
            this.input.$element.append(this.$element);
        }
    }, {
        key: "hide",
        value: function hide() {
            this.$element.remove();
        }
    }]);

    return Placeholder;
}();

var Keyboard = (_temp = _class = function () {
    function Keyboard() {
        _classCallCheck(this, Keyboard);
    }

    _createClass(Keyboard, null, [{
        key: "readCharacters",
        value: function readCharacters(input) {
            input.$element.on("keypress", function (event) {
                event.preventDefault();
                input.write(new Character(String.fromCharCode(event.which)));
            });
        }
    }, {
        key: "readSpecialCharacters",
        value: function readSpecialCharacters(input) {
            input.$element.on("keydown", function (event) {
                switch (event.keyCode) {
                    case Keyboard.backspace:
                        event.preventDefault();
                        input.erase();
                        break;
                    case Keyboard.leftArrow:
                        input.cursor.move("left");
                        break;
                    case Keyboard.rightArrow:
                        input.cursor.move("right");
                        break;
                    case Keyboard.suppress:
                        input.suppress();
                        break;
                    case Keyboard.top:
                        input.cursor.goTo("top");
                        break;
                    case Keyboard.end:
                        input.cursor.goTo("end");
                        break;
                    default:
                        break;
                }
            });
        }
    }]);

    return Keyboard;
}(), _class.space = 32, _class.backspace = 8, _class.leftArrow = 37, _class.rightArrow = 39, _class.suppress = 46, _class.top = 36, _class.end = 35, _temp);

var Cursor = function () {
    function Cursor(input) {
        _classCallCheck(this, Cursor);

        this.$element = $(document.createElement("div"));
        this.$element.addClass("cursor");
        this.$element.addClass("hidden");
        input.$element.prepend(this.$element);
    }

    _createClass(Cursor, [{
        key: "show",
        value: function show() {
            this.$element.removeClass("hidden");
        }
    }, {
        key: "hide",
        value: function hide() {
            this.$element.addClass("hidden");
        }
    }, {
        key: "move",
        value: function move(direction) {
            var offSet = this.$element.get(0).offsetLeft;
            var textZone = this.$element.parent();

            if (direction == "right") {
                var next = this.$element.next();
                this.$element.insertAfter(next);
                if (offSet > textZone.width() * 0.99) {
                    var scroll = textZone.scrollLeft();
                    textZone.animate({ scrollLeft: scroll + '100' }, 1000);
                }
            } else if (direction == "left") {
                var prev = this.$element.prev();
                this.$element.insertBefore(prev);
            }
        }
    }, {
        key: "goTo",
        value: function goTo(point) {
            if (point == "top") {
                this.$element.parent().prepend(this.$element);
            } else if (point == "end") {
                this.$element.parent().append(this.$element);
            }
        }
    }]);

    return Cursor;
}();

var Character = function () {
    function Character(character) {
        _classCallCheck(this, Character);

        this.$element = $(document.createElement("div"));
        if (character != " ") {
            this.$element.addClass("character");
            this.$element.text(character);
        } else {
            this.$element.addClass("space");
        }
    }

    _createClass(Character, [{
        key: "setEvents",
        value: function setEvents(input) {
            var character = this;
            this.$element.on("click", function (event) {
                input.cursor.$element.insertBefore(character.$element);
                if (!input.isFocused) {
                    input.cursor.show();
                }
                event.stopPropagation();
            });
        }
    }, {
        key: "animate",
        value: function animate(animation) {
            this.$element.css("animation", animation + " 500ms, colorTransition 500ms");
        }
    }]);

    return Character;
  }();

  var input = new Input("#myInput", "Type Here!");
	
});
