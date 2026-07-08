const video=document.getElementById("video");


async function startCamera(){


try{


const stream =
await navigator.mediaDevices.getUserMedia({

video:{

facingMode:"environment",

width:1280,

height:720

}

});


video.srcObject=stream;


}

catch(e){

alert(
"Kamera açılamadı: "+e
);

}


}


startCamera();
