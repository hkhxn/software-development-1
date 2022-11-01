window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z','1','2','3','4','5','6','7','8','9','0'];

  var categories;         
  var categorychosen;    
  var word ;              
  var guess ;             
  var guesses = [ ];      
  var lives ;           
  var count ;          
  var space;             
  var showLives = document.getElementById("mylives");


  var buttons = function () {
    myButtons = document.getElementById('alphabets');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  var selectcategory = function () {
    if (categorychosen === categories[0]) {
      category.innerHTML = "Category : Number Sequence (Primes/Composite)";
    } else if (categorychosen === categories[1]) {
      category.innerHTML = "Category : Animals";
    } else if (categorychosen === categories[2]) {
      category.innerHTML = "Category : Cities";
    }
    else if (categorychosen === categories[3]) {
      category.innerHTML = "Category : Number Sequence (Addition/Subtraction/Multiplication)";}
  }

   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space++;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
   details = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over, You Lose";
    }
    console.log(guesses.length);
    for (var i = 0; i < guesses.length; i++) {
      console.log(space);
      if (count + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
    
  }

   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          count += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        details();
      } else {
        details();
      }
    }
  }
  
  const start = Date.now();  
  play = function () {
    categories = [
        ["2 3 4 5 7 8 11 13 14 17 19 20", "2 3 5 7 11 13 14 17 19 23 29", "2 5 11 17 23 29"],
        ["polar bear", "king cobra", "hedgehog", "flamingo", "iguana", "squirrel", "hippopotamus"],
        ["tokyo", "istanbul", "seoul", "los angeles", "new york", "hong kong", "manila"],
        ["1 6 11 16 21 26", "2 4 6 8 10 12 14 16 18 20", "3 9 15 21 27", "2 5 4 7 6 9 8 11 10 13 12", "5 10 15 20 25 30"]

    ];

    categorychosen = categories[Math.floor(Math.random() * categories.length)];
    word = categorychosen[Math.floor(Math.random() * categorychosen.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    count = 0;
    space = 0;
    result();
    details();
    selectcategory();
  }
  const end = Date.now();

  play();
  

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    play();
  }
}


