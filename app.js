/**
 * IMA UK • Medical NGO Media Studio
 * Single Poster & Multi-Slide Carousel Generator
 * Iraqi Medical Association UK & Europe (Registered Medical NGO)
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
      tabStyle: 'Colors & BG',
      tabLayout: 'Templates',
      tabBrand: 'NGO Brand',
      bgImageTitle: 'Background Photo',
      bgApplyLabel: 'Apply Photo To:',
      bgScopeCurrent: 'This Slide Only',
      bgScopeAll: 'All Slides',
      bgFitLabel: 'Photo Scaling:',
      bgFitCover: 'Fill Canvas',
      bgFitContain: 'Fit Entire Photo',
      bgPosLabel: 'Focal Point:',
      bgPosTop: 'Top',
      bgPosCenter: 'Center',
      bgPosBottom: 'Bottom',
      optionalBadge: 'Optional',
      quickSelect: 'Quick Select',
      uploadClickText: 'Upload background image',
      uploadDragText: 'or drag and drop photo here',
      photoActive: 'Background Active',
      overlayDarkness: 'Darkness / Readability Tint',
      brandColorTheme: 'Brand Color Themes',
      slideTemplate: 'Slide Template',
      tplAnnouncement: 'NGO Announcement',
      tplAnnouncementDesc: 'Title, subtitle, and badge',
      tplHumanitarian: 'Humanitarian Mission',
      tplHumanitarianDesc: 'Relief project, region & stats',
      tplStats: 'Impact & Numbers',
      tplStatsDesc: '3 bold NGO stat counters',
      tplEvent: 'Conference / Training',
      tplEventDesc: 'Date, venue, & CPD badges',
      tplKeyPoints: 'Objectives / Agenda',
      tplKeyPointsDesc: '3 bulleted highlight cards',
      tplQuote: 'Leadership Message',
      tplQuoteDesc: 'Statement & author attribution',
      tplOutro: 'Support & Join NGO',
      tplOutroDesc: 'Membership, donate & contact',
      elementsVisibility: 'Elements',
      showBadgeToggle: 'Category Tag Badge',
      showNgoLockupToggle: 'NGO Subtitle next to Logo',
      showFooterToggle: 'Footer & Handles',
      headlineSize: 'Headline Scale',
      sizeCompact: 'Compact',
      sizeBalanced: 'Balanced',
      sizeHero: 'Hero (Big)',
      officialLogo: 'Official NGO Logo',
      logoSizeLabel: 'Logo Size',
      sizeSmall: 'Small',
      sizeMedium: 'Medium',
      sizeLarge: 'Large',
      logoPosition: 'Logo Placement',
      posLeft: 'Top Left',
      posCenter: 'Center',
      posRight: 'Top Right',
      swipeHint: 'Swipe ➔',
      footerNgoTag: 'UK Registered Medical NGO',
      ngoBadgesTitle: 'NGO Category Tag',
      defaultBadge: 'IMA UK • MEDICAL NGO',
      defaultTitle: 'Annual Medical Conference & Relief Assembly 2026',
      defaultSubtitle: 'Uniting healthcare professionals, diaspora physicians, and humanitarian partners across the UK & Europe to advance clinical excellence and healthcare relief.',
      ngoName: 'IRAQI MEDICAL ASSOCIATION',
      ngoSub: 'UK & Europe • Medical NGO',
      chipDate: '15-16 October 2026',
      chipVenue: 'London, United Kingdom',
      chipEntry: 'CPD Accredited • Free for Members',
      missionRegion: '📍 Target: Community & Regional Hospitals',
      missionPatients: '🎯 5,000+ Beneficiaries',
      missionVolunteers: '🩺 45 Volunteer Specialists',
      missionCta: 'Support Our Medical NGO Mission ➔',
      stat1Num: '15,000+',
      stat1Label: 'Patients Treated & Supported',
      stat2Num: '380+',
      stat2Label: 'Volunteer Doctors & Consultants',
      stat3Num: '45+',
      stat3Label: 'Medical Missions & CME Sessions',
      point1: 'Emergency Healthcare Relief & Medical Missions',
      point2: 'Advancing Clinical Skills & GMC Pathway Guidance',
      point3: 'Cross-Border Collaboration Between UK & Iraq',
      quoteStatement: '"Empowering Iraqi medical practitioners, delivering humanitarian healthcare relief, and fostering international clinical excellence."',
      quoteAuthor: 'Executive Committee • IMA UK (Registered Medical NGO)',
      outroTitle: 'Join Our Medical Humanitarian Network',
      outroSubtitle: 'Support our clinical relief missions and participate in upcoming accredited programs.',
      outroBtn: 'Register & Support ➔',
      footerHandle: '@IMA_UK_Europe',
      footerUrl: 'ima-uk.org',
      toastDone: 'High-resolution image downloaded successfully!',
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
      tabStyle: 'الألوان والخلفية',
      tabLayout: 'القوالب',
      tabBrand: 'هوية المنظمة',
      bgImageTitle: 'صورة الخلفية',
      bgApplyLabel: 'تطبيق الصورة على:',
      bgScopeCurrent: 'هذه الشريحة فقط',
      bgScopeAll: 'جميع الشرائح',
      bgFitLabel: 'تناسب الصورة:',
      bgFitCover: 'ملء التصميم',
      bgFitContain: 'إظهار الصورة كاملة',
      bgPosLabel: 'تركيز الصورة:',
      bgPosTop: 'أعلى',
      bgPosCenter: 'وسط',
      bgPosBottom: 'أسفل',
      optionalBadge: 'اختياري',
      quickSelect: 'اختيار سريع',
      uploadClickText: 'انقر لرفع صورة الخلفية',
      uploadDragText: 'أو اسحب الصورة وأفلتها هنا',
      photoActive: 'صورة الخلفية مفعّلة',
      overlayDarkness: 'تعتيم / تباين الخلفية',
      brandColorTheme: 'ألوان الهوية المعتمدة',
      slideTemplate: 'نمط الشريحة',
      tplAnnouncement: 'إعلان المنظمة',
      tplAnnouncementDesc: 'عنوان رئيسي ونبذة وشارة تصنيف',
      tplHumanitarian: 'مهمة إنسانية / إغاثة',
      tplHumanitarianDesc: 'مشروع إغاثي، المنطقة والأرقام',
      tplStats: 'أثر وأرقام المنظمة',
      tplStatsDesc: '3 أرقام وإحصائيات بارزة',
      tplEvent: 'مؤتمر / تدريب مهني',
      tplEventDesc: 'بطاقات التاريخ، المكان والاعتماد',
      tplKeyPoints: 'الأهداف والمحاور',
      tplKeyPointsDesc: '3 بطاقات نقطية بارزة',
      tplQuote: 'رسالة القيادة / تصريح',
      tplQuoteDesc: 'قول مأثور مع اسم المصدر',
      tplOutro: 'دعم ومساندة المنظمة',
      tplOutroDesc: 'الانضمام، التبرع والموقع الرسمي',
      elementsVisibility: 'العناصر',
      showBadgeToggle: 'شارة التصنيف العلوية',
      showNgoLockupToggle: 'وصف المنظمة بجانب الشعار',
      showFooterToggle: 'الشريط السفلي ومعرّفات التواصل',
      headlineSize: 'حجم العنوان الرئيسي',
      sizeCompact: 'موجز',
      sizeBalanced: 'متوازن',
      sizeHero: 'عريض (Hero)',
      officialLogo: 'شعار المنظمة الرسمي',
      logoSizeLabel: 'حجم الشعار',
      sizeSmall: 'صغير',
      sizeMedium: 'متوسط',
      sizeLarge: 'كبير',
      logoPosition: 'موقع الشعار',
      posLeft: 'أعلى اليمين',
      posCenter: 'الوسط',
      posRight: 'أعلى اليسار',
      swipeHint: 'اسحب ➔',
      footerNgoTag: 'منظمة طبية غير حكومية مسجلة',
      ngoBadgesTitle: 'شارة تصنيف المنظمة',
      defaultBadge: 'الجمعية الطبية العراقية • منظمة غير حكومية',
      defaultTitle: 'المؤتمر الطبي السنوي والملتقى الإغاثي 2026',
      defaultSubtitle: 'توحيد جهود الكفاءات الطبية العراقية في المملكة المتحدة وأوروبا لدعم الرعاية الصحية، ونقل الخبرات التخصصية، ومساندة المبادرات الإنسانية.',
      ngoName: 'الجمعية الطبية العراقية',
      ngoSub: 'المملكة المتحدة وأوروبا • منظمة طبية غير حكومية',
      chipDate: '15-16 تشرين الأول 2026',
      chipVenue: 'لندن، المملكة المتحدة',
      chipEntry: 'شهادات معتمدة • متاح للأعضاء',
      missionRegion: '📍 نطاق العمل: المستشفيات والمراكز الإغاثية',
      missionPatients: '🎯 5,000+ مستفيد من الرعاية الطبية',
      missionVolunteers: '🩺 45 استشارياً وطبيباً متطوعاً',
      missionCta: 'شارك في دعم مهمتنا الطبية الإنسانية ➔',
      stat1Num: '15,000+',
      stat1Label: 'مريض ومستفيد من خدماتنا',
      stat2Num: '380+',
      stat2Label: 'طبيب واستشاري متطوع',
      stat3Num: '45+',
      stat3Label: 'مهمة إغاثية وورشة تدريبية',
      point1: 'قوافل إغاثية طبية وتوفير الرعاية للمرضى',
      point2: 'برامج تدريب مستمرة ودعم الأطباء الجدد في بريطانيا',
      point3: 'تعزيز جسور التعاون الطبي الدولي والبحثي',
      quoteStatement: '«معاً لتمكين الطبيب العراقي، ونقل الخبرات العالمية، ومساندة أهلنا بالرعاية الصحية الإنسانية.»',
      quoteAuthor: 'الهيئة الإدارية • الجمعية الطبية العراقية (منظمة غير حكومية)',
      outroTitle: 'انضموا إلى شبكتنا الطبية الإنسانية',
      outroSubtitle: 'ساهم في دعم مشاريعنا الخيرية والإغاثية وشارك في البرامج العلمية القادمة.',
      outroBtn: 'سجل لدعم المنظمة ➔',
      footerHandle: '@IMA_UK_Europe',
      footerUrl: 'ima-uk.org',
      toastDone: 'تم تنزيل الصورة بدقة فائقة بنجاح!',
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
    bgImageScope: 'current', // 'current' | 'all'
    bgFit: 'cover', // 'cover' | 'contain'
    bgPos: 'center', // 'top' | 'center' | 'bottom'
    bgOverlayDarkness: 45, // 0 - 90 %
    logoSrc: 'assets/logos/ima-crest-clean.png',
    logoPos: 'logo-pos-top-left',
    logoSize: 'logo-size-medium', // 'logo-size-small', 'logo-size-medium', 'logo-size-large', 'logo-size-hero'
    titleDensity: 'font-size-balanced', // 'font-size-compact', 'font-size-balanced', 'font-size-hero'
    showBadge: true,
    showNgoLockup: true,
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
      bgImage: null,
      bgFileName: '',
      bgFit: 'cover',
      bgPos: 'center',
      badge: t.defaultBadge,
      title: t.defaultTitle,
      subtitle: t.defaultSubtitle,
      ngoName: t.ngoName,
      ngoSub: t.ngoSub,
      chips: [
        { icon: '📅', text: t.chipDate },
        { icon: '📍', text: t.chipVenue },
        { icon: '🎟️', text: t.chipEntry }
      ],
      mission: {
        region: t.missionRegion,
        patients: t.missionPatients,
        volunteers: t.missionVolunteers,
        cta: t.missionCta
      },
      stats: [
        { num: t.stat1Num, label: t.stat1Label },
        { num: t.stat2Num, label: t.stat2Label },
        { num: t.stat3Num, label: t.stat3Label }
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
      footerUrl: t.footerUrl,
      footerNgoTag: t.footerNgoTag
    };
  }

  // ============================================================
  // DOM REFERENCES
  // ============================================================
  const DOM = {
    body: document.body,
    stageContainer: document.getElementById('stage-container'),
    canvasWrapper: document.getElementById('canvas-wrapper'),
    scalerBox: document.getElementById('canvas-scaler-box'),
    artboard: document.getElementById('artboard'),
    artboardBgMedia: document.getElementById('artboard-bg-media'),
    artboardBgOverlay: document.getElementById('artboard-bg-overlay'),
    canvasDimText: document.getElementById('canvas-dim-text'),
    canvasQuickBar: document.querySelector('.canvas-quick-bar'),
    
    // Canvas Elements
    slideHeader: document.getElementById('slide-header'),
    slideLogoImg: document.getElementById('slide-logo-img'),
    slideLogoWrapper: document.getElementById('slide-logo-wrapper'),
    slideNgoLockup: document.getElementById('slide-ngo-lockup'),
    ngoName: document.getElementById('ngo-name'),
    ngoSub: document.getElementById('ngo-sub'),
    slideBadgeWrapper: document.getElementById('slide-badge-wrapper'),
    slideBadge: document.getElementById('slide-badge'),
    slideBody: document.getElementById('slide-body'),
    slideTitle: document.getElementById('slide-title'),
    slideSubtitle: document.getElementById('slide-subtitle'),
    slideModularBlock: document.getElementById('slide-modular-block'),
    slideFooter: document.getElementById('slide-footer'),
    footerHandle: document.getElementById('footer-handle'),
    footerUrl: document.getElementById('footer-url'),
    footerNgoTag: document.getElementById('footer-ngo-tag'),
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

    // NGO Badges Quick Select
    badgeQuickPills: document.getElementById('badge-quick-pills'),

    // Style Tab Controls
    bgScopeContainer: document.getElementById('bg-scope-container'),
    bgScopeActiveTag: document.getElementById('bg-scope-active-tag'),
    bgScopeBtns: document.querySelectorAll('[data-bgscope]'),
    btnScopeCurrent: document.getElementById('btn-scope-current'),
    btnScopeAll: document.getElementById('btn-scope-all'),
    inputBgUpload: document.getElementById('input-bg-upload'),
    uploadDropzone: document.getElementById('upload-dropzone'),
    uploadPreviewBar: document.getElementById('upload-preview-bar'),
    uploadThumbPreview: document.getElementById('upload-thumb-preview'),
    uploadFileName: document.getElementById('upload-file-name'),
    btnRemoveBgImg: document.getElementById('btn-remove-bg-img'),
    bgAdjustControls: document.getElementById('bg-adjust-controls'),
    bgFitBtns: document.querySelectorAll('[data-bgfit]'),
    bgPosBtns: document.querySelectorAll('[data-bgpos]'),
    sliderOverlay: document.getElementById('slider-overlay'),
    overlayValueDisplay: document.getElementById('overlay-value-display'),
    themeChips: document.querySelectorAll('.theme-chip'),

    // Layout Tab Controls
    templateBtns: document.querySelectorAll('.template-btn'),
    toggleBadge: document.getElementById('toggle-badge'),
    toggleNgoLockup: document.getElementById('toggle-ngo-lockup'),
    toggleFooter: document.getElementById('toggle-footer'),

    // Headline Scale Segmented
    sizeSegmentBtns: document.querySelectorAll('[data-size]'),

    // Brand Tab Controls
    logoChoiceBtns: document.querySelectorAll('.logo-choice-btn'),
    logoSizeBtns: document.querySelectorAll('[data-logosize]'),
    posSegmentBtns: document.querySelectorAll('[data-pos]'),

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

    // Mobile Dock & Drawer
    dockBtns: document.querySelectorAll('.dock-btn'),
    dockBtnExport: document.getElementById('dock-btn-export'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    btnDrawerClose: document.getElementById('btn-drawer-close')
  };

  // ============================================================
  // INITIALIZATION
  // ============================================================
  function init() {
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
  // ============================================================
  function adjustCanvasScale() {
    if (!DOM.stageContainer || !DOM.artboard) return;

    const baseWidth = 1080;
    const baseHeight = state.ratio === 'square' ? 1080 : 1350;

    const isMobile = window.innerWidth <= 900;
    const padX = isMobile ? 24 : 64;
    const availableWidth = Math.max(180, DOM.stageContainer.clientWidth - padX);

    const quickBarH = DOM.canvasQuickBar ? DOM.canvasQuickBar.offsetHeight : 30;
    const stripH = (state.mode === 'carousel' && DOM.carouselStripContainer && DOM.carouselStripContainer.offsetHeight > 0)
      ? DOM.carouselStripContainer.offsetHeight
      : (state.mode === 'carousel' ? (isMobile ? 100 : 130) : 0);
    const padY = isMobile ? 20 : 48;
    const availableHeight = Math.max(180, DOM.stageContainer.clientHeight - quickBarH - stripH - padY);

    const scaleX = availableWidth / baseWidth;
    const scaleY = availableHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY, 0.95);

    const scaledW = Math.round(baseWidth * scale);
    const scaledH = Math.round(baseHeight * scale);

    if (DOM.scalerBox) {
      DOM.scalerBox.style.width = `${scaledW}px`;
      DOM.scalerBox.style.height = `${scaledH}px`;
    }
    DOM.artboard.style.transform = `scale(${scale})`;
    DOM.artboard.style.transformOrigin = '0 0';

    if (DOM.canvasDimText) {
      DOM.canvasDimText.textContent = `${baseWidth} × ${baseHeight} px (${Math.round(scale * 100)}%)`;
    }
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
    DOM.ngoName.innerText = slide.ngoName || I18N[state.lang].ngoName;
    DOM.ngoSub.innerText = slide.ngoSub || I18N[state.lang].ngoSub;
    DOM.footerHandle.innerText = slide.footerHandle || '@IMA_UK_Europe';
    DOM.footerUrl.innerText = slide.footerUrl || 'ima-uk.org';
    DOM.footerNgoTag.innerText = slide.footerNgoTag || I18N[state.lang].footerNgoTag;

    // Visibility toggles
    DOM.slideBadgeWrapper.style.display = state.showBadge ? 'flex' : 'none';
    DOM.slideNgoLockup.style.display = state.showNgoLockup ? 'flex' : 'none';
    DOM.slideFooter.style.display = state.showFooter ? 'flex' : 'none';
    DOM.toggleBadge.checked = state.showBadge;
    DOM.toggleNgoLockup.checked = state.showNgoLockup;
    DOM.toggleFooter.checked = state.showFooter;

    // Headline font size class
    DOM.slideTitle.className = `slide-title ${state.titleDensity}`;

    // Slide Counter & Swipe Hint
    const totalSlides = state.slides.length;
    const currentNum = String(state.currentSlideIndex + 1).padStart(2, '0');
    const totalNum = String(totalSlides).padStart(2, '0');
    DOM.slideCounterBadge.textContent = `${currentNum} / ${totalNum}`;

    if (state.currentSlideIndex === totalSlides - 1) {
      DOM.slideSwipeBadge.style.visibility = 'hidden';
    } else {
      DOM.slideSwipeBadge.style.visibility = 'visible';
      DOM.slideSwipeBadge.textContent = I18N[state.lang].swipeHint;
    }

    DOM.btnPrevSlide.disabled = state.currentSlideIndex === 0;
    DOM.btnNextSlide.disabled = state.currentSlideIndex === totalSlides - 1;

    renderModularTemplate(slide);

    // Sync template selector buttons
    DOM.templateBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-template') === slide.template);
    });

    // Update ratio classes
    DOM.artboard.classList.toggle('ratio-portrait', state.ratio === 'portrait');
    DOM.artboard.classList.toggle('ratio-square', state.ratio === 'square');

    // Update background photo & overlay for current slide
    updateBackground();
  }

  // Render modular blocks based on template
  function renderModularTemplate(slide) {
    const block = DOM.slideModularBlock;
    block.innerHTML = '';
    block.className = `slide-modular-block ${slide.template}`;

    if (slide.template === 'layout-announcement') {
      return;
    }

    if (slide.template === 'layout-humanitarian') {
      const wrapper = document.createElement('div');
      wrapper.className = 'humanitarian-block';

      const strip = document.createElement('div');
      strip.className = 'mission-meta-strip';

      const chip1 = document.createElement('div');
      chip1.className = 'mission-chip';
      chip1.setAttribute('contenteditable', 'true');
      chip1.innerText = slide.mission?.region || I18N[state.lang].missionRegion;
      chip1.addEventListener('input', () => { if (!slide.mission) slide.mission = {}; slide.mission.region = chip1.innerText; });

      const chip2 = document.createElement('div');
      chip2.className = 'mission-chip';
      chip2.setAttribute('contenteditable', 'true');
      chip2.innerText = slide.mission?.patients || I18N[state.lang].missionPatients;
      chip2.addEventListener('input', () => { if (!slide.mission) slide.mission = {}; slide.mission.patients = chip2.innerText; });

      const chip3 = document.createElement('div');
      chip3.className = 'mission-chip';
      chip3.setAttribute('contenteditable', 'true');
      chip3.innerText = slide.mission?.volunteers || I18N[state.lang].missionVolunteers;
      chip3.addEventListener('input', () => { if (!slide.mission) slide.mission = {}; slide.mission.volunteers = chip3.innerText; });

      strip.appendChild(chip1);
      strip.appendChild(chip2);
      strip.appendChild(chip3);

      const cta = document.createElement('div');
      cta.className = 'mission-support-btn';
      cta.setAttribute('contenteditable', 'true');
      cta.innerText = slide.mission?.cta || I18N[state.lang].missionCta;
      cta.addEventListener('input', () => { if (!slide.mission) slide.mission = {}; slide.mission.cta = cta.innerText; });

      wrapper.appendChild(strip);
      wrapper.appendChild(cta);
      block.appendChild(wrapper);

    } else if (slide.template === 'layout-stats') {
      const grid = document.createElement('div');
      grid.className = 'stats-grid';

      const stats = slide.stats || [
        { num: I18N[state.lang].stat1Num, label: I18N[state.lang].stat1Label },
        { num: I18N[state.lang].stat2Num, label: I18N[state.lang].stat2Label },
        { num: I18N[state.lang].stat3Num, label: I18N[state.lang].stat3Label }
      ];

      stats.forEach((st, idx) => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
          <div class="stat-number" contenteditable="true" spellcheck="false">${st.num}</div>
          <div class="stat-label" contenteditable="true" spellcheck="false">${st.label}</div>
        `;
        const numEl = card.querySelector('.stat-number');
        const labelEl = card.querySelector('.stat-label');

        numEl.addEventListener('input', () => { st.num = numEl.innerText; });
        labelEl.addEventListener('input', () => { st.label = labelEl.innerText; });

        grid.appendChild(card);
      });

      block.appendChild(grid);

    } else if (slide.template === 'layout-event') {
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

      if (slide.bgImage) {
        thumb.style.backgroundImage = `linear-gradient(rgba(2, 18, 32, 0.45), rgba(2, 18, 32, 0.65)), url(${slide.bgImage})`;
        thumb.style.backgroundSize = slide.bgFit || 'cover';
        thumb.style.backgroundPosition = `center ${slide.bgPos || 'center'}`;
      } else {
        thumb.style.backgroundImage = 'none';
      }

      thumb.innerHTML = `<span>${idx + 1}</span>`;
      thumb.title = `Slide ${idx + 1}: ${slide.template.replace('layout-', '')}`;
      thumb.addEventListener('click', () => {
        state.currentSlideIndex = idx;
        renderCurrentSlide();
        updateThumbnails();
      });
      DOM.carouselThumbnailsList.appendChild(thumb);
    });

    DOM.btnDeleteSlide.disabled = state.slides.length <= 1;
  }

  // ============================================================
  // STYLING & BRAND UPDATES
  // ============================================================
  function updateTheme() {
    const themeClasses = ['theme-royal-navy', 'theme-signature-dual', 'theme-clinical-teal', 'theme-midnight-dark', 'theme-clean-white', 'theme-oceanic-glow'];
    DOM.artboard.classList.remove(...themeClasses);
    DOM.artboard.classList.add(state.theme);

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

    // Logo size classes on artboard
    DOM.artboard.classList.remove('logo-size-small', 'logo-size-medium', 'logo-size-large', 'logo-size-hero');
    DOM.artboard.classList.add(state.logoSize);

    // Sync UI buttons
    DOM.logoChoiceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-logo') === state.logoSrc);
    });

    DOM.logoSizeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-logosize') === state.logoSize);
    });

    DOM.posSegmentBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-pos') === state.logoPos);
    });
  }

  function updateBackground() {
    const currentSlide = state.slides[state.currentSlideIndex];
    const bg = currentSlide ? currentSlide.bgImage : state.bgImage;
    const fit = (currentSlide && currentSlide.bgFit) ? currentSlide.bgFit : (state.bgFit || 'cover');
    const pos = (currentSlide && currentSlide.bgPos) ? currentSlide.bgPos : (state.bgPos || 'center');

    if (bg) {
      DOM.artboardBgMedia.style.backgroundImage = `url(${bg})`;
      DOM.artboardBgMedia.style.backgroundSize = fit;
      DOM.artboardBgMedia.style.backgroundPosition = `center ${pos}`;
      DOM.uploadPreviewBar.classList.remove('hidden');
      DOM.uploadThumbPreview.style.backgroundImage = `url(${bg})`;
      DOM.uploadThumbPreview.style.backgroundSize = fit;
      DOM.uploadThumbPreview.style.backgroundPosition = `center ${pos}`;
      DOM.uploadFileName.textContent = (currentSlide && currentSlide.bgFileName) || 'image.jpg';
      if (DOM.bgAdjustControls) {
        DOM.bgAdjustControls.classList.remove('hidden');
      }
    } else {
      DOM.artboardBgMedia.style.backgroundImage = 'none';
      DOM.uploadPreviewBar.classList.add('hidden');
      DOM.uploadThumbPreview.style.backgroundImage = 'none';
      if (DOM.bgAdjustControls) {
        DOM.bgAdjustControls.classList.add('hidden');
      }
    }

    if (DOM.bgFitBtns) {
      DOM.bgFitBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-bgfit') === fit);
      });
    }

    if (DOM.bgPosBtns) {
      DOM.bgPosBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-bgpos') === pos);
      });
    }

    const opacity = state.bgOverlayDarkness / 100;
    DOM.artboardBgOverlay.style.backgroundColor = state.theme === 'theme-clean-white'
      ? `rgba(255, 255, 255, ${opacity})`
      : `rgba(2, 18, 32, ${opacity})`;

    DOM.sliderOverlay.value = state.bgOverlayDarkness;
    DOM.overlayValueDisplay.textContent = `${state.bgOverlayDarkness}%`;

    // Sync Carousel Scope Selector UI
    if (DOM.bgScopeBtns) {
      DOM.bgScopeBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-bgscope') === state.bgImageScope);
      });
    }

    if (DOM.bgScopeActiveTag) {
      if (state.bgImageScope === 'all') {
        DOM.bgScopeActiveTag.textContent = state.lang === 'ar'
          ? `جميع الشرائح (${state.slides.length})`
          : `All ${state.slides.length} slides`;
      } else {
        DOM.bgScopeActiveTag.textContent = state.lang === 'ar'
          ? `الشريحة ${state.currentSlideIndex + 1} فقط`
          : `Slide ${state.currentSlideIndex + 1} only`;
      }
    }
  }

  // ============================================================
  // LANGUAGE & RTL SWITCHING
  // ============================================================
  function applyLanguage() {
    DOM.body.classList.remove('lang-en', 'lang-ar');
    DOM.body.classList.add(`lang-${state.lang}`);
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');

    if (state.lang === 'en') {
      DOM.langCurrent.textContent = 'EN';
      DOM.langTarget.textContent = 'عربي';
    } else {
      DOM.langCurrent.textContent = 'عربي';
      DOM.langTarget.textContent = 'EN';
    }

    const t = I18N[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update NGO badge quick select pills labels
    if (DOM.badgeQuickPills) {
      const pills = DOM.badgeQuickPills.querySelectorAll('.badge-pill-chip');
      if (state.lang === 'ar') {
        if (pills[0]) { pills[0].textContent = '🏥 منظمة غير حكومية'; pills[0].dataset.badge = 'الجمعية الطبية العراقية • منظمة غير حكومية'; }
        if (pills[1]) { pills[1].textContent = '🌍 إغاثة طبية إنسانية'; pills[1].dataset.badge = 'إغاثة طبية إنسانية'; }
        if (pills[2]) { pills[2].textContent = '📢 إعلان المنظمة الطبية'; pills[2].dataset.badge = 'إعلان الجمعية الطبية العراقية'; }
        if (pills[3]) { pills[3].textContent = '🩺 صحة المجتمع'; pills[3].dataset.badge = 'صحة المجتمع والرعاية الطبية'; }
        if (pills[4]) { pills[4].textContent = '🎓 تدريب وتطوير مهني'; pills[4].dataset.badge = 'تدريب وتطوير مهني طبي'; }
        if (pills[5]) { pills[5].textContent = '🤝 مبادرة خيرية'; pills[5].dataset.badge = 'مبادرة خيرية إنسانية'; }
      } else {
        if (pills[0]) { pills[0].textContent = '🏥 Medical NGO'; pills[0].dataset.badge = 'IMA UK • MEDICAL NGO'; }
        if (pills[1]) { pills[1].textContent = '🌍 Humanitarian Relief'; pills[1].dataset.badge = 'HUMANITARIAN RELIEF'; }
        if (pills[2]) { pills[2].textContent = '📢 NGO Announcement'; pills[2].dataset.badge = 'NGO ANNOUNCEMENT'; }
        if (pills[3]) { pills[3].textContent = '🩺 Community Health'; pills[3].dataset.badge = 'COMMUNITY HEALTHCARE'; }
        if (pills[4]) { pills[4].textContent = '🎓 Medical Training'; pills[4].dataset.badge = 'MEDICAL TRAINING & CPD'; }
        if (pills[5]) { pills[5].textContent = '🤝 Charity Initiative'; pills[5].dataset.badge = 'CHARITY INITIATIVE'; }
      }
    }

    renderCurrentSlide();
  }

  function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'ar' : 'en';

    const currentSlide = state.slides[state.currentSlideIndex];
    const prevLang = state.lang === 'en' ? 'ar' : 'en';
    const oldDefaults = I18N[prevLang];

    if (currentSlide.title === oldDefaults.defaultTitle) {
      currentSlide.title = I18N[state.lang].defaultTitle;
      currentSlide.subtitle = I18N[state.lang].defaultSubtitle;
      currentSlide.badge = I18N[state.lang].defaultBadge;
      currentSlide.ngoName = I18N[state.lang].ngoName;
      currentSlide.ngoSub = I18N[state.lang].ngoSub;
      currentSlide.footerNgoTag = I18N[state.lang].footerNgoTag;
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

    DOM.productTitleBadge.textContent = mode === 'poster' ? 'NGO Poster' : 'NGO Carousel';

    if (mode === 'carousel' && state.slides.length === 1) {
      // Prepopulate standard multi-slide NGO campaign flow
      state.slides.push(
        {
          template: 'layout-humanitarian',
          badge: state.lang === 'en' ? 'HUMANITARIAN MISSION' : 'مهمة إنسانية وإغاثة',
          title: state.lang === 'en' ? 'Pediatric Care & Surgical Relief 2026' : 'حملة طب الأطفال والجراحة الإغاثية 2026',
          subtitle: state.lang === 'en' ? 'Deploying multidisciplinary consultant teams to support regional clinics and underserved healthcare facilities.' : 'إيفاد فرق طبية استشارية متعددة التخصصات لدعم المستشفيات والمراكز الأكثر احتياجاً.',
          ngoName: I18N[state.lang].ngoName,
          ngoSub: I18N[state.lang].ngoSub,
          chips: [],
          mission: {
            region: I18N[state.lang].missionRegion,
            patients: I18N[state.lang].missionPatients,
            volunteers: I18N[state.lang].missionVolunteers,
            cta: I18N[state.lang].missionCta
          },
          stats: [],
          points: [],
          quote: '',
          author: '',
          ctaHeading: '',
          ctaSub: '',
          ctaBtn: '',
          footerHandle: I18N[state.lang].footerHandle,
          footerUrl: I18N[state.lang].footerUrl,
          footerNgoTag: I18N[state.lang].footerNgoTag
        },
        {
          template: 'layout-stats',
          badge: state.lang === 'en' ? 'NGO IMPACT & REACH' : 'أثر وأرقام المنظمة',
          title: state.lang === 'en' ? 'Our Tangible Medical Contribution' : 'أثرنا الطبي والإنساني الملموس',
          subtitle: state.lang === 'en' ? 'Over two decades of healthcare volunteerism, clinical education, and medical partnership.' : 'أكثر من عقدين من العمل التطوعي الطبي، والتعليم السريري المستمر، والشراكات الإنسانية.',
          ngoName: I18N[state.lang].ngoName,
          ngoSub: I18N[state.lang].ngoSub,
          chips: [],
          mission: null,
          stats: [
            { num: I18N[state.lang].stat1Num, label: I18N[state.lang].stat1Label },
            { num: I18N[state.lang].stat2Num, label: I18N[state.lang].stat2Label },
            { num: I18N[state.lang].stat3Num, label: I18N[state.lang].stat3Label }
          ],
          points: [],
          quote: '',
          author: '',
          ctaHeading: '',
          ctaSub: '',
          ctaBtn: '',
          footerHandle: I18N[state.lang].footerHandle,
          footerUrl: I18N[state.lang].footerUrl,
          footerNgoTag: I18N[state.lang].footerNgoTag
        },
        {
          template: 'layout-outro',
          badge: state.lang === 'en' ? 'SUPPORT OUR NGO' : 'شارك معنا في الدعم',
          title: state.lang === 'en' ? 'Join As Volunteer Doctor Or Partner' : 'انضم كطبيب متطوع أو شريك إنساني',
          subtitle: state.lang === 'en' ? 'Together, we empower healthcare professionals and deliver urgent medical hope.' : 'معاً نُمكّن الكفاءات الطبية ونقدم الأمل والرعاية لمن هم بأمس الحاجة.',
          ngoName: I18N[state.lang].ngoName,
          ngoSub: I18N[state.lang].ngoSub,
          chips: [],
          mission: null,
          stats: [],
          points: [],
          quote: '',
          author: '',
          ctaHeading: I18N[state.lang].outroTitle,
          ctaSub: I18N[state.lang].outroSubtitle,
          ctaBtn: I18N[state.lang].outroBtn,
          footerHandle: I18N[state.lang].footerHandle,
          footerUrl: I18N[state.lang].footerUrl,
          footerNgoTag: I18N[state.lang].footerNgoTag
        }
      );
    }

    if (DOM.carouselStripContainer) {
      DOM.carouselStripContainer.classList.toggle('ratio-portrait', state.ratio === 'portrait');
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
    const templates = ['layout-announcement', 'layout-humanitarian', 'layout-stats', 'layout-event', 'layout-checklist', 'layout-quote', 'layout-outro'];
    const tpl = templates[state.slides.length % templates.length];
    const newSlide = createDefaultSlide(tpl, state.lang);

    if (state.bgImageScope === 'all') {
      const existingWithBg = state.slides.find(s => s.bgImage);
      if (existingWithBg) {
        newSlide.bgImage = existingWithBg.bgImage;
        newSlide.bgFileName = existingWithBg.bgFileName;
        newSlide.bgFit = existingWithBg.bgFit || state.bgFit || 'cover';
        newSlide.bgPos = existingWithBg.bgPos || state.bgPos || 'center';
      }
    }

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
  // ULTRA-CRISP EXPORT ENGINE (FIXED & IMPROVED)
  // Completely isolates artboard offscreen with zero shadows, zero margins
  // and captures at full 2x Retina resolution (2160x2160 or 2160x2700)
  // ============================================================
  async function renderSlideToCanvas() {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const width = 1080;
    const height = state.ratio === 'square' ? 1080 : 1350;

    // 1. Create a dedicated offscreen staging wrapper
    const staging = document.createElement('div');
    staging.style.position = 'fixed';
    staging.style.left = '0';
    staging.style.top = '0';
    staging.style.width = `${width}px`;
    staging.style.height = `${height}px`;
    staging.style.zIndex = '-999999';
    staging.style.overflow = 'hidden';
    staging.style.pointerEvents = 'none';

    // 2. Clone the live artboard into staging
    const clone = DOM.artboard.cloneNode(true);
    clone.style.transform = 'none';
    clone.style.transformOrigin = '0 0';
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    clone.style.margin = '0';
    clone.style.width = `${width}px`;
    clone.style.height = `${height}px`;
    clone.style.left = '0';
    clone.style.top = '0';
    clone.style.position = 'absolute';

    // Remove any live edit outlines or focus rings
    clone.querySelectorAll('[contenteditable]').forEach(el => {
      el.removeAttribute('contenteditable');
      el.style.outline = 'none';
      el.style.boxShadow = 'none';
      el.style.backgroundColor = 'transparent';
    });

    // Remove any decor glow that could cause bounding rectangle cutoff
    const glow = clone.querySelector('.artboard-decor-glow');
    if (glow) glow.remove();

    staging.appendChild(clone);
    document.body.appendChild(staging);

    // Allow browser to render layout
    await new Promise(resolve => requestAnimationFrame(resolve));

    // 3. Render via html2canvas with exact 1080 bounds and 2x resolution
    const canvas = await html2canvas(clone, {
      width: width,
      height: height,
      scale: 2, // 2x gives pristine 2160x2160 Retina output
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: width,
      windowHeight: height,
      backgroundColor: null,
      logging: false
    });

    // 4. Clean up staging element
    document.body.removeChild(staging);
    return canvas;
  }

  // Single Slide Export
  async function exportSinglePNG() {
    try {
      showExportOverlay('Rendering High-Resolution Poster...', 'Generating crisp 2160px edge-to-edge graphic', 40);

      const canvas = await renderSlideToCanvas();
      setExportProgress(85);

      const dataUrl = canvas.toDataURL('image/png');
      const filename = `IMA-UK-NGO-${state.mode === 'poster' ? 'Poster' : 'Slide-' + (state.currentSlideIndex + 1)}.png`;

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
      showExportOverlay('Rendering All Carousel Slides...', 'Building multi-slide ZIP archive at 2160px', 10);

      const zip = new JSZip();
      const folder = zip.folder('IMA_UK_NGO_Carousel');
      const savedActiveIndex = state.currentSlideIndex;
      const total = state.slides.length;

      for (let i = 0; i < total; i++) {
        state.currentSlideIndex = i;
        renderCurrentSlide();
        await new Promise(r => setTimeout(r, 60));

        const canvas = await renderSlideToCanvas();
        const base64Data = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
        const filename = `Slide_${String(i + 1).padStart(2, '0')}.png`;
        folder.file(filename, base64Data, { base64: true });

        const pct = Math.round(15 + ((i + 1) / total) * 70);
        setExportProgress(pct);
      }

      state.currentSlideIndex = savedActiveIndex;
      renderCurrentSlide();

      setExportProgress(90);
      const zipContent = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(zipContent);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'IMA_UK_Medical_NGO_Carousel.zip';
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
      if (DOM.carouselStripContainer) {
        DOM.carouselStripContainer.classList.remove('ratio-portrait');
      }
      renderCurrentSlide();
      updateThumbnails();
      adjustCanvasScale();
      showToast(state.lang === 'ar' ? 'الأبعاد: 1:1 مربع (1080×1080)' : 'Dimensions: 1:1 Square (1080×1080)');
    });

    DOM.btnRatioPortrait.addEventListener('click', () => {
      state.ratio = 'portrait';
      DOM.btnRatioPortrait.classList.add('active');
      DOM.btnRatioSquare.classList.remove('active');
      if (DOM.carouselStripContainer) {
        DOM.carouselStripContainer.classList.add('ratio-portrait');
      }
      renderCurrentSlide();
      updateThumbnails();
      adjustCanvasScale();
      showToast(state.lang === 'ar' ? 'الأبعاد: 4:5 طولي (1080×1350)' : 'Dimensions: 4:5 Portrait (1080×1350)');
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

    DOM.ngoName.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].ngoName = DOM.ngoName.innerText;
    });

    DOM.ngoSub.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].ngoSub = DOM.ngoSub.innerText;
    });

    DOM.footerHandle.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].footerHandle = DOM.footerHandle.innerText;
    });

    DOM.footerUrl.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].footerUrl = DOM.footerUrl.innerText;
    });

    DOM.footerNgoTag.addEventListener('input', () => {
      state.slides[state.currentSlideIndex].footerNgoTag = DOM.footerNgoTag.innerText;
    });

    // NGO Category Badge Quick Presets
    if (DOM.badgeQuickPills) {
      DOM.badgeQuickPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.badge-pill-chip');
        if (!btn) return;

        const badgeText = btn.getAttribute('data-badge') || btn.innerText;
        state.slides[state.currentSlideIndex].badge = badgeText;
        DOM.slideBadge.innerText = badgeText;

        DOM.badgeQuickPills.querySelectorAll('.badge-pill-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showToast('Badge updated');
      });
    }

    // Headline Size / Density Buttons
    DOM.sizeSegmentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sizeClass = btn.getAttribute('data-size');
        state.titleDensity = sizeClass;
        DOM.sizeSegmentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        DOM.slideTitle.className = `slide-title ${state.titleDensity}`;
      });
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

    // Carousel Background Scope Selector (This Slide Only vs All Slides)
    if (DOM.bgScopeBtns) {
      DOM.bgScopeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const scope = btn.getAttribute('data-bgscope');
          state.bgImageScope = scope;
          DOM.bgScopeBtns.forEach(b => b.classList.toggle('active', b === btn));

          const cur = state.slides[state.currentSlideIndex];
          if (scope === 'all') {
            if (cur && cur.bgImage) {
              state.slides.forEach(s => {
                s.bgImage = cur.bgImage;
                s.bgFileName = cur.bgFileName;
              });
              updateThumbnails();
              showToast(state.lang === 'ar' ? 'تم تطبيق الصورة الحالية على جميع الشرائح' : 'Applied photo to all slides');
            } else {
              showToast(state.lang === 'ar' ? 'الصور القادمة ستطبق على جميع الشرائح' : 'New uploads will apply to all slides');
            }
          } else {
            showToast(state.lang === 'ar' ? 'تعديل الصور للشريحة الحالية فقط' : 'Photo changes apply to this slide only');
          }
          updateBackground();
        });
      });
    }

    DOM.btnRemoveBgImg.addEventListener('click', () => {
      if (state.mode === 'carousel' && state.bgImageScope === 'all') {
        state.slides.forEach(s => {
          s.bgImage = null;
          s.bgFileName = '';
        });
        state.bgImage = null;
        showToast(state.lang === 'ar' ? 'تمت إزالة الصورة من جميع الشرائح' : 'Photo removed from all slides');
      } else {
        const cur = state.slides[state.currentSlideIndex];
        if (cur) {
          cur.bgImage = null;
          cur.bgFileName = '';
        }
        state.bgImage = null;
        showToast(state.lang === 'ar' ? 'تمت إزالة الصورة من هذه الشريحة' : 'Photo removed from this slide');
      }
      DOM.inputBgUpload.value = '';
      updateBackground();
      updateThumbnails();
    });

    // Background Image Fit (Fill Canvas vs Fit Entire Photo)
    if (DOM.bgFitBtns) {
      DOM.bgFitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const fit = btn.getAttribute('data-bgfit');
          state.bgFit = fit;
          if (state.mode === 'carousel' && state.bgImageScope === 'all') {
            state.slides.forEach(s => s.bgFit = fit);
          } else {
            const cur = state.slides[state.currentSlideIndex];
            if (cur) cur.bgFit = fit;
          }
          updateBackground();
          updateThumbnails();
        });
      });
    }

    // Background Image Focal Point (Top, Center, Bottom)
    if (DOM.bgPosBtns) {
      DOM.bgPosBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const pos = btn.getAttribute('data-bgpos');
          state.bgPos = pos;
          if (state.mode === 'carousel' && state.bgImageScope === 'all') {
            state.slides.forEach(s => s.bgPos = pos);
          } else {
            const cur = state.slides[state.currentSlideIndex];
            if (cur) cur.bgPos = pos;
          }
          updateBackground();
          updateThumbnails();
        });
      });
    }

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

    DOM.toggleNgoLockup.addEventListener('change', (e) => {
      state.showNgoLockup = e.target.checked;
      DOM.slideNgoLockup.style.display = state.showNgoLockup ? 'flex' : 'none';
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

    // Logo Size Variants
    DOM.logoSizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.logoSize = btn.getAttribute('data-logosize');
        updateLogo();
      });
    });

    // Logo Positions
    DOM.posSegmentBtns.forEach(btn => {
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

        // Sync dock tab state
        DOM.dockBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-mobile-tab') === targetTab);
        });
      });
    });

    // Close Mobile Drawer Triggers
    if (DOM.btnDrawerClose) {
      DOM.btnDrawerClose.addEventListener('click', closeMobileDrawer);
    }
    if (DOM.drawerBackdrop) {
      DOM.drawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    // Mobile Bottom Dock Buttons
    DOM.dockBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-mobile-tab');
        if (!targetTab) return;

        if (targetTab === 'stage') {
          closeMobileDrawer();
        } else {
          openMobileDrawer(targetTab);
        }
      });
    });
  }

  function openMobileDrawer(targetTab) {
    DOM.controlPanel.classList.add('mobile-open');
    if (DOM.drawerBackdrop) DOM.drawerBackdrop.classList.remove('hidden');
    if (targetTab) {
      DOM.panelTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === targetTab);
      });
      DOM.tabPanes.forEach(p => {
        p.classList.toggle('active', p.id === `pane-${targetTab}`);
      });
      DOM.dockBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-mobile-tab') === targetTab);
      });
    }
  }

  function closeMobileDrawer() {
    DOM.controlPanel.classList.remove('mobile-open');
    if (DOM.drawerBackdrop) DOM.drawerBackdrop.classList.add('hidden');
    DOM.dockBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-mobile-tab') === 'stage');
    });
  }

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WEBP)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      state.bgImage = dataUrl;

      if (state.mode === 'carousel' && state.bgImageScope === 'all') {
        state.slides.forEach(s => {
          s.bgImage = dataUrl;
          s.bgFileName = file.name;
        });
        showToast(state.lang === 'ar' ? 'تم تطبيق الصورة على جميع الشرائح' : 'Photo applied to all slides');
      } else {
        const cur = state.slides[state.currentSlideIndex];
        if (cur) {
          cur.bgImage = dataUrl;
          cur.bgFileName = file.name;
        }
        showToast(state.lang === 'ar' ? 'تم تطبيق الصورة على هذه الشريحة' : 'Photo applied to this slide');
      }

      DOM.uploadFileName.textContent = file.name;
      updateBackground();
      updateThumbnails();
    };
    reader.readAsDataURL(file);
  }

  function debounce(fn, wait) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
