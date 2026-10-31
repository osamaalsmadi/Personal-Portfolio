function readPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function writePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
}

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_hobbies: "Hobbies",
    nav_contact: "Contact",
    hero_hi: "HELLO, I'M",
    hero_name: "Osama Alsmadi",
    hero_role: "Cybersecurity Analyst | SOC Analyst | IAM Analyst",
    hero_desc: "Cybersecurity graduate building secure systems, monitoring threats and governing identities.",
    btn_projects: "View Projects",
    btn_contact: "Contact Me",
    about_title: "About Me",
    about_p: "Cybersecurity graduate (B.Sc.) experienced in SOC monitoring, incident response and IAM/IGA. I use SIEM tools, log analysis and the MITRE ATT&CK framework for threat detection, and I build custom security solutions: an EDR telemetry platform, an identity governance system and a threat-monitoring honeypot.",
    av0: "Professional",
    av1: "Casual",
    alt0: "Osama Alsmadi in a suit, professional photo",
    alt1: "Osama Alsmadi seated on an ornate chair with a cane, casual style photo",
    edu_t: "Education",
    edu_d: "B.Sc. Cybersecurity, Philadelphia University, Amman (2022 - 2026)",
    exp_t: "Experience",
    exp_d: "Cybersecurity & Risk Management Trainee, The Hope International Company (03/2026 - 06/2026): vulnerability assessments, IAM best practices, Active Directory support.",
    cert_t: "Certificates & Training",
    cert_d: "CCNA Training Course, CEH Training Program, Python/JavaScript/HTML & CSS Essentials (Cisco Networking Academy)",
    skills_title: "Skills",
    sk1: "Security Operations & Frameworks",
    sk2: "Security Tools",
    sk3: "Programming & Web Development",
    sk4: "Systems & Databases",
    projects_title: "Projects",
    p0_t: "Personal Portfolio",
    p0_d: "This bilingual (EN/AR) responsive portfolio built from scratch with pure HTML, CSS and JavaScript: theme switcher, avatar selector and RTL support.",
    p1_d: "EDR platform for telemetry analysis, security scanning and automated remediation, with local AI models (Ollama) that cut manual log review time by 30%.",
    p2_d: "Identity Governance platform enforcing least privilege with RBAC, risk-based access control, SoD conflict detection, automated access reviews and audit trails.",
    p3_t: "Honeypot Monitoring System",
    p3_d: "Custom honeypot mapped to MITRE ATT&CK that identified over 88% of simulated brute-force, SQL injection and DoS attacks.",
    view_code: "View on GitHub →",
    hobbies_title: "Hobbies",
    h1_t: "CTF & Home Labs",
    h1_d: "Practicing attack and defense in my own lab.",
    h2_t: "Coding",
    h2_d: "Building side projects and security tools.",
    h3_t: "Reading Security News",
    h3_d: "Following new threats, CVEs and techniques.",
    h4_t: "Photography",
    h4_d: "Capturing moments and exploring creativity.",
    contact_title: "Contact Me",
    contact_sub: "Have an opportunity or a question? Send me a message.",
    loc: "Amman, Jordan",
    f_name: "Your name",
    f_email: "Your email",
    f_msg: "Your message",
    f_send: "Send Message",
    f_ok: "Thank you! Your mail app is opening to send the message.",
    f_err: "Please fill all fields with a valid email.",
    skip: "Skip to content",
    btn_cv: "Download CV",
    cv_short: "CV ⬇",
    st1: "Simulated attacks detected",
    st2: "Managed identities secured",
    st3: "Less manual log-review time",
    st4: "Lower unauthorized-access risk",
    tl1_t: "Cybersecurity & Risk Management Trainee",
    tl1_o: "The Hope International Company, Amman",
    tl1_d: "Ran vulnerability assessments, applied IAM best practices (cutting unauthorized-access risk by 25%) and resolved support tickets using Active Directory.",
    tl2_t: "B.Sc. in Cybersecurity",
    tl2_o: "Philadelphia University, Amman",
    tl2_d: "Cybersecurity degree backed by hands-on projects in SOC monitoring, incident response and IAM/IGA.",
    tl3_date: "Courses",
    f_sent: "Message sent successfully. Thank you!",
    f_fail: "Could not send the message. Please email me directly.",
    footer: "© 2026 Osama Alsmadi. All rights reserved."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_hobbies: "الهوايات",
    nav_contact: "تواصل معي",
    hero_hi: "مرحباً، أنا",
    hero_name: "أسامة الصمادي",
    hero_role: "محلل أمن سيبراني | محلل SOC | محلل IAM",
    hero_desc: "خريج أمن سيبراني أبني أنظمة آمنة، وأراقب التهديدات، وأدير هويات المستخدمين وصلاحياتهم.",
    btn_projects: "عرض المشاريع",
    btn_contact: "تواصل معي",
    about_title: "نبذة عني",
    about_p: "خريج بكالوريوس أمن سيبراني، لدي خبرة في مراقبة SOC والاستجابة للحوادث وإدارة الهويات IAM/IGA. أستخدم أدوات SIEM وتحليل السجلات وإطار MITRE ATT&CK لكشف التهديدات، وأطوّر حلولاً أمنية مخصصة: منصة EDR لتحليل القياس عن بعد، ونظام حوكمة الهوية، ونظام Honeypot لمراقبة الهجمات.",
    av0: "رسمي",
    av1: "كاجوال",
    alt0: "أسامة الصمادي بالبدلة الرسمية",
    alt1: "أسامة الصمادي جالساً على كرسي فخم ممسكاً بعصا، صورة كاجوال",
    edu_t: "التعليم",
    edu_d: "بكالوريوس الأمن السيبراني، جامعة فيلادلفيا، عمّان (2022 - 2026)",
    exp_t: "الخبرة",
    exp_d: "متدرب أمن سيبراني وإدارة مخاطر، شركة هوب العالمية (03/2026 - 06/2026): تقييم الثغرات، تطبيق أفضل ممارسات IAM، ودعم Active Directory.",
    cert_t: "الشهادات والدورات",
    cert_d: "دورة CCNA، برنامج CEH التدريبي، أساسيات Python وJavaScript وHTML وCSS (أكاديمية سيسكو)",
    skills_title: "المهارات",
    sk1: "العمليات الأمنية والأطر",
    sk2: "الأدوات الأمنية",
    sk3: "البرمجة وتطوير الويب",
    sk4: "الأنظمة وقواعد البيانات",
    projects_title: "المشاريع",
    p0_t: "الموقع الشخصي",
    p0_d: "هذا الموقع ثنائي اللغة (EN/AR) ومتجاوب، مبني من الصفر بـ HTML وCSS وJavaScript فقط: تبديل الثيم، اختيار الصورة، ودعم الاتجاه من اليمين لليسار.",
    p1_d: "منصة EDR لتحليل القياس عن بعد والفحص الأمني والمعالجة الآلية، مع نماذج ذكاء اصطناعي محلية (Ollama) قللت وقت مراجعة السجلات يدوياً بنسبة 30%.",
    p2_d: "منصة حوكمة هوية تطبق مبدأ الصلاحية الأقل عبر RBAC والتحكم المبني على المخاطر وكشف تعارض الواجبات SoD ومراجعات الوصول الآلية وسجلات التدقيق.",
    p3_t: "نظام Honeypot للمراقبة",
    p3_d: "نظام Honeypot مخصص مرتبط بإطار MITRE ATT&CK اكتشف أكثر من 88% من هجمات القوة الغاشمة وحقن SQL وDoS التجريبية.",
    view_code: "عرض على GitHub ←",
    hobbies_title: "الهوايات",
    h1_t: "مسابقات CTF والمختبرات",
    h1_d: "أتدرب على الهجوم والدفاع في مختبري الخاص.",
    h2_t: "البرمجة",
    h2_d: "أبني مشاريع جانبية وأدوات أمنية.",
    h3_t: "قراءة أخبار الأمن",
    h3_d: "أتابع التهديدات والثغرات والتقنيات الجديدة.",
    h4_t: "التصوير",
    h4_d: "أحب التقاط اللحظات واستكشاف الإبداع.",
    contact_title: "تواصل معي",
    contact_sub: "عندك فرصة أو سؤال؟ ابعث لي رسالة.",
    loc: "عمّان، الأردن",
    f_name: "اسمك",
    f_email: "بريدك الإلكتروني",
    f_msg: "رسالتك",
    f_send: "إرسال الرسالة",
    f_ok: "شكراً! سيفتح تطبيق البريد لإرسال رسالتك.",
    f_err: "يرجى تعبئة جميع الحقول وإدخال بريد صحيح.",
    skip: "انتقل إلى المحتوى",
    btn_cv: "تحميل السيرة الذاتية",
    cv_short: "CV ⬇",
    st1: "من الهجمات التجريبية تم اكتشافها",
    st2: "من الهويات المُدارة تم تأمينها",
    st3: "توفير في وقت مراجعة السجلات",
    st4: "انخفاض في مخاطر الوصول غير المصرّح",
    tl1_t: "متدرب أمن سيبراني وإدارة مخاطر",
    tl1_o: "شركة هوب العالمية، عمّان",
    tl1_d: "أجريت تقييمات للثغرات، وطبقت أفضل ممارسات IAM (وخفضت مخاطر الوصول غير المصرّح بنسبة 25%)، وحللت تذاكر الدعم باستخدام Active Directory.",
    tl2_t: "بكالوريوس في الأمن السيبراني",
    tl2_o: "جامعة فيلادلفيا، عمّان",
    tl2_d: "درجة في الأمن السيبراني مدعومة بمشاريع عملية في مراقبة SOC والاستجابة للحوادث وإدارة الهويات IAM/IGA.",
    tl3_date: "دورات",
    f_sent: "تم إرسال رسالتك بنجاح. شكراً لك!",
    f_fail: "تعذّر إرسال الرسالة. يرجى مراسلتي مباشرة عبر البريد.",
    footer: "© 2026 أسامة الصمادي. جميع الحقوق محفوظة."
  }
};

