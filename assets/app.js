/* ============================================================
   АНО РСЗИ «Триумф» — сборка страниц из data.js.
   Этот файл трогать не нужно.
   ============================================================ */

(function () {
  var S = window.SITE || {};
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- иконки ---------- */

  var ICONS = {
    mission:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="21" cy="27" r="16"/><circle cx="21" cy="27" r="9.5"/><circle cx="21" cy="27" r="3"/>' +
      '<path d="M21 27 39 9"/><path d="M31.5 9H39v7.5"/></svg>',

    projects:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="9.5" y="8.5" width="29" height="34" rx="3.5"/>' +
      '<rect x="17.5" y="5" width="13" height="7" rx="2"/>' +
      '<path d="m15.5 21 2.6 2.6 4.6-4.9"/><path d="M26.5 21.5h6.5"/>' +
      '<path d="m15.5 31 2.6 2.6 4.6-4.9"/><path d="M26.5 31.5h6.5"/></svg>',

    medal:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="15" r="5.6"/>' +
      '<path d="M8.6 10.3 6 3.5h4l2 4.3 2-4.3h4l-2.6 6.8"/>' +
      '<path d="m12 12.4.8 1.6 1.7.2-1.3 1.2.4 1.7-1.6-.9-1.6.9.4-1.7-1.3-1.2 1.7-.2z" fill="currentColor" stroke="none"/></svg>',

    films:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="5" y="19" width="25" height="17" rx="3.5"/>' +
      '<circle cx="13" cy="12.5" r="5.5"/><circle cx="24.5" cy="12.5" r="5.5"/>' +
      '<path d="M30 25.5 42 19v17l-12-6.5z"/></svg>',

    reports:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M7 40h34"/>' +
      '<rect x="11" y="27" width="6.5" height="13" rx="1.6"/>' +
      '<rect x="21" y="22" width="6.5" height="18" rx="1.6"/>' +
      '<rect x="31" y="16" width="6.5" height="24" rx="1.6"/>' +
      '<path d="M9 19 17 12l6 4.5L40 5"/><path d="M33.5 5H41v7"/></svg>',

    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="m9 5 7 7-7 7"/></svg>',

    back:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg>',

    camera:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4 8h3l1.6-2.4h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>' +
      '<circle cx="12" cy="13" r="3.6"/></svg>',

    play:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="10"/><path d="m10 8.5 5.5 3.5-5.5 3.5z" fill="currentColor"/></svg>',

    heart:
      '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M12 20.6 10.6 19.3C5.6 14.8 2.4 11.9 2.4 8.3 2.4 5.4 4.7 3.1 7.6 3.1c1.7 0 3.3.8 4.4 2 1.1-1.2 2.7-2 4.4-2 2.9 0 5.2 2.3 5.2 5.2 0 3.6-3.2 6.5-8.2 11L12 20.6z"/></svg>',

    copy:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',

    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',

    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">' +
      '<path d="M6 6l12 12M18 6 6 18"/></svg>',

    pin:
      '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',

    /* официальный знак ВКонтакте, Simple Icons, лицензия CC0 */
    vk:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"/></svg>',

    cup:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z"/>' +
      '<path d="M16 10.5h2.2a2.3 2.3 0 0 1 0 4.6H16"/>' +
      '<path d="M8 5.5V4M11.5 5.5V4"/><path d="M3.5 21h13"/></svg>',

    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M5.2 3.5h3.3l1.6 4.2-2.2 1.5a11.5 11.5 0 0 0 6.9 6.9l1.5-2.2 4.2 1.6v3.3a2 2 0 0 1-2.2 2A16.7 16.7 0 0 1 3.2 5.7a2 2 0 0 1 2-2.2z"/></svg>',

    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',

    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>' +
      '<path d="M8 14h2M14 14h2M8 17.2h2"/></svg>',

    link:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2"/>' +
      '<path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2"/></svg>'
  };

  /* ---------- помощники ---------- */

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* адрес картинки относительно страницы, а не файла стилей —
     иначе url() в CSS-переменной ищет картинку в папке assets */
  function abs(u) {
    try { return new URL(u, document.baseURI).href; } catch (e) { return u; }
  }

  /* в тексте из data.js:
     *вот так*               слова выделяются золотом;
     [слова](https://...)    слова становятся золотой ссылкой;
     строка с «## » в начале подзаголовок внутри статьи */
  function rich(text) {
    return esc(text)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
               '<a class="prose__join" href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\*([^*]+)\*/g, '<strong class="prose__accent">$1</strong>');
  }

  function paragraphs(list) {
    return (list || []).map(function (p) {
      p = String(p);
      if (p.indexOf('## ') === 0) return '<h3 class="prose__h">' + rich(p.slice(3)) + '</h3>';
      return '<p>' + rich(p) + '</p>';
    }).join('');
  }

  /* серая плашка вместо фото */
  function ph(label, dark) {
    return '<div class="ph' + (dark ? ' ph--dark' : '') + '">' + ICONS.camera +
           '<span>' + esc(label || 'фото') + '</span></div>';
  }

  function media(src, alt, label) {
    return src
      ? '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '" loading="lazy">'
      : ph(label);
  }

  /* ---------- разделы ---------- */

  var SECTIONS = [
    { key: 'mission',  title: 'Миссия',  href: 'mission.html'  },
    { key: 'projects', title: 'Проекты', href: 'projects.html' },
    { key: 'films',    title: 'Фильмы',  href: 'cinema.html'   },
    { key: 'reports',  title: 'Отчёты',  href: 'reports.html'  }
  ];

  var SECTION_OF = {
    mission: 'mission', projects: 'projects', project: 'projects',
    films: 'films', film: 'films', reports: 'reports'
  };

  var section = SECTION_OF[PAGE];
  if (section) document.body.classList.add('s-' + section);

  var org = S.org || {};
  var c = S.contacts || {};

  /* картинка с плашки главной — она же фон шапки своего раздела */
  function tilePhoto(key) {
    var t = (S.tiles || []).filter(function (x) { return x.key === key; })[0];
    return t && t.photo ? t.photo : '';
  }

  function photoStyle(src) {
    return src ? ' style="--photo:url(&quot;' + esc(abs(src)) + '&quot;)"' : '';
  }

  /* ============================================================
     КАРУСЕЛЬ
     ============================================================ */

  /* карусели сами не листаются: слайд меняется, только когда человек
     нажал стрелку, точку или провёл пальцем */
  function carousel(slides, opts) {
    opts = opts || {};
    var kind = opts.kind || 'photos';
    return '<div class="carousel carousel--' + kind + '"' +
             (opts.dots ? ' data-dots="1"' : '') +
             ' role="region" aria-roledescription="карусель" aria-label="' + esc(opts.label || 'Карусель') + '">' +
             '<div class="carousel__track" tabindex="0">' +
               slides.map(function (s) { return '<div class="carousel__slide">' + s + '</div>'; }).join('') +
             '</div>' +
             '<button class="carousel__btn carousel__btn--prev" type="button" aria-label="Назад">' + ICONS.chevron + '</button>' +
             '<button class="carousel__btn carousel__btn--next" type="button" aria-label="Вперёд">' + ICONS.chevron + '</button>' +
             (opts.dots ? '<div class="carousel__dots"></div>' : '') +
           '</div>';
  }

  function photoCarousel(photos, title) {
    var list = (photos && photos.length) ? photos : ['', '', '', ''];
    return carousel(list.map(function (src, i) {
      var alt = title + ', фото ' + (i + 1);
      /* фото видно целиком, свободное место заполняет его же размытая копия;
         настоящее фото открывается на весь экран */
      return '<figure class="shot"' + (src ? ' style="--src:url(&quot;' + esc(abs(src)) + '&quot;)"' : '') + '>' +
               (src
                 ? '<button class="shot__open" type="button" data-shot="' + i + '" aria-label="Открыть фото ' + (i + 1) + ' на весь экран">' +
                     media(src, alt) + '</button>'
                 : media(src, alt)) +
             '</figure>';
    }), { kind: 'photos', dots: true, label: 'Фотографии' });
  }

  function initCarousel(root) {
    var track = root.querySelector('.carousel__track');
    var prev = root.querySelector('.carousel__btn--prev');
    var next = root.querySelector('.carousel__btn--next');
    var dotsBox = root.querySelector('.carousel__dots');
    var originals = Array.prototype.slice.call(track.children);
    var n = originals.length;
    /* видео не зацикливаем: копии плееров тяжёлые, а роликов там два */
    var loop = false;

    function step() {
      if (!n) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return originals[0].getBoundingClientRect().width + gap;
    }

    function setWidth() { return n * step(); }
    function maxScroll() { return track.scrollWidth - track.clientWidth; }

    function jump(x) {
      var sb = track.style.scrollBehavior;
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = x;
      track.style.scrollBehavior = sb;
    }

    /* бесконечная лента: копии всех слайдов стоят до и после, листаем по
       середине, а у края незаметно перескакиваем на такой же слайд в середине.
       Поэтому после последнего слайда сразу идёт первый, без отмотки назад */
    function makeLoop() {
      if (n < 2 || root.classList.contains('carousel--videos') || maxScroll() <= 2) return;
      var before = document.createDocumentFragment();
      var after = document.createDocumentFragment();
      originals.forEach(function (slide) {
        [before, after].forEach(function (frag) {
          var c = slide.cloneNode(true);
          c.classList.add('is-clone');
          c.setAttribute('aria-hidden', 'true');
          Array.prototype.forEach.call(c.querySelectorAll('a, button, [tabindex]'), function (el) {
            el.setAttribute('tabindex', '-1');
          });
          frag.appendChild(c);
        });
      });
      track.insertBefore(before, track.firstChild);
      track.appendChild(after);
      loop = true;
      root.classList.add('is-loop');
    }

    /* после остановки ленты возвращаемся в середину, если заехали на копии */
    function normalize() {
      if (!loop) return;
      var w = setWidth();
      var x = track.scrollLeft;
      if (x < w - 2) jump(x + w);
      else if (x >= 2 * w - 2) jump(x - w);
    }

    function index() {
      var i = Math.round((track.scrollLeft - (loop ? setWidth() : 0)) / step());
      return loop ? ((i % n) + n) % n : i;
    }

    function go(dir) {
      track.scrollTo({ left: track.scrollLeft + dir * step(), behavior: 'smooth' });
    }

    function pages() {
      if (loop) return n;
      var per = Math.max(1, Math.round(track.clientWidth / step()));
      return Math.max(1, n - per + 1);
    }

    function buildDots() {
      if (!dotsBox) return;
      var count = pages();
      var h = '';
      for (var i = 0; i < count; i++) {
        h += '<button class="carousel__dot" type="button" aria-label="Слайд ' + (i + 1) + '"></button>';
      }
      dotsBox.innerHTML = count > 1 ? h : '';
      Array.prototype.forEach.call(dotsBox.children, function (d, i) {
        d.addEventListener('click', function () {
          track.scrollTo({ left: (loop ? setWidth() : 0) + i * step(), behavior: 'smooth' });
        });
      });
    }

    function update() {
      var max = maxScroll();
      var still = !loop && max <= 2;
      root.classList.toggle('is-static', still);
      prev.disabled = still || (!loop && track.scrollLeft <= 2);
      next.disabled = still || (!loop && track.scrollLeft >= max - 2);
      if (dotsBox) {
        var active = index();
        Array.prototype.forEach.call(dotsBox.children, function (d, i) {
          d.classList.toggle('is-active', i === active);
          d.setAttribute('aria-current', i === active ? 'true' : 'false');
        });
      }
    }

    var raf = 0;
    var settle = 0;
    track.addEventListener('scroll', function () {
      if (!raf) raf = requestAnimationFrame(function () { raf = 0; update(); });
      clearTimeout(settle);
      settle = setTimeout(normalize, 160);
    }, { passive: true });
    track.addEventListener('scrollend', normalize);

    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });

    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); }
    });

    window.addEventListener('resize', function () {
      var i = index();
      buildDots();
      jump((loop ? setWidth() : 0) + Math.max(0, i) * step());
      update();
    });

    /* каждая карусель начинается с первого слайда, даже если браузер
       запомнил прокрутку с прошлого раза */
    function toStart() { jump(loop ? setWidth() : 0); }

    makeLoop();
    toStart();
    window.addEventListener('pageshow', function (e) { if (e.persisted) toStart(); });

    buildDots();
    update();
  }

  /* ============================================================
     ФОТО НА ВЕСЬ ЭКРАН
     ============================================================ */

  function initLightbox() {
    var openers = document.querySelectorAll('.shot__open');
    if (!openers.length) return;

    var box = document.createElement('div');
    box.className = 'lb';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Просмотр фото');
    box.innerHTML =
      '<figure class="lb__stage"><img class="lb__img" alt=""></figure>' +
      '<p class="lb__count" aria-live="polite"></p>' +
      '<button class="lb__close" type="button" aria-label="Закрыть">' + ICONS.close + '</button>' +
      '<button class="lb__btn lb__btn--prev" type="button" aria-label="Предыдущее фото">' + ICONS.chevron + '</button>' +
      '<button class="lb__btn lb__btn--next" type="button" aria-label="Следующее фото">' + ICONS.chevron + '</button>';
    document.body.appendChild(box);

    var img = box.querySelector('.lb__img');
    var count = box.querySelector('.lb__count');
    var btnPrev = box.querySelector('.lb__btn--prev');
    var btnNext = box.querySelector('.lb__btn--next');
    var list = [], index = 0, opener = null;

    function show(i) {
      index = (i + list.length) % list.length;
      var src = list[index];
      img.classList.add('is-changing');
      var pic = new Image();
      pic.onload = pic.onerror = function () {
        img.src = src.src;
        img.alt = src.alt;
        img.classList.remove('is-changing');
      };
      pic.src = src.src;
      count.textContent = list.length > 1 ? (index + 1) + ' из ' + list.length : '';
      btnPrev.hidden = btnNext.hidden = list.length < 2;
    }

    function open(btn) {
      var gallery = btn.closest('.carousel') || document;
      /* копии слайдов в бесконечной ленте не считаем */
      var buttons = Array.prototype.filter.call(gallery.querySelectorAll('.shot__open'), function (b) {
        return !b.closest('.is-clone');
      });
      list = buttons.map(function (b) {
        var im = b.querySelector('img');
        return { src: im.currentSrc || im.src, alt: im.alt };
      });
      opener = btn;
      var own = 0;
      buttons.forEach(function (b, i) { if (b.getAttribute('data-shot') === btn.getAttribute('data-shot')) own = i; });
      show(own);
      box.hidden = false;
      document.documentElement.classList.add('lb-open');
      void box.offsetWidth;   /* чтобы проявление сработало сразу после показа */
      box.classList.add('is-open');
      box.querySelector('.lb__close').focus();
    }

    function close() {
      box.classList.remove('is-open');
      document.documentElement.classList.remove('lb-open');
      setTimeout(function () { if (!box.classList.contains('is-open')) box.hidden = true; }, REDUCE ? 0 : 220);
      if (opener) opener.focus();
    }

    Array.prototype.forEach.call(openers, function (b) {
      b.addEventListener('click', function () { open(b); });
    });

    box.querySelector('.lb__close').addEventListener('click', close);
    btnPrev.addEventListener('click', function () { show(index - 1); });
    btnNext.addEventListener('click', function () { show(index + 1); });

    /* клик по тёмному фону закрывает */
    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lb__stage')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); show(index - 1); }
      /* фокус не уходит за пределы окна */
      if (e.key === 'Tab') {
        var f = Array.prototype.filter.call(box.querySelectorAll('button'), function (b) { return !b.hidden; });
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    /* листание пальцем */
    var x0 = null, y0 = 0;
    box.addEventListener('pointerdown', function (e) { x0 = e.clientX; y0 = e.clientY; });
    box.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0, dy = e.clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && list.length > 1) show(index + (dx < 0 ? 1 : -1));
    });
  }

  /* ============================================================
     БЛОКИ МЯГКО ПРОЯВЛЯЮТСЯ ПРИ ПРОКРУТКЕ
     ============================================================ */

  /* при включённом в системе «меньше движения» блоки не сдвигаются,
     а только мягко проявляются (это решает style.css) */
  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var els = document.querySelectorAll('.tile, .quick, .hero, .sheet, .block, .card, .pager, .lost');
    if (!els.length) return;
    document.documentElement.classList.add('js-reveal');

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        io.unobserve(el);
        el.classList.add('is-in');
        /* после появления у блока снова свои переходы, например золотая рамка */
        var wait = 800 + (parseInt(el.style.getPropertyValue('--d'), 10) || 0);
        setTimeout(function () { el.classList.remove('reveal', 'is-in'); el.style.removeProperty('--d'); }, wait);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

    Array.prototype.forEach.call(els, function (el) {
      /* соседние плашки и карточки выходят чуть друг за другом */
      if (el.classList.contains('tile') || el.classList.contains('card')) {
        var i = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.style.setProperty('--d', (i % 4) * 80 + 'ms');
      }
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ============================================================
     ГЛАВНАЯ
     ============================================================ */

  function renderHome() {
    if ($('brandName')) $('brandName').textContent = org.shortTop || '';

    if ($('tiles')) {
      $('tiles').innerHTML = (S.tiles || []).map(function (t) {
        var cls = 'tile tile--' + esc(t.key) + (t.photo ? ' tile--photo' : '');
        var style = photoStyle(t.photo);
        return '<a class="' + cls + '" href="' + esc(t.href) + '"' + style + '>' +
                 (t.photo ? '<span class="tile__bg" aria-hidden="true"></span>' : '') +
                 '<span class="tile__ic">' + (ICONS[t.key] || '') + '</span>' +
                 '<h2 class="tile__title">' + esc(t.title) + '</h2>' +
                 '<p class="tile__text">' + esc(t.text) + '</p>' +
                 '<span class="tile__go">' + ICONS.chevron + '</span>' +
               '</a>';
      }).join('');
    }

    if ($('quick')) {
      var L = S.links || {};
      var cafe = L.cafe || {};
      $('quick').innerHTML =
        qbtn({ kind: 'vk', icon: ICONS.vk, title: 'Мы ВКонтакте',
               sub: 'Новости, события, общение', href: L.vk }) +
        qbtn({ kind: 'tourism', icon: ICONS.pin, title: 'Туристический портал Альшеевского района',
               sub: '', href: L.tourism }) +
        qbtn({ kind: 'cafe', icon: ICONS.cup, title: 'Кафе «Триумф»',
               sub: 'Вкусно, уютно, по-домашнему' + (cafe.address ? '\n' + cafe.address : ''),
               href: cafe.url });
    }
  }

  function qbtn(o) {
    var ic = '<span class="qbtn__ic qbtn__ic--' + o.kind + '">' + o.icon + '</span>';
    var body = '<span class="qbtn__body"><span class="qbtn__title">' + esc(o.title) + '</span>' +
               (o.sub ? '<span class="qbtn__sub">' + esc(o.sub) + '</span>' : '') + '</span>';
    if (!o.href) {
      return '<div class="qbtn qbtn--soon">' + ic + body + '<span class="qbtn__soon">Скоро</span></div>';
    }
    return '<a class="qbtn" href="' + esc(o.href) + '" target="_blank" rel="noopener">' +
           ic + body + '<span class="qbtn__go">' + ICONS.chevron + '</span></a>';
  }

  /* ============================================================
     ВНУТРЕННИЕ СТРАНИЦЫ
     ============================================================ */

  function renderNav() {
    if (!$('nav')) return;
    $('nav').innerHTML = SECTIONS.map(function (s) {
      var on = s.key === section;
      return '<a class="nav__link' + (on ? ' is-active' : '') + '" href="' + s.href + '"' +
             (on ? ' aria-current="page"' : '') + '>' + s.title + '</a>';
    }).join('');
  }

  /* opts.genre — строка над названием, opts.photo — фон шапки
     (по умолчанию картинка с плашки этого раздела на главной) */
  function hero(title, lead, crumb, opts) {
    opts = opts || {};
    var photo = opts.photo || tilePhoto(section);
    var long = String(title || '').length > 38;
    return '<section class="wrap">' +
             '<div class="hero' + (photo ? ' hero--photo' : '') + (opts.photo ? ' hero--cover' : '') + '"' + photoStyle(photo) + '>' +
               /* картинка шапки лежит отдельным слоем и плывёт, как облака */
               (photo ? '<span class="hero__bg" aria-hidden="true"></span>' : '') +
               '<div class="hero__body">' +
                 '<a class="hero__crumb" href="' + esc(crumb.href) + '">' + ICONS.back + esc(crumb.text) + '</a>' +
                 (opts.genre ? '<p class="hero__genre">' + esc(opts.genre) + '</p>' : '') +
                 '<h1 class="hero__title' + (long ? ' hero__title--long' : '') + '">' + esc(title) + '</h1>' +
                 (lead ? '<p class="hero__lead">' + esc(lead) + '</p>' : '') +
               '</div>' +
               (section && ICONS[section] ? '<span class="hero__ic" aria-hidden="true">' + ICONS[section] + '</span>' : '') +
             '</div>' +
           '</section>';
  }

  var HOME = { href: 'index.html', text: 'На главную' };

  /* ---------- Миссия ---------- */

  function renderMission() {
    var M = S.mission || {};
    var t = M.text || [];

    var html = hero(M.title, '', HOME);

    html += '<section class="wrap">' +
              '<div class="sheet">' +
                '<div class="prose">' + paragraphs(t) + joinParagraph(M.join) + '</div>' +
                contactLinks() +
              '</div>' +
            '</section>';

    html += '<section class="wrap block">' +
              '<h2 class="block__title">' + esc(M.teamTitle || 'Команда') + '</h2>' +
              carousel((M.team || []).map(person), { kind: 'team', dots: true, label: 'Команда' }) +
            '</section>';

    /* партнёры все сразу, маленькими плашками */
    html += '<section class="wrap block">' +
              '<h2 class="block__title">' + esc(M.partnersTitle || 'Партнёры') + '</h2>' +
              '<div class="partners">' + (M.partners || []).map(partner).join('') + '</div>' +
            '</section>';

    $('page').innerHTML = html;
  }

  /* телефон и почта под текстом на странице «Миссия» */
  function contactLinks(mod) {
    var list = [];
    if (c.phone) list.push('<a class="contacts__link" href="tel:' + esc(c.phone.replace(/[^\d+]/g, '')) + '">' +
                           '<span class="contacts__ic">' + ICONS.phone + '</span>' + esc(c.phone) + '</a>');
    if (c.email) list.push('<a class="contacts__link" href="mailto:' + esc(c.email) + '">' +
                           '<span class="contacts__ic">' + ICONS.mail + '</span>' + esc(c.email) + '</a>');
    if (c.max)   list.push('<a class="contacts__link" href="' + esc(c.max) + '" target="_blank" rel="noopener">MAX</a>');
    return list.length ? '<div class="contacts' + (mod ? ' contacts--' + mod : '') + '">' + list.join('') + '</div>' : '';
  }

  /* «Присоединяйтесь к нам» отдельным абзацем, слова ведут в группу ВКонтакте */
  function joinParagraph(j) {
    if (!j || !j.link) return '';
    var url = (S.links || {}).vk;
    var link = url
      ? '<a class="prose__join" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(j.link) + '</a>'
      : '<strong class="prose__join">' + esc(j.link) + '</strong>';
    return '<p>' + link + esc(j.text || '') + '</p>';
  }

  function person(p) {
    var awards = p.awards || [];
    return '<article class="person">' +
             '<div class="person__photo">' + media(p.photo, p.name, 'фото') + '</div>' +
             '<div class="person__body">' +
               '<h3 class="person__name">' + esc(p.name) + '</h3>' +
               '<p class="person__role">' + esc(p.role) + '</p>' +
               '<p class="person__text">' + esc(p.text) + '</p>' +
               (awards.length
                 ? '<h4 class="person__awards-title">Признание</h4>' +
                   '<ul class="person__awards">' + awards.map(function (a) {
                     return '<li><span class="person__medal" aria-hidden="true">' + ICONS.medal + '</span><span>' + esc(a) + '</span></li>';
                   }).join('') + '</ul>'
                 : '') +
             '</div>' +
           '</article>';
  }

  function partner(p) {
    var inner = '<div class="partner__logo' + (p.logo ? ' partner__logo--img' : '') + '">' +
                  (p.logo ? '<img src="' + esc(p.logo) + '" alt="' + esc(p.name) + '" loading="lazy">' : ph('логотип')) +
                '</div>' +
                '<p class="partner__name">' + esc(p.name) + '</p>';
    return p.url
      ? '<a class="partner partner--link" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + inner + '</a>'
      : '<div class="partner">' + inner + '</div>';
  }

  /* ---------- списки: проекты и фильмы ---------- */

  /* есть ли у фильма видео, которое можно посмотреть на сайте */
  function watchable(it) {
    var list = it.videos || (it.video ? [it.video] : []);
    return list.some(function (v) {
      var url = typeof v === 'string' ? v : (v && v.url) || '';
      return !!embedSrc(url) || /youtu\.?be/.test(url);
    });
  }

  /* метка на обложке: «Смотреть онлайн» или дата премьеры */
  function statusBadge(it) {
    if (!it.status) return '';
    var live = watchable(it);
    return '<span class="card__status' + (live ? ' card__status--live' : '') + '">' +
             (live ? ICONS.play : ICONS.calendar) + esc(it.status) +
           '</span>';
  }

  function renderList(pageData, items, detailHref) {
    pageData = pageData || {};
    var html = hero(pageData.title, pageData.lead, HOME);
    html += '<section class="wrap">' +
              '<div class="cards">' +
                (items || []).map(function (it, i) {
                  return '<a class="card' + (i === 0 ? ' card--wide' : '') + '" href="' + detailHref + '?id=' + encodeURIComponent(it.id) + '">' +
                           '<div class="card__media">' + media(it.cover, it.title) + statusBadge(it) + '</div>' +
                           '<div class="card__body">' +
                             (it.genre ? '<p class="card__genre">' + esc(it.genre) + '</p>' : '') +
                             '<h2 class="card__title">' + esc(it.title) + '</h2>' +
                             '<p class="card__text">' + esc((it.text || [])[0] || '') + '</p>' +
                             '<span class="card__more">Читать ' + ICONS.chevron + '</span>' +
                           '</div>' +
                         '</a>';
                }).join('') +
              '</div>' +
            '</section>';
    $('page').innerHTML = html;
  }

  /* ---------- статья: проект или фильм ---------- */

  /* адрес плеера для встраивания. YouTube в России открывается нестабильно,
     поэтому его не встраиваем, а даём ссылку */
  function embedSrc(url) {
    url = String(url || '');
    if (!url) return '';
    if (/video_ext\.php|rutube\.ru\/play\/embed|kinescope\.io\/embed/.test(url)) return url;
    var vk = url.match(/video(-?\d+)_(\d+)/);
    if (vk && /vk(video)?\.(ru|com)/.test(url)) {
      var t = url.match(/[?&]t=([\dhms]+)/);
      return 'https://vkvideo.ru/video_ext.php?oid=' + vk[1] + '&id=' + vk[2] + '&hd=2' + (t ? '&t=' + t[1] : '');
    }
    var rt = url.match(/rutube\.ru\/video\/([0-9a-f]{32})/);
    if (rt) return 'https://rutube.ru/play/embed/' + rt[1];
    if (/kinescope\.io\//.test(url)) return url;
    return '';
  }

  function player(v, fallbackTitle) {
    v = typeof v === 'string' ? { url: v } : (v || {});
    var label = v.title ? '<p class="media__label">' + esc(v.title) + '</p>' : '';
    if (/youtu\.?be/.test(v.url || '')) {
      return label + '<a class="video video--empty video--out" href="' + esc(v.url) + '" target="_blank" rel="noopener">' +
               ICONS.play + '<span>Смотреть на YouTube</span></a>';
    }
    var src = embedSrc(v.url);
    if (!src) {
      return label + '<div class="video video--empty">' + ICONS.play + '<span>Здесь будет фильм</span></div>';
    }
    return label + '<div class="video"><iframe src="' + esc(src) + '" title="' + esc(v.title || fallbackTitle || 'Видео') + '" loading="lazy" ' +
           'allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock" allowfullscreen></iframe></div>';
  }

  /* одно видео, карусель из нескольких или столбик, если stack */
  function videos(list, title, stack) {
    list = list || [];
    if (!list.length) return '';
    if (list.length === 1) return player(list[0], title);
    if (stack) {
      return list.map(function (v) { return '<div class="vstack">' + player(v, title) + '</div>'; }).join('');
    }
    return carousel(list.map(function (v) { return '<div class="vslide">' + player(v, title) + '</div>'; }),
                    { kind: 'videos', dots: true, label: 'Видео' });
  }

  function renderDetail(items, listHref, listTitle, detailHref) {
    items = items || [];
    var id = new URLSearchParams(location.search).get('id');
    var idx = -1;
    for (var i = 0; i < items.length; i++) { if (items[i].id === id) { idx = i; break; } }

    /* неверная ссылка: та же страница «Такой страницы нет», что и 404 */
    if (idx < 0) {
      renderNotFound({ href: listHref, text: listTitle });
      return;
    }

    var it = items[idx];
    var t = it.text || [];
    var hasTeam = it.team && it.team.length;
    /* главное видео: список videos или одна строка video (пусто, значит «Здесь будет фильм») */
    var mainVideos = it.videos || (Object.prototype.hasOwnProperty.call(it, 'video') ? [it.video] : []);
    /* сколько абзацев стоит до видео и фото */
    var intro = Math.max(1, it.intro || 1);
    document.title = (it.genre ? it.genre + ' ' : '') + it.title + ' · АНО РСЗИ «Триумф»';

    /* в шапке статьи её обложка, а если обложки нет, картинка раздела */
    var html = hero(it.title, '', { href: listHref, text: listTitle }, { genre: it.genre, photo: it.heroCover === false ? '' : it.cover });

    /* карусель фото стоит, если в data.js есть строка photos;
       убрали строку совсем, значит карусели нет */
    var hasPhotos = !hasTeam && Object.prototype.hasOwnProperty.call(it, 'photos');
    /* фильм ещё снимается: вместо пустого плеера дата премьеры */
    var soon = mainVideos.length && it.status && !watchable(it);

    html += '<section class="wrap">' +
              '<article class="sheet">' +
                '<div class="prose">' + paragraphs(t.slice(0, intro)) + '</div>' +
                (mainVideos.length
                  ? '<div class="article__media">' + (soon ? premiere(it.status) : videos(mainVideos, it.title, it.stack)) + '</div>'
                  : '') +
                (hasPhotos ? '<div class="article__media">' + photoCarousel(it.photos, it.title) + '</div>' : '') +
                (t.length > intro ? '<div class="prose">' + paragraphs(t.slice(intro)) + '</div>' : '') +
                /* дополнительные блоки внутри того же листа: свои фото или видео с заголовком */
                (it.extra || []).map(function (b) {
                  return '<div class="article__extra">' +
                           '<h2 class="block__title">' + esc(b.title || '') + '</h2>' +
                           (b.text ? '<p class="block__lead">' + rich(b.text) + '</p>' : '') +
                           (b.videos ? videos(b.videos, b.title, b.stack) : photoCarousel(b.photos, b.title)) +
                         '</div>';
                }).join('') +
                (PAGE === 'film' ? share(it) : '') +
              '</article>' +
            '</section>';

    if (hasTeam) {
      html += '<section class="wrap block">' +
                '<h2 class="block__title">' + esc(it.teamTitle || 'Команда') + '</h2>' +
                carousel(it.team.map(person), { kind: 'team', dots: true, label: 'Команда' }) +
              '</section>';
    }

    var prev = items[idx - 1];
    var next = items[idx + 1];
    html += '<nav class="wrap pager" aria-label="Соседние страницы">' +
              (prev ? '<a class="pager__link" href="' + detailHref + '?id=' + encodeURIComponent(prev.id) + '"><small>Назад' + (prev.genre ? ' · ' + esc(prev.genre) : '') + '</small><strong>' + esc(prev.title) + '</strong></a>' : '<span></span>') +
              (next ? '<a class="pager__link pager__link--next" href="' + detailHref + '?id=' + encodeURIComponent(next.id) + '"><small>Дальше' + (next.genre ? ' · ' + esc(next.genre) : '') + '</small><strong>' + esc(next.title) + '</strong></a>' : '<span></span>') +
            '</nav>';

    $('page').innerHTML = html;
    initShare();
  }

  /* плашка вместо плеера, пока фильм снимается */
  function premiere(status) {
    var vk = (S.links || {}).vk;
    return '<div class="premiere">' +
             '<span class="premiere__ic" aria-hidden="true">' + ICONS.calendar + '</span>' +
             '<div class="premiere__body">' +
               '<p class="premiere__label">Фильм в работе</p>' +
               '<p class="premiere__title">' + esc(status) + '</p>' +
               (vk ? '<p class="premiere__text">Следите за новостями в ' +
                       '<a class="prose__join" href="' + esc(vk) + '" target="_blank" rel="noopener">группе «Триумф добрых дел» ВКонтакте</a></p>'
                   : '') +
             '</div>' +
           '</div>';
  }

  /* «Поделиться» внизу страницы фильма. ВКонтакте открывается с готовым текстом
     поста из share в data.js, чтобы человек сразу понял, что публикует.
     Ссылка стоит и в самом тексте: карточку ссылки ВКонтакте прикрепляет не всегда
     (например, пока сайт не опубликован), а в тексте она будет в любом случае.
     Вторая кнопка просто копирует ссылку на страницу */
  function share(it) {
    var url = location.href.split('#')[0];
    var name = (it.genre ? it.genre + ' ' : '') + it.title;
    var vk = 'https://vk.com/share.php?url=' + encodeURIComponent(url) +
             '&title=' + encodeURIComponent(name) +
             '&comment=' + encodeURIComponent((it.share || name) + '\n' + url) +
             (it.cover ? '&image=' + encodeURIComponent(abs(it.cover)) : '') +
             '&noparse=true';
    return '<div class="share">' +
             '<p class="share__title">' + (/фильм/i.test(it.genre || '') ? 'Поделиться фильмом' : 'Поделиться') + '</p>' +
             '<div class="share__btns">' +
               '<a class="share__btn share__btn--vk" href="' + esc(vk) + '" target="_blank" rel="noopener">' +
                 '<span class="share__ic">' + ICONS.vk + '</span>ВКонтакте</a>' +
               '<button class="share__btn share__btn--copy" type="button" data-url="' + esc(url) + '">' +
                 '<span class="share__ic">' + ICONS.link + '</span><span class="share__label">Скопировать ссылку</span></button>' +
             '</div>' +
           '</div>';
  }

  function initShare() {
    var b = document.querySelector('.share__btn--copy');
    if (!b) return;
    var label = b.querySelector('.share__label');
    var ic = b.querySelector('.share__ic');
    b.addEventListener('click', function () {
      copyText(b.getAttribute('data-url')).then(function () {
        b.classList.add('is-done');
        label.textContent = 'Ссылка скопирована';
        ic.innerHTML = ICONS.check;
        setTimeout(function () {
          b.classList.remove('is-done');
          label.textContent = 'Скопировать ссылку';
          ic.innerHTML = ICONS.link;
        }, 1800);
      });
    });
  }

  /* ---------- Отчёты ---------- */

  function renderReports() {
    var R = S.reportsPage || {};
    var docs = R.docs || [];

    var html = hero(R.title, '', HOME);
    html += '<section class="wrap">' +
            '<div class="sheet">' +
              '<div class="prose">' + paragraphs(R.text) + '</div>' +
              '<div class="docs">' +
                docs.map(function (d) {
                  return '<div class="doc">' +
                           '<span class="doc__ic">PDF</span>' +
                           '<div class="doc__body">' +
                             '<p class="doc__title">' + esc(d.title) + '</p>' +
                             '<p class="doc__meta">' + esc(d.meta || (d.file ? 'PDF-документ' : 'Готовится к публикации')) + '</p>' +
                           '</div>' +
                           (d.file
                             ? '<a class="doc__btn" href="' + esc(d.file) + '" download="' + esc(d.saveAs || '') + '">Скачать</a>'
                             : '<span class="doc__btn doc__btn--off">Скоро</span>') +
                         '</div>';
                }).join('') +
              '</div>' +
              '<div class="req">' +
                '<h2 class="req__title">Реквизиты</h2>' +
                '<p>' + esc(org.full) + '</p>' +
                '<p>ИНН ' + esc(org.inn) + ' · КПП ' + esc(org.kpp) + ' · ОГРН ' + esc(org.ogrn) + '</p>' +
                '<p>' + esc(org.address) + '</p>' +
                '<p>Директор ' + esc(org.director) + '</p>' +
              '</div>' +
            '</div>' +
            '</section>';
    $('page').innerHTML = html;
  }

  /* ---------- 404: такой страницы нет ---------- */

  function renderNotFound(crumb) {
    document.title = 'Такой страницы нет · АНО РСЗИ «Триумф»';
    var html = hero('Такой страницы нет', '', crumb || HOME);
    html += '<section class="wrap">' +
              '<div class="sheet lost">' +
                '<p class="prose__lead">Похоже, ссылка устарела или в адресе закралась опечатка. ' +
                'Зато всё остальное на месте, выбирайте, куда пойти дальше.</p>' +
                '<div class="lost__links">' +
                  SECTIONS.map(function (s) {
                    return '<a class="lost__link s-' + s.key + '" href="' + s.href + '">' +
                             '<span class="lost__ic" aria-hidden="true">' + ICONS[s.key] + '</span>' +
                             '<span>' + s.title + '</span>' +
                           '</a>';
                  }).join('') +
                '</div>' +
              '</div>' +
            '</section>';
    $('page').innerHTML = html;
  }

  /* ============================================================
     ОБЩЕЕ: КАРТИНА СТАНЦИИ ВНИЗУ СТРАНИЦЫ
     ============================================================ */

  /* подписи внизу нет: телефон и почта на странице «Миссия» и в окне «Поддержать»,
     реквизиты на странице «Отчёты» и там же в окне */
  function renderPanorama() {
    if (S.panorama && $('panorama')) {
      $('panorama').style.backgroundImage = 'url("' + S.panorama + '")';
      $('panorama').classList.add('panorama--photo');
    }
  }

  /* ---------- небо с облаками ---------- */

  function renderSky() {
    if (!S.sky) return;
    document.body.style.setProperty('--sky', 'url("' + abs(S.sky) + '")');
    document.body.classList.add('has-sky');
  }

  /* ---------- справа вверху: «Контакты» и «Поддержать» ---------- */

  function copyFallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    ta.remove();
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { copyFallback(text); });
    }
    copyFallback(text);
    return Promise.resolve();
  }

  /* строка «название, значение, кнопка скопировать» в окошках справа вверху */
  function copyRow(label, value, href) {
    return '<div class="support__row">' +
             '<dt>' + esc(label) + '</dt>' +
             '<dd>' + (href ? '<a href="' + esc(href) + '">' + esc(value) + '</a>' : esc(value)) + '</dd>' +
             '<button class="support__copy" type="button" data-copy="' + esc(value) + '" aria-label="Скопировать ' + esc(label) + '">' + ICONS.copy + '</button>' +
           '</div>';
  }

  function telHref(phone) { return 'tel:' + String(phone).replace(/[^\d+]/g, ''); }

  /* кнопка и окошко под ней; одно открылось, другое закрылось */
  function initPop(pop, onOpen) {
    var btn = pop.querySelector('.support__btn');
    var panel = pop.querySelector('.support__panel');

    function open() {
      if (onOpen) onOpen();
      panel.hidden = false;
      void panel.offsetWidth;   /* чтобы проявление сработало сразу после показа */
      panel.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function close(focusBack) {
      panel.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      setTimeout(function () { if (!panel.classList.contains('is-open')) panel.hidden = true; }, REDUCE ? 0 : 180);
      if (focusBack) btn.focus();
    }

    btn.addEventListener('click', function () {
      if (panel.hidden) open(); else close(false);
    });
    pop.querySelector('.support__close').addEventListener('click', function () { close(true); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) close(true);
    });
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !pop.contains(e.target)) close(false);
    });
  }

  function renderSupport() {
    var box = $('support');
    if (!box) return;
    var U = S.support || {};
    var bank = U.bank || {};

    /* реквизиты АНО видны всегда; строки банка добавятся, когда их впишут в data.js */
    var hasBank = bank.account && bank.bik;
    var hasQr = U.qr || hasBank;
    var rows = [
      ['Получатель', org.full],
      ['ИНН', org.inn],
      ['КПП', org.kpp],
      ['ОГРН', org.ogrn],
      ['Расчётный счёт', bank.account],
      ['Банк', bank.bankName],
      ['БИК', bank.bik],
      ['Корр. счёт', bank.corr],
      ['Адрес', org.address]
    ].filter(function (r) { return r[1]; });

    /* «Контакты»: телефон и почта с именем человека, который ответит */
    var contacts =
      '<div class="pop">' +
        '<button class="support__btn support__btn--contacts" type="button" aria-expanded="false" aria-controls="contactsPanel" aria-label="Контакты">' +
          '<span class="support__ic">' + ICONS.phone + '</span><span class="support__label">Контакты</span>' +
        '</button>' +
        '<div class="support__panel support__panel--contacts" id="contactsPanel" role="dialog" aria-label="Контакты" hidden>' +
          '<button class="support__close" type="button" aria-label="Закрыть">' + ICONS.close + '</button>' +
          '<p class="support__title">Контакты</p>' +
          (c.name ? '<p class="support__who">' + esc(c.name) + '</p>' : '') +
          '<dl class="support__list">' +
            (c.phone ? copyRow('Телефон', c.phone, telHref(c.phone)) : '') +
            (c.email ? copyRow('Почта', c.email, 'mailto:' + c.email) : '') +
            (c.max ? copyRow('MAX', c.max, c.max) : '') +
          '</dl>' +
        '</div>' +
      '</div>';

    /* «Поддержать»: перевод по номеру телефона, под ним реквизиты АНО */
    var support =
      '<div class="pop">' +
        '<button class="support__btn" type="button" aria-expanded="false" aria-controls="supportPanel">' +
          '<span class="support__heart">' + ICONS.heart + '</span>Поддержать' +
        '</button>' +
        '<div class="support__panel" id="supportPanel" role="dialog" aria-label="' + esc(U.title || 'Поддержать') + '" hidden>' +
          '<button class="support__close" type="button" aria-label="Закрыть">' + ICONS.close + '</button>' +
          '<p class="support__title">' + esc(U.title || 'Поддержать') + '</p>' +
          (U.text ? '<p class="support__text">' + esc(U.text) + '</p>' : '') +
          (hasQr
            ? '<div class="support__qr">' +
                '<div class="support__qr-code" id="supportQr">' +
                  (U.qr ? '<img src="' + esc(U.qr) + '" alt="QR-код для перевода пожертвования">' : '') +
                '</div>' +
                (U.qrText ? '<p class="support__qr-text">' + esc(U.qrText) + '</p>' : '') +
              '</div>'
            : '') +
          (U.phone
            ? '<div class="support__pay">' +
                '<p class="support__pay-title">Перевод по номеру телефона</p>' +
                '<dl class="support__list">' +
                  copyRow('Телефон', U.phone, telHref(U.phone)) +
                  (U.phoneName ? copyRow('Получатель', U.phoneName) : '') +
                '</dl>' +
              '</div>'
            : '') +
          (rows.length
            ? '<p class="support__sub">Реквизиты организации</p>' +
              '<dl class="support__list">' + rows.map(function (r) { return copyRow(r[0], r[1]); }).join('') + '</dl>'
            : '') +
          (!hasBank && U.note ? '<p class="support__note">' + esc(U.note) + '</p>' : '') +
        '</div>' +
      '</div>';

    box.innerHTML = contacts + support;

    var qrDone = !!U.qr;

    /* QR-код по ГОСТ Р 56042-2014: банковское приложение само подставит реквизиты */
    function drawQr() {
      if (qrDone || !hasBank) return;
      qrDone = true;
      var clean = function (v) { return String(v || '').replace(/\|/g, ' ').trim(); };
      var payload = [
        'ST00012',
        'Name=' + clean(org.short || org.full),
        'PersonalAcc=' + clean(bank.account),
        'BankName=' + clean(bank.bankName),
        'BIC=' + clean(bank.bik),
        'CorrespAcc=' + clean(bank.corr),
        'PayeeINN=' + clean(org.inn),
        'KPP=' + clean(org.kpp),
        'Purpose=' + clean(U.purpose || 'Пожертвование')
      ].join('|');

      var render = function () {
        var holder = $('supportQr');
        if (!holder || !window.qrcode) return;
        window.qrcode.stringToBytes = window.qrcode.stringToBytesFuncs['UTF-8'];
        var q = window.qrcode(0, 'M');
        q.addData(payload, 'Byte');
        q.make();
        holder.innerHTML = q.createSvgTag({ cellSize: 4, margin: 2, scalable: true,
                                            alt: 'QR-код для перевода пожертвования' });
      };

      if (window.qrcode) { render(); return; }
      var sc = document.createElement('script');
      sc.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
      sc.onload = render;
      document.head.appendChild(sc);
    }

    var pops = box.querySelectorAll('.pop');
    initPop(pops[0]);
    initPop(pops[1], drawQr);

    Array.prototype.forEach.call(box.querySelectorAll('.support__copy'), function (b) {
      b.addEventListener('click', function () {
        copyText(b.getAttribute('data-copy')).then(function () {
          b.classList.add('is-done');
          b.innerHTML = ICONS.check;
          setTimeout(function () { b.classList.remove('is-done'); b.innerHTML = ICONS.copy; }, 1400);
        });
      });
    });
  }

  /* ============================================================
     ЗАПУСК
     ============================================================ */

  renderSky();
  if (PAGE === 'home') renderHome();
  renderNav();
  renderSupport();

  if (PAGE === 'mission')  renderMission();
  if (PAGE === 'projects') renderList(S.projectsPage, S.projects, 'project.html');
  if (PAGE === 'project')  renderDetail(S.projects, 'projects.html', 'Все проекты', 'project.html');
  if (PAGE === 'films')    renderList(S.filmsPage, S.films, 'film.html');
  if (PAGE === 'film')     renderDetail(S.films, 'cinema.html', 'Все фильмы', 'film.html');
  if (PAGE === 'reports')  renderReports();
  if (PAGE === 'notfound') renderNotFound();

  renderPanorama();

  Array.prototype.forEach.call(document.querySelectorAll('.carousel'), initCarousel);
  initLightbox();
  initReveal();
})();
