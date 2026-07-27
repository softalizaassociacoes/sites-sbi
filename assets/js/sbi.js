/* ============================================================
   SBI — App JS · navegação, dados e interações
   Sociedade Brasileira de Ictiologia
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Ícones (feather-style) ---------- */
  var I = {
    home:'<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    scroll:'<path d="M8 21h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7"/><path d="M5 3a2 2 0 0 0-2 2v3h4V5a2 2 0 0 0-2-2z"/><path d="M3 8v9a2 2 0 0 0 2 2h3"/><path d="M11 8h5M11 12h5M11 16h3"/>',
    calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    news:'<path d="M4 4h13v16H5a2 2 0 0 1-2-2V4z"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M7 8h6M7 12h6M7 16h4"/>',
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    journal:'<path d="M4 4h16v16H4z"/><path d="M8 4v16M4 9h4M4 14h4"/><path d="M12 8h5M12 12h5M12 16h3"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2.1z"/>',
    pin:'<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    ext:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>',
    down:'<path d="M12 3v14"/><path d="m6 11 6 6 6-6"/><path d="M5 21h14"/>',
    up:'<path d="m18 15-6-6-6 6"/>',
    chev:'<path d="m6 9 6 6 6-6"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    fish:'<path d="M2 12c3-4 7-6 12-6 3.5 0 6.5 2 8 6-1.5 4-4.5 6-8 6-5 0-9-2-12-6z"/><path d="M17 8l4-3v14l-4-3"/><circle cx="8" cy="11" r="1" fill="currentColor" stroke="none"/>',
    waves:'<path d="M2 6c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/><path d="M2 12c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/><path d="M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
    shield:'<path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/>',
    leaf:'<path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 12-9 12"/><path d="M4 20c2-4 5-6 9-7"/>',
    award:'<circle cx="12" cy="8" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/>',
    doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    microscope:'<path d="M6 18h8M7 21h10M8 18a5 5 0 1 0 6-8"/><path d="M9 3l3 1-3 6-3-1a2 2 0 0 1-1-2.6L6.6 3.7A2 2 0 0 1 9 3z"/>',
    quote:'<path d="M10 11H6a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3M20 11h-4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3"/>',
    external:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>'
  };
  function svg(name, cls){ return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+(I[name]||'')+'</svg>'; }
  var FISH_SVG = '<svg class="fish" viewBox="0 0 72 36" fill="currentColor" aria-hidden="true" style="width:100%;height:auto"><path d="M20 18C24 8 44 6 58 12c4 2 6.5 4 8 6-1.5 2-4 4-8 6-14 6-34 4-38-6z"/><path d="M20 18 6 10c3.4 5 3.4 11 0 16z"/><circle cx="54" cy="15" r="2" fill="#00234f"/></svg>';
  function initIcons(){
    document.querySelectorAll('[data-ico]').forEach(function(n){
      var k = n.getAttribute('data-ico');
      n.innerHTML = (k === 'fish') ? FISH_SVG : svg(k);
    });
  }

  /* ---------- Configuração global ---------- */
  var LOGIN    = 'https://associacoes.softaliza.com.br/login/sbi';
  var ASSOCIAR = 'https://associacoes.softaliza.com.br/sbi';
  var REVISTA  = 'https://www.ni.bio.br/';
  var EMAIL    = 'contato.sbi@gmail.com';
  var EMAIL_BOL= 'boletim.sbi@gmail.com';
  var ENDERECO = 'Universidade Federal do Pará — Laboratório de Ictiologia de Altamira. Rua Coronel José Porfírio, 2515, Esplanada do Xingu, Altamira/PA — CEP 68372-040';
  var ESTATUTO = 'assets/uploads/2024/11/estatuto-sbi-2011.pdf';
  var HISTORICO= 'assets/uploads/2025/02/Historico-das-Diretorias-SBI.pdf';

  var NAV = [
    { label:'Início', href:'/' },
    { label:'A SBI', mega:[
      { t:'Quem somos',           d:'Missão, história e propósito',        href:'sbi.html',            icon:'info' },
      { t:'Diretoria & Conselho', d:'Gestão e conselho deliberativo',       href:'sbi.html#diretoria',  icon:'users' },
      { t:'Estatuto',             d:'Documento oficial (PDF)',              href:ESTATUTO,              icon:'scroll', ext:true },
      { t:'Diretorias anteriores',d:'Histórico das gestões (PDF)',          href:HISTORICO,             icon:'award', ext:true }
    ]},
    { label:'Publicações', mega:[
      { t:'Boletim da SBI',        d:'Acervo completo — nº1 a nº152',       href:'boletins.html',       icon:'book' },
      { t:'Neotropical Ichthyology',d:'Revista científica da SBI',          href:REVISTA,               icon:'journal', ext:true },
      { t:'Resumos dos EBIs',      d:'Encontros Brasileiros de Ictiologia',  href:'resumos-ebis.html',   icon:'scroll' },
      { t:'Pareceres & Notas',     d:'Notas técnicas e posicionamentos',     href:'pareceres.html',      icon:'shield' }
    ]},
    { label:'Eventos', href:'eventos.html' },
    { label:'Notícias', href:'noticias.html' },
    { label:'Associe-se', href:'associados.html' },
    { label:'Contato', href:'contato.html' }
  ];

  /* ---------- Diretoria ---------- */
  var DIRETORIA = [
    { nome:'Dr. Leandro M. Sousa',      cargo:'Presidente',  inst:'Universidade Federal do Pará — Laboratório de Ictiologia de Altamira (UFPA)', email:'lmsousa@ufpa.br',        foto:'assets/uploads/2024/11/foto-leandro-sousa.png' },
    { nome:'Dra. Gislene Torrente Vilara', cargo:'Secretária', inst:'Instituto do Mar, Universidade Federal de São Paulo (IMar/UNIFESP)',        email:'gtvilara@unifesp.br',    foto:'assets/uploads/2026/01/WhatsApp-Image-2026-01-27-at-14.01.18-e1769605015460.jpeg' },
    { nome:'Ma. Lorena Agostinho',      cargo:'Tesoureira',  inst:'Departamento de Ecologia, Universidade Federal do Rio Grande do Norte (UFRN)', email:'lorenabiosoares@gmail.com', foto:'assets/uploads/2024/11/foto-lorena-agostinho.png' }
  ];

  /* ---------- Conselho Deliberativo ---------- */
  var CONSELHO = [
    { nome:'Dr. Roberto Esser dos Reis', cargo:'Presidente do Conselho', inst:'PUCRS',            email:'reis@pucrs.br',              foto:'assets/uploads/2025/09/ROBERTO-2.jpg' },
    { nome:'Dra. Carla Simone Pavanelli',cargo:'Conselheira',            inst:'UEM',              email:'carla.pavanelli@pq.cnpq.br', foto:'assets/uploads/2024/11/foto-carla-pavanelli.png' },
    { nome:'Dr. Fabio Di Dario',         cargo:'Conselheiro',            inst:'UFRJ',             email:'didario@gmail.com',          foto:'assets/uploads/2024/11/foto-fabio-di-dario.png' },
    { nome:'Dr. Hugo Marques',           cargo:'Conselheiro',            inst:'Fishtag Consultoria Ambiental', email:'hugo@fishtag.com.br', foto:'assets/uploads/2024/11/foto-hugo-marques.png' },
    { nome:'Dra. Karla D. A. Soares',    cargo:'Conselheira',            inst:'UFRJ',             email:'karlad.soares@yahoo.com.br', foto:'assets/uploads/2024/11/foto-karla-soares.png' },
    { nome:'Dra. Lucélia Nobre Carvalho',cargo:'Conselheira',            inst:'UFMT',             email:'carvalholn@yahoo.com.br',    foto:'assets/uploads/2024/11/foto-lucelia-nobre.png' },
    { nome:'Dr. Luciano F. de A. Montag',cargo:'Conselheiro',            inst:'UFPA',             email:'lfamontag@gmail.com',        foto:'assets/uploads/2025/09/WhatsApp_Image_2025-09-01_at_16.00.30-1.jpg' }
  ];

  /* ---------- Parceiros ---------- */
  var PARCEIROS = [
    { nome:'Sociedade Brasileira de Zoologia', logo:'assets/uploads/2025/02/sbz-logo-footer-130x128-1.png', url:'https://sbzoologia.org.br/' },
    { nome:'ABLIMNO — Assoc. Brasileira de Limnologia', logo:'', url:'https://ablimno.org.br/' }
  ];

  /* ---------- Dados dinâmicos ---------- */
  function news(){ return Array.isArray(window.SBI_NEWS) ? window.SBI_NEWS : []; }
  function boletins(){ return Array.isArray(window.SBI_BOLETINS) ? window.SBI_BOLETINS : []; }
  function resumos(){ return Array.isArray(window.SBI_RESUMOS) ? window.SBI_RESUMOS : []; }
  function pareceres(){ return Array.isArray(window.SBI_PARECERES) ? window.SBI_PARECERES : []; }

  /* ---------- Utilidades ---------- */
  function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; }
  function currentPage(){ var p=location.pathname.split('/').pop(); return p || 'index.html'; }
  function escq(s){ return String(s).replace(/"/g,'&quot;'); }

  /* ---------- Header ---------- */
  function buildHeader() {
    var cur = currentPage();
    function norm(p){ p=(p||'').split('#')[0]; return (p==='/'||p===''||p==='index.html') ? 'index.html' : p; }
    var itemsHtml = NAV.map(function (item) {
      var active = false;
      if (item.href && norm(item.href) === norm(cur)) active = true;
      if (item.mega && item.mega.some(function(s){ return !s.ext && norm(s.href) === norm(cur); })) active = true;
      if (item.mega) {
        var links = item.mega.map(function (s) {
          var ext = s.ext ? ' target="_blank" rel="noopener"' : '';
          return '<a class="mega__link" href="'+s.href+'"'+ext+'><span class="mega__ico">'+svg(s.icon)+'</span>'+
                 '<span><span class="mega__t">'+s.t+(s.ext?' '+svg('ext','chev'):'')+'</span><span class="mega__d">'+s.d+'</span></span></a>';
        }).join('');
        var firstInternal = item.mega.find(function(s){ return !s.ext; }) || item.mega[0];
        return '<li class="nav__item has-mega'+(active?' is-active':'')+'">'+
               '<a class="nav__link" href="'+firstInternal.href+'">'+item.label+svg('chev','chev')+'</a>'+
               '<div class="mega mega--wide">'+links+'</div></li>';
      }
      return '<li class="nav__item'+(active?' is-active':'')+'"><a class="nav__link" href="'+item.href+'">'+item.label+'</a></li>';
    }).join('');
    return el(
      '<header class="site-header" id="siteHeader">'+
        '<div class="container site-header__inner">'+
          '<a class="brand" href="/" aria-label="SBI — Início">'+
            '<img src="assets/img/logo-sbi.png" alt="SBI">'+
            '<span class="brand__name"><b>SBI</b><span>Sociedade Brasileira de Ictiologia</span></span>'+
          '</a>'+
          '<nav class="nav" aria-label="Menu principal"><ul>'+itemsHtml+'</ul></nav>'+
          '<div class="header-cta">'+
            '<a class="btn btn--ghost btn--sm" href="'+LOGIN+'" target="_blank" rel="noopener">Entrar</a>'+
            '<a class="btn btn--brand btn--sm" href="associados.html">Associe-se</a>'+
            '<button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>'+
          '</div>'+
        '</div>'+
      '</header>'
    );
  }

  function buildMobileNav() {
    var groups = NAV.map(function (item) {
      if (item.mega) {
        var subs = item.mega.map(function (s) {
          var ext = s.ext ? ' target="_blank" rel="noopener"' : '';
          return '<a href="'+s.href+'"'+ext+'>'+s.t+'</a>';
        }).join('');
        return '<div class="m-group"><button class="m-top" type="button">'+item.label+svg('chev','chev')+'</button>'+
               '<div class="m-sub"><div>'+subs+'</div></div></div>';
      }
      return '<div class="m-group"><a class="m-top" href="'+item.href+'" style="text-decoration:none">'+item.label+'</a></div>';
    }).join('');
    return el('<div class="mobile-nav" id="mobileNav">'+groups+
      '<a class="btn btn--ghost" href="'+LOGIN+'" target="_blank" rel="noopener">Área do associado</a>'+
      '<a class="btn btn--brand" href="associados.html">Associe-se à SBI</a></div>');
  }

  /* ---------- Footer ---------- */
  function footerCol(title, links) {
    return '<div class="footer-col"><h4>'+title+'</h4><ul>'+
      links.map(function(l){ var ext=l.ext?' target="_blank" rel="noopener"':''; return '<li><a href="'+l.href+'"'+ext+'>'+l.t+'</a></li>'; }).join('')+'</ul></div>';
  }
  function buildFooter() {
    return el(
      '<footer class="site-footer">'+
        '<div class="container">'+
          '<div class="footer-grid">'+
            '<div class="footer-brand">'+
              '<a class="brand" href="/" aria-label="SBI"><img src="assets/img/logo-sbi.png" alt="SBI" style="width:54px;height:54px"><span class="brand__name"><b>SBI</b><span>Sociedade Brasileira de Ictiologia</span></span></a>'+
              '<p>Associação civil sem fins lucrativos que reúne pesquisadoras(es), estudantes e profissionais dedicados ao estudo dos peixes. Fundada em 1983, promove o conhecimento e a conservação da ictiofauna brasileira — uma das mais ricas e diversas do planeta.</p>'+
            '</div>'+
            footerCol('A SBI', [
              {t:'Quem somos', href:'sbi.html'}, {t:'Diretoria & Conselho', href:'sbi.html#diretoria'},
              {t:'Estatuto', href:ESTATUTO, ext:true}, {t:'Associe-se', href:'associados.html'}
            ])+
            footerCol('Publicações', [
              {t:'Boletim da SBI', href:'boletins.html'}, {t:'Neotropical Ichthyology', href:REVISTA, ext:true},
              {t:'Resumos dos EBIs', href:'resumos-ebis.html'}, {t:'Pareceres & Notas', href:'pareceres.html'},
              {t:'Notícias', href:'noticias.html'}
            ])+
            '<div class="footer-col">'+
              '<h4>Contato</h4>'+
              '<ul class="footer-contact">'+
                '<li><strong>E-mail</strong><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li>'+
                '<li><strong>Boletim</strong><a href="mailto:'+EMAIL_BOL+'">'+EMAIL_BOL+'</a></li>'+
                '<li><strong>Área do associado</strong><a href="'+LOGIN+'" target="_blank" rel="noopener">Acessar plataforma</a></li>'+
              '</ul>'+
              '<a class="btn btn--aqua btn--sm" href="contato.html" style="margin-top:6px">Fale conosco</a>'+
            '</div>'+
          '</div>'+
          '<div class="footer-bottom">'+
            '<span>© <span data-year>2026</span> SBI — Sociedade Brasileira de Ictiologia. Todos os direitos reservados.</span>'+
            '<span>Ciência · Peixes · Conservação</span>'+
          '</div>'+
        '</div>'+
      '</footer>'
    );
  }

  /* ---------- Interações ---------- */
  function initHeaderBehaviour() {
    var header = document.getElementById('siteHeader');
    var hero = document.body.getAttribute('data-hero') === 'true';
    function apply() {
      var scrolled = window.scrollY > 30;
      if (hero && !scrolled) { header.classList.add('is-transparent'); header.classList.remove('is-solid'); }
      else { header.classList.add('is-solid'); header.classList.remove('is-transparent'); }
    }
    apply();
    window.addEventListener('scroll', apply, { passive:true });
    var burger = document.getElementById('burger');
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true':'false');
    });
    document.querySelectorAll('#mobileNav .m-top').forEach(function (btn) {
      if (btn.tagName === 'BUTTON') btn.addEventListener('click', function(){ btn.parentElement.classList.toggle('open'); });
    });
    document.querySelectorAll('#mobileNav a').forEach(function(a){ a.addEventListener('click', function(){ document.body.classList.remove('menu-open'); }); });
  }

  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) { els.forEach(function(e){ e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var node = e.target, target = parseInt(node.getAttribute('data-count'), 10), suf = node.getAttribute('data-suffix')||'', pre = node.getAttribute('data-prefix')||'';
        var start = null, dur = 1700;
        function step(ts){ if(!start) start=ts; var p=Math.min((ts-start)/dur,1); var val=Math.floor((1-Math.pow(1-p,3))*target); node.textContent=pre+val.toLocaleString('pt-BR')+suf; if(p<1) requestAnimationFrame(step); }
        requestAnimationFrame(step); io.unobserve(node);
      });
    }, { threshold: 0.5 });
    nums.forEach(function(n){ io.observe(n); });
  }

  function initToTop() {
    var btn = el('<button class="to-top" aria-label="Voltar ao topo">'+svg('up')+'</button>');
    document.body.appendChild(btn);
    btn.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); });
    window.addEventListener('scroll', function(){ btn.classList.toggle('show', window.scrollY > 600); }, { passive:true });
  }

  function initBubbles() {
    var host = document.querySelector('[data-bubbles]');
    if (!host) return;
    var n = 16, html = '';
    for (var i=0;i<n;i++){
      var size = 6 + Math.round(Math.random()*22);
      var left = Math.round(Math.random()*100);
      var dur = 9 + Math.random()*12;
      var delay = -Math.random()*20;
      html += '<span style="width:'+size+'px;height:'+size+'px;left:'+left+'%;animation-duration:'+dur.toFixed(1)+'s;animation-delay:'+delay.toFixed(1)+'s"></span>';
    }
    host.innerHTML = html;
  }

  /* ---------- Renderizadores ---------- */
  function newsCard(n, i){
    var isEv = n.catSlug === 'evento';
    var media = '<div class="news-card__media"><span class="news-card__tag'+(isEv?' news-card__tag--evento':'')+'">'+n.cat+'</span>'+(n.img?'<img src="'+n.img+'" alt="'+escq(n.title)+'" loading="lazy">':'')+'</div>';
    return '<a class="news-card reveal" data-delay="'+(i%4+1)+'" href="'+n.slug+'.html">'+
      media+
      '<div class="news-card__body">'+
        '<div class="news-card__date">'+n.date+'</div>'+
        '<h3 class="news-card__title">'+n.title+'</h3>'+
        '<p class="news-card__excerpt">'+(n.excerpt||'')+'</p>'+
        '<span class="news-card__more">Ler '+(isEv?'evento':'notícia')+' '+svg('arrow')+'</span>'+
      '</div>'+
    '</a>';
  }

  function renderFeatured() {
    var host = document.querySelector('[data-news-featured]');
    if (!host) return;
    var list = news().slice(0, 5);
    if (!list.length) return;
    var f = list[0], rest = list.slice(1, 5);
    var main = '<a class="feat-main reveal" href="'+f.slug+'.html">'+
      '<div class="feat-main__media"><span class="news-card__tag'+(f.catSlug==='evento'?' news-card__tag--evento':'')+'">'+f.cat+'</span>'+(f.img?'<img src="'+f.img+'" alt="'+escq(f.title)+'" loading="lazy">':'')+'</div>'+
      '<div class="feat-main__body"><div class="news-card__date">'+f.date+'</div><h3>'+f.title+'</h3>'+
      '<p class="news-card__excerpt">'+(f.excerpt||'')+'</p><span class="news-card__more">Ler mais '+svg('arrow')+'</span></div></a>';
    var items = rest.map(function(n){
      return '<a class="feat-item reveal" href="'+n.slug+'.html">'+
        '<div class="feat-item__media">'+(n.img?'<img src="'+n.img+'" alt="'+escq(n.title)+'" loading="lazy">':'')+'</div>'+
        '<div class="feat-item__body"><div class="feat-item__date">'+n.date+'</div><div class="feat-item__title">'+n.title+'</div></div></a>';
    }).join('');
    host.innerHTML = main + '<div class="feat-list">'+items+'</div>';
  }

  function initArchive(){
    var host = document.querySelector('[data-news-archive]');
    if(!host) return;
    var PER = 9, shown = PER, filter = 'all';
    var all = news();
    function view(){
      var f = all.filter(function(n){ return filter==='all'?true:n.catSlug===filter; });
      host.innerHTML = f.slice(0,shown).map(newsCard).join('');
      var more = document.querySelector('[data-load-more]');
      if(more) more.style.display = shown < f.length ? '' : 'none';
      host.querySelectorAll('.reveal').forEach(function(e){ e.classList.add('in'); });
    }
    var moreBtn = document.querySelector('[data-load-more]');
    if(moreBtn) moreBtn.addEventListener('click', function(){ shown += PER; view(); });
    document.querySelectorAll('[data-filter]').forEach(function(chip){
      chip.addEventListener('click', function(){
        document.querySelectorAll('[data-filter]').forEach(function(c){ c.classList.remove('is-active'); });
        chip.classList.add('is-active'); filter = chip.getAttribute('data-filter'); shown = PER; view();
      });
    });
    view();
  }

  function renderEventos(){
    var host = document.querySelector('[data-eventos]');
    if(!host) return;
    var list = news().filter(function(n){ return n.catSlug==='evento'; });
    host.innerHTML = list.map(function(e,i){
      var link = e.link ? '<a class="card__link" href="'+e.link+'" target="_blank" rel="noopener" style="margin-top:16px">Acessar o site '+svg('ext')+'</a>' : '';
      return '<article class="event reveal" data-delay="'+(i%2+1)+'">'+
        '<div class="event__media">'+(e.img?'<img src="'+e.img+'" alt="'+escq(e.title)+'" loading="lazy">':'')+'</div>'+
        '<div class="event__body">'+
          '<span class="event__tag">'+svg('calendar')+e.date+'</span>'+
          '<h3 class="event__title">'+e.title+'</h3>'+
          '<p>'+(e.excerpt||'')+'</p>'+
          '<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center">'+
            '<a class="card__link" href="'+e.slug+'.html" style="margin-top:16px">Ler mais '+svg('arrow')+'</a>'+link+
          '</div>'+
        '</div>'+
      '</article>';
    }).join('');
  }

  function personCard(p, i){
    return '<div class="person reveal" data-delay="'+(i%4+1)+'">'+
      '<div class="person__photo"><img src="'+p.foto+'" alt="'+escq(p.nome)+'" loading="lazy"></div>'+
      '<div class="person__body">'+
        '<div class="person__role">'+p.cargo+'</div>'+
        '<div class="person__name">'+p.nome+'</div>'+
        (p.inst?'<div class="person__inst">'+p.inst+'</div>':'')+
        (p.email?'<a class="person__mail" href="mailto:'+p.email+'">'+svg('mail')+p.email+'</a>':'')+
      '</div>'+
    '</div>';
  }
  function renderDiretoria(){
    var h = document.querySelector('[data-diretoria]');
    if(h) h.innerHTML = DIRETORIA.map(personCard).join('');
    var c = document.querySelector('[data-conselho]');
    if(c) c.innerHTML = CONSELHO.map(personCard).join('');
  }

  function renderParceiros(){
    var host = document.querySelector('[data-parceiros]');
    if(!host) return;
    host.innerHTML = PARCEIROS.map(function(p,i){
      var logo = p.logo ? '<div class="partner__logo"><img src="'+p.logo+'" alt="'+escq(p.nome)+'" loading="lazy"></div>'
                        : '<div class="partner__logo">'+svg('globe','')+'</div>';
      return '<a class="partner reveal" data-delay="'+(i%4+1)+'" href="'+p.url+'" target="_blank" rel="noopener">'+
        logo+'<div class="partner__name">'+p.nome+'</div>'+
        '<span class="partner__ext">Visitar '+svg('ext')+'</span>'+
      '</a>';
    }).join('');
  }

  /* Boletins — acervo com filtro por ano */
  function bolCard(b){
    var dl = b.pdf ? '<a class="bol-card__dl" href="'+b.pdf+'" target="_blank" rel="noopener">'+svg('down')+'Baixar PDF</a>'
                   : '<span class="bol-card__dl" style="color:var(--muted)">Indisponível</span>';
    return '<div class="bol-card" data-yr="'+(b.ano||'')+'">'+
      '<div class="bol-card__top"><span class="bol-card__ico">'+svg('book')+'</span><span class="bol-card__year">'+(b.ano||'—')+'</span></div>'+
      '<div class="bol-card__n">Boletim '+b.label+'</div>'+ dl +
    '</div>';
  }
  function renderBoletins(){
    var host = document.querySelector('[data-boletins]');
    if(!host) return;
    var list = boletins();
    var years = [];
    list.forEach(function(b){ if(b.ano && years.indexOf(b.ano)<0) years.push(b.ano); });
    years.sort(function(a,b){ return b-a; });
    var filterHost = document.querySelector('[data-boletins-filter]');
    if(filterHost){
      filterHost.innerHTML = '<button class="chip chip--sm is-active" data-by="all">Todos</button>' +
        years.map(function(y){ return '<button class="chip chip--sm" data-by="'+y+'">'+y+'</button>'; }).join('');
    }
    function view(y){
      var f = (y==='all') ? list : list.filter(function(b){ return String(b.ano)===String(y); });
      host.innerHTML = f.map(bolCard).join('');
    }
    view('all');
    if(filterHost){
      filterHost.querySelectorAll('[data-by]').forEach(function(ch){
        ch.addEventListener('click', function(){
          filterHost.querySelectorAll('[data-by]').forEach(function(c){ c.classList.remove('is-active'); });
          ch.classList.add('is-active'); view(ch.getAttribute('data-by'));
        });
      });
    }
  }
  function renderBoletinsRecent(){
    var host = document.querySelector('[data-boletins-recent]');
    if(!host) return;
    host.innerHTML = boletins().slice(0,4).map(bolCard).join('');
  }

  /* Resumos EBI */
  function renderResumos(){
    var host = document.querySelector('[data-resumos]');
    if(!host) return;
    host.innerHTML = resumos().map(function(r){
      var dl = r.pdf ? '<div class="ebi-row__dl"><a class="btn btn--ghost btn--sm" href="'+r.pdf+'" target="_blank" rel="noopener">'+svg('down')+'Baixar</a></div>'
                     : '<div class="ebi-row__soon">Resumos não digitalizados</div>';
      return '<div class="ebi-row reveal">'+
        '<div class="ebi-row__n">EBI<small>Nº '+r.n+'</small></div>'+
        '<div class="ebi-row__info"><b>'+r.ano+' — '+r.cidade+'</b><span>'+svg('pin')+r.cidade+' / '+r.uf+'</span></div>'+
        dl+
      '</div>';
    }).join('');
  }

  /* Pareceres */
  function renderPareceres(){
    var host = document.querySelector('[data-pareceres]');
    if(!host) return;
    host.innerHTML = pareceres().map(function(p){
      return '<a class="doc-row reveal" href="'+p.pdf+'" target="_blank" rel="noopener">'+
        '<span class="doc-row__ico">'+svg('shield')+'</span>'+
        '<span class="doc-row__body"><span class="doc-row__title">'+p.titulo+'</span><span class="doc-row__meta">'+p.desc+'</span></span>'+
        '<span class="doc-row__cta">Baixar '+svg('down')+'</span>'+
      '</a>';
    }).join('');
  }

  function initYear(){ document.querySelectorAll('[data-year]').forEach(function(e){ e.textContent=new Date().getFullYear(); }); }

  /* ---------- Boot ---------- */
  function boot() {
    var header = buildHeader();
    document.body.insertBefore(header, document.body.firstChild);
    document.body.insertBefore(buildMobileNav(), header.nextSibling);
    document.body.appendChild(buildFooter());

    initHeaderBehaviour();
    initIcons();
    initBubbles();
    renderFeatured();
    initArchive();
    renderEventos();
    renderDiretoria();
    renderParceiros();
    renderBoletins();
    renderBoletinsRecent();
    renderResumos();
    renderPareceres();
    initReveal();
    initCounters();
    initToTop();
    initYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.SBI = { NAV:NAV, DIRETORIA:DIRETORIA, CONSELHO:CONSELHO, PARCEIROS:PARCEIROS, svg:svg, LOGIN:LOGIN, ASSOCIAR:ASSOCIAR, REVISTA:REVISTA };
})();
