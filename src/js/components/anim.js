import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
	gsap.registerPlugin(ScrollTrigger);
	// animation

	const preloaders = document.querySelectorAll(".preloader");

	preloaders.forEach(element => {
		setTimeout(() => {
			element.classList.add('hidden');
		}, 5000);
		const value = element.querySelector('[data-value]');
		gsap.from(value, {
			textContent: 0,
			duration: 5,
			ease: 'Power0.easeNone',
			snap: { textContent: 1 },
			stagger: 1,
			// onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
		});
	});



	const animFadeY = document.querySelectorAll("[data-anim-fadey]");
	const animDuration = 1;
	const animToggleActions = "play none none none";
	const animStart = "top bottom-=100px";
	const animEnd = "top top";


	animFadeY.forEach((animFY) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: animFY,
					toggleActions: animToggleActions,
					start: animStart,
					end: animEnd,
				},
			})
			.fromTo(animFY, {
				y: 70,
				opacity: 0,
			}, {
				y: 0,
				opacity: 1,
				duration: animDuration,
				delay: animFY.dataset.animFadey,
			})
	});



	// function resizeChoiseImage() {
	// 	// console.log("Resource conscious resize callback!");
	// 	const designEl1 = document.querySelector('[data-anim-img]')
	// 	if (designEl1) {

	// 		const el1 = designEl1;
	// 		const designEl1Inner1 = designEl1.querySelector('.choise-box__aside');
	// 		const designEl1Inner = designEl1.querySelector('.choise-box__img');
	// 		// const designEl1Inner2 = designEl1.querySelector('.choise-menu__btn');

	// 		let widthBody = document.body.offsetWidth;
	// 		let widthR = designEl1Inner.offsetWidth;
	// 		let widthRP = 109400 / designEl1.offsetWidth;
	// 		let widthFull = designEl1.offsetWidth;
	// 		let widthFullthree = widthFull - (widthFull * 0.735);
	// 		// let widthContainerSm = (widthFull - 1094) / 2;
	// 		let widthContainer = - widthFullthree + ((widthFull - 1094) / 2);
	// 		let height = document.documentElement.clientHeight;

	// 		console.log(widthRP);

	// 		// let width = window.innerWidth;
	// 		function resize() {
	// 			widthR = designEl1Inner.offsetWidth;
	// 			widthFull = designEl1.offsetWidth;
	// 			widthFullthree = widthFull - (widthFull * 0.735);
	// 			// widthContainerSm = (widthFull - 1094) / 2;
	// 			widthContainer = - widthFullthree + ((widthFull - 1094) / 2);
	// 			height = document.documentElement.clientHeight;

	// 			console.log(widthFull);
	// 		}

	// 		ScrollTrigger.addEventListener("refreshInit", resize);
	// 		// ScrollTrigger.addEventListener("refresh", resize);

	// 		// ScrollTrigger.addEventListener("refreshInit", () => (progress = ST.progress));
	// 		// ScrollTrigger.addEventListener("refresh", () =>
	// 		// 	ST.scroll(progress * ScrollTrigger.maxScroll(window))
	// 		// );


	// 		// window.addListener(ScrollTrigger.update);
	// 		resize();

	// 		ScrollTrigger.matchMedia({

	// 			// large
	// 			"(min-width: 1055px)": function() {

	// 				gsap
	// 				.timeline({
	// 						scrollTrigger: {
	// 								trigger: el1,
	// 								start: "center+=300px bottom",
	// 								end: "top",
	// 								// markers: true,
	// 								scrub: true,
	// 								// invalidateOnRefresh: true,
	// 								// pin: true,
	// 						},
	// 				})
	// 				.fromTo(designEl1Inner1, {
	// 						x: -widthFullthree,
	// 						duration: 1,
	// 				}, {
	// 						x: 0,
	// 						duration: 1,
	// 						ease: "Power0.easeOut",
	// 				});

	// 				// right image
	// 				const tl = gsap
	// 					.timeline({
	// 						scrollTrigger: {
	// 							trigger: designEl1,
	// 							start: "center+=100px bottom",
	// 							// end: "200px",
	// 							end: "top",
	// 							// markers: true,
	// 							scrub: true,
	// 							// invalidateOnRefresh: true,
	// 							// pin: true,
	// 							onLeave: () => {
	// 								designEl1.classList.add('visible')
	// 							},
	// 							onEnterBack: () => {
	// 								designEl1.classList.remove('visible')
	// 							},
	// 						},
	// 					})
	// 					.fromTo(designEl1Inner, {
	// 						x: widthContainer,
	// 						// width: 1094,
	// 						width: widthRP+`%`,
	// 						height: 600,
	// 						// duration: 3,
	// 						// ease: "Bounce.easeOut",
	// 					}, {
	// 						x: 0,
	// 						// width: widthR,
	// 						width: "73.5%",
	// 						duration: 3,
	// 						height: height,
	// 						ease: "Power4.easeIn",
	// 						// ease: "Power4.out",
	// 					});

	// 				// console.log(tl);
	// 			},

	// 			// small
	// 			"(max-width: 1054px)": function() {

	// 				gsap
	// 				.timeline({
	// 					scrollTrigger: {
	// 						trigger: designEl1,
	// 						start: "center+=100px bottom",
	// 						// end: "200px",
	// 						end: "top",
	// 						// markers: true,
	// 						scrub: true,
	// 						invalidateOnRefresh: true,
	// 						// pin: true,
	// 						onLeave: () => {
	// 							designEl1.classList.add('visible')
	// 						},
	// 						onEnterBack: () => {
	// 							designEl1.classList.remove('visible')
	// 						},
	// 					},
	// 				})
	// 			},

	// 		});

	// 		// if (widthBody > 1054) {
	// 		// }
	// 		// else {
	// 		// }

	// 		// const height = screen.height;

	// 		// gsap
	// 		// .timeline({
	// 		// 		scrollTrigger: {
	// 		// 				trigger: element,
	// 		// 				start: "bottom bottom",
	// 		// 				end: "600px",
	// 		// 				// markers: true,
	// 		// 				scrub: true,
	// 		// 				pin: element,
	// 		// 		},
	// 		// })


	// 		// left aside

	// 	}


	// }

	// resize
	(function() {
		let throttle = function(type, name, obj) {
			obj = obj || window;
			let running = false;
			let func = function() {
				if (running) { return; }
				running = true;
				requestAnimationFrame(function() {
					obj.dispatchEvent(new CustomEvent(name));
					running = false;
				});
			};
			obj.addEventListener(type, func);
		};

		/* init - you can init any event */
		throttle("resize", "optimizedResize");
	})();

	// resizeChoiseImage();

	// handle event

	// window.addEventListener("resize", function() {
	// 	// console.log("Resource conscious resize callback!");
	// 	resizeChoiseImage();
	// });

	// window.addEventListener("resize", resizeChoiseImage);

	// window.onresize = function() {
	// 	resizeChoiseImage();
	// };

	const designEl1 = document.querySelector('[data-anim-img]')
	if (designEl1) {

		const el1 = designEl1;
		const designEl1Inner1 = designEl1.querySelector('.choise-box__aside');
		const designEl1Inner = designEl1.querySelector('.choise-box__img');
		// const designEl1Inner2 = designEl1.querySelector('.choise-menu__btn');

		let widthBody = document.body.offsetWidth;
		let widthR = designEl1Inner.offsetWidth;
		let widthRP = 109400 / designEl1.offsetWidth;
		let widthFull = designEl1.offsetWidth;
		let widthFullthree = widthFull - (widthFull * 0.735);
		// let widthContainerSm = (widthFull - 1094) / 2;
		let widthContainer = - widthFullthree + ((widthFull - 1094) / 2);
		let height = document.documentElement.clientHeight;

		console.log(widthRP);

		// let width = window.innerWidth;
		function resize() {
			widthR = designEl1Inner.offsetWidth;
			widthFull = designEl1.offsetWidth;
			widthFullthree = widthFull - (widthFull * 0.735);
			// widthContainerSm = (widthFull - 1094) / 2;
			widthContainer = - widthFullthree + ((widthFull - 1094) / 2);
			height = document.documentElement.clientHeight;

			console.log(widthFull);
		}

		ScrollTrigger.addEventListener("refreshInit", resize);
		// ScrollTrigger.addEventListener("refresh", resize);

		// ScrollTrigger.addEventListener("refreshInit", () => (progress = ST.progress));
		// ScrollTrigger.addEventListener("refresh", () =>
		// 	ST.scroll(progress * ScrollTrigger.maxScroll(window))
		// );


		// window.addListener(ScrollTrigger.update);
		resize();

		ScrollTrigger.refresh()

		ScrollTrigger.saveStyles(".choise-box__img, .choise-box__aside");

		ScrollTrigger.matchMedia({

			// large
			"(min-width: 1055px)": function() {

				gsap
				.timeline({
						scrollTrigger: {
								trigger: el1,
								start: "center+=300px bottom",
								end: "top",
								// markers: true,
								scrub: true,
								invalidateOnRefresh: true,
								// pin: true,
						},
				})
				.fromTo(designEl1Inner1, {
						x: () => -widthFullthree,
						duration: 1,
				}, {
						x: 0,
						duration: 1,
						ease: "Power0.easeOut",
				});

				// right image
				const tl = gsap
					.timeline({
						scrollTrigger: {
							trigger: designEl1,
							start: "center+=100px bottom",
							// end: "200px",
							end: "top",
							// markers: true,
							scrub: true,
							invalidateOnRefresh: true,
							// pin: true,
							onLeave: () => {
								designEl1.classList.add('visible')
							},
							onEnterBack: () => {
								designEl1.classList.remove('visible')
							},
						},
					})
					.fromTo(designEl1Inner, {
						x: () => widthContainer,
						// width: 1094,
						width: (refresh) => `${widthRP}%`,
						height: 600,
						// duration: 3,
						// ease: "Bounce.easeOut",
					}, {
						x: 0,
						// width: widthR,
						width: "73.5%",
						duration: 3,
						height: () =>  height,
						ease: "Power4.easeIn",
						// ease: "Power4.out",
					});


		window.addEventListener("optimizedResize", function() {
			console.log("Resource conscious resize callback!");
			// resizeChoiseImage();
			// tl.scrollTrigger.refresh();
			ScrollTrigger.refresh()
		});
		ScrollTrigger.refresh()

				// console.log(tl);
			},

			// small
			"(max-width: 1054px)": function() {

				gsap
				.timeline({
					scrollTrigger: {
						trigger: designEl1,
						start: "center+=100px bottom",
						// end: "200px",
						end: "top",
						// markers: true,
						scrub: true,
						invalidateOnRefresh: true,
						// pin: true,
						onLeave: () => {
							designEl1.classList.add('visible')
						},
						onEnterBack: () => {
							designEl1.classList.remove('visible')
						},
					},
				})
			},

		});


		// if (widthBody > 1054) {
		// }
		// else {
		// }

		// const height = screen.height;

		// gsap
		// .timeline({
		// 		scrollTrigger: {
		// 				trigger: element,
		// 				start: "bottom bottom",
		// 				end: "600px",
		// 				// markers: true,
		// 				scrub: true,
		// 				pin: element,
		// 		},
		// })


		// left aside

	}





	const $menuChoise = document.querySelector('[data-choise]');
	if ($menuChoise) {
		const menuChoise = document.querySelectorAll('[data-choise] .choise-menu__btn')

		menuChoise.forEach((itemMenu, index) => {
			itemMenu.addEventListener('click', function(e) {
				// itemMenu.parentElement.querySelector('.active').classList.remove('active');

				const value = index + 1;
				const active = itemMenu.parentElement.parentElement.querySelector('.active');
				active.classList.remove('active')
				// console.log(value);
				if (!itemMenu.classList.contains('active')) {
					itemMenu.classList.add('active')
				}

				const array = document.querySelectorAll('[data-choise] .img-set-wrapp')
				for (let i = 0; i < array.length; i++) {
					// const el = array[i];
					// console.log(array[index]);

					const activeList = array[index].parentElement.querySelector('.active');
					if (activeList) {
						activeList.classList.remove('active')
					}


					if (!array[index].classList.contains('active')) {
						array[index].classList.add('active')
					}
				}

			})
		});

	}


	// FIXED ELEMENT
	const fix = document.querySelector('.fixed-el');
	if (fix) {
		const body = document.body;
		gsap
		.timeline({
				scrollTrigger: {
						trigger: fix,
						start: "bottom+=30px bottom",
						// end: "200px",
						end: "top top",
						// markers: true,
						scrub: true,
						// invalidateOnRefresh: true,
						// pin: true,
						onEnter: () => {
							fix.classList.add('active')
						},
						onLeaveBack: () => {
							fix.classList.remove('active')
						},

				},
		});
		gsap
		.timeline({
				scrollTrigger: {
						trigger: body,
						start: "bottom bottom",
						// end: "200px",
						end: "top top",
						// markers: true,
						scrub: true,
						// invalidateOnRefresh: true,
						// pin: true,
						onEnter: () => {
							fix.classList.add('hidden')
						},
						onLeaveBack: () => {
							fix.classList.remove('hidden')
						},
						// onLeave: () => {
						// 	fix.classList.add('visible')
						// },
						// onEnterBack: () => {
						// 	fix.classList.remove('visible')
						// },
				},
		})

		// set param
		const param = {
			duration: 0.7,
			ease: 'Power2.easeOut'
		}

		//
		const action = document.querySelector('.fixed-el__inner');
		const circle = document.querySelector('.fixed-el__circle');
		const text = document.querySelector('.fixed-el__text');

		fix.addEventListener('mouseenter', function() {
			fix.classList.add('hover');
			setTimeout(() => {
				animationMouse();
			}, 300);
		})

		fix.addEventListener('mouseleave', function() {
			fix.classList.remove('hover');
		})


		function animationMouse() {

			action.addEventListener('mousemove', (e) => {

				let i = circle,
						rect = i.getBoundingClientRect(),
						s = e.pageX,
						o = e.pageY - window.scrollY;

				// console.log(e.pageX);
				// console.log(rect.left);
				// console.log(e.pageY);
				// console.log(rect.top);
				// console.log(e.pageY - rect.top);
				// console.log(o - rect.top);

				// gsap.to(fix, param.duration, {
				// 	y: -200,
				// 	ease: param.ease
				// })

				const windowbody = document.body.clientWidth;
				const windowbody2 = document.body.clientHeight;
				// console.log(s - windowbody / 2);
				// console.log(o);
				// console.log(s - rect.left - (i.clientWidth / 1.7));
				// console.log(o - rect.top - (i.clientHeight / 2));

				gsap.to(circle, param.duration, {
					x: s - rect.left - (i.clientWidth / 1.7),
					y: o - rect.top - (i.clientHeight / 1.5) / 1.3,
					scale: 1.2,
					ease: param.ease
				})

				gsap.to(text, param.duration, {
					// x: (s - windowbody / 2),
					x: (s - rect.left - (i.clientWidth / 1.7)) * 1.3,
					y: (o - rect.top - (i.clientHeight / 1.5) / 1.3) * 1.3,
					ease: param.ease
				})
			})

			action.addEventListener('mouseleave', (e) => {
				let i = circle,
						rect = i.getBoundingClientRect(),
						s = e.pageX - rect.left,
						o = e.pageY - rect.top;
				gsap.to(circle, param.duration, {
					x: 0,
					y: 0,
					scale: 1,
					ease: param.ease
				})

				gsap.to(text, param.duration, {
					x: 0,
					y: 0,
					ease: param.ease
				})
			})
		}


	}



}
