/**
 * IMA UK • Poster Maker & Carousel Maker
 * Single & Multi-Slide Social Media Graphics Generator
 * Iraqi Medical Association UK & Europe
 */

(() => {
  'use strict';

  // ============================================================
  // TRANSLATIONS & DICTIONARY
  // ============================================================
  const I18N = {
    en: {
      posterMode: 'Poster',
      carouselMode: 'Carousel',
      exportPng: 'Export PNG',
      exportAllZip: 'Export ZIP',
      clickToEditHint: '💡 Click any text directly to edit',
      slidesLabel: 'Slides Management',
      duplicateSlide: 'Duplicate',
      deleteSlide: 'Delete',
      addNewSlide: 'Add Slide',
      tabStyle: 'Style',
      tabLayout: 'Layout',
      tabBrand: 'Brand',
      bgImageTitle: 'Background Photo',
      optionalBadge: 'Optional',
      uploadClickText: 'Upload background image',
      uploadDragText: 'or drag and drop photo here',
      photoActive: 'Background Active',
      overlayDarkness: 'Darkness / Contrast Tint',
      brandColorTheme: 'Brand Color Themes',
      slideTemplate: 'Slide Template',
      tplAnnouncement: 'Announcement',
      tplAnnouncementDesc: 'Title, subtitle, and category badge',
      tplEvent: 'Event / Meeting',
      tplEventDesc: 'Date, venue, & time badges',
      tplKeyPoints: 'Key Points / Agenda',
      tplKeyPointsDesc: '3 bulleted highlight cards',
      tplQuote: 'Quote / Statement',
      tplQuoteDesc: 'Key quotation and author attribution',
      tplOutro: 'Call to Action',
      tplOutroDesc: 'Register, follow, & contact',
      elementsVisibility: 'Elements',
      showBadgeToggle: 'Category Tag Badge',
      showFooterToggle: 'Footer & Handles',
      officialLogo: 'Official Logo',
      logoPosition: 'Logo Placement',
      posLeft: 'Top Left',
      posCenter: 'Center',
      posRight: 'Top Right',
      swipeHint: 'Swipe ➔',
      defaultBadge: 'IMA UK ANNOUNCEMENT',
      defaultTitle: 'Annual Medical Conference 2026',
      defaultSubtitle: 'Join distinguished healthcare leaders, researchers, and clinicians across the UK & Europe for groundbreaking sessions, networking, and medical innovation.',
      chipDate: '15-16 October 2026',
      chipVenue: 'London, United Kingdom',
      chipEntry: 'Free for Members',
      point1: 'Advancing Healthcare Innovations & Research',
      point2: 'Cross-Border Collaboration Across UK & Europe',
      point3: 'CME-Accredited Workshops & Keynotes',
      quoteStatement: '"Empowering Iraqi medical practitioners, bridging expertise, and fostering clinical excellence internationally."',
      quoteAuthor: 'Executive Committee • IMA UK & Europe',
      outroTitle: 'Ready to Participate?',
      outroSubtitle: 'Registrations are now officially open.',
      outroBtn: 'Register Online ➔',
      footerHandle: '@IMA_UK_Europe',
      footerUrl: 'ima-uk.org',
      toastCopied: 'Slide updated',
      toastExporting: 'Preparing high-resolution export...',
      toastDone: 'Download started successfully!',
      toastSlideDeleted: 'Slide deleted'
    },
    ar: {
      posterMode: 'بوستر مفرد',
      carouselMode: 'كاروسيل شرائح',
      exportPng: 'تصدير PNG',
      exportAllZip: 'تصدير الكل ZIP',
      clickToEditHint: '💡 اضغط على أي نص للتعديل مباشرة',
      slidesLabel: 'إدارة الشرائح',
      duplicateSlide: 'تكرار',
      deleteSlide: 'حذف',
      addNewSlide: 'إضافة شريحة',
      tabStyle: 'المظهر',
      tabLayout: 'التخطيط',
      tabBrand: 'الهوية',
      bgImageTitle: 'صورة الخلفية',
      optionalBadge: 'اختياري',
      uploadClickText: 'انقر لرفع صورة الخلفية',
      uploadDragText: 'أو اسحب الصورة وأفلتها هنا',
      photoActive: 'صورة الخلفية مفعّلة',
      overlayDarkness: 'تعتيم / تباين الخلفية',
      brandColorTheme: 'ألوان الهوية المعتمدة',
      slideTemplate: 'نمط الشريحة',
      tplAnnouncement: 'إعلان رئيسي',
      tplAnnouncementDesc: 'عنوان عريض، نبذة وشارة تصنيف',
      tplEvent: 'مؤتمر / فعالية',
      tplEventDesc: 'بطاقات التاريخ، المكان والوقت',
      tplKeyPoints: 'أهم النقاط / المحاور',
      tplKeyPointsDesc: '3 بطاقات نقطية بارزة',
      tplQuote: 'اقتباس / تصريح',
      tplQuoteDesc: 'قول مأثور مع اسم المصدر',
      tplOutro: 'دعوة للتسجيل / ختام',
      tplOutroDesc: 'زر تسجيل، متابعة وموقع',
      elementsVisibility: 'العناصر',
      showBadgeToggle: 'شارة التصنيف العلوية',
      showFooterToggle: 'الشريط السفلي ومعرّفات التواصل',
      officialLogo: 'الشعار الرسمي',
      logoPosition: 'موقع الشعار',
      posLeft: 'أعلى اليمين',
      posCenter: 'الوسط',
      posRight: 'أعلى اليسار',
      swipeHint: 'اسحب ➔',
      defaultBadge: 'إعلان الجمعية الطبية العراقية',
      defaultTitle: 'المؤتمر الطبي السنوي لعام 2026',
      defaultSubtitle: 'ندعو نخبة الأطباء والباحثين في المملكة المتحدة وأوروبا للمشاركة في جلسات علمية مميزة، وورش عمل معتمدة، وتبادل الخبرات الطبية الرائدة.',
      chipDate: '15-16 تشرين الأول 2026',
      chipVenue: 'لندن، المملكة المتحدة',
      chipEntry: 'التسجيل متاح للأعضاء',
      point1: 'تطوير الرعاية الصحية والابتكار الطبي المعاصر',
      point2: 'تعزيز التعاون الطبي المشترك في بريطانيا وأوروبا',
      point3: 'ورش عمل تدريبية معتمدة للتطوير المهني المستمر',
      quoteStatement: '«معاً لتمكين الطبيب العراقي، ونقل الخبرات العالمية، والارتقاء بالرعاية الصحية في العراق والمهجر.»',
      quoteAuthor: 'الهيئة الإدارية • الجمعية الطبية العراقية في المملكة المتحدة',
      outroTitle: 'انضموا إلينا وسجلوا حضوركم',
      outroSubtitle: 'المقاعد محدودة لجميع الجلسات التخصصية.',
      outroBtn: 'سجل الآن عبر الموقع ➔',
      footerHandle: '@IMA_UK_Europe',
      footerUrl: 'ima-uk.org',
      toastCopied: 'تم تحديث الشريحة',
      toastExporting: 'جارٍ إعداد الصور بدقة فائقة...',
      toastDone: 'تم بدء التنزيل بنجاح!',
      toastSlideDeleted: 'تم حذف الشريحة'
    }
  };

  // ============================================================
  // APPLICATION STATE
  // ============================================================
  const state = {
    mode: 'poster', // 'poster' | 'carousel'
    ratio: 'square', // 'square' (1080x1080) | 'portrait' (1080x1350)
    lang: 'en', // 'en' | 'ar'
    theme: 'theme-royal-navy',
    bgImage: null,
    bgOverlayDarkness: 45, // 0 - 90 %
    logoSrc: 'assets/logos/ima-crest.png',
    logoPos: 'logo-pos-top-left',
    showBadge: true,
    showFooter: true,
    currentSlideIndex: 0,
    slides: [
      createDefaultSlide('layout-announcement', 'en')
    ]
  };

  function createDefaultSlide(template = 'layout-announcement', lang = 'en') {
    const t = I18N[lang];
    return {
      template,
      badge: t.defaultBadge,
      title: t.defaultTitle,
      subtitle: t.defaultSubtitle,
      chips: [
        { icon: '📅', text: t.chipDate },
        { icon: '📍', text: t.chipVenue },
        { icon: '🎟️', text: t.chipEntry }
      ],
      points: [
        t.point1,
        t.point2,
        t.point3
      ],
      quote: t.quoteStatement,
      author: t.quoteAuthor,
      ctaHeading: t.outroTitle,
      ctaSub: t.outroSubtitle,
      ctaBtn: t.outroBtn,
      footerHandle: t.footerHandle,
      footerUrl: t.footerUrl
    };
  }

  // ============================================================
  // DOM REFERENCES
  // ============================================================
  const DOM = {
    body: document.body,
    stageContainer: document.getElementById('stage-container'),
    canvasWrapper: document.getElementById('canvas-wrapper'),
    artboard: document.getElementById('artboard'),
    artboardBgMedia: document.getElementById('artboard-bg-media'),
    artboardBgOverlay: document.getElementById('artboard-bg-overlay'),
    canvasDimText: document.getElementById('canvas-dim-text'),
    
    // Canvas Elements
    slideHeader: document.getElementById('slide-header'),
    slideLogoImg: document.getElementById('slide-logo-img'),
    slideLogoWrapper: document.getElementById('slide-logo-wrapper'),
    slideBadgeWrapper: document.getElementById('slide-badge-wrapper'),
    slideBadge: document.getElementById('slide-badge'),
    slideTitle: document.getElementById('slide-title'),
    slideSubtitle: document.getElementById('slide-subtitle'),
    slideModularBlock: document.getElementById('slide-modular-block'),
    slideFooter: document.getElementById('slide-footer'),
    footerHandle: document.getElementById('footer-handle'),
    footerUrl: document.getElementById('footer-url'),
    slideFooterNav: document.getElementById('slide-footer-nav'),
    slideCounterBadge: document.getElementById('slide-counter-badge'),
    slideSwipeBadge: document.getElementById('slide-swipe-badge'),

    // Top Bar & Controls
    btnHome: document.getElementById('btn-home'),
    pillPoster: document.getElementById('pill-poster'),
    pillCarousel: document.getElementById('pill-carousel'),
    productTitleBadge: document.getElementById('product-title-badge'),
    btnRatioSquare: document.getElementById('btn-ratio-square'),
    btnRatioPortrait: document.getElementById('btn-ratio-portrait'),
    btnLangToggle: document.getElementById('btn-lang-toggle'),
    langCurrent: document.getElementById('lang-current'),
    langTarget: document.getElementById('lang-target'),
    btnExportSingle: document.getElementById('btn-export-single'),
    btnExportAllZip: document.getElementById('btn-export-all-zip'),

    // On-canvas navigation
    btnPrevSlide: document.getElementById('btn-prev-slide'),
    btnNextSlide: document.getElementById('btn-next-slide'),

    // Carousel Strip
    carouselStripContainer: document.getElementById('carousel-strip-container'),
    carouselThumbnailsList: document.getElementById('carousel-thumbnails-list'),
    btnAddSlide: document.getElementById('btn-add-slide'),
    btnDuplicateSlide: document.getElementById('btn-duplicate-slide'),
    btnDeleteSlide: document.getElementById('btn-delete-slide'),

    // Control Panel
    controlPanel: document.getElementById('control-panel'),
    panelTabs: document.querySelectorAll('.panel-tab'),
    tabPanes: document.querySelectorAll('.tab-pane'),

    // Style Tab Controls
    inputBgUpload: document.getElementById('input-bg-upload'),
    uploadDropzone: document.getElementById('upload-dropzone'),
    uploadPreviewBar: document.getElementById('upload-preview-bar'),
    uploadThumbPreview: document.getElementById('upload-thumb-preview'),
    uploadFileName: document.getElementById('upload-file-name'),
    btnRemoveBgImg: document.getElementById('btn-remove-bg-img'),
    sliderOverlay: document.getElementById('slider-overlay'),
    overlayValueDisplay: document.getElementById('overlay-value-display'),
    themeChips: document.querySelectorAll('.theme-chip'),

    // Layout Tab Controls
    templateBtns: document.querySelectorAll('.template-btn'),
    toggleBadge: document.getElementById('toggle-badge'),
    toggleFooter: document.getElementById('toggle-footer'),

    // Brand Tab Controls
    logoChoiceBtns: document.querySelectorAll('.logo-choice-btn'),
    segmentBtns: document.querySelectorAll('.segment-btn'),

    // Welcome Modal
    welcomeModal: document.getElementById('welcome-modal'),
    cardSelectPoster: document.getElementById('card-select-poster'),
    cardSelectCarousel: document.getElementById('card-select-carousel'),

    // Export Overlay & Toast
    exportOverlay: document.getElementById('export-overlay'),
    exportStatusTitle: document.getElementById('export-status-title'),
    exportStatusDesc: document.getElementById('export-status-desc'),
    exportProgressFill: document.getElementById('export-progress-fill'),
    toast: document.getElementById('toast'),

    // Mobile Dock
    dockBtns: document.querySelectorAll('.dock-btn'),
    dockBtnExport: document.getElementById('dock-btn-export')
  };

  // ============================================================
  // INITIALIZATION
  // ============================================================
  function init() {
    // Check URL parameters for direct mode: ?mode=poster or ?mode=carousel
    const urlParams = new URLSearchParams(window.location.search);
    const paramMode = urlParams.get('mode');
    const paramLang = urlParams.get('lang');

    if (paramLang && (paramLang === 'ar' || paramLang === 'en')) {
      state.lang = paramLang;
    }

    if (paramMode === 'poster' || paramMode === 'carousel') {
      setMode(paramMode, false);
      DOM.welcomeModal.classList.add('hidden');
    } else {
      // Show Welcome Modal on initial launch
      DOM.welcomeModal.classList.remove('hidden');
    }

    applyLanguage();
    bindEvents();
    renderCurrentSlide();
    updateTheme();
    updateLogo();
    updateBackground();
    updateThumbnails();
    adjustCanvasScale();

    window.addEventListener('resize', debounce(adjustCanvasScale, 80));
    window.addEventListener('orientationchange', () => setTimeout(adjustCanvasScale, 150));
  }

  // ============================================================
  // DYNAMIC ARTBOARD SCALING
  // Fits 1080x1080 or 1080x1350 pixel artboard crisply into viewport
  // ============================================================
  function adjustCanvasScale() {
    if (!DOM.canvasWrapper || !DOM.artboard) return;

    const wrapperRect = DOM.canvasWrapper.getBoundingClientRect();
    const availableWidth = wrapperRect.width - 24;
    const availableHeight = wrapperRect.height - 24;

    const baseWidth = 1080;
    const baseHeight = state.ratio === 'square' ? 1080 : 1350;

    const scaleX = availableWidth / baseWidth;
    const scaleY = availableHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY, 0.95);

    DOM.artboard.style.transform = `scale(${scale})`;

    // Adjust wrapper height so scrollbars & footer strip align seamlessly
    DOM.canvasWrapper.style.height = `${baseHeight * scale + 10}px`;

    // Update dimension display pill
    DOM.canvasDimText.textContent = `${baseWidth} × ${baseHeight} px (${Math.round(scale * 100)}%)`;
  }

  // ============================================================
  // RENDER SLIDE CONTENT
  // ============================================================
  function renderCurrentSlide() {
    const slide = state.slides[state.currentSlideIndex];
    if (!slide) return;

    // Header & Texts
    DOM.slideBadge.innerText = slide.badge || '';
    DOM.slideTitle.innerText = slide.title || '';
    DOM.slideSubtitle.innerText = slide.subtitle || '';
    DOM.footerHandle.innerText = slide.footerHandle || '@IMA_UK_Europe';
    DOM.footerUrl.innerText = slide.footerUrl || 'ima-uk.org';

    // Badge & Footer Visibility
    DOM.slideBadgeWrapper.style.display = state.showBadge ? 'flex' : 'none';
    DOM.slideFooter.style.display = state.showFooter ? 'flex' : 'none';
    DOM.toggleBadge.checked = state.showBadge;
    DOM.toggleFooter.checked = state.showFooter;

    // Slide Counter & Swipe Hint
    const totalSlides = state.slides.length;
    const currentNum = String(state.currentSlideIndex + 1).padStart(2, '0');
    const totalNum = String(totalSlides).padStart(2, '0');
    DOM.slideCounterBadge.textContent = `${currentNum} / ${totalNum}`;

    // Hide swipe badge on the last slide
    if (state.currentSlideIndex === totalSlides - 1) {
      DOM.slideSwipeBadge.style.visibility = 'hidden';
    } else {
      DOM.slideSwipeBadge.style.visibility = 'visible';
      DOM.slideSwipeBadge.textContent = I18N[state.lang].swipeHint;
    }

    // Prev / Next button state
    DOM.btnPrevSlide.disabled = state.currentSlideIndex === 0;
    DOM.btnNextSlide.disabled = state.currentSlideIndex === totalSlides - 1;

    // Render Modular Template Block
    renderModularTemplate(slide);

    // Sync template selector button in layout tab
    DOM.templateBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-template') === slide.template);
    });

    // Update ratio classes
    DOM.artboard.classList.toggle('ratio-portrait', state.ratio === 'portrait');
    DOM.artboard.classList.toggle('ratio-square', state.ratio === 'square');
  }

  // Render modular blocks based on template
  function renderModularTemplate(slide) {
    const block = DOM.slideModularBlock;
    block.innerHTML = '';
    block.className = `slide-modular-block ${slide.template}`;

    if (slide.template === 'layout-announcement') {
      // Pure clean announcement: no extra modular box
      return;
    }

    if (slide.template === 'layout-event') {
      const cards = document.createElement('div');
      cards.className = 'event-meta-cards';

      slide.chips.forEach((chip, idx) => {
        const chipEl = document.createElement('div');
        chipEl.className = 'meta-chip';
        chipEl.setAttribute('contenteditable', 'true');
        chipEl.setAttribute('spellcheck', 'false');
        chipEl.innerHTML = `<span class="meta-chip-icon">${chip.icon}</span> <span class="meta-chip-text">${chip.text}</span>`;
        chipEl.addEventListener('input', () => {
          chip.text = chipEl.querySelector('.meta-chip-text')?.innerText || chipEl.innerText;
        });
        cards.appendChild(chipEl);
      });

      block.appendChild(cards);
    } else if (slide.template === 'layout-checklist') {
      const list = document.createElement('div');
      list.className = 'points-list';

      slide.points.forEach((point, idx) => {
        const card = document.createElement('div');
        card.className = 'point-card';
        card.innerHTML = `
          <div class="point-check">✓</div>
          <div class="point-text" contenteditable="true" spellcheck="false">${point}</div>
        `;
        const textEl = card.querySelector('.point-text');
        textEl.addEventListener('input', () => {
          slide.points[idx] = textEl.innerText;
        });
        list.appendChild(card);
      });

      block.appendChild(list);
    } else if (slide.template === 'layout-quote') {
      const quoteBox = document.createElement('div');
      quoteBox.className = 'quote-container';
      quoteBox.innerHTML = `
        <div class="quote-symbol">“</div>
        <div class="quote-statement" contenteditable="true" spellcheck="false">${slide.quote}</div>
        <div class="quote-author" contenteditable="true" spellcheck="false">${slide.author}</div>
      `;

      const stmtEl = quoteBox.querySelector('.quote-statement');
      const authEl = quoteBox.querySelector('.quote-author');

      stmtEl.addEventListener('input', () => { slide.quote = stmtEl.innerText; });
      authEl.addEventListener('input', () => { slide.author = authEl.innerText; });

      block.appendChild(quoteBox);
    } else if (slide.template === 'layout-outro') {
      const outroBox = document.createElement('div');
      outroBox.className = 'outro-cta-card';
      outroBox.innerHTML = `
        <div class="outro-cta-text">
          <div class="outro-heading" contenteditable="true" spellcheck="false">${slide.ctaHeading}</div>
          <div class="outro-sub" contenteditable="true" spellcheck="false">${slide.ctaSub}</div>
        </div>
        <div class="outro-button-pill" contenteditable="true" spellcheck="false">${slide.ctaBtn}</div>
      `;

      const headingEl = outroBox.querySelector('.outro-heading');
      const subEl = outroBox.querySelector('.outro-sub');
      const btnEl = outroBox.querySelector('.outro-button-pill');

      headingEl.addEventListener('input', () => { slide.ctaHeading = headingEl.innerText; });
      subEl.addEventListener('input', () => { slide.ctaSub = subEl.innerText; });
      btnEl.addEventListener('input', () => { slide.ctaBtn = btnEl.innerText; });

      block.appendChild(outroBox);
    }
  }

  // ============================================================
  // THUMBNAILS LIST (CAROUSEL MODE)
  // ============================================================
  function updateThumbnails() {
    DOM.carouselThumbnailsList.innerHTML = '';

    state.slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `carousel-thumb-card ${idx === state.currentSlideIndex ? 'active' : ''}`;
      thumb.innerHTML = `<span>${idx + 1}</span>`;
      thumb.title = `Slide ${idx + 1}: ${slide.template.replace('layout-', '')}`;
      thumb.addEventListener('click', () => {
        state.currentSlideIndex = idx;
        renderCurrentSlide();
        updateThumbnails();
      });
      DOM.carouselThumbnailsList.appendChild(thumb);
    });

    // Disable delete if only 1 slide remains
    DOM.btnDeleteSlide.disabled = state.slides.length <= 1;
  }

  // ============================================================
  // STYLING & BRAND UPDATES
  // ============================================================
  function updateTheme() {
    // Remove old theme classes
    const themeClasses = ['theme-royal-navy', 'theme-signature-dual', 'theme-clinical-teal', 'theme-midnight-dark', 'theme-clean-white', 'theme-oceanic-glow'];
    DOM.artboard.classList.remove(...themeClasses);
    DOM.artboard.classList.add(state.theme);

    // Sync theme chip selection
    DOM.themeChips.forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-theme') === state.theme);
    });
  }

  function updateLogo() {
    if (state.logoSrc === 'none') {
      DOM.slideLogoWrapper.style.display = 'none';
    } else {
      DOM.slideLogoWrapper.style.display = 'flex';
      DOM.slideLogoImg.src = state.logoSrc;
    }

    // Logo position classes
    DOM.slideHeader.classList.remove('logo-pos-top-left', 'logo-pos-top-center', 'logo-pos-top-right');
    DOM.slideHeader.classList.add(state.logoPos);

    // Sync buttons
    DOM.logoChoiceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-logo') === state.logoSrc);
    });

    DOM.segmentBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-pos') === state.logoPos);
    });
  }

  function updateBackground() {
    if (state.bgImage) {
      DOM.artboardBgMedia.style.backgroundImage = `url(${state.bgImage})`;
      DOM.uploadPreviewBar.classList.remove('hidden');
      DOM.uploadThumbPreview.style.backgroundImage = `url(${state.bgImage})`;
    } else {
      DOM.artboardBgMedia.style.backgroundImage = 'none';
      DOM.uploadPreviewBar.classList.add('hidden');
    }

    const opacity = state.bgOverlayDarkness / 100;
    DOM.artboardBgOverlay.style.backgroundColor = state.theme === 'theme-clean-white'
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(2, 18, 32, ${opacity})`;

    DOM.sliderOverlay.value = state.bgOverlayDarkness;
    DOM.overlayValueDisplay.textContent = `${state.bgOverlayDarkness}%`;
  }

  // ============================================================
  // LANGUAGE & RTL SWITCHING
  // ============================================================
  function applyLanguage() {
    DOM.body.classList.remove('lang-en', 'lang-ar');
    DOM.body.classList.add(`lang-${state.lang}`);
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');

    // Toggle indicator texts
    if (state.lang === 'en') {
      DOM.langCurrent.textContent = 'EN';
      DOM.langTarget.textContent = 'عربي';
    } else {
      DOM.langCurrent.textContent = 'عربي';
      DOM.langTarget.textContent = 'EN';
    }

    // Update all i18n data elements in DOM
    const t = I18N[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    renderCurrentSlide();
  }

  function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'ar' : 'en';

    // Ask or seamlessly populate authentic localized placeholders if current content is default
    const currentSlide = state.slides[state.currentSlideIndex];
    const prevLang = state.lang === 'en' ? 'ar' : 'en';
    const oldDefaults = I18N[prevLang];

    if (currentSlide.title === oldDefaults.defaultTitle) {
      currentSlide.title = I18N[state.lang].defaultTitle;
      currentSlide.subtitle = I18N[state.lang].defaultSubtitle;
      currentSlide.badge = I18N[state.lang].defaultBadge;
    }

    applyLanguage();
    showToast(state.lang === 'ar' ? 'تم تحويل اللغة إلى العربية (Sora)' : 'Switched to English (Sora)');
  }

  // ============================================================
  // MODE SELECTION: POSTER (1 SLIDE) VS CAROUSEL (MULTI-SLIDE)
  // ============================================================
  function setMode(mode, showFeedback = true) {
    state.mode = mode;
    DOM.body.classList.remove('mode-poster', 'mode-carousel');
    DOM.body.classList.add(`mode-${mode}`);

    DOM.pillPoster.classList.toggle('active', mode === 'poster');
    DOM.pillCarousel.classList.toggle('active', mode === 'carousel');

    DOM.productTitleBadge.textContent = mode === 'poster' ? 'Poster' : 'Carousel';

    if (mode === 'carousel' && state.slides.length === 1) {
      // Prepopulate standard 3-slide carousel flow for instant satisfaction
      state.slides.push(
        {
          template: 'layout-checklist',
          badge: state.lang === 'en' ? 'KEY HIGHLIGHTS' : 'أهم المحاور',
          title: state.lang === 'en' ? 'Core Objectives & Topics' : 'أهداف ومحاور المؤتمر',
          subtitle: state.lang === 'en' ? 'Comprehensive medical curriculum across key health sectors.' : 'برنامج طبي متكامل يغطي كافة المجالات الحيوية.',
          chips: [],
          points: [
            I18N[state.lang].point1,
            I18N[state.lang].point2,
            I18N[state.lang].point3
          ],
          quote: '',
          author: '',
          ctaHeading: '',
          ctaSub: '',
          ctaBtn: '',
          footerHandle: I18N[state.lang].footerHandle,
          footerUrl: I18N[state.lang].footerUrl
        },
        {
          template: 'layout-outro',
          badge: state.lang === 'en' ? 'REGISTER NOW' : 'التسجيل متاح',
          title: state.lang === 'en' ? 'Join Us in London & Online' : 'انضموا إلينا في لندن وعبر الإنترنت',
          subtitle: state.lang === 'en' ? 'Secure your attendance today to connect with healthcare pioneers.' : 'احجز مقعدك اليوم للتواصل مع رواد القطاع الصحي.',
          chips: [],
          points: [],
          quote: '',
          author: '',
          ctaHeading: I18N[state.lang].outroTitle,
          ctaSub: I18N[state.lang].outroSubtitle,
          ctaBtn: I18N[state.lang].outroBtn,
          footerHandle: I18N[state.lang].footerHandle,
          footerUrl: I18N[state.lang].footerUrl
        }
      );
    }

    renderCurrentSlide();
    updateThumbnails();
    adjustCanvasScale();

    if (showFeedback) {
      showToast(mode === 'poster' ? 'Poster Maker active (1 Slide)' : 'Carousel Maker active (Multi-Slide)');
    }
  }

  // ============================================================
  // SLIDE MANAGEMENT (CAROUSEL)
  // ============================================================
  function addSlide() {
    const templates = ['layout-announcement', 'layout-event', 'layout-checklist', 'layout-quote', 'layout-outro'];
    // Cycle template based on slide length
    const tpl = templates[state.slides.length % templates.length];
    const newSlide = createDefaultSlide(tpl, state.lang);

    state.slides.push(newSlide);
    state.currentSlideIndex = state.slides.length - 1;

    renderCurrentSlide();
    updateThumbnails();
    adjustCanvasScale();
    showToast(`Added slide ${state.slides.length}`);
  }

  function duplicateSlide() {
    const current = state.slides[state.currentSlideIndex];
    const clone = JSON.parse(JSON.stringify(current));
    clone.title += ' (Copy)';

    state.slides.splice(state.currentSlideIndex + 1, 0, clone);
    state.currentSlideIndex++;

    renderCurrentSlide();
    updateThumbnails();
    showToast('Slide duplicated');
  }

  function deleteSlide() {
    if (state.slides.length <= 1) return;

    state.slides.splice(state.currentSlideIndex, 1);
    if (state.currentSlideIndex >= state.slides.length) {
      state.currentSlideIndex = state.slides.length - 1;
    }

    renderCurrentSlide();
    updateThumbnails();
    showToast(I18N[state.lang].toastSlideDeleted);
  }

  function prevSlide() {
    if (state.currentSlideIndex > 0) {
      state.currentSlideIndex--;
      renderCurrentSlide();
      updateThumbnails();
    }
  }

  function nextSlide() {
    if (state.currentSlideIndex < state.slides.length - 1) {
      state.currentSlideIndex++;
      renderCurrentSlide();
      updateThumbnails();
    }
  }

  // ============================================================
  // EXPORT ENGINE (HIGH-RESOLUTION PNG & ZIP)
  // ============================================================
  async function renderSlideToCanvas() {
    // Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // Save current scale
    const originalTransform = DOM.artboard.style.transform;
    DOM.artboard.style.transform = 'scale(1)';

    const canvas = await html2canvas(DOM.artboard, {
      scale: 1, // Full 1080x1080 or 1080x1350 resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    });

    // Restore responsive transform
    DOM.artboard.style.transform = originalTransform;
    return canvas;
  }

  // Single Slide Export
  async function exportSinglePNG() {
    try {
      showExportOverlay('Rendering High-Resolution Poster...', 'Generating crisp 1080px brand graphic', 40);

      const canvas = await renderSlideToCanvas();
      setExportProgress(85);

      const dataUrl = canvas.toDataURL('image/png');
      const filename = `IMA-UK-${state.mode === 'poster' ? 'Poster' : 'Slide-' + (state.currentSlideIndex + 1)}.png`;

      downloadDataUrl(dataUrl, filename);
      setExportProgress(100);

      setTimeout(() => {
        hideExportOverlay();
        showToast(I18N[state.lang].toastDone);
      }, 400);
    } catch (err) {
      console.error('Export error:', err);
      hideExportOverlay();
      alert('Failed to export PNG. Please try again.');
    }
  }

  // Batch Export All Slides as ZIP (Carousel)
  async function exportAllSlidesZIP() {
    if (typeof JSZip === 'undefined') {
      alert('ZIP library loading... Please try again.');
      return;
    }

    try {
      showExportOverlay('Rendering All Carousel Slides...', 'Building multi-slide ZIP archive', 10);

      const zip = new JSZip();
      const folder = zip.folder('IMA_UK_Carousel');
      const savedActiveIndex = state.currentSlideIndex;
      const total = state.slides.length;

      for (let i = 0; i < total; i++) {
        state.currentSlideIndex = i;
        renderCurrentSlide();
        // Give DOM time to update
        await new Promise(r => setTimeout(r, 60));

        const canvas = await renderSlideToCanvas();
        const base64Data = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
        const filename = `Slide_${String(i + 1).padStart(2, '0')}.png`;
        folder.file(filename, base64Data, { base64: true });

        const pct = Math.round(15 + ((i + 1) / total) * 70);
        setExportProgress(pct);
      }

      // Restore original active slide
      state.currentSlideIndex = savedActiveIndex;
      renderCurrentSlide();

      setExportProgress(90);
      const zipContent = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(zipContent);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'IMA_UK_Carousel_Post.zip';
      link.click();
      URL.revokeObjectURL(downloadUrl);

      setExportProgress(100);
      setTimeout(() => {
        hideExportOverlay();
        showToast('ZIP downloaded successfully!');
      }, 400);

    } catch (err) {
      console.error('ZIP Export error:', err);
      hideExportOverlay();
      alert('Failed to bundle slides into ZIP. Please try individual slide export.');
    }
  }

  function downloadDataUrl(dataUrl, filename) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function showExportOverlay(title, desc, progress = 0) {
    DOM.exportStatusTitle.textContent = title;
    DOM.exportStatusDesc.textContent = desc;
    DOM.exportProgressFill.style.width = `${progress}%`;
    DOM.exportOverlay.classList.remove('hidden');
  }

  function setExportProgress(progress) {
    DOM.exportProgressFill.style.width = `${progress}%`;
  }

  function hideExportOverlay() {
    DOM.exportOverlay.classList.add('hidden');
  }

  function showToast(msg) {
    DOM.toast.textContent = msg;
    DOM.toast.classList.add('show');
    setTimeout(() => {
      DOM.toast.classList.remove('show');
    }, 2400);
  }

  // ============================================================
  // EVENT BINDINGS
  // ============================================================
  function bindEvents() {
    // Top Bar Mode Switching
    DOM.pillPoster.addEventListener('click', () => setMode('poster'));
    DOM.pillCarousel.addEventListener('click', () => setMode('carousel'));

    DOM.btnHome.addEventListener('click', () => {
      DOM.welcomeModal.classList.remove('hidden');
    });

    // Welcome Cards
    DOM.cardSelectPoster.addEventListener('click', () => {
      setMode('poster');
      DOM.welcomeModal.classList.add('hidden');
    });

    DOM.cardSelectCarousel.addEventListener('click', () => {
      setMode('carousel');
      DOM.welcomeModal.classList.add('hidden');
    });

    // Ratio Toggle
    DOM.btnRatioSquare.addEventListener('click', () => {
      state.ratio = 'square';
      DOM.btnRatioSquare.classList.add('active');
      DOM.btnRatioPortrait.classList.remove('active');
      renderCurrentSlide();
      adjustCanvasScale();
    });

    DOM.btnRatioPortrait.addEventListener('click', () => {
      state.ratio = 'portrait';
      DOM.btnRatioPortrait.classList.add('active');
      DOM.btnRatioSquare.classList.remove('active');
      renderCurrentSlide();
      adjustCanvasScale();
    });

    // Language Toggle
    DOM.btnLangToggle.addEventListener('click', toggleLanguage);

    // Export Triggers
    DOM.btnExportSingle.addEventListener('click', exportSinglePNG);
    DOM.btnExportAllZip.addEventListener('click', exportAllSlidesZIP);
    DOM.dockBtnExport.addEventListener('click', () => {
      if (state.mode === 'carousel') {
        const choice = confirm('Download all slides as ZIP? (Click Cancel to export only this slide)');
        if (choice) exportAllSlidesZIP();
        else exportSinglePNG();
      } else {
        exportSinglePNG();
      }
    });

    // Carousel Navigation
    DOM.btnPrevSlide.addEventListener('click', prevSlide);
    DOM.btnNextSlide.addEventListener('click', nextSlide);
    DOM.btnAddSlide.addEventListener('click', addSlide);
    DOM.btnDuplicateSlide.addEventListener('click', duplicateSlide);
    DOM.btnDeleteSlide.addEventListener('click', deleteSlide);

    // Keyboard Arrow Navigation
    window.addEventListener('keydown', (e) => {
      if (e.target.isContentEditable || e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') state.lang === 'ar' ? nextSlide() : prevSlide();
      if (e.key === 'ArrowRight') state.lang === 'ar' ? prevSlide() : nextSlide();
    });

    // In-Canvas Inline Text Editing Sync
    DOM.slideBadge.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].badge = DOM.slideBadge.innerText;
    });

    DOM.slideTitle.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].title = DOM.slideTitle.innerText;
    });

    DOM.slideSubtitle.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].subtitle = DOM.slideSubtitle.innerText;
    });

    DOM.footerHandle.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].footerHandle = DOM.footerHandle.innerText;
    });

    DOM.footerUrl.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].footerUrl = DOM.footerUrl.innerText;
    });

    // Background Image Upload & Drag/Drop
    DOM.inputBgUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleImageFile(file);
    });

    DOM.uploadDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      DOM.uploadDropzone.style.borderColor = 'var(--ima-teal-light)';
    });

    DOM.uploadDropzone.addEventListener('dragleave', () => {
      DOM.uploadDropzone.style.borderColor = '';
    });

    DOM.uploadDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      DOM.uploadDropzone.style.borderColor = '';
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageFile(e.dataTransfer.files[0]);
      }
    });

    DOM.btnRemoveBgImg.addEventListener('click', () => {
      state.bgImage = null;
      DOM.inputBgUpload.value = '';
      updateBackground();
      showToast('Background photo removed');
    });

    // Darkness Overlay Slider
    DOM.sliderOverlay.addEventListener('input', (e) => {
      state.bgOverlayDarkness = parseInt(e.target.value, 10);
      updateBackground();
    });

    // Brand Theme Presets
    DOM.themeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        state.theme = chip.getAttribute('data-theme');
        updateTheme();
        updateBackground();
      });
    });

    // Template Selector
    DOM.templateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tpl = btn.getAttribute('data-template');
        state.slides[state.currentSlideIndex].template = tpl;
        renderCurrentSlide();
      });
    });

    // Element Visibility Toggles
    DOM.toggleBadge.addEventListener('change', (e) => {
      state.showBadge = e.target.checked;
      DOM.slideBadgeWrapper.style.display = state.showBadge ? 'flex' : 'none';
    });

    DOM.toggleFooter.addEventListener('change', (e) => {
      state.showFooter = e.target.checked;
      DOM.slideFooter.style.display = state.showFooter ? 'flex' : 'none';
    });

    // Logo Variants
    DOM.logoChoiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.logoSrc = btn.getAttribute('data-logo');
        updateLogo();
      });
    });

    // Logo Positions
    DOM.segmentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.logoPos = btn.getAttribute('data-pos');
        updateLogo();
      });
    });

    // Control Panel Tabs (Desktop)
    DOM.panelTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        DOM.panelTabs.forEach(t => t.classList.remove('active'));
        DOM.tabPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const pane = document.getElementById(`pane-${targetTab}`);
        if (pane) pane.classList.add('active');
      });
    });

    // Mobile Bottom Dock Buttons
    DOM.dockBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-mobile-tab');
        if (!targetTab) return;

        DOM.dockBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (targetTab === 'stage') {
          DOM.controlPanel.classList.remove('mobile-open');
        } else {
          DOM.controlPanel.classList.add('mobile-open');
          // Activate corresponding desktop tab
          DOM.panelTabs.forEach(t => {
            t.classList.toggle('active', t.getAttribute('data-tab') === targetTab);
          });
          DOM.tabPanes.forEach(p => {
            p.classList.toggle('active', p.id === `pane-${targetTab}`);
          });
        }
      });
    });
  }

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WEBP)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      state.bgImage = e.target.result;
      DOM.uploadFileName.textContent = file.name;
      updateBackground();
      showToast('Background image loaded');
    };
    reader.readAsDataURL(file);
  }

  // Debounce utility for smooth resize
  function debounce(fn, wait) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  // Start app on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