function getEl(selector) {
  return document.querySelector(selector);
}

function getAll(selector) {
  return document.querySelectorAll(selector);
}

var themes = ['cyber', 'violet', 'emerald', 'light'];
var themeIndex = themes.indexOf(readPreference('theme'));
if (themeIndex < 0) {
  themeIndex = 0;
}

function applyTheme() {
  document.body.setAttribute('data-theme', themes[themeIndex]);
  writePreference('theme', themes[themeIndex]);
}

function onThemeClick() {
  themeIndex = themeIndex + 1;
  if (themeIndex >= themes.length) {
    themeIndex = 0;
  }
  applyTheme();
}

getEl('#themeBtn').addEventListener('click', onThemeClick);

var lang = readPreference('lang') || 'en';
var avatarIndex = 0;

function setLanguage(newLang) {
  newLang = newLang === 'ar' ? 'ar' : 'en';
  lang = newLang;
  var dict = translations[newLang];

  document.documentElement.lang = newLang;
  if (newLang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  var textElements = getAll('[data-i18n]');
  for (var i = 0; i < textElements.length; i++) {
    var element = textElements[i];
    element.textContent = dict[element.dataset.i18n];
  }

  var inputs = getAll('[data-i18n-ph]');
  for (var j = 0; j < inputs.length; j++) {
    var input = inputs[j];
    input.placeholder = dict[input.dataset.i18nPh];
    input.setAttribute('aria-label', dict[input.dataset.i18nPh]);
  }

  getEl('#profileImg').alt = dict['alt' + avatarIndex];

  if (newLang === 'ar') {
    getEl('#langBtn').textContent = 'EN';
    document.title = dict.hero_name + ' | معرض الأعمال';
  } else {
    getEl('#langBtn').textContent = 'AR';
    document.title = dict.hero_name + ' | Cybersecurity Portfolio';
  }

  writePreference('lang', newLang);
}

function onLangClick() {
  if (lang === 'en') {
    setLanguage('ar');
  } else {
    setLanguage('en');
  }
}

getEl('#langBtn').addEventListener('click', onLangClick);

var photos = [
  'assets/images/profile-professional.jpg',
  'assets/images/profile-casual.jpg'
];
var profileImg = getEl('#profileImg');

function showNewPhoto(number) {
  profileImg.src = photos[number];
  profileImg.alt = translations[lang]['alt' + number];
  profileImg.onload = function () {
    profileImg.classList.remove('fade');
  };
}

function onAvatarClick(event) {
  var button = event.target.closest('.chip');
  if (!button) {
    return;
  }

  var number = Number(button.dataset.i);
  if (number === avatarIndex) {
    return;
  }
  avatarIndex = number;

  var chips = getAll('#avatars .chip');
  for (var i = 0; i < chips.length; i++) {
    var isClicked = chips[i] === button;
    chips[i].classList.toggle('active', isClicked);
    chips[i].setAttribute('aria-pressed', isClicked);
  }

  profileImg.classList.add('fade');
  setTimeout(function () {
    showNewPhoto(number);
  }, 350);
}

getEl('#avatars').addEventListener('click', onAvatarClick);

var menu = getEl('#menu');

function onBurgerClick(event) {
  var isOpen = menu.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', isOpen);
}

function onMenuClick(event) {
  if (event.target.tagName === 'A') {
    menu.classList.remove('open');
    getEl('#burger').setAttribute('aria-expanded', 'false');
  }
}

getEl('#burger').addEventListener('click', onBurgerClick);
menu.addEventListener('click', onMenuClick);
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    menu.classList.remove('open');
    getEl('#burger').setAttribute('aria-expanded', 'false');
    getEl('#burger').focus();
  }
});

