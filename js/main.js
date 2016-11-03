$(document).ready(function () {
	$('.name').focus(function(){
		$('.fa-check-circle').addClass('fa-check-circle-active');
	});

	$('.sec-name').click(function(){
		$('.sec-name').addClass('sec-name-active');
	});
	
	$('.email').focus(function(){
		$('.fa-envelope-o').addClass('fa-envelope-o-aactive');
	});
	$('input[name="email"]').focus(function(){
		$('.fa-envelope-o').addClass('fa-envelope-o-aactive');
	});
	$('.mob').focus(function(){
		$('.mobile').addClass('mobile-active');
	});
	$('input[type="tel"]').focus(function(){
		$('.mobile').addClass('mobile-active');
	});
	$('.sec-name').click(function(){
		$('.sec-name').addClass('sec-name-active');
	});
	$('.dat').click(function(){
		$('.dat').addClass('dat-active');
	});
	$('.prom').click(function(){
		$('.prom').addClass('prom-active');
	});
	$('select').focus(function(){
		$('.fa-credit-card').addClass('fa-credit-card-active');
	});
	

	$('.name').siblings().click(function(){
		if ($('.fa-credit-card').hasClass('fa-credit-card-active')==true) {}
		$('.fa-check-circle').removeClass('fa-check-circle-active');
	});

	$('.sec-name').siblings().click(function(){
		$('.sec-name').removeClass('sec-name-active');
	});

	$('.email').siblings().click(function(){
		$('.fa-envelope-o').removeClass('fa-envelope-o-aactive');
	});
	$('input[name="email"]').siblings().click(function(){
		$('.fa-envelope-o').removeClass('fa-envelope-o-aactive');
	});


	$('.mob').siblings().click(function(){
		$('.mobile').removeClass('mobile-active');
	});
	$('#phone').siblings().click(function(){
		$('.mobile').removeClass('mobile-active');
	});

	$('.dat').siblings().click(function(){
		$('.dat').removeClass('dat-active');
	});

	$('.prom').siblings().click(function(){
		$('.prom').removeClass('prom-active');
	});

	$('select').siblings().click(function(){
		$('.fa-credit-card').removeClass('fa-credit-card-active');
	});

	


});


$('.that1').click(function(){
		$('.that1').addClass('that-active');
	});

$('.that1').click(function(){
		$('.that2').removeClass('that-active');
		$( '.that3').removeClass('that-active');
	});

$('.that2').click(function(){
		$('.that2').addClass('that-active');
	});

$('.that2').click(function(){
		$('.that3').removeClass('that-active');
		$( '.that1').removeClass('that-active');
	});


$('.that3').click(function(){
		$('.that3').addClass('that-active');
	});

$('.that3').click(function(){
		$('.that2').removeClass('that-active');
		$( '.that1').removeClass('that-active');
	});


$(function(){
    $('#menu').slicknav({
    	prependTo:'.mobile-menu'
    });
});

$(".img-wrap img").click(function() {
  var designCard = $(this).attr("data-designcard");
  $("#design-card").val(designCard);
});

var phoneNum = $('.tel-code').val()+$('.tel-code').val()+$('.tel-num').val();
$('form input[name="custom_tel"]').val(phoneNum);


// Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.maps.embed-container').on('click', onMapClickHandler);




