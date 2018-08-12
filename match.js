'option strict'
//Deck of cards
var Deck = ["Cards/rz5ojxtoakhu2ft.png1865", "Cards/t7zhvddch4nqbvv.png726", "Cards/pub80kivfhyy2my.png730", "Cards/cvqpc2hswj0p4f8.png1773", "Cards/5hhk92dk0y3a58w.png1089", "Cards/2okjy7jm4jyfqcd.png1872", "Cards/c0jei2n4ub2dl85.png1485", "Cards/c5dv4cai8mnnizy.png1254", "Cards/3cx8vs6v5ul29z6.png1261", "Cards/9afydvaf4na3854.png157", "Cards/8t5z2ky7tzns67u.png1803", "Cards/4vnfjyqto2qbpmx.png1149", "Cards/3d5u840q24jjdpv.png690",
    "Cards/3imo0te0xel0w8k.png1865", "Cards/fc6le4ueaybp37h.png726", "Cards/qa8iksszesvmf2j.png730", "Cards/mewffdhyfrlb12u.png1773", "Cards/t7f4hvt61len90n.png1089", "Cards/pkk6o4sl5xsyfwv.png1872", "Cards/uyvxrjt082a4yo5.png1485", "Cards/nklonrek9njkcpo.png1254", "Cards/rzqrskjr6b5iatt.png1261", "Cards/su8j3of1wsfo8mh.png157", "Cards/pxcxtqj2yo8uyo7.png1803", "Cards/5v23nk53qm1qn8d.png1149", "Cards/neey4dyouoqnnk5.png690",
    "Cards/p8uqe087aeouwy2.png1865", "Cards/keyf8pcelprejqy.png726", "Cards/upi0n11enckc7ky.png730", "Cards/xs5yx9cnujlrsma.png1773", "Cards/wzk4ib1y7of67uu.png1089", "Cards/rul8rzt82l4ckyi.png1872", "Cards/uc31plr5p360e3u.png1485", "Cards/30vdw6woyxhst1.png1254", "Cards/qfbdmp4p1d48u7o.png1261", "Cards/szv6mu4ftxok85i.png157", "Cards/o7ombx70yfdvukx.png1803", "Cards/ks52yyjcvzk05jh.png1149", "Cards/wv09vn1f8ivnf0a.png690",
    "Cards/v7zk0jynjdtdmjm.png1865", "Cards/1356u17a4ay0u7z.png726", "Cards/0xlbfx6ekn5nse6.png730", "Cards/ilokmffhy6vr5xc.png1773", "Cards/cmw0yhjybj3bjn7.png1089", "Cards/1jv51xi5xk4ciri.png1872", "Cards/mc5bly0qhienxtp.png1485", "Cards/abfft195hq0qayi.png1254", "Cards/cjoyuea9ljhvj2s.png1261", "Cards/1r230fb554lc3rs.png157", "Cards/lo1n8xk4ohqljpd.png1803", "Cards/khmn5m0ccb7ilty.png1149", "Cards/x1pv3etrh0dzwzw.png690",];
// shuffle cards function
var DeckClone = Deck;
var Memory = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
/*var DeckClone2 = ['Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1',
    'Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1'];*/
var difficulty= 1;
var cardCount = 0;
var grabCard = false;
var NameofCard = '';
var cardValue = null; // stores value to check if cards are equal compares to xcard in flip()
var score = 0;
var firstId;
var scoreMultiplier = 1;
var timer = 11;// Match game start time
var matchCount = 0;
var moves = 0;
var ElapsedTime = 0;
var reset;//Don't mess with this
var scoreMessage = "Score: " // Varies by time bonuses.
var game;
var level = 1; //used for memory to increment levels.
var box = [];
var computerTurn;
var computerKey;
var playerKey;
var lives = 3;
var playerClicks= 0;
var FlipSingle = new Audio('Cards/cardflip.wav');
var FlipAll = new Audio('Cards/FlipAll.wav')