var menuLinks = getAll('#menu a');

function onSectionVisible(entries) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (entry.isIntersecting) {
      for (var j = 0; j < menuLinks.length; j++) {
        var link = menuLinks[j];
        var isCurrent = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', isCurrent);
      }
    }
  }
}

var sectionWatcher = new IntersectionObserver(onSectionVisible, { rootMargin: '-45% 0px -50% 0px' });
var sections = getAll('main section[id]');
for (var s = 0; s < sections.length; s++) {
  sectionWatcher.observe(sections[s]);
}

function onItemVisible(entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('show');
      revealWatcher.unobserve(entries[i].target);
    }
  }
}

var revealWatcher = new IntersectionObserver(onItemVisible, { threshold: 0.12 });
var revealItems = getAll('.rv');
for (var r = 0; r < revealItems.length; r++) {
  revealWatcher.observe(revealItems[r]);
}

var FORM_ENDPOINT = 'https://formsubmit.co/ajax/osamacyber2@gmail.com';

var nameInput = getEl('#fName');
var emailInput = getEl('#fEmail');
var msgInput = getEl('#fMsg');
var formMessage = getEl('#formMsg');
var contactForm = getEl('#contactForm');

function showError(text) {
  formMessage.className = 'form-msg err';
  formMessage.textContent = text;
}

