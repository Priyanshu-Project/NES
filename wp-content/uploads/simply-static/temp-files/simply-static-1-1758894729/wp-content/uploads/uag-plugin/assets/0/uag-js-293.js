document.addEventListener("DOMContentLoaded", function(){ window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper( ".uagb-block-ce688f5c .uagb-swiper",
		{"autoplay":{"delay":3000,"disableOnInteraction":false,"pauseOnMouseEnter":true,"stopOnLastSlide":false},"loop":true,"speed":800,"effect":"slide","direction":"horizontal","flipEffect":{"slideShadows":false},"fadeEffect":{"crossFade":true},"pagination":{"el":".uagb-block-ce688f5c .swiper-pagination","clickable":true,"hideOnClick":false},"navigation":{"nextEl":".uagb-block-ce688f5c .swiper-button-next","prevEl":".uagb-block-ce688f5c .swiper-button-prev"}}	);
});

window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-b2e393f2' );
});
				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-d2045768' );
					if ( ! blockScope ) {
						return;
					}

					const anchorElement = blockScope.querySelector('a');
					if (!anchorElement) {
						return;
					} 

					 
					blockScope.addEventListener('keydown', (event) => {
						if ( 13 === event.keyCode || 32 === event.keyCode ) {
							event.preventDefault();
							 
							anchorElement.click();	
						}
					} );
				} );
			jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-7151abf3' ).length > 0 ){
	jQuery( '.uagb-block-7151abf3' ).find( ".is-carousel" ).slick( {"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":"2000","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"500","arrows":false,"dots":true,"rtl":false,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: var(--ast-global-color-0);border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='var(--ast-global-color-0)'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: var(--ast-global-color-0);border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='var(--ast-global-color-0)' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery('.uagb-block-7151abf3');
	var enableEqualHeight = ( '' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper( ".uagb-block-55ea31ad .uagb-swiper",
		{"autoplay":{"delay":3000,"disableOnInteraction":false,"pauseOnMouseEnter":false,"stopOnLastSlide":false},"loop":true,"speed":800,"effect":"slide","direction":"horizontal","flipEffect":{"slideShadows":false},"fadeEffect":{"crossFade":true},"pagination":{"el":".uagb-block-55ea31ad .swiper-pagination","clickable":true,"hideOnClick":false},"navigation":{"nextEl":".uagb-block-55ea31ad .swiper-button-next","prevEl":".uagb-block-55ea31ad .swiper-button-prev"}}	);
});

 });