function shuffle(Deck) {
    var j, x, i;
    for (i = Deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = Deck[i];
        Deck[i] = Deck[j];
        Deck[j] = x;
    }
    return Deck;
}
//first function called by the only button on the home screan takes
//difficulty value from the table and logically picks the coresponding game.
function createNewGame() {
    
    score = 0;
    matchCount = 0;
    ElapsedTime = 0;
    difficulty = document.getElementById('fDifficulty').value;
    var body = document.getElementById('clear');
    body.innerHTML = '';
    if (difficulty == 1) { //Value 1 plays one full deck of cards any suit of the same value matches
        Hard();
        cardCount = 0;
    }
    if (difficulty == 2) { //value 2 plays two full decks of cards any suit of the same value matches
        Medium();
        cardCount = 0;
    }
    gameMenue();
    var resettimmer = setInterval(tyme, 1000);
    if (timer == -1) {
        clearInterval(resettimmer);
    }
}
function gameMenue() {
    var body = document.getElementById('clear');
    body.innerHTML += "<div id=\"resetTable\"><table style=\"border:2px solid blue\"><thead><th>Match by Larry Shimmell</th></thead><tr><td><select hidden name=\"Difficulty\" id=\"fDifficulty\"><option type=\"number\" value=\"1\">Hard</option><option type=\"number\" value=\"1\">Easy</option></select></td></tr><tr><td><button class=\"button\" onclick=\"location.reload();\">Main Menu</button></td></tr><tr><td><img src=\"Cards/aces.png\" id=\"menucard\" alt=\"guess\" width=\"100px\"></td></tr></table></div>";
}
function Hard() {
    shuffle(Deck);
    var body = document.getElementById('clear');
    var row = '<div  class="container-top"><span>Time:</span><input id="timer" type="number" readonly><span>Multiplier:</span><input id=\"multiplier\" type=\"number\" readonly value="1">Score:<input id=\"score\" type=\"number\" readonly value="0">'+ ((game=='memory')? '<label for="lives">lives</label><input id="lives" type="number" readonly value="3"><button id="start" class"btn btn-sm btn-success" onclick="recurs()">Hint</button>': ' ') + '</div><div class ="container"><div>';
    var last = '';
    var i = Deck.length;
    for (var j = 0; Deck.length > j; j++) {
        --i;
        cardCount++;
        var idx = Deck[j].lastIndexOf('g') + 1; // seperates the img string from the value string
        var img = Deck[j].slice(0, idx); // becomes the value
        var valueofCard = Deck[j].substring(idx, Deck[j].length);
        if(game == 'memory'){
        if (i % 13 != 0) {
            row += "<img src='Cards/backofcard.png' name=\"" + img + "\" alt=\"guess\" width=\"80px\" class=\"" + valueofCard + "\" type=\"number\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
            }
            if (i % 13 == 0) {
                row += "<img src='Cards/backofcard.png' name=\"" + img + "\" alt=\"guess\" width=\"80px\" class=\"" + valueofCard + "\" type=\"number\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img></div><div>";
            }
        }   
        if(game != 'memory'){
            if (i % 13 != 0) {
                row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"80px\" class=\"" + valueofCard + "\" type=\"number\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
            }
            if (i % 13 == 0) {
                row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"80px\" class=\"" + valueofCard + "\" type=\"number\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img></div><div>";
            }

        }
    }
    
    body.innerHTML += row + '</div></div></button>';
}
function Medium() {
    shuffle(DeckClone2);
    console.log('shuffled success');
    var body = document.getElementById('clear');
    var row = '<div>';
    var i = DeckClone2.length;
    for (var j = 0; DeckClone2.length > j; j++) {
        --i;
        cardCount++;
        var idx = DeckClone2[j].lastIndexOf('g') + 1;
        var img = DeckClone2[j].slice(0, idx);
        //var valueofCard = Deck[j].substring(idx,Deck[j].length)    
        if (i % 26 != 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"50px\"  type=\"string\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
        }
        if (i % 26 == 0) {
            row += "<img src=\"" + img + "\" name=\"" + img + "\"  alt=\"guess\" width=\"50px\"  type=\"string\" id=\"" + cardCount + " onclick=\"flip(" + cardCount + ")\"></img></div><div>";
        }
    }
    body.innerHTML += row;
}
function hide() {
    var lookHere = document.getElementById('clear').outerHTML;
    var replace = document.getElementById('clear');
    replace.innerHTML = '';
    if(game!= 'memory'){score = 0;}
    if (difficulty == 1) {
        for (var card = 0; DeckClone.length > card; card++) { //finds all the images and changes them to back of card
            var idx = DeckClone[card].lastIndexOf('g') + 1;
            var img = DeckClone[card].slice(0, idx);
            var newbody = lookHere.replace("src=\"" + img + "\"", 'src="Cards/backofcard.png"');
            replace.innerHTML = newbody;
            lookHere = newbody;
            
        }
    }
    if (difficulty == 2) {
        for (var card = 0; DeckClone2.length > card; card++) { //finds all the images and changes them to back of card
            var idx = DeckClone2[card].lastIndexOf('g') + 1;
            var img = DeckClone2[card].slice(0, idx);
            var newbody = lookHere.replace("src=\"" + img + "\"", 'src="Cards/backofcard.png"');
            replace.innerHTML = newbody;
            lookHere = newbody;
        }
    }
    var highscore = document.getElementById('score');
    highscore.value = score;
    var htmlLives = document.getElementById('lives');
    htmlLives.value = lives;
    var multiplierhtml = document.getElementById('multiplier');
    multiplierhtml.value = scoreMultiplier;
    FlipAll.play();
}
function flip(id) {
    if (ElapsedTime == 0&& game != 'memory') {
        startTheClock();
    }
    var cardtochange = document.getElementById(id).outerHTML;
    var replace = document.getElementById(id).name;
    var final = document.getElementById(id);
    var replaceEasy = document.getElementById(id).className;
    var multiplierId = document.getElementById('multiplier');
    moves++;
    /*if (difficulty != 1) {
        if (cardtochange.includes('Cards/backofcard.png')) {
            var idx = cardtochange.replace('Cards/backofcard.png', replace);
            var xcard = document.getElementById(id).name;
            final.outerHTML = idx;
            if (NameofCard == xcard) {
                score += 10;
                var highscore = document.getElementById('score');
                highscore.value = score;
            }
            grabCard = !grabCard;
            NameofCard = replace;
            if(grabCard == false){
                checkNameofCard(replace)
            }
        }
        if (!(cardtochange.includes('Cards/backofcard.png'))) {
            var idx = cardtochange.replace("src=\"" + replace + "\"", 'src="Cards/backofcard.png"');
            final.outerHTML = idx;
        }
    }*/
    if (cardtochange.includes('Cards/backofcard.png')) {
        var idx = cardtochange.replace('Cards/backofcard.png', replace);
        var xcard = document.getElementById(id).className;
        final.outerHTML = idx;
        grabCard = !grabCard;
        console.log(grabCard);
            FlipSingle.play();
        if (grabCard == false && cardValue == xcard && game != 'memory') {
            var highscore = document.getElementById('score');
            var lastid = document.getElementById(firstId);
            score += 10 * scoreMultiplier;
            scoreMultiplier++;
            multiplierId.value = scoreMultiplier;
            matchCount++;
            if (matchCount > 25) {
                endgame();
            }
            var toGray = document.getElementById(id);
            var toGray2 = document.getElementById(firstId);
            setTimeout(function () {
                toGray.outerHTML = "<img src='Cards/gray.png' alt=\"guess\" width=\"80px\" class=\"clear-img\" id=\"" + id + "\"></img>";
                toGray2.outerHTML = "<img src='Cards/gray.png'alt=\"guess\" width=\"80px\" class=\"clear-img\"  id=\"" + firstId + "\" ></img>";
                highscore.value = score;
            }, 1000);
            cardValue = null;
            return;
        }
        if (grabCard == false && cardValue != xcard && game!= 'memory') {
            var backtoblue1 = document.getElementById(id);
            var replaceImg = document.getElementById(id).name;
            var changit = document.getElementById(id).outerHTML;
            var backtoblue2 = document.getElementById(firstId);
            var replaceImg2 = document.getElementById(firstId).name;
            var changit2 = document.getElementById(firstId).outerHTML;
            scoreMultiplier = 1;
            multiplierId.value = scoreMultiplier;
            setTimeout(function () {
                backtoblue1.outerHTML = changit.replace(replaceImg, 'Cards/backofcard.png');
                backtoblue2.outerHTML = changit2.replace(replaceImg2, 'Cards/backofcard.png');
                var highscore = document.getElementById('score');
                if (score > 0) {
                    score -= 1;
                    highscore.value = score;
                }
            }, 1000);
        }
        if ( game== 'memory'&& computerTurn==true) {
            var backtoblue1 = document.getElementById(id);
            var replaceImg = document.getElementById(id).name;
            var changit = document.getElementById(id).outerHTML;
            if(computerTurn==true){computerKey += id;}
            setTimeout(function () {
                backtoblue1.outerHTML = changit.replace(replaceImg, 'Cards/backofcard.png');
                FlipSingle.play();
                var highscore = document.getElementById('score');
            }, (level*1200));
        }
        if(game == 'memory' && computerTurn == false){
            var backtoblue1 = document.getElementById(id);
            var replaceImg = document.getElementById(id).name;
            var changit = document.getElementById(id).outerHTML;
            playerKey += id;
            playerClicks++;

        }
        firstId = id;
        cardValue = replaceEasy;
        /*if(grabCard == false){
            checkNameofCard(replace)
        }*/
    }
    if (!(cardtochange.includes('Cards/backofcard.png'))) {
       // var idx = cardtochange.replace("src=\"" + replace + "\"", 'src="Cards/backofcard.png"');
        //final.outerHTML = idx;
        //cardValue = null;
        //firstId = null;
        return null;
    }
    if(playerClicks == (level+1)){
        playerClicks= 0;
        check();
        setTimeout(function(){return choseCard();},4000) ;

    }
    return;
}
function tyme() {
    if (timer > 0) {
        timer--;
        var timeout = document.getElementById('timer');
        timeout.value = timer;
    }
    if (timer == 0) {
        timer--;
        if(game == 'memory'){
            choseCard();
            return;
        }
        hide();
        return;
    }
}
function startTheClock() {
    reset = setInterval(function () {
        var timetable = document.getElementById('timer');
        ElapsedTime += 0.25;
        if (ElapsedTime % 1 == 0) {
            timetable.value = Math.round(ElapsedTime);
        }
    }, 250);
}
function endgame() {
    matchCount = 0;
    timer = 11;
    timer = 11;
    clearInterval(reset);
    if(game != 'memory'){
        if (ElapsedTime < 300) {
            scoreMessage = "Base Score: "+score+"  Multipliers: (1.5)";
            score *= 1.5;  
        }
        if (ElapsedTime < 290) {
            score *= 1.5;
            scoreMessage += "(1.5)";
        }
        if (ElapsedTime < 280) {
            score *= 1.5;
            scoreMessage += "(1.5)";
        }
        if (ElapsedTime < 270) {
            score *= 1.5;
            scoreMessage += "(1.5)";
        }
        if (ElapsedTime < 260) {
            score *= 1.5;
            scoreMessage += "(1.5)";
        }
        if (ElapsedTime < 200) {
            score *= 3;
            scoreMessage += "(3)";
        }
        
    }
    scoreMessage = "Score: "
    var gameover = document.getElementById('clear');
    var row = "<div id=\"end\"><table class=\"gamestats\"><th colspan=\"2\" style=\"text-align: center\">Game Over</th><th><select hidden name=\"Difficulty\" id=\"fDifficulty\"><option type=\"number\" value=\"1\">Hard</option><option type=\"number\" value=\"1\">Easy</option></select><button class=\"button\" onclick=\"location.reload();\">Main Menu</button>";
    row += "<tr><td>"+scoreMessage+"</td><td id=\"score\">" +"Final Score: "+ Math.round(score) + "</td</tr>";
    row += "<tr><td>Total Match attempts: "+ (moves / 2) +"</td><td></td</tr>";
    row += "<tr><td>Time Elapsed: "+ ElapsedTime + " seconds</td><td id=\"Timeelapsed\"></td</tr></table>" + '<img src="Cards/aces.png" id="menucard" alt="guess" width="100px"></img></div>';
    gameover.innerHTML = '';
    gameover.innerHTML += row;
}
//----------------------------------------------------------BlackJack-------------------------------
//-----------------
//-----------------
//----------------- 
//-----------------
//-----------------
var Bankroll = 500; //Player's cash
var NPC_Score = 0; //Computer's score
var Player_Score = 0;
var NPC_DivID = "NPC_DivID";
var NPC_TableID = "NPC_TableID";
function PlayBlackJack() {
    var body = document.getElementById("clear");
    var DealerTable = "<div class=\"container\" style=\"text-align: left;\"><tr><td><img src=\"Cards/1r230fb554lc3rs.png\" class=\"menucard\" alt=\"guess\" width=\"150px\"> <img src=\"Cards/x1pv3etrh0dzwzw.png\" class\"menucard\" width=\"150px\"></td></tr></img></table></div>";
    body.innerHTML = '';
    body.innerHTML += DealerTable;
}
//-----------------
//-----------------
//----------------- 
//-----------------
//-----------------
//----------------------------------------------------------BlackJack-------------------------------
//-----------------
//-----------------
//----------------- 
//-----------------
//-----------------