function showSuccess(text) {
  formMessage.className = 'form-msg ok';
  formMessage.textContent = text;
}

function emailIsValid(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

async function sendToServer(name, email, text) {
  var submitButton = contactForm.querySelector('button');
  submitButton.disabled = true;

  try {
    var response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        message: text,
        _subject: 'New message from your portfolio'
      })
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    showSuccess(translations[lang].f_sent);
    contactForm.reset();
  } catch (error) {
    showError(translations[lang].f_fail);
  }

  submitButton.disabled = false;
}

function openMailApp() {
  showSuccess(translations[lang].f_ok);
  var body = encodeURIComponent(msgInput.value + '\n\n- ' + nameInput.value + ' (' + emailInput.value + ')');
  window.location.href = 'mailto:osamacyber2@gmail.com?subject=Portfolio%20Message&body=' + body;
  contactForm.reset();
}

function onFormSubmit(event) {
  event.preventDefault();
  if (contactForm.querySelector('button').disabled) return;

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var text = msgInput.value.trim();
  var emailOk = emailIsValid(email);

  nameInput.classList.remove('bad');
  emailInput.classList.remove('bad');
  msgInput.classList.remove('bad');

  if (name === '' || !emailOk || text === '') {
    if (name === '') {
      nameInput.classList.add('bad');
    }
    if (!emailOk) {
      emailInput.classList.add('bad');
    }
    if (text === '') {
      msgInput.classList.add('bad');
    }
    showError(translations[lang].f_err);
    return;
  }

  if (FORM_ENDPOINT) {
    sendToServer(name, email, text);
  } else {
    openMailApp();
  }
}

