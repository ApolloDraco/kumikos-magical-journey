function Direction(Choice) {

  if (Choice == "left" || Choice == "right") {
    document.getElementById("result").innerHTML = "<br><br>A fairy greets you, Kumiko. Welcome to the Elder Forest.<br>Located below Cloud Valley, Elder Forest is home to many species of faries, just like me. Do you want to follow me, or return home? It is getting rather late, after all.";
    document.getElementById('left1').style.display = 'none';
    document.getElementById("right1").style.display = 'none';
    document.getElementById("escape1").style.display = 'none';
    document.getElementById("result").style.display = 'inline';
    document.getElementById('left2').style.display = 'inline';
    document.getElementById("right2").style.display = 'inline';
    document.getElementById("escape2").style.display = 'inline';
  }

  if (Choice == "escape") {
    document.getElementById("result").innerHTML = "<br>GAME OVER<br><br>";
    document.getElementById('left1').style.display = 'none';
    document.getElementById("right1").style.display = 'none';
    document.getElementById("escape1").style.display = 'none';
    document.getElementById("tryagain").style.display = 'block';
    document.getElementById("result").style.display = 'inline';
  }
}

function Direction2(Choice) {

  if (Choice == 'left2') {
    document.getElementById("result2").innerHTML = '<br>You try to return home but end up stumbling upon the faries homes, instead. You also see an entrance to Cloud Valley<br><br>Choose which way to go.<br>';
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById("result2").style.display = 'inline';
    document.getElementById("B").style.display = 'inline';
    document.getElementById("C").style.display = 'inline';

  }

  if (Choice == 'right2') {
    document.getElementById("result2").innerHTML = "<br>The fairy makes you their friend.<br><br>You're now a part of the fairy community...<br><br>Congratulations!<br>";
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById("tryagain").style.display = 'inline';
    document.getElementById("result2").style.display = 'inline';
  }

  if (Choice == 'escape2') {
    document.getElementById("result2").innerHTML = "<br>Game Over<br>";
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById("tryagain").style.display = 'inline';
    document.getElementById("result2").style.display = 'inline';
  }
}

function Direction3(Choice) {

  if (Choice == "B") {
    document.getElementById("result3").innerHTML = "<br>You approach a brilliant collection of fairy homes among the Elder Trees. Giggles and excited sparkles zip by from one tree to another.<br><br>Welcome to our home, Kumiko. You have much to learn.<br>";
    document.getElementById("B").style.display = 'none';
    document.getElementById("C").style.display = 'none';
    document.getElementById("tryagain").style.display = 'inline';
    document.getElementById("result3").style.display = 'inline';
  }

  if (Choice == "C") {
    document.getElementById("result3").innerHTML = "<br>A breathtaking kingdom full of clouds and stars appears before you. You see a sparkling castle, home to the Cloud Queen. Welcome to Cloud Valley, the Queen has been expecting you.<br><br>To be continued...<br>";
    document.getElementById("B").style.display = 'none';
    document.getElementById("C").style.display = 'none';
    document.getElementById("tryagain").style.display = 'inline';
    document.getElementById("result3").style.display = 'inline';
  }
}

function TryAgain() {
  Direction();
  document.getElementById("result3").style.display = 'none';
  document.getElementById("result4").style.display = 'none';
  document.getElementById("result5").style.display = 'none';
  document.getElementById("result6").style.display = 'none';
  document.getElementById('left1').style.display = 'inline';
  document.getElementById("right1").style.display = 'inline';
  document.getElementById("escape1").style.display = 'inline';
  document.getElementById('left2').style.display = 'none';
  document.getElementById("right2").style.display = 'none';
  document.getElementById("escape2").style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById("result2").style.display = 'none';
  document.getElementById('tryagain').style.display = 'none';
}
