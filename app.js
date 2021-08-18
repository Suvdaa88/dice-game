// Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer toglogchiig 1-р тоглогч 0, 2-р тоглогч 1 гэе.
var activePlayer=1;


// Тоглогчийн оноог хадгалах хувьсагч
var scores=[0,0];

//  Идэвхтэй тоглогчийн ээлжийн оноог цуглуулах хувьсагч
var roundScore=0;

// Шоо буухад аль талаараа буухыг хадгалга. 1-6 хүртэл санамсаргүй утга авдаг болгоно
// <div class="player-name" id="name-0">Player 1</div>
var dice= Math.floor(Math.random()*6)+1 ; 
// DOM өөрчлөх
window.document.querySelector('#score-0').textContent=0;document.querySelector('#score-1').textContent=0;
document.querySelector('#current-0').textContent=0;document.querySelector('#current-1').textContent=0;



document.querySelector(".dice").style.display='none';

// console.log('Шоо : '+ dice)
// Шоогоо буулгадаг болцгооё
