"use strict";
var Deck = [
  "Cards/rz5ojxtoakhu2ft.png1865",
  "Cards/t7zhvddch4nqbvv.png726",
  "Cards/pub80kivfhyy2my.png730",
  "Cards/cvqpc2hswj0p4f8.png1773",
  "Cards/5hhk92dk0y3a58w.png1089",
  "Cards/2okjy7jm4jyfqcd.png1872",
  "Cards/c0jei2n4ub2dl85.png1485",
  "Cards/c5dv4cai8mnnizy.png1254",
  "Cards/3cx8vs6v5ul29z6.png1261",
  "Cards/9afydvaf4na3854.png157",
  "Cards/8t5z2ky7tzns67u.png1803",
  "Cards/4vnfjyqto2qbpmx.png1149",
  "Cards/3d5u840q24jjdpv.png690",
  "Cards/3imo0te0xel0w8k.png1865",
  "Cards/fc6le4ueaybp37h.png726",
  "Cards/qa8iksszesvmf2j.png730",
  "Cards/mewffdhyfrlb12u.png1773",
  "Cards/t7f4hvt61len90n.png1089",
  "Cards/pkk6o4sl5xsyfwv.png1872",
  "Cards/uyvxrjt082a4yo5.png1485",
  "Cards/nklonrek9njkcpo.png1254",
  "Cards/rzqrskjr6b5iatt.png1261",
  "Cards/su8j3of1wsfo8mh.png157",
  "Cards/pxcxtqj2yo8uyo7.png1803",
  "Cards/5v23nk53qm1qn8d.png1149",
  "Cards/neey4dyouoqnnk5.png690",
  "Cards/p8uqe087aeouwy2.png1865",
  "Cards/keyf8pcelprejqy.png726",
  "Cards/upi0n11enckc7ky.png730",
  "Cards/xs5yx9cnujlrsma.png1773",
  "Cards/wzk4ib1y7of67uu.png1089",
  "Cards/rul8rzt82l4ckyi.png1872",
  "Cards/uc31plr5p360e3u.png1485",
  "Cards/30vdw6woyxhst1.png1254",
  "Cards/qfbdmp4p1d48u7o.png1261",
  "Cards/szv6mu4ftxok85i.png157",
  "Cards/o7ombx70yfdvukx.png1803",
  "Cards/ks52yyjcvzk05jh.png1149",
  "Cards/wv09vn1f8ivnf0a.png690",
  "Cards/v7zk0jynjdtdmjm.png1865",
  "Cards/1356u17a4ay0u7z.png726",
  "Cards/0xlbfx6ekn5nse6.png730",
  "Cards/ilokmffhy6vr5xc.png1773",
  "Cards/cmw0yhjybj3bjn7.png1089",
  "Cards/1jv51xi5xk4ciri.png1872",
  "Cards/mc5bly0qhienxtp.png1485",
  "Cards/abfft195hq0qayi.png1254",
  "Cards/cjoyuea9ljhvj2s.png1261",
  "Cards/1r230fb554lc3rs.png157",
  "Cards/lo1n8xk4ohqljpd.png1803",
  "Cards/khmn5m0ccb7ilty.png1149",
  "Cards/x1pv3etrh0dzwzw.png690"
];
var DeckClone = Deck;

let Memory = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52
];