function startMemory(){
    game = 'memory';
    var body = document.getElementById('clear');
    body.innerHTML = '';
    Hard();
    var resettimmer = setInterval(tyme, 1000);
    
}
function choseCard(){
 shuffle(Memory);
 computerTurn = true;
 box = [];

 var flips = level;

 while(flips>=0){
    box.push(Memory[flips])

     flips--;
 } 
 recurs();
}

var x = level;
// recursive function to flip cards one at a time to present the order to the player to attempt to repeat.

function recurs(){
    computerTurn= true;
    if(x == level){
        computerKey= "a";
    }
    
    if(x < 0){
        computerTurn = false;
        playerKey = 'a';
        x = level;
        return null;
    }
    console.log("looking for Id: "+box[x])
   flip(box[x]);
   x--;
   
   setTimeout(function(){return recurs(); }, 1000);
}

function check(){
    console.log("calling check()")
    if(computerKey == playerKey) { score+= 10 * scoreMultiplier * level; scoreMultiplier++; level++; x++}
    if(computerKey != playerKey) { 
        score -=5; scoreMultiplier = 1;
        lives--; 
        
    }
    (score<0)? score=0: null;
    (lives==0) ? endgame() : null;
  
    setTimeout(function(){hide();},1200);
}


//-----------------
//-----------------
//----------------- 
//-----------------
//-----------------
//----------------------------------------------------------Memory----------------------------------
//----------------------------------------------------------Memory----------------------------------