contactForm.addEventListener('submit', onFormSubmit);

var canvas = getEl('#neural');
var ctx = canvas.getContext('2d');

var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
var mouse = { x: -999, y: -999 };
var width = 0;
var height = 0;
var nodes = [];
var red = 79;
var green = 224;
var blue = 255;
var frameCount = 0;
var linkDistance = 145;
var mouseRange = 190;
var netIsOn = readPreference('net') !== 'off';

function makeColor(alpha) {
  return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
}

function updateColor() {
  var hex = getComputedStyle(document.body).getPropertyValue('--accent2').trim();
  if (hex === '') {
    hex = '#4fe0ff';
  }
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var number = parseInt(hex, 16);
  red = (number >> 16) & 255;
  green = (number >> 8) & 255;
  blue = number & 255;
}

function makeNodes(count) {
  nodes = [];
  for (var i = 0; i < count; i++) {
    var baseX = (Math.random() - 0.5) * 0.5;
    var baseY = (Math.random() - 0.5) * 0.5;
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: baseX,
      baseY: baseY,
      speedX: baseX,
      speedY: baseY,
      size: 1.4 + Math.random() * 1.8,
      glow: 0,
      passedGlow: 0
    });
  }
}

function resizeCanvas() {
  var ratio = window.devicePixelRatio || 1;
  if (ratio > 2) {
    ratio = 2;
  }
  var newWidth = window.innerWidth;

  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  var onlyHeightChanged = (newWidth === width && nodes.length > 0);
  width = newWidth;
  height = window.innerHeight;
  if (onlyHeightChanged) {
    return;
  }

  var count = Math.round(width * height / 11000);
  if (count < 40) {
    count = 40;
  }
  if (count > 130) {
    count = 130;
  }
  makeNodes(count);
}

function drawHalo() {
  if (mouse.x <= 0) {
    return;
  }
  var halo = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouseRange);
  halo.addColorStop(0, makeColor(0.14));
  halo.addColorStop(1, makeColor(0));
  ctx.fillStyle = halo;
  ctx.fillRect(mouse.x - mouseRange, mouse.y - mouseRange, mouseRange * 2, mouseRange * 2);
}

function moveNode(n) {
  if (!reduceMotion) {
    n.x = n.x + n.speedX;
    n.y = n.y + n.speedY;
  }

  if (n.x < 0 || n.x > width) {
    n.speedX = n.speedX * -1;
  }
  if (n.y < 0 || n.y > height) {
    n.speedY = n.speedY * -1;
  }

  n.speedX = n.speedX + (n.baseX - n.speedX) * 0.01;
  n.speedY = n.speedY + (n.baseY - n.speedY) * 0.01;

  var dx = mouse.x - n.x;
  var dy = mouse.y - n.y;
  var distance = Math.hypot(dx, dy);

  if (distance < mouseRange && distance > 1) {
    var pull = (1 - distance / mouseRange) * 0.04;
    if (distance < 60) {
      pull = pull * -1;
    }
    n.speedX = n.speedX + dx / distance * pull;
    n.speedY = n.speedY + dy / distance * pull;

    var light = (1 - distance / mouseRange) * 1.4;
    if (light > 1) {
      light = 1;
    }
    if (light > n.glow) {
      n.glow = light;
    }
  }

  if (!reduceMotion && Math.random() < 0.0006) {
    n.glow = 1;
  }
}

