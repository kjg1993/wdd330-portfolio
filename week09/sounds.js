// document.addEventListener('keydown', function (e) {
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   // const kbd = document.querySelector(".key");

//   function changeStyle() {
//     document.querySelector(".key").style.borderColor = "red";
//   }

//   // function decoration() {
//   //   kbd.style.color = 'red';
//   // }

//   console.log(key)
//   console.log(audio)

//   switch (e.keyCode) {
//     case "65":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       changeStyle();
//       break;
//     case "83":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "68":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "70":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "71":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "72":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "74":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "75":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     case "76":
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//     default:
//       audio.pause();
//       audio.currentTime = 0;
//       audio.play();
//       break;
//   }

//   audio.addEventListener('playing', (event) => {
//     console.log('Video is no longer paused');
//   });

//   // if (e.keyCode == 70) {
//   //   audio.play();
//   // } else if (e.keyCode == 65) {
//   //   audio.play();
//   // }
// });

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	e.target.classList.remove("playing");
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return;

	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
