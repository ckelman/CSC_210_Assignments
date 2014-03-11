var frames=0,text,current=0,timeout,started=0,stopped=1,speed=1,turbo=0,paused=0,rewind=0;function onLoad(){document.getElementById("pause").disabled=!0;document.getElementById("stop").disabled=!0}function moveToNextFrame(){document.getElementById("displayarea").value=frames[current];current=(current+1)%frames.length;timeout=setTimeout("moveToNextFrame();",250*speed)}
function moveToPrevFrame(){document.getElementById("displayarea").value=frames[current];current=0<=current-1?current-1:frames.length-1;timeout=setTimeout("moveToPrevFrame();",250*speed)}function Turbo(){0===turbo?(speed=0.5,turbo=1):(speed=1,turbo=0)}function LoadAnimation(){text=document.getElementById("displayarea").value;frames=-1!==text.indexOf("\r\n")?text.split("=====\r\n"):text.split("=====\n")}
function StartAnimation(){1===paused?(moveToNextFrame(),paused=0):0===started?(stopped||LoadAnimation(),current=0,moveToNextFrame(),started=1):(StopAnimation(),StartAnimation());stopped=rewind=0;document.getElementById("animation-select").disabled=!0;document.getElementById("pause").disabled=!1;document.getElementById("stop").disabled=!1;document.getElementById("back").disabled=!0}
function StopAnimation(){clearTimeout(timeout);started=current=0;stopped=1;paused=0;document.getElementById("animation-select").disabled=!1;document.getElementById("start").disabled=!1;document.getElementById("back").disabled=!1;document.getElementById("pause").disabled=!0;document.getElementById("stop").disabled=!0}
function PauseAnimation(){0===stopped&&1===started&&(0===paused?(paused=1,clearTimeout(timeout)):0===rewind?(paused=0,moveToNextFrame()):(paused=0,moveToPrevFrame()));document.getElementById("pause").disabled=!0;document.getElementById("animation-select").disabled=!1}
function Rewind(){1===paused?(paused=0,moveToPrevFrame(),started=1):0===started?(stopped||LoadAnimation(),current=0,moveToPrevFrame(),started=1,paused=0):(StopAnimation(),Rewind());rewind=1;stopped=0;document.getElementById("animation-select").disabled=!0;document.getElementById("pause").disabled=!1;document.getElementById("stop").disabled=!1;document.getElementById("start").disabled=!0}
function SelectAnimation(){a_select=document.getElementById("animation-select");val=a_select.options[a_select.selectedIndex].value;StopAnimation();stopped=0;"exercise"==val?FillAnimation(exercise):"juggler"==val?FillAnimation(juggler):"bike"==val?FillAnimation(bike):"dive"==val?FillAnimation(dive):"hunter"==val&&FillAnimation(makeHunterAnimation())}function SmallFont(){document.getElementById("displayarea").style.cssText="font-size: 6pt;"}
function MediumFont(){document.getElementById("displayarea").style.cssText="font-size: 12pt;"}function LargeFont(){document.getElementById("displayarea").style.cssText="font-size: 24pt;"}function FillAnimation(a){document.getElementById("displayarea").value=a}
function makeHunterAnimation(){return"         O ^                                 0_  \n\t/#\\|                      ---________| \n\t/ \\                          | |  | |   \n\t=====\n         O ^                                 0_  \n\t/#\\|                      ---________| \n\t/ \\                          | |  | |   \n\t=====\n\t O                                   0_  \n\t/#/   ---\x3e                ---________| \n\t/ \\                          | |  | |   \n\t=====\n\t O                                   0_  \n\t/#/   ---\x3e                ---________| \n\t/ \\                          | |  | |   \n\t=====\n             O                               0_  \n\t    /#\\           ---\x3e    ---________| \n\t    / \\                      | |  | |   \n\t=====\n\t     O                               0_  \n\t    /#\\           ---\x3e    ---________| \n\t    / \\                      | |  | |   \n\t=====\n             O                           ---\x3e0_  \n\t    /#\\                   ---________| \n\t    / \\                      | |  | | \n\t=====\n             O                           ---\x3e0_  \n\t    /#\\                   ---________| \n\t    / \\                      | |  | | \n\t=====\n\t     O                             --x->  \n\t    /#\\                   ---________| \n\t    / \\                      | |  | | \n    =====\n\t     O                             --x->  \n\t    /#\\                   ---________| \n\t    / \\                      | |  | | \n    =====\n\t            O                       --x->  \n\t           /#\\             ---________| \n\t           / \\                | |  | | \t\t\n    =====\n\t            O                       --x->  \n\t           /#\\             ---________| \n\t           / \\                | |  | | \t\t\n    =====\n\t                      O              --x->  \n\t                     /#\\   ---________| \n\t                     / \\      | |  | | \t\n    =====\n\t                      O              --x->  \n\t                     /#\\   ---________| \n\t                     / \\      | |  | | \t\n    =====\n\t                                  O  --x->  \n\t                           ---__ /#\\___| \n\t                              | |/ \\| | \n    =====\n\t                                  O  --x->  \n\t                           ---__ /#\\___| \n\t                              | |/ \\| | \n    =====\n"};
