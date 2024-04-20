let p = document.getElementsByTagName("p")[0];
let p2 = document.getElementsByTagName("p")[1];
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");
let timer;
let y = 50;
let started = false;

let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note3 = document.getElementById("note3");
let note4 = document.getElementById("note4");
let note5 = document.getElementById("note5");
let note6 = document.getElementById("note6");
let note7 = document.getElementById("note7");
let note8 = document.getElementById("note8");
let note9 = document.getElementById("note9");
let note10 = document.getElementById("note10");
let note11 = document.getElementById("note11");
let note12 = document.getElementById("note12");
let note13 = document.getElementById("note13");
let note14 = document.getElementById("note14");
let note15 = document.getElementById("note15");
let note16 = document.getElementById("note16");
let note17 = document.getElementById("note17");
let note18 = document.getElementById("note18");
let note19 = document.getElementById("note19");
let note20 = document.getElementById("note20");
let note21 = document.getElementById("note21");
let note22 = document.getElementById("note22");
let note23 = document.getElementById("note23");
let note24 = document.getElementById("note24");

note1.onclick = (e) => tocarNota(e.target);
note2.onclick = (e) => tocarNota(e.target);
note3.onclick = (e) => tocarNota(e.target);
note4.onclick = (e) => tocarNota(e.target);
note5.onclick = (e) => tocarNota(e.target);
note6.onclick = (e) => tocarNota(e.target);
note7.onclick = (e) => tocarNota(e.target);
note8.onclick = (e) => tocarNota(e.target);
note9.onclick = (e) => tocarNota(e.target);
note10.onclick = (e) => tocarNota(e.target);
note11.onclick = (e) => tocarNota(e.target);
note12.onclick = (e) => tocarNota(e.target);
note13.onclick = (e) => tocarNota(e.target);
note14.onclick = (e) => tocarNota(e.target);
note15.onclick = (e) => tocarNota(e.target);
note16.onclick = (e) => tocarNota(e.target);
note17.onclick = (e) => tocarNota(e.target);
note18.onclick = (e) => tocarNota(e.target);
note19.onclick = (e) => tocarNota(e.target);
note20.onclick = (e) => tocarNota(e.target);
note21.onclick = (e) => tocarNota(e.target);
note22.onclick = (e) => tocarNota(e.target);
note23.onclick = (e) => tocarNota(e.target);
note24.onclick = (e) => tocarNota(e.target);

function tocarNota(elemento) {
  let numero = elemento.id.split("note")[1];
  let audio = new Audio(`./notas/${27 + parseInt(numero)}.mp3`);
  elemento.style.transform = "translateY(2%)";
  audio.play();
  if (elemento.classList.contains("note-flat")) {
    elemento.style.background = "rgba(0, 0, 0, 0.2)";
    setTimeout(() => {
      elemento.style.transform = "translateY(0%)";
      elemento.style.background = "rgb(255, 255, 255)";
    }, 150);
  } else {
    elemento.style.background = "rgba(0, 0, 0, 0.8)";
    setTimeout(() => {
      elemento.style.background = "rgb(0, 0, 0)";

      elemento.style.transform = "translateY(0%)";
    }, 150);
  }
}

consEstrFina =
  "0.007297352569308359083124473942369989152421837597517995075663211359848156432425637024941273725107916534";

p.innerText = consEstrFina;

let numConsEstr = consEstrFina.split(".")[0] + consEstrFina.split(".")[1];
numConsEstr = numConsEstr.split("");

play.onclick = playTimer;

let id;
let xy = 0;

function playTimer() {
  timer = setInterval(() => {
    p.classList.add("moverEsquerda");
    p.classList.remove("pausa");
  }, 150);
  play.classList.add("invisible");
  pause.classList.remove("invisible");

  id = setInterval(() => {
    tocarMusica(xy);
    xy++;
  }, 500);

  if (started == false) {
    started = true;
  }
  if (started == true) {
    restart.classList.remove("invisible");
  }
}

pause.onclick = pauseTimer;

function pauseTimer() {
  clearInterval(timer);
  p.classList.add("pausa");
  pause.classList.add("invisible");
  play.classList.remove("invisible");

  clearInterval(id);
}

restart.onclick = restartTimer;

function restartTimer() {
  xy = 0;
  started = false;
  restart.classList.add("invisible");
  pauseTimer();
  p.classList.remove("moverEsquerda");
  p.classList.remove("pausa");
  p.style.transform = "translateX(50%)";
  p2.innerText = 0;
}

function tocarMusica(xy) {
  let teclas = [
    note3,
    note5,
    note7,
    note8,
    note10,
    note12,
    note14,
    note15,
    note17,
    note19,
  ];
  if (xy < numConsEstr.length) {
    tocarNota(teclas[numConsEstr[xy]]);
    p2.innerText = numConsEstr[xy];
  } else {
    setTimeout(restartTimer, 10000);
  }
}
