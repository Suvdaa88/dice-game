// Togloom duussan esehiig hadgalah tolwiin huwisagch
var isGameOver;

// Шоогоо буулгадаг болцгооё
var activePlayer;


// Тоглогчийн оноог хадгалах хувьсагч
var scores;

//  Идэвхтэй тоглогчийн ээлжийн оноог цуглуулах хувьсагч
var roundScore;
var diceDom=document.querySelector(".dice");
initGame();
// togloom ehluuleh function
function initGame(){
    // togloom ehllee gdg tolowt oruulna
    isGameOver=false;
    // Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer toglogchiig 1-р тоглогч 0, 2-р тоглогч 1 гэе.
activePlayer=0;


// Тоглогчийн оноог хадгалах хувьсагч
scores=[0,0];

//  Идэвхтэй тоглогчийн ээлжийн оноог цуглуулах хувьсагч
roundScore=0;

// <div class="player-name" id="name-0">Player 1</div>
// DOM өөрчлөх
window.document.getElementById('score-0').textContent='0';document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';document.getElementById('current-1').textContent='0';
// toglogchdiin neriig butsaaj gargah
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove("winner");
document.querySelector('.player-1-panel').classList.remove("winner");

document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");
document.querySelector('.player-0-panel').classList.add("active");


diceDom.style.display='none';
}

document.querySelector(".btn-roll").addEventListener("click",function(){
    if(isGameOver!==true){
        var diceNumber= Math.floor(Math.random()*6)+1 ;

    diceDom.style.display="block";
    diceDom.src='dice-'+diceNumber+'.png';
    // Тоглогчийн ээлжийн тоог нэмэх, Буусан тоо 1 ээс ялгаатай бол ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber!==1){
        // 1 ees ylgaatai buulaa
     roundScore=roundScore+diceNumber;
     document.getElementById('current-'+activePlayer).textContent=roundScore;
    }else { // active playeriig 0 lohoos omno currentiig 00loson  bh ystoi
        switchToNextPlayer();
    }
    }else {
        alert("Тоглоом дууслаа. NEW GAME товчийг дарж шинээр эхлэнэ үү")
    }
});
// Hold  товчийг дарах үед оноогоо хадгалдаг болгох

document.querySelector(".btn-hold").addEventListener("click", function(){
   if(isGameOver!==true){
 // ug toglogch ni tsugluulsan eeljnii onoog global onoon deer ni nemj ogno.
 scores[activePlayer]=scores[activePlayer]+roundScore;
 // ug toglogch hojson esehiig shalgah
 document.getElementById("score-" + activePlayer).textContent =scores[activePlayer];
 
 // 100 hurwel daraagiin toglogchiig shideh ym bhgui bolno shuud bayr hurgey gene
 if(scores[activePlayer]>=100){
     isGameOver=true;
 
     document.getElementById('name-'+activePlayer).textContent="WINNER!!!"; // gehdee tsaashaagaa toglosoor bna
     document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
     document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
 
     // herhen zogsooh we
 }else {
     switchToNextPlayer();
 
 }
 
     // Delgets deer onoog ni oorchilno 
 document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
 
 
   
   } else {
    alert("Тоглоом дууслаа. NEW GAME товчийг дарж шинээр эхлэнэ үү")
   }
});
// Ene function nitogloh eeljiig daraachiin toglogch ruu shiljuulne
function switchToNextPlayer(){
     // Eeljiin onoog ni 0 lono.
     roundScore=0;
     document.getElementById('current-'+activePlayer).textContent=0;
 
     //toglogchiin eeljiig solino.
     activePlayer===0 ? (activePlayer=1) : (activePlayer=0);
    
     document.querySelector('.player-0-panel').classList.toggle("active");
     document.querySelector('.player-1-panel').classList.toggle("active");
      // Shoog tur alga bolgoh
      diceDom.style.display="none"
   

}



// Shineer ttogloom ehluuleh
document.querySelector('.btn-new').addEventListener('click', initGame);
