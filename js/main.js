// $(function(){
// 	$('.gallery__inner').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
			
// 		}
// 	});


// });

$('[data-fancybox="images"]').fancybox({
  afterLoad : function(instance, current) {
    var pixelRatio = window.devicePixelRatio || 1;

    if ( pixelRatio > 1.5 ) {
      current.width  = current.width  / pixelRatio;
      current.height = current.height / pixelRatio;
    }
  }
});