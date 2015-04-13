$(document).ready(function() {
	
	//custom scripting goes here

	var $windowHeight = $(window).height();
	var $windowWidth = $(window).width();


	var photos = ["images/dent_hero.jpg", "images/dent_jail.jpg", "images/dent_jail2.jpg", "images/dent_zak.jpg", "images/dent_books.jpg"];
	var cutlines= [
				"This is cutline 1",
				"This is cutline 2",
				"This is cutline 3",
				"This is cutline 4",
				"This is cutline 5",
				];

	$.each(photos, function(i,v) {
		var content = "<div class='photoBlock' id='photoBlock" + i + "'>";
		content += "<p class='cutline'>" + cutlines[i] + "</p>";
		content += "</div>";
		$('#photoContainer').append(content);
	})

	$.each($('.photoBlock'), function(i,v) {
		$(this).css('background-image', "url('" + photos[i] + "')");
		$(this).css('z-index', 100 - i);
	});


	function horizontalDisplay() {

		$('html').removeClass('vertical');

		$('#photoContainer').css('height', $windowHeight -144);
		$('.photoBlock').css('height', $windowHeight - 144);

		var counter = 0;

		function hideButtons() {
			if (counter === 0) {
				$('.previous').addClass('noShow');
			} else if (counter === photos.length - 1) {
				$('.next').addClass('noShow');
			} else {
				$('.previous').removeClass('noShow');
				$('.next').removeClass('noShow');
			}
		}

		hideButtons();

		$('.next').click(function() {
			if (counter < photos.length - 1 ) {
				$('#photoBlock' + counter).fadeOut(500);
				counter += 1;
				hideButtons();
			}
		})

		$('.previous').click(function() {
			if (counter > 0) {
				counter -= 1
				$('#photoBlock' + counter).fadeIn(500);
				hideButtons();
			}
		});

		$('.commenter').click(function() {
			$('.shareComments').addClass('viewable');
		})

		$('.hider').click(function() {
			$('.shareComments').removeClass('viewable');
		})
	}

	function verticalDisplay() {
		$('.photoBlock').fadeIn(500)
		$('html').addClass('vertical');
		$('.photoBlock').css('height', $windowWidth * .67);
	}

	function determineDisplay() {
		if ($windowWidth > $windowHeight) {
			horizontalDisplay();
		} else {
			verticalDisplay();
		}
	}

	determineDisplay();


	$(window).resize(function() {
		$windowHeight = $(window).height();
		$windowWidth = $(window).width();
		
		setTimeout(function() {
			determineDisplay();	
		}, 500);
		
	})
});


window.onload = function() {
	$('.loader').fadeOut(1000);
}

// redo arrows
