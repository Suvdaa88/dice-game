// Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer toglogchiig 1-р тоглогч 0, 2-р тоглогч 1 гэе.
var activePlayer=0;


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
    // Тоглогчийн ээлжийн тоог нэмэх, Буусан тоо 1 ээс ялгаатай бол ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber!==1){
        // 1 ees ylgaatai buulaa
     roundScore=roundScore+diceNumber;
     document.getElementById('current-'+activePlayer).textContent=roundScore;
    }else { // active playeriig 0 lohoos omno currentiig 00loson  bh ystoi
        roundScore=0;
        document.getElementById('current-'+activePlayer).textContent=0;

        //1 buuusan tul toglogchiin eeljiig ene hesegt solij ogno
        // Herew idewhtei toglogch 0 bwal idewhtei toglogchiig 1 bolgo, ugui bol idewhtei toglogchiig 0 bolgo
        activePlayer===0 ? (activePlayer=1) : (activePlayer=0);
          // if(activePlayer===0){
        //     activePlayer=1;
        // }else {
        //     activePlayer=0;
        // }

        // Улаан цэгийг шилжоолэх
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // Shoog tur alga bolgoh
        diceDom.style.display="none"
    }
});
// Hold  товчийг дарах үед оноогоо хадгалдаг болгох
