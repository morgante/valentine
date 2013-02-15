$(document).ready(function() {
	$('body').css('visibility','visible');
	
	$('#content-wrapper').css('display','block');
	
	$('a').smoothScroll();
	
	var controller = $.superscrollorama();
	
	// individual element tween examples
	// controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
	controller.addTween('#unorthodox', TweenMax.from( $('#unorthodox p'), .25, {css:{left:'-1500px'}, ease:Quad.easeInOut}));
	controller.addTween('#unorthodox', TweenMax.to( $('#unorthodox p'), .25, {css:{rotation: 720}, ease:Quad.easeOut}), 0, 5);
	// controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
	// controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
	
	// var orthoAnim = new TimelineLite();
	// orthoAnim.append([
	// 	TweenMax.to($('#unorthodox p'), .5, {css:{left:'500px'}}),
	// ], 0.1)
	// controller.pin($('#unorthodox'), 1000, {
	// 	anim:youAnim, 
	// 	onPin: function() {
	// 		$('#you').css('height','100%');
	// 	}, 
	// 	onUnpin: function() {
	// 		$('#you').css('height','600px');
	// 	}
	// });
	
	// pin element, use onPin and onUnpin to adjust the height of the element
	var youAnim = new TimelineLite();
	youAnim.append([
		TweenMax.to($('#adjectives ul'), .5, {css:{top:'-200px'}}),
	], 0.1)
	controller.pin($('#you'), 1000, {
		anim:youAnim, 
		onPin: function() {
			$('#you').css('height','100%');
		}, 
		onUnpin: function() {
			$('#you').css('height','600px');
		}
	});
	
	// controller.pin($('#examples-2'), 3000, {
	// 	anim: (new TimelineLite())
	// 		.append(
	// 			TweenMax.fromTo($('#fling-it'), 2, 
	// 				{css:{left:-1000, top: 500, rotation: -360}, immediateRender:true}, 
	// 				{css:{left:2000, top: -600, rotation: 360}})
	// 		)
	// 		.append(
	// 			TweenMax.fromTo($('#move-it'), .75, 
	// 				{css:{left: -200, top: 800}, immediateRender:true}, 
	// 				{css:{top: -200}}),
	// 				-1.5 // offset for better timing
	// 		)
	// 		.append(
	// 			TweenMax.to($('#move-it'), .5, 
	// 				{css:{left: 200}})
	// 		)
	// 		.append(
	// 			TweenMax.to($('#move-it'), .5, 
	// 				{css:{top: 0}})
	// 		)
	// 		.append(
	// 			TweenMax.to($('#move-it'), .5, 
	// 				{css:{left: 0}})
	// 		)
	// })

	// parallax example, setting duration ties animation to scroll position
	// you can target a scroll position instead of an element (whose position can change)
	// controller.addTween(
	// 		'#examples-parallax',
	// 		(new TimelineLite())
	// 			.append([
	// 				TweenMax.fromTo($('#parallax-it-left'), 1, 
	// 					{css:{top: 200}, immediateRender:true}, 
	// 					{css:{top: -600}}),
	// 				TweenMax.fromTo($('#parallax-it-right'), 1, 
	// 					{css:{top: 500}, immediateRender:true}, 
	// 					{css:{top: -1250}})
	// 			]),
	// 		1000 // scroll duration of tween
	// 	);

	// $('#bring-it').lettering();
	// 	controller.addTween(
	// 		'#bring-it',
	// 		(new TimelineLite())
	// 			.append([
	// 				TweenMax.from($('#bring-it .char1'), 1, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char2'), .6, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char3'), 1.1, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char4'), .7, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char5'), .9, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char6'), 1.2, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char7'), .6, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
	// 				TweenMax.from($('#bring-it .char8'), .8, 
	// 					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
	// 			])
	// 			,
	// 		1200,
	// 		-100 // offset for better timing
	// 	);
});