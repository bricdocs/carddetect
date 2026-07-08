const canvas=
document.getElementById("canvas");


const ctx=
canvas.getContext("2d");


function scan(){


if(video.readyState!==4)
return;



canvas.width=
video.videoWidth;


canvas.height=
video.videoHeight;



ctx.drawImage(
video,
0,
0
);



/*
Burada daha sonra:

1- Kart tespiti
2- Barkod bölgesi
3- Çizgi analizi
4- Binary üretimi

gelecek.
*/


// TEST

let testBinary="100100";


showCard(testBinary);


}



function showCard(binary){


let decimal=
parseInt(binary,2);


document.getElementById("binary")
.innerHTML=binary;


document.getElementById("decimal")
.innerHTML=decimal;



document.getElementById("card")
.innerHTML=
cardDatabase[binary] || "Bilinmiyor";


}



setInterval(scan,200);
