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
        switchToNextPlayer();
    }
});
// Hold  товчийг дарах үед оноогоо хадгалдаг болгох

document.querySelector(".btn-hold").addEventListener("click", function(){
    // ug toglogch ni tsugluulsan eeljnii onoog global onoon deer ni nemj ogno.
    scores[activePlayer]=scores[activePlayer]+roundScore;
// ug toglogch hojson esehiig shalgah
scores[activePlayer];
if(scores[activePlayer]>=10){
    document.getElementById('name-'+activePlayer).textContent="WINNER!!!"; // gehdee tsaashaagaa toglosoor bna
    document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");

    // herhen zogsooh we
}else {
    switchToNextPlayer();

}

    // Delgets deer onoog ni oorchilno 
document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];


   
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

// 100 hurwel daraagiin toglogchiig shideh ym bhgui bolno shuud bayr hurgey gene

// Shineer ttogloom ehluuleh
document.querySelector('.btn-new').addEventListener('click', function(){
    
})
