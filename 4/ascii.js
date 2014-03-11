var frames = 0;
var text;
var current=0;
var timeout;
var started = 0;
var stopped = 1;
var speed = 1.0;
var turbo = 0;
var paused = 0;
var rewind = 0;

function onLoad() {
	document.getElementById("pause").disabled=true;
	document.getElementById("stop").disabled=true;
}

//Move forward to next frame
function moveToNextFrame() {
	document.getElementById("displayarea").value = frames[current];
    current = (current + 1) % frames.length;
	timeout = setTimeout("moveToNextFrame();", speed*250);
}

//Moves backwards to previous frame for rewinding
function moveToPrevFrame() {
	document.getElementById("displayarea").value = frames[current];
    if ((current - 1) >= 0) {
		current = current-1;
	}
	else {
		current = frames.length-1;
	}
	timeout = setTimeout("moveToPrevFrame();", speed*250);
}


function Turbo() {
	if(turbo === 0) {
		speed=0.5;
		turbo = 1;
	}
	else {
		speed=1.0;
		turbo = 0;
	}
	
}

function LoadAnimation() {
	text = document.getElementById('displayarea').value;
    if (text.indexOf("\r\n") !== -1) {
      frames = text.split("=====\r\n");
    }
    else {
      frames = text.split("=====\n");
    }
}

function StartAnimation() {
	if(paused===1) {
		moveToNextFrame();
		paused = 0;
		}
	else if(started === 0) {
		if(!stopped) {
			LoadAnimation();
		}
		current = 0;
		moveToNextFrame();
		started = 1;
	}
	else {
		StopAnimation();
		StartAnimation();
	}
	rewind = 0;
	stopped = 0;
	document.getElementById("animation-select").disabled=true;
	document.getElementById("pause").disabled=false;
	document.getElementById("stop").disabled=false;
	document.getElementById("back").disabled=true;
}

function StopAnimation()
{
	clearTimeout(timeout);
	current = 0;
	started = 0;
	stopped = 1;
	paused = 0;
	document.getElementById("animation-select").disabled=false;
	document.getElementById("start").disabled=false;
	document.getElementById("back").disabled=false;
	document.getElementById("pause").disabled=true;
	document.getElementById("stop").disabled=true;
}

function PauseAnimation() {
	if ( stopped === 0 ) {
		if(started === 1) {
			if (paused === 0) {
				paused = 1;
				clearTimeout(timeout);
			}
			else if (rewind === 0) {
				paused = 0;
				moveToNextFrame();
			}
			else {
				paused = 0;
				moveToPrevFrame();
			}
		}
	}
	document.getElementById("pause").disabled=true;
	document.getElementById("animation-select").disabled=false;
}

//Rewind is equivalent to "back"
function Rewind() {
	if(paused===1)
	{
		paused = 0;
		moveToPrevFrame();
		started = 1;
	}
	else if(started===0)
	{
		if(!stopped) {
			LoadAnimation();
		}
		current = 0;
		moveToPrevFrame();
		started = 1;
		paused = 0;
	}
	else
	{
		StopAnimation();
		Rewind();
	}
	rewind = 1;
	stopped = 0;
	document.getElementById("animation-select").disabled=true;
	document.getElementById("pause").disabled=false;
	document.getElementById("stop").disabled=false;
	document.getElementById("start").disabled=true;

}

function SelectAnimation() {
	a_select = document.getElementById("animation-select");
	val = a_select.options[a_select.selectedIndex].value;
	StopAnimation();
	stopped = 0;
	if(val=="exercise") {
		FillAnimation(exercise);
	}else if(val=="juggler") {
		FillAnimation(juggler);
	}else if(val=="bike") {
		FillAnimation(bike);
	}else if(val=="dive") {
		FillAnimation(dive);
	}else if(val=="hunter") {
		FillAnimation(makeHunterAnimation());
	}
}

function SmallFont(){
document.getElementById('displayarea').style.cssText = 'font-size: 6pt;';
}
function MediumFont(){
document.getElementById('displayarea').style.cssText = 'font-size: 12pt;';

}
function LargeFont(){
document.getElementById('displayarea').style.cssText = 'font-size: 24pt;';
}

function FillAnimation(text) {
    document.getElementById('displayarea').value = text;
}

function makeHunterAnimation() {
return "         O ^                                 0_  \n" + 
"\t/#\\|                      ---________| \n" + 
"\t/ \\                          | |  | |   \n" + 
"\t=====\n" + 
"         O ^                                 0_  \n" + 
"\t/#\\|                      ---________| \n" + 
"\t/ \\                          | |  | |   \n" + 
"\t=====\n" + 
"\t O                                   0_  \n" + 
"\t/#/   --->                ---________| \n" + 
"\t/ \\                          | |  | |   \n" + 
"\t=====\n" + 
"\t O                                   0_  \n" + 
"\t/#/   --->                ---________| \n" + 
"\t/ \\                          | |  | |   \n" + 
"\t=====\n" + 
"             O                               0_  \n" + 
"\t    /#\\           --->    ---________| \n" + 
"\t    / \\                      | |  | |   \n" + 
"\t=====\n" + 
"\t     O                               0_  \n" + 
"\t    /#\\           --->    ---________| \n" + 
"\t    / \\                      | |  | |   \n" + 
"\t=====\n" + 
"             O                           --->0_  \n" + 
"\t    /#\\                   ---________| \n" + 
"\t    / \\                      | |  | | \n" + 
"\t=====\n" + 
"             O                           --->0_  \n" + 
"\t    /#\\                   ---________| \n" + 
"\t    / \\                      | |  | | \n" + 
"\t=====\n" + 
"\t     O                             --x->  \n" + 
"\t    /#\\                   ---________| \n" + 
"\t    / \\                      | |  | | \n" + 
"    =====\n" + 
"\t     O                             --x->  \n" + 
"\t    /#\\                   ---________| \n" + 
"\t    / \\                      | |  | | \n" + 
"    =====\n" + 
"\t            O                       --x->  \n" + 
"\t           /#\\             ---________| \n" + 
"\t           / \\                | |  | | \t\t\n" + 
"    =====\n" + 
"\t            O                       --x->  \n" + 
"\t           /#\\             ---________| \n" + 
"\t           / \\                | |  | | \t\t\n" + 
"    =====\n" + 
"\t                      O              --x->  \n" + 
"\t                     /#\\   ---________| \n" + 
"\t                     / \\      | |  | | \t\n" + 
"    =====\n" + 
"\t                      O              --x->  \n" + 
"\t                     /#\\   ---________| \n" + 
"\t                     / \\      | |  | | \t\n" + 
"    =====\n" + 
"\t                                  O  --x->  \n" + 
"\t                           ---__ /#\\___| \n" + 
"\t                              | |/ \\| | \n" + 
"    =====\n" + 
"\t                                  O  --x->  \n" + 
"\t                           ---__ /#\\___| \n" + 
"\t                              | |/ \\| | \n" + 
"    =====\n";
}