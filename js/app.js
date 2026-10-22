/* Modo apresentação: slides lado a lado, efeitos de entrada, notas e cronômetro. */
(function () {
  'use strict';

  var W = 1440, H = 810, TOPBAR = 40;
  var root = document.documentElement;
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
  var prog = document.getElementById('prog');
  var NOTAS = window.NOTAS || {};
  var animar = root.classList.contains('anim');

  /* Blocos (o rótulo vem de data-bloco em cada slide), na ordem em que aparecem. */
  var blocos = [];
  var blocoDoSlide = slides.map(function (s) {
    var nome = s.getAttribute('data-bloco') || 'Aula';
    var k = blocos.indexOf(nome);
    if (k < 0) { blocos.push(nome); k = blocos.length - 1; }
    return k;
  });

  var atual = 0, scale = 1;

  slides.forEach(function (s) {
    var n = NOTAS[s.getAttribute('data-id')];
    if (n) s.setAttribute('data-notas', n);
  });

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* ---------- efeitos: marca os elementos que entram em sequência ---------- */
  var ALVOS = '.tag,h1,h2,.sub,.card,.step,.layer,.qbox,.note,.chip,.pill,tr,.cell,.kpi,.tl-item,.stat,.ask,.slide > svg,.z > svg';
  if (animar) {
    slides.forEach(function (s) {
      var i = 0;
      Array.prototype.forEach.call(s.querySelectorAll(ALVOS), function (el) {
        if (el.closest('.badge') || (el.parentElement && el.parentElement.closest(ALVOS))) return;
        if (s.classList.contains('cover') && el.tagName.toLowerCase() === 'svg') return;
        el.classList.add('rv');
        el.style.setProperty('--i', el.classList.contains('ask') ? 14 : Math.min(i++, 9));
      });
    });
  }

  /* contadores: números inteiros em .stat contam de 0 até o valor */
  var contadores = [];
  slides.forEach(function (s, idx) {
    Array.prototype.forEach.call(s.querySelectorAll('.stat'), function (el) {
      if (/^\d+$/.test(el.textContent.trim())) {
        contadores.push({ el: el, slide: idx, alvo: parseInt(el.textContent, 10) });
      }
    });
  });

  function contar(slideIdx) {
    contadores.forEach(function (c) {
      if (c.slide !== slideIdx) return;
      var t0 = null;
      c.el.textContent = '0';
      function passo(t) {
        if (t0 === null) t0 = t;
        var p = Math.min(1, (t - t0 - 300) / 800);
        if (p > 0) c.el.textContent = Math.round(c.alvo * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(passo);
      }
      requestAnimationFrame(passo);
    });
  }

  function restaurarContadores(slideIdx) {
    contadores.forEach(function (c) { if (c.slide === slideIdx) c.el.textContent = String(c.alvo); });
  }

  var limpeza = null;
  function ativar(i) {
    slides[i].classList.add('on');
    if (animar) contar(i);
    clearTimeout(limpeza);
    /* depois da transição, desliga os outros para o efeito repetir ao voltar */
    limpeza = setTimeout(function () {
      slides.forEach(function (s, k) {
        if (k !== atual && s.classList.contains('on')) { s.classList.remove('on'); restaurarContadores(k); }
      });
    }, 700);
  }

  /* ---------- escala e posição ---------- */
  function layout() {
    var nh = notasEl.hidden ? 0 : notasEl.offsetHeight;
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
    ativar(atual);
    posicionar(false);
    counter.textContent = pad(atual + 1) + ' / ' + total;
    prog.style.width = ((atual + 1) / total * 100) + '%';
    btnPrev.disabled = atual === 0;
    btnNext.disabled = atual === total - 1;
    try { history.replaceState(null, '', '#' + (atual + 1)); } catch (e) { /* file:// restrito */ }
    atualizarNotas();
    atualizarTimer();
  }

  /* ---------- notas ---------- */
  function atualizarNotas() {
    notasH.textContent = 'Slide ' + (atual + 1) + ' · ' + blocos[blocoDoSlide[atual]];
    var texto = slides[atual].getAttribute('data-notas') || '[REVISAR] Sem nota para este slide.';
    var ask = slides[atual].querySelector('.ask');
    if (ask) texto += '\n\nINTERAJA (' + ask.classList.contains('ask-prof') ? 'professor' : 'turma' + '): ' + ask.querySelector('.ask-t').textContent + ' Espere a resposta antes de continuar.';
    var prox = slides[atual + 1];
    if (prox) {
      var f = prox.querySelector('.foot b');
      var nome = f ? f.textContent.split(' ')[0] : '';
      var f0 = slides[atual].querySelector('.foot b');
      var mudaBloco = prox.getAttribute('data-bloco') !== slides[atual].getAttribute('data-bloco');
      var mudaQuem = f && f0 && f.textContent !== f0.textContent;
      if (mudaBloco) {
        texto += '\n\nFIM DO BLOCO: olhe para a turma e para o professor e pergunte se ficou alguma dúvida. Depois passe a palavra' + (nome ? ' para ' + nome : '') + '.';
      } else if (mudaQuem) {
        texto += '\n\nTROCA NA DUPLA: faça a ponte falada e passe a palavra para ' + nome + '. Quem saiu fica ao lado para ajudar.';
      }
    }
    notasT.textContent = texto + '\n\nOlhe para a turma e para o professor enquanto fala. Não leia o slide.';
    notasEl.scrollTop = 0;
  }

  function alternarNotas() {
    notasEl.hidden = !notasEl.hidden;
    layout();
  }

  /* ---------- cronômetro (tempo acumulado por bloco) ---------- */
  var decorrido = blocos.map(function () { return 0; });
  var rodando = false, ultimo = 0, tick = null;

  function atualizarTimer() {
    var b = blocoDoSlide[atual], s = Math.floor(decorrido[b] / 1000);
    blkEl.textContent = blocos[b];
    timerEl.textContent = pad(Math.floor(s / 60)) + ':' + pad(s % 60);
    timerEl.classList.toggle('run', rodando);
  }

  function somar() {
    var agora = Date.now();
    decorrido[blocoDoSlide[atual]] += agora - ultimo;
    ultimo = agora;
    atualizarTimer();
  }

  function iniciar() {
    if (rodando) return;
    rodando = true; ultimo = Date.now();
    tick = setInterval(somar, 250);
    atualizarTimer();
  }

  function pausar() {
    if (!rodando) return;
    somar(); rodando = false; clearInterval(tick);
    atualizarTimer();
  }

  function zerar() {
    decorrido = blocos.map(function () { return 0; });
    ultimo = Date.now();
    atualizarTimer();
  }

  /* contabiliza o tempo no bloco antigo antes de trocar de slide */
  function navegar(i) {
    if (rodando) somar();
    ir(i);
  }

  /* ---------- tela cheia ---------- */
  function telaCheia() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (root.requestFullscreen) root.requestFullscreen();
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
  /* mostra só depois de marcar tudo, para não piscar o slide sem efeito */
  requestAnimationFrame(function () { root.classList.add('ready'); });
})();