var difficulty = 1;
var cardCount = 0;
var grabCard = false;
var NameofCard = "";
var cardValue = null;
var score = 0;
var firstId;
var scoreMultiplier = 1;
var timer = 11;
var matchCount = 0;
var moves = 0;
var ElapsedTime = 0;
var reset;
var scoreMessage = "Score: ";
var game;
var level = 1;
var box = [];
var computerTurn;
var computerKey;
var playerKey;
var lives = 3;
var playerClicks = 0;
var FlipSingle = new Audio("Cards/cardflip.wav");
var FlipAll = new Audio("Cards/FlipAll.wav");
function shuffle(e) {
  var r, a, t;
  for (t = e.length - 1; t > 0; t--) {
    r = Math.floor(Math.random() * (t + 1));
    a = e[t];
    e[t] = e[r];
    e[r] = a;
  }
  return e;
}
function createNewGame() {
  score = 0;
  matchCount = 0;
  ElapsedTime = 0;
  difficulty = document.getElementById("fDifficulty").value;
  var e = document.getElementById("clear");
  e.innerHTML = "";
  if (difficulty == 1) {
    Hard();
    cardCount = 0;
  }
  if (difficulty == 2) {
    Medium();
    cardCount = 0;
  }
  gameMenue();
  var r = setInterval(tyme, 1e3);
  if (timer == -1) {
    clearInterval(r);
  }
}
function gameMenue() {
  var e = document.getElementById("clear");
}
function Hard() {
  shuffle(Deck);
  var e = document.getElementById("clear");
  var r =
    '<div  class="container-top"><label for="timer">Time:</label> <input id="timer" class="input" type="number" readonly><br><label for="multiplier">Multiplier:</label> <input id="multiplier" class="input" type="number" readonly value="1"><br><label for=" score">Score:</label><input id="score" class="input" type="number" readonly value="0"><br>' +
    (game == "memory"
      ? '<label for="lives">lives</label><input id="lives" class="input" type="number" readonly value="3"><button id="start" class"bt" onclick="recurs()">Hint</button>'
      : " ") +
    '</div><div class ="container"><div>';
  var a = "";
  var t = Deck.length;
  for (var n = 0; Deck.length > n; n++) {
    --t;
    cardCount++;
    var c = Deck[n].lastIndexOf("g") + 1;
    var i = Deck[n].slice(0, c);
    var s = Deck[n].substring(c, Deck[n].length);
    if (game == "memory") {
      if (t % 13 != 0) {
        r +=
          "<img src='Cards/backofcard.png' name=\"" +
          i +
          '" alt="guess" width="80px" class="' +
          s +
          '" type="number" id="' +
          cardCount +
          '" onclick="flip(' +
          cardCount +
          ')"></img>';
      }
      if (t % 13 == 0) {
        r +=
          "<img src='Cards/backofcard.png' name=\"" +
          i +
          '" alt="guess" width="80px" class="' +
          s +
          '" type="number" id="' +
          cardCount +
          '" onclick="flip(' +
          cardCount +
          ')"></img></div><div>';
      }
    }
    if (game != "memory") {
      if (t % 13 != 0) {
        r +=
          "<img src='" +
          i +
          "' name=\"" +
          i +
          '" alt="guess" width="80px" class="' +
          s +
          '" type="number" id="' +
          cardCount +
          '" onclick="flip(' +
          cardCount +
          ')"></img>';
      }
      if (t % 13 == 0) {
        r +=
          "<img src='" +
          i +
          "' name=\"" +
          i +
          '" alt="guess" width="80px" class="' +
          s +
          '" type="number" id="' +
          cardCount +
          '" onclick="flip(' +
          cardCount +
          ')"></img></div><div>';
      }
    }
  }
  e.innerHTML += r + "</div></div></button>";
}
function Medium() {
  shuffle(DeckClone2);
  console.log("shuffled success");
  var e = document.getElementById("clear");
  var r = "<div>";
  var a = DeckClone2.length;
  for (var t = 0; DeckClone2.length > t; t++) {
    --a;
    cardCount++;
    var n = DeckClone2[t].lastIndexOf("g") + 1;
    var c = DeckClone2[t].slice(0, n);
    if (a % 26 != 0) {
      r +=
        "<img src='" +
        c +
        "' name=\"" +
        c +
        '" alt="guess" width="50px"  type="string" id="' +
        cardCount +
        '" onclick="flip(' +
        cardCount +
        ')"></img>';
    }
    if (a % 26 == 0) {
      r +=
        '<img src="' +
        c +
        '" name="' +
        c +
        '"  alt="guess" width="50px"  type="string" id="' +
        cardCount +
        ' onclick="flip(' +
        cardCount +
        ')"></img></div><div>';
    }
  }
  e.innerHTML += r;
}
function hide() {
  var e = document.getElementById("clear").outerHTML;
  var r = document.getElementById("clear");
  r.innerHTML = "";
  if (game != "memory") {
    score = 0;
  }
  if (difficulty == 1) {
    for (var a = 0; DeckClone.length > a; a++) {
      var t = DeckClone[a].lastIndexOf("g") + 1;
      var n = DeckClone[a].slice(0, t);
      var c = e.replace('src="' + n + '"', 'src="Cards/backofcard.png"');
      r.innerHTML = c;
      e = c;
    }
  }
  if (difficulty == 2) {
    for (var a = 0; DeckClone2.length > a; a++) {
      var t = DeckClone2[a].lastIndexOf("g") + 1;
      var n = DeckClone2[a].slice(0, t);
      var c = e.replace('src="' + n + '"', 'src="Cards/backofcard.png"');
      r.innerHTML = c;
      e = c;
    }
  }
  var i = document.getElementById("score");
  i.value = score;
  var s = document.getElementById("lives");
  s.value = lives;
  var d = document.getElementById("multiplier");
  d.value = scoreMultiplier;
  FlipAll.play();
}
function flip(e) {
  if (ElapsedTime == 0 && game != "memory") {
    startTheClock();
  }
  var r = document.getElementById(e).outerHTML;
  var a = document.getElementById(e).name;
  var t = document.getElementById(e);
  var n = document.getElementById(e).className;
  var c = document.getElementById("multiplier");
  moves++;
  if (r.includes("Cards/backofcard.png")) {
    var i = r.replace("Cards/backofcard.png", a);
    var s = document.getElementById(e).className;
    t.outerHTML = i;
    grabCard = !grabCard;
    console.log(grabCard);
    FlipSingle.play();
    if (grabCard == false && cardValue == s && game != "memory") {
      var d = document.getElementById("score");
      var o = document.getElementById(firstId);
      score += 10 * scoreMultiplier;
      scoreMultiplier++;
      c.value = scoreMultiplier;
      matchCount++;
      if (matchCount > 25) {
        endgame();
      }
      var l = document.getElementById(e);
      var u = document.getElementById(firstId);
      setTimeout(function() {
        l.outerHTML =
          '<img src=\'Cards/gray.png\' alt="guess" width="80px" class="clear-img" id="' +
          e +
          '"></img>';
        u.outerHTML =
          '<img src=\'Cards/gray.png\'alt="guess" width="80px" class="clear-img"  id="' +
          firstId +
          '" ></img>';
        d.value = score;
      }, 1e3);
      cardValue = null;
      return;
    }
    if (grabCard == false && cardValue != s && game != "memory") {
      var m = document.getElementById(e);
      var p = document.getElementById(e).name;
      var v = document.getElementById(e).outerHTML;
      var f = document.getElementById(firstId);
      var g = document.getElementById(firstId).name;
      var C = document.getElementById(firstId).outerHTML;
      scoreMultiplier = 1;
      c.value = scoreMultiplier;
      setTimeout(function() {
        m.outerHTML = v.replace(p, "Cards/backofcard.png");
        f.outerHTML = C.replace(g, "Cards/backofcard.png");
        var e = document.getElementById("score");
        if (score > 0) {
          score -= 1;
          e.value = score;
        }
      }, 1e3);
    }
    if (game == "memory" && computerTurn == true) {
      var m = document.getElementById(e);
      var p = document.getElementById(e).name;
      var v = document.getElementById(e).outerHTML;
      if (computerTurn == true) {
        computerKey += e;
      }
      setTimeout(function() {
        m.outerHTML = v.replace(p, "Cards/backofcard.png");
        FlipSingle.play();
        var e = document.getElementById("score");
      }, level * 1200);
    }
    if (game == "memory" && computerTurn == false) {
      var m = document.getElementById(e);
      var p = document.getElementById(e).name;
      var v = document.getElementById(e).outerHTML;
      playerKey += e;
      playerClicks++;
    }
    firstId = e;
    cardValue = n;
  }
  if (!r.includes("Cards/backofcard.png")) {
    return null;
  }
  if (playerClicks == level + 1) {
    playerClicks = 0;
    check();
    setTimeout(function() {
      return choseCard();
    }, 4e3);
  }
  return;
}
function tyme() {
  if (timer > 0) {
    timer--;
    var e = document.getElementById("timer");
    e.value = timer;
  }
  if (timer == 0) {
    timer--;
    if (game == "memory") {
      choseCard();
      return;
    }
    hide();
    return;
  }
}
function startTheClock() {
  reset = setInterval(function() {
    var e = document.getElementById("timer");
    ElapsedTime += 0.25;
    if (ElapsedTime % 1 == 0) {
      e.value = Math.round(ElapsedTime);
    }
  }, 250);
}
function endgame() {
  matchCount = 0;
  timer = 11;
  timer = 11;
  clearInterval(reset);
  if (game != "memory") {
    if (ElapsedTime < 300) {
      scoreMessage = "Base Score: " + score + "  Multipliers: (1.5)";
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
  scoreMessage = "Score: ";
  var e = document.getElementById("clear");
  var r =
    '<div id="end"><table class="gamestats"><th colspan="2" style="text-align: center">Game Over</th><th><select hidden name="Difficulty" id="fDifficulty"><option type="number" value="1">Hard</option><option type="number" value="1">Easy</option></select><button class="button" onclick="location.reload();">Main Menu</button>';
  r +=
    "<tr><td>" +
    scoreMessage +
    '</td><td id="score">' +
    "Final Score: " +
    Math.round(score) +
    "</td</tr>";
  r += "<tr><td>Total Match attempts: " + moves / 2 + "</td><td></td</tr>";
  r +=
    "<tr><td>Time Elapsed: " +
    ElapsedTime +
    ' seconds</td><td id="Timeelapsed"></td</tr></table>' +
    '<img src="Cards/aces.png" id="menucard" alt="guess" width="100px"></img></div>';
  e.innerHTML = "";
  e.innerHTML += r;
}
var Bankroll = 500;
var NPC_Score = 0;
var Player_Score = 0;
var NPC_DivID = "NPC_DivID";
var NPC_TableID = "NPC_TableID";
function PlayBlackJack() {
  var e = document.getElementById("clear");
  var r =
    '<div class="container" style="text-align: left;"><tr><td><img src="Cards/1r230fb554lc3rs.png" class="menucard" alt="guess" width="150px"> <img src="Cards/x1pv3etrh0dzwzw.png" class"menucard" width="150px"></td></tr></img></table></div>';
  e.innerHTML = "";
  e.innerHTML += r;
}
function startMemory() {
  game = "memory";
  var e = document.getElementById("clear");
  e.innerHTML = "";
  Hard();
  var r = setInterval(tyme, 1e3);
}
function choseCard() {
  shuffle(Memory);
  computerTurn = true;
  box = [];
  var e = level;
  while (e >= 0) {
    box.push(Memory[e]);
    e--;
  }
  recurs();
}
var x = level;
function recurs() {
  computerTurn = true;
  if (x == level) {
    computerKey = "a";
  }
  if (x < 0) {
    computerTurn = false;
    playerKey = "a";
    x = level;
    return null;
  }
  console.log("looking for Id: " + box[x]);
  flip(box[x]);
  x--;
  setTimeout(function() {
    return recurs();
  }, 1e3);
}
function check() {
  console.log("calling check()");
  if (computerKey == playerKey) {
    score += 10 * scoreMultiplier * level;
    scoreMultiplier++;
    level++;
    x++;
  }
  if (computerKey != playerKey) {
    score -= 5;
    scoreMultiplier = 1;
    lives--;
  }
  score < 0 ? (score = 0) : null;
  lives == 0 ? endgame() : null;
  setTimeout(function() {
    hide();
  }, 1200);
}

function startmathland() {
  var mathbody = document.getElementById("clear");
  mathbody.innerHTML =
    '<div id="containerHead"><h1>Math Land</h1><div><select id="mathdifficulty"><option value="3">Easy</option><option value="6">Hard</option><option value="9" hidden>Hard</option></select><select id="mathgame"><option value="1">Addition x + y</option><option value="2">Subtraction x - y</option><option value="3">Multiplication x * y</option><option value="4">Division x / y</option><option value="5">Squares x^2</option><option value="6">SquareRoots x^1/2</option></select><label for="timeAttack">Time Attack Mode</label><input id="timeAttack" type="checkbox"><button onclick="Start()">Start Math Land!</button></div><h4 hidden>Click the equation that evaluates to <span> 6</span>?</h4></div><div id="container"></div><div id="bottom"></div>';
}

var mathdifficulty;
var goal;
var score = 0;
var mathbonus = 1;
var percent = 0;
var mathlevel = 1;
var mathgame = 3;
var initiated = false;
var flashCards = [];
var shuffledFlashCards = [];
var timeAttack = false;
var mathmode = "easy";
function createMultiplicationDeck() {
  flashCards = [];
  for (var i = 0; i <= 9; i++) {
    var x = RandomNumber(mathlevel + 5);
    var y = RandomNumber(mathlevel + 5);
    flashCards.push({ text: x + "<br> x <br>" + y, answer: x * y });
  }
}
function createAdditionDeck() {
  flashCards = [];
  var inc = mathlevel + 1;
  for (var i = 0; i <= 9; i++) {
    var x = RandomNumber(Math.pow(2, inc));
    var y = RandomNumber(Math.pow(2, inc));
    flashCards.push({ text: x + "<br> + <br>" + y, answer: x + y });
  }
}
function createSubtractionDeck() {
  var inc = mathlevel + 1;
  flashCards = [];
  for (var i = 0; i <= 9; i++) {
    var x = RandomNumber(Math.pow(2, inc));
    var y = RandomNumber(Math.pow(2, inc));
    flashCards.push({ text: x + "<br> - <br>" + y, answer: x - y });
  }
}
function createDivisionDeck() {
  var inc = mathlevel + 1;
  flashCards = [];
  for (var i = 0; i <= 450; i++) {
    var x = RandomNumber(Math.pow(2, inc));
    var y = RandomNumber(mathlevel * 9);
    if (x % y != 0) {
      x = RandomNumber(Math.pow(2, inc));
      y = RandomNumber(10);
    }
    if (x % y == 0) {
      if (y > 1 || mathlevel == 1) {
        flashCards.push({ text: x + "<br> / <br>" + y, answer: x / y });
      }
    }
  }
}
function createSqrDeck() {
  var inc = mathlevel + 1;
  flashCards = [];
  for (var i = 0; i <= 9; i++) {
    var x = RandomNumber(Math.pow(2, inc));
    flashCards.push({ text: x + "^2", answer: x * x });
  }
}
function createSqrRtDeck() {
  var inc = mathlevel + 1;
  flashCards = [];
  for (var i = 0; i <= 9; i++) {
    x = RandomNumber(Math.pow(2, inc));
    flashCards.push({ text: x * x + "^1/2", answer: x });
  }
}
/*function load() {
  var click = 1;
  var color = [
    "black",
    "blue",
    "orange",
    "purple",
    "plum",
    "navy",
    "roualblue"
  ];
  document.querySelector("button").addEventListener("click", function() {
    if (click > 5) {
      click = 0;
    }
    console.log(color[click]);
    document.body.style.background = color[click];
    click++;
  });
}*/
function RandomNumber(int) {
  return Math.floor(Math.random() * int + 1);
}
function Start() {
  mathgame = document.querySelector("#mathgame").value;
  timeAttack = document.querySelector("#timeAttack").checked;
  switch (mathgame) {
    case "1":
      createAdditionDeck();
      break;
    case "2":
      createSubtractionDeck();
      break;
    case "3":
      createMultiplicationDeck();
      break;
    case "4":
      createDivisionDeck();
      break;
    case "5":
      createSqrDeck();
      break;
    case "6":
      createSqrRtDeck();
  }
  mathdifficulty = document.querySelector("#mathdifficulty").value;
  switch (mathdifficulty) {
    case "3":
      mathmode = "Easy";
      break;
    case "6":
      mathmode = "Hard";
      break;
    case "9":
      mathmode = "Hard";
  }
  var container = document.querySelector("#container");
  var contents = "";
  shuffledFlashCards = shuffle(flashCards);
  goal = shuffledFlashCards[RandomNumber(mathdifficulty)].answer;
  document.querySelector("span").textContent = goal;
  document.querySelector("h4").hidden = false;
  for (var i = 1; i <= mathdifficulty; i++) {
    contents +=
      '<div class="square"></input><p id="sqr' +
      i +
      '" onclick="compareAnswer(' +
      i +
      ')"><input id="' +
      i +
      '" type="number" value="' +
      shuffledFlashCards[i].answer +
      '" readonly hidden>' +
      shuffledFlashCards[i].text +
      "</p></div>";
  }
  container.innerHTML = contents;
  container.innerHTML +=
    '<div id="tracker"><div><label>Score: </label><input id="score" readonly type="number"></div><div><label>Level: </lable><input id="mathlevel" readonly type="number"></div></div>';
  document.getElementById("score").value = score;
  document.getElementById("mathlevel").value = mathlevel;
  if (timeAttack && !initiated) {
    initiated = true;
    percent = 50;
    document.getElementById("bottom").style.height = percent + "%";
    document.getElementById("bottom").style.backgroundColor = "greenyellow";
    setInterval(function() {
      switch (mathdifficulty) {
        case "3":
          percent -= 2;
          break;
        case "6":
          percent -= 4.5;
          break;
        case "9":
          percent -= 7;
      }
      percent -= mathlevel * 0.25;
      document.getElementById("bottom").style.height = percent + "%";
      console.log(percent);
      if (percent <= 0) {
        document.getElementById("bottom").style.height = "0%";
        mathgameOver();
      }
    }, 1e3);
  }
}
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

function compareAnswer(number) {
  var myAnswer = document.getElementById(number).value;
  if (myAnswer == goal) {
    if (
      document.getElementById("sqr" + number).style.backgroundColor == "green"
    ) {
      return;
    }
    document.getElementById("sqr" + number).style.backgroundColor = "green";
    score += 10 * mathbonus * mathlevel * (mathdifficulty / 3);
    mathbonus++;
    document.getElementById("score").value = score;
    percent += 25;
    document.getElementById("bottom").style.height = percent + "%";
    if (percent >= 100) {
      mathlevel++;
      if (!timeAttack) {
        document.getElementById("bottom").style.height = "0%";
        percent = 0;
        document.getElementById("mathlevel").value = mathlevel;
      } else {
        document.getElementById("bottom").style.height = "50%";
        percent = 50;
        document.getElementById("mathlevel").value = mathlevel;
      }
    }
    setTimeout(function() {
      Start();
    }, 500);
  } else {
    if (
      document.getElementById("sqr" + number).style.backgroundColor == "red"
    ) {
      return;
    }
    score -= 5;
    mathbonus = 1;
    if (score < 0) {
      score = 0;
    }

    document.getElementById("score").value = score;
    document.getElementById("sqr" + number).style.backgroundColor = "red";
    if (percent < 10) {
      return;
    }
    percent -= 10 + mathlevel * 0.25;
    console.log(`Wrong -${10 + mathlevel * 0.25}%`);
    document.getElementById("bottom").style.height = percent + "%";
  }
}
function mathgameOver() {
  var containerHead = document.querySelector("#containerHead");
  document.getElementById("bottom").style.backgroundColor = "rgb(23, 23, 23)";
  containerHead.innerHTML = "";
  var container = document.querySelector("#container");
  var row = "<h1>";
  row += "Difficulty Mode: " + mathmode;
  row += "<br> Score: " + score;
  row += "<br>Highest Level Reached: " + mathlevel;
  row += "</h1>";
  row += '<button onclick="document.location.reload()">New Game</button>';
  container.innerHTML = row;
}
