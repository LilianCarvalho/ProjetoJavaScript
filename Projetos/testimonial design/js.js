var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var btnFour = document.getElementById('4')
var btnFive = document.getElementById('b5')
var textd = document.getElementById('textd')
var texta = document.getElementById('texta')
var body = document.querySelector('body')

body.className = "b1"
textd.innerHTML = ("I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!")
texta = ("ARTHUR BIRNBAUM")

b1.onclick = function(){
    body.className = "b1"
    textd.innerHTML = ("I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!")
    texta.innerHTML = ("ARTHUR BIRNBAUM")
}

    b2.onclick = function(){
    body.className = "b2";
    textd.innerHTML = ("Second time hiring him. Finished everything in a timely manner and his work is excellent. Can't recommend him enough.")
    texta.innerHTML = ("PHOEBE KOTLIAR")
  }
  b3.onclick = function(){
    body.className = "b3";
    textd.innerHTML = ("Alexandru Florin never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Alexandru even when deadlines are tight and pressure is great. It's reassuring to have a project in such good hands.")
    texta.innerHTML = ("LOUISA P. HUARD")
  }
  
  b4.onclick = function(){
    body.className = "b4";
    textd.innerHTML = ("Florin has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.")
    texta.innerHTML = ("CRISTINA AURMOOGUM")
  }
  b5.onclick = function(){
    body.className = "b5";
    textd.innerHTML = ("I hired Florin Pop based on others positive experiences, and I understand why he's so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.")
    texta.innerHTML = ("J. KENT PEPPER")
  } 