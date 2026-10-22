/* Modo apresentação: slides lado a lado, navegação por teclado, notas e cronômetro. */
(function () {
  'use strict';

  var W = 1440, H = 810, TOPBAR = 40;
  var deck = document.getElementById('deck');
  var view = document.getElementById('view');
  var slides = Array.prototype.slice.call(deck.querySelectorAll('.slide'));
  var total = slides.length;
  var notasEl = document.getElementById('notes');
  var notasH = document.getElementById('notes-h');
  var notasT = document.getElementById('notes-t');
  var counter = document.getElementById('counter');
  var btnPrev = document.getElementById('prev');
  var btnNext = document.getElementById('next');
  var blkEl = document.getElementById('blk');
  var timerEl = document.getElementById('timer');
  var NOTAS = window.NOTAS || {};

  /* Blocos para o cronômetro (slide inicial, nome). */
  var BLOCOS = [
    [1, 'Abertura · Rômulo'], [6, 'Bloco 1 · Guilherme'], [8, 'Bloco 2 · Kaua'],
    [10, 'Bloco 3 · Vinicius'], [14, 'Bloco 4 · Kaique'], [16, 'Bloco 5 · Gabriel'],
    [19, 'Bloco 6 · Kawan'], [22, 'Bloco 7 · Marcelo'], [26, 'Bloco 8 · Gabriel e Kaique'],
    [29, 'Bloco 9 · Eduardo'], [34, 'Fechamento · Rômulo']
  ];

  var atual = 0, scale = 1;

  slides.forEach(function (s, i) {
    if (NOTAS[i + 1]) s.setAttribute('data-notas', NOTAS[i + 1]);
  });

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  function blocoDe(i) {
    var b = 0;
    for (var k = 0; k < BLOCOS.length; k++) if (i + 1 >= BLOCOS[k][0]) b = k;
    return b;
  }

  /* ---------- escala e posição ---------- */
  function layout() {
    var notasAberto = !notasEl.hidden;
    var nh = notasAberto ? notasEl.offsetHeight : 0;
    var aw = window.innerWidth, ah = window.innerHeight - TOPBAR - nh;
    scale = Math.min(aw / W, ah / H);
    view.style.width = Math.floor(W * scale) + 'px';
    view.style.height = Math.floor(H * scale) + 'px';
    document.getElementById('stage').style.bottom = nh + 'px';
    posicionar(true);
  }

  function posicionar(semAnimar) {
    if (semAnimar) deck.style.transition = 'none';
    deck.style.transform = 'translateX(' + (-atual * W * scale) + 'px) scale(' + scale + ')';
    if (semAnimar) { void deck.offsetWidth; deck.style.transition = ''; }
  }

  function ir(i) {
    atual = Math.max(0, Math.min(total - 1, i));
    posicionar(false);
    counter.textContent = pad(atual + 1) + ' / ' + total;
    btnPrev.disabled = atual === 0;
    btnNext.disabled = atual === total - 1;
    try { history.replaceState(null, '', '#' + (atual + 1)); } catch (e) { /* file:// restrito */ }
    atualizarNotas();
    atualizarTimer();
  }

  /* ---------- notas ---------- */
  function atualizarNotas() {
    notasH.textContent = 'Slide ' + (atual + 1) + ' · ' + BLOCOS[blocoDe(atual)][1];
    notasT.textContent = slides[atual].getAttribute('data-notas') || '[REVISAR] Sem nota para este slide.';
  }

  function alternarNotas() {
    notasEl.hidden = !notasEl.hidden;
    layout();
  }

  /* ---------- cronômetro (tempo acumulado por bloco) ---------- */
  var decorrido = BLOCOS.map(function () { return 0; });
  var rodando = false, ultimo = 0, tick = null;

  function atualizarTimer() {
    var b = blocoDe(atual), s = Math.floor(decorrido[b] / 1000);
    blkEl.textContent = BLOCOS[b][1];
    timerEl.textContent = pad(Math.floor(s / 60)) + ':' + pad(s % 60);
    timerEl.classList.toggle('run', rodando);
  }

  function contar() {
    var agora = Date.now();
    decorrido[blocoDe(atual)] += agora - ultimo;
    ultimo = agora;
    atualizarTimer();
  }

  function iniciar() {
    if (rodando) return;
    rodando = true; ultimo = Date.now();
    tick = setInterval(contar, 250);
    atualizarTimer();
  }

  function pausar() {
    if (!rodando) return;
    contar(); rodando = false; clearInterval(tick);
    atualizarTimer();
  }

  function zerar() {
    decorrido = BLOCOS.map(function () { return 0; });
    ultimo = Date.now();
    atualizarTimer();
  }

  /* contabiliza o tempo no bloco antigo antes de trocar de slide */
  function navegar(i) {
    if (rodando) contar();
    ir(i);
  }

  /* ---------- tela cheia ---------- */
  function telaCheia() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  }

  /* ---------- eventos ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown' || (k === ' ' && !e.shiftKey)) navegar(atual + 1);
    else if (k === 'ArrowLeft' || k === 'PageUp' || (k === ' ' && e.shiftKey)) navegar(atual - 1);
    else if (k === 'Home') navegar(0);
    else if (k === 'End') navegar(total - 1);
    else if (k === 'f' || k === 'F') telaCheia();
    else if (k === 'n' || k === 'N') alternarNotas();
    else if (k === 's' || k === 'S') iniciar();
    else if (k === 'p' || k === 'P') pausar();
    else if (k === 'r' || k === 'R') zerar();
    else return;
    e.preventDefault();
  });

  view.addEventListener('click', function (e) {
    var r = view.getBoundingClientRect();
    navegar((e.clientX - r.left) < r.width / 3 ? atual - 1 : atual + 1);
  });
  btnPrev.addEventListener('click', function () { navegar(atual - 1); });
  btnNext.addEventListener('click', function () { navegar(atual + 1); });

  /* deslizar no toque */
  var x0 = null;
  view.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  view.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) { navegar(atual + (dx < 0 ? 1 : -1)); e.preventDefault(); }
  });

  window.addEventListener('resize', layout);
  document.addEventListener('fullscreenchange', layout);
  window.addEventListener('hashchange', function () {
    var n = parseInt(location.hash.slice(1), 10);
    if (n && n - 1 !== atual) navegar(n - 1);
  });

  var inicial = parseInt(location.hash.slice(1), 10);
  atual = inicial >= 1 && inicial <= total ? inicial - 1 : 0;
  layout();
  ir(atual);
})();
