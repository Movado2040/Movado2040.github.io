(function($){
	console.log("I'm ready");
			
			var port_items = $(".port-item a, .float-item");
			var port_items_floats = $(".float-item");
			var port_jumbotron = $(".port-jumbotron");
			var jumbotron_time;
			$(port_items).on("click",function(){
				
				if($(port_jumbotron).css("display") != "block"){
					$(port_jumbotron).css({display:"block"});
					$('.carousel').carousel('cycle');
					$(".port-container").removeClass('close-port-jumbotron');
					
					//$("#port-items-cont").addClass("close-items-box");
					
					jumbotron_time = setTimeout(function(){
						$("#port-items-cont").addClass("close-items-box");
						clearTimeout(jumbotron_time);
					},500);
					
				}
				
				$('.hotspot.front').removeClass('close-front');
				$('.portfolio-desc').css({display:'none'});
				
				
				console.log("Clicked");
			} );
			
			/*$(port_items_floats).hover(function(e){
				e.stopImmediatePropagation();
				console.log("I'm hovered");
				$(this).toggleClass("beans");
			});*/
			
			$(".end .port-close").on("click",function(event){
				event.preventDefault();
				$(port_jumbotron).css({display:"none"});
				$('.hotspot.front').removeClass('close-front');
				$("#port-items-cont").removeClass("close-items-box");
				$('.carousel').carousel('pause');
				$('.port-container').addClass('close-port-jumbotron');
				$("#j5carousel2").css({"z-index":"2"});
				$('.portfolio-desc').css({display:'block'});
			});
			
			$(".front .port-close").on("click",function(event){
				event.preventDefault();
				$("#j5carousel2").css({"z-index":""});
				$(this).parents('.hotspot').addClass('close-front');
				
			});
})(jQuery)