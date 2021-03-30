var myVideo = document.getElementById("video1"); 

function playStop() { 
  if (myVideo.paused) 
    myVideo.stop(); 
  else 
    myVideo.pause(); 
} 