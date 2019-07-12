ScrollMagic._util.addClass = function _patchedAddClass(elem, classname) {
if (classname) {
if (elem.classList) {
classname.split(' ').forEach(function _addCls(c) {
elem.classList.add(c);
});
} else elem.className += ' ' + classname;
}
};
ScrollMagic._util.removeClass = function _patchedRemoveClass(elem, classname) {
if (classname) {
if (elem.classList) {
classname.split(' ').forEach(function _removeCls(c) {
elem.classList.remove(c);
});
} else elem.className = elem.className.replace(new RegExp('(^|\b)' + classname.split(' ').join('|') + '(\b|$)', 'gi'), ' ');
}
};



if(!window.matchMedia("(max-width: 800px)").matches){
	var pinControllerExit = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = document.querySelectorAll("section.pinned");
	// create scene for every slide
	new ScrollMagic.Scene({
			triggerElement: slides[0],
			duration: '100%'
		})
		.setPin(slides[0], {pushFollowers: false})
		.addTo(pinControllerExit);
		
	new ScrollMagic.Scene({
				triggerElement: slides[1],
				duration: 674
			})
			.setPin(slides[1], {pushFollowers: false})
			.addTo(pinControllerExit);
			
	var pinControllerEnter = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	new ScrollMagic.Scene({
				triggerElement: slides[3],
				duration: "-100%"
			})
			.setPin(slides[2], {pushFollowers: false})
			.addTo(pinControllerEnter);
	
	new ScrollMagic.Scene({
				triggerElement: slides[4],
				duration: '-100%'
			})
			.setPin(slides[3], {pushFollowers: false})
			.addTo(pinControllerEnter);
			
	new ScrollMagic.Scene({
				triggerElement: slides[4],
				duration: 1
			})
			.setPin(slides[4], {pushFollowers: false})
			.addTo(pinControllerEnter);
}


var controller = new ScrollMagic.Controller();

//landing page animation
var nameEnter = new ScrollMagic.Scene({
	offset: 0,
	duration: 350
})
.setClassToggle('#myName', 'animated fadeInDown delay-500ms');
var nameExit = new ScrollMagic.Scene({
	offset: 350,
	duration: 3000
})
.setClassToggle('#myName', 'animated zoomOut delay-500ms');
var jobEnter = new ScrollMagic.Scene({
	offset: 0,
	duration: 350
})
.setClassToggle('#jobName', 'animated fadeInUp delay-1s');
var jobExit = new ScrollMagic.Scene({
	offset: 350,
	duration: 3000
})
.setClassToggle('#jobName', 'animated zoomOut delay-0s');
var mediaLinksBounce = new ScrollMagic.Scene({
	offset: 0,
	duration: 350
})
.setClassToggle('#mediaLink', 'animated heartBeat delay-2s');


//skills animation
var skillsOne = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill1', 'animated heartBeat delay-1s');
var skillsTwo = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill2', 'animated heartBeat delay-1s');
var skillsThree = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill3', 'animated heartBeat delay-1s');
var skillsFour = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill4', 'animated heartBeat delay-2s');
var skillsFive = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill5', 'animated heartBeat delay-2s');
var skillsSix = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill6', 'animated heartBeat delay-2s');
var skillsSeven = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill7', 'animated heartBeat delay-3s');
var skillsEight = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill8', 'animated heartBeat delay-3s');
var skillsNine = new ScrollMagic.Scene({
	offset: 700,
	duration: 500
})
.setClassToggle('#skill9', 'animated heartBeat delay-3s');
	
controller.addScene([nameEnter,nameExit,jobEnter,jobExit,mediaLinksBounce,skillsOne,skillsTwo,skillsThree,skillsFour,skillsFive,skillsSix,skillsSeven,skillsEight,skillsNine]);