function drawLine(x1, y1, x2, y2, alpha, thickness) {
  ctx.strokeStyle = makeColor(alpha);
  ctx.lineWidth = thickness;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawCircle(x, y, radius, alpha) {
  ctx.fillStyle = makeColor(alpha);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawLinks() {
  for (var a = 0; a < nodes.length; a++) {
    var first = nodes[a];
    for (var b = a + 1; b < nodes.length; b++) {
      var second = nodes[b];
      var distance = Math.hypot(first.x - second.x, first.y - second.y);
      if (distance > linkDistance) {
        continue;
      }

      var closeness = 1 - distance / linkDistance;
      var glow = Math.max(first.glow, second.glow);

      if (first.glow > 0.7 && second.glow < 0.25 && Math.random() < 0.02) {
        second.passedGlow = 0.85;
      }
      if (second.glow > 0.7 && first.glow < 0.25 && Math.random() < 0.02) {
        first.passedGlow = 0.85;
      }

      var alpha = 0.12 * closeness + 0.65 * glow * closeness;
      drawLine(first.x, first.y, second.x, second.y, alpha, 0.7 + glow * 1.3);
    }
  }
}

function drawMouseLines() {
  if (mouse.x <= 0) {
    return;
  }
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var distance = Math.hypot(mouse.x - node.x, mouse.y - node.y);
    if (distance < mouseRange) {
      var alpha = (1 - distance / mouseRange) * 0.55;
      drawLine(mouse.x, mouse.y, node.x, node.y, alpha, 1);
    }
  }
}

function drawDots() {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    node.glow = Math.max(node.glow * 0.96, node.passedGlow);
    node.passedGlow = 0;

    if (node.glow > 0.25) {
      drawCircle(node.x, node.y, node.size * 6, 0.14 * node.glow);
    }
    drawCircle(node.x, node.y, node.size * (1 + node.glow * 1.3), 0.45 + node.glow * 0.55);
  }
}

function drawNetwork() {
  if (!netIsOn) {
    ctx.clearRect(0, 0, width, height);
    return;
  }
  requestAnimationFrame(drawNetwork);

  if (document.hidden) {
    return;
  }

  if (frameCount % 40 === 0) {
    updateColor();
  }
  frameCount++;

  if (width < 600) {
    linkDistance = 100;
    mouseRange = 130;
  } else {
    linkDistance = 145;
    mouseRange = 190;
  }

  ctx.clearRect(0, 0, width, height);
  drawHalo();

  for (var i = 0; i < nodes.length; i++) {
    moveNode(nodes[i]);
  }

  ctx.lineCap = 'round';
  drawLinks();
  drawMouseLines();
  drawDots();
}

function onPointerMove(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

function hideMouse() {
  mouse.x = -999;
  mouse.y = -999;
}

window.addEventListener('pointermove', onPointerMove);
document.addEventListener('mouseleave', hideMouse);
window.addEventListener('touchend', hideMouse);
window.addEventListener('resize', resizeCanvas);

function setNeural(value) {
  if (value && !netIsOn) {
    netIsOn = true;
    drawNetwork();
  } else {
    netIsOn = value;
  }
}

resizeCanvas();
if (netIsOn) {
  drawNetwork();
}

var netBtn = getEl('#netBtn');
var netOn = readPreference('net') !== 'off';

function paintNetButton() {
  netBtn.setAttribute('aria-pressed', netOn);
  netBtn.classList.toggle('off', !netOn);
}

function onNetClick() {
  netOn = !netOn;
  if (netOn) {
    writePreference('net', 'on');
  } else {
    writePreference('net', 'off');
  }
  setNeural(netOn);
  paintNetButton();
}

netBtn.addEventListener('click', onNetClick);

function countUp(element) {
  var finalNumber = Number(element.dataset.count);
  var startTime = null;

  function step(now) {
    if (startTime === null) {
      startTime = now;
    }
    var progress = (now - startTime) / 1600;
    if (progress > 1) {
      progress = 1;
    }

    var eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(finalNumber * eased) + '%';

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function onCounterVisible(entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      counterWatcher.unobserve(entries[i].target);
      countUp(entries[i].target);
    }
  }
}

var counterWatcher = new IntersectionObserver(onCounterVisible, { threshold: 0.6 });
var counters = getAll('[data-count]');
for (var c = 0; c < counters.length; c++) {
  counterWatcher.observe(counters[c]);
}

var toTopBtn = getEl('#toTop');

function onScroll() {
  toTopBtn.hidden = window.scrollY < 600;
}

function onToTopClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', onScroll, { passive: true });
toTopBtn.addEventListener('click', onToTopClick);

applyTheme();
setLanguage(lang);
paintNetButton();

var firstChips = getAll('#avatars .chip');
for (var f = 0; f < firstChips.length; f++) {
  firstChips[f].setAttribute('aria-pressed', f === 0);
}