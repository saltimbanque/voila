//return the first element
var image=document.querySelector(".card");
//return the second element
var image2=document.querySelector('.card:nth-child(2)');
//return the third element
var image3=document.querySelector('.card:nth-child(3)');
//get the sounds for the animals
var sound=document.getElementById('dolphins');
var sound2=document.getElementById('cow');
var sound3=document.getElementById('puppy');
//on Mouse over and out,use the function playDolphin and stopDolphin
image.onmouseover = playDolphin;
image.onmouseout = stopDolphin;
sound.onmouseover = playDolphin;
sound.onmouseout  = stopDolphin;
//on Mouse over and out,use the function playCow and stopCow
image2.onmouseover = playCow;
image2.onmouseout = stopCow;
sound2.onmouseover = playCow;
sound2.onmouseout  = stopCow;
//on Mouse over and out,use the function playPuppy and stopPuppy
image3.onmouseover = playPuppy;
image3.onmouseout = stopPuppy;
sound2.onmouseover = playPuppy;
sound2.onmouseout  = stopPuppy;

function playDolphin() {
	sound.play();
	image.style.transform="translate3D(0, -14px, 0)";
	 }
function stopDolphin() {
	sound.pause();
	image.style.transform="translate3D(0, 0, 0)";

}
function playCow(){
	sound2.play();
	image2.style.transform="translate3D(0, -14px, 0)";
}
function stopCow(){
	sound2.pause();
	image2.style.transform="translate3D(0, 0, 0)";
}
function playPuppy(){
	sound3.play();
	image3.style.transform="translate3D(0, -14px, 0)";
}
function stopPuppy(){
	sound3.pause();
	image3.style.transform="translate3D(0, 0, 0)";
}












