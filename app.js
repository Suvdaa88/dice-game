// Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer toglogchiig 1-р тоглогч 0, 2-р тоглогч 1 гэе.
var activePlayer=1;


// Тоглогчийн оноог хадгалах хувьсагч
var scores=[0,0];

//  Идэвхтэй тоглогчийн ээлжийн оноог цуглуулах хувьсагч
var roundScore=0;

// Шоо буухад аль талаараа буухыг хадгалга. 1-6 хүртэл санамсаргүй утга авдаг болгоно
// <div class="player-name" id="name-0">Player 1</div>
var diceNumber= Math.floor(Math.random()*6)+1 ; 
// DOM өөрчлөх
window.document.getElementById('score-0').textContent='0';document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';document.getElementById('current-1').textContent='0';

// Шоогоо буулгадаг болцгооё
var diceDom=document.querySelector(".dice");
diceDom.style.display='none';
document.querySelector(".btn-roll").addEventListener("click",function(){
    var diceNumber= Math.floor(Math.random()*6)+1 ;

    diceDom.style.display="block";
    diceDom.src='dice-'+diceNumber+'.png';
    
});



// console.log('Шоо : '+ dice)
// Тоглогчдын ээлжийг солих
