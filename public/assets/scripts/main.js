// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// TRADUCCIÓN 
const translations = {
  english: {
    "nav-funciona": "How it works",
    "nav-proyectos": "Successful projects",
    "nav-nosotros": "About us",
    "nav-explora": "Explore",
    "page-title": "Innospace - Connecting talent with industry",
    "hero-img-alt": "Main image",
    "explora-title": "Take innovation with you",
    "explora-desc": "Innospace is also available as a mobile app. Designed so students and companies can connect quickly, easily and from anywhere. Explore projects, collaborate with teams and share your achievements from the palm of your hand.",
    "explora-cta": "Discover the full power of Innospace wherever you are!",
    "hero-title": "We connect tomorrow's talent with today's challenges",
    "hero-desc": "The direct bridge between university talent and industry challenges",
    "hero-cta": "Register now",
    "login": "Sign in",
    "funciona-title": "How it works",
    "proyectos-title": "Successful projects",
    "nosotros-title": "About UniPafi",
    "paso1-title": "Register and Create your Profile",
    "paso1-estudiantes": "Students: Create your account, upload your CV and build your portfolio to showcase your skills and experience.",
    "paso1-empresas": "Companies: Register your company and define areas of interest to start publishing challenges.",
    "paso2-title": "Explore and Publish",
    "paso2-estudiantes": "Students: Explore a list of real challenges published by companies and filter by your area.",
    "paso2-empresas": "Companies: Publish a challenge or problem from your sector or explore the bank of innovative ideas uploaded by students.",
    "paso3-title": "Connect and Collaborate",
    "paso3-estudiantes": "Students: Apply to challenges that interest you with one click and send your profile for consideration.",
    "paso3-empresas": "Companies: Receive applications and automatically filter the most talented students based on their skills and portfolio.",
    "paso4-title": "Achieve Real Results",
    "paso4-estudiantes": "Students: Track your applications, gain funding for your ideas, and add real projects to your portfolio.",
    "paso4-empresas": "Companies: Find the innovative solution to your challenge and discover emerging talent to link to your organization.",
    "proyecto-cta": "Publish your first project",
    "nosotros-desc": "At UniPafi, we connect university talent with industry challenges. We believe that the most innovative ideas are born in classrooms, and our purpose is to turn them into real solutions for companies. Through our platform, we drive students' professional development while helping organizations discover fresh perspectives and disruptive approaches. We are the bridge where young creativity and business experience come together to generate tangible impact.",
    "nosotros-quote": "We believe the future of innovation is written in classrooms",
    "copyright": "©2025 Innospace | All rights reserved",
    "footer-funciona": "How it works",
    "footer-proyectos": "Successful projects",
    "footer-explora": "Explore",
    "footer-nosotros": "About us",
    "jeremy-role": "Software Engineering Student",
    "jeremy-position": "Now Jr. Developer at BioPafi",
    "jeremy-story": "The platform was the springboard I needed. I applied to a fintech challenge through the filtered search section and, once accepted, the project was automatically added to my digital portfolio in the app. That caught my current employer's attention!",
    "leonardo-role": "BioPafi Manager",
    "leonardo-projects": "Has published 5 challenges on the platform",
    "leonardo-story": "We published a process optimization challenge in the app. In 72 hours we received incredible proposals. The skills filtering allowed us to find Jeremy, a student whose solution we are implementing now. It's the most efficient way to access fresh talent with applicable ideas."
  },
  spanish: {
    "nav-funciona": "¿Cómo funciona?",
    "nav-proyectos": "Proyectos exitosos",
    "nav-nosotros": "Nosotros",
    "nav-explora": "Explora",
    "page-title": "Innospace - Conectamos talento con la industria",
    "hero-img-alt": "Imagen principal",
    "explora-title": "Lleva la innovación contigo",
    "explora-desc": "Innospace también está disponible como aplicación móvil. Diseñada para que los estudiantes y empresas se conecten de forma rápida, sencilla y desde cualquier lugar. Explora proyectos, colabora con equipos y comparte tus logros desde la palma de tu mano.",
    "explora-cta": "¡Descubre todo el poder de Innospace donde quiera que estés!",
    "hero-title": "Conectamos el talento del mañana con los retos de hoy",
    "hero-desc": "El puente directo entre el talento universitario y los desafíos de la industria",
    "hero-cta": "Regístrate ahora",
    "login": "Iniciar sesión",
    "funciona-title": "¿Cómo funciona?",
    "proyectos-title": "Proyectos exitosos",
    "nosotros-title": "UniPafi",
    "paso1-title": "Regístrate y Crea tu Perfil",
    "paso1-estudiantes": "Estudiantes: Crea tu cuenta, sube tu CV y construye tu portafolio para mostrar tus habilidades y experiencia.",
    "paso1-empresas": "Empresas: Registra tu empresa y define las áreas de interés para empezar a publicar retos.",
    "paso2-title": "Explora y Publica",
    "paso2-estudiantes": "Estudiantes: Explora una lista de retos reales publicados por empresas y filtra por tu área.",
    "paso2-empresas": "Empresas: Publica un reto o problema de tu sector o explora el banco de ideas innovadoras subidas por estudiantes.",
    "paso3-title": "Conecta y Colabora",
    "paso3-estudiantes": "Estudiantes: Postúlate a los retos que te interesen con un solo clic y envía tu perfil para ser considerado.",
    "paso3-empresas": "Empresas: Recibe postulaciones y filtra automáticamente a los estudiantes más talentosos según sus habilidades y portafolio.",
    "paso4-title": "Logra Resultados Reales",
    "paso4-estudiantes": "Estudiantes: Haz un seguimiento de tus postulaciones, gana financiamiento para tus ideas y suma proyectos reales a tu portafolio.",
    "paso4-empresas": "Empresas: Encuentra la solución innovadora a tu reto y descubre talento emergente para vincular a tu organización.",
    "proyecto-cta": "Publica tu primer proyecto",
    "nosotros-desc": "En UniPafi, conectamos el talento universitario con los desafíos de la industria. Creemos que las ideas más innovadoras nacen en las aulas, y nuestro propósito es convertirlas en soluciones reales para las empresas. A través de nuestra plataforma, impulsamos el desarrollo profesional de los estudiantes mientras ayudamos a las organizaciones a descubrir perspectivas frescas y enfoques disruptivos. Somos el puente donde la creatividad joven y la experiencia empresarial se unen para generar un impacto tangible.",
    "nosotros-quote": "Creemos que el futuro de la innovación se escribe en las aulas",
    "copyright": "©2025 Innospace | Todos los derechos reservados",
    "footer-funciona": "¿Cómo funciona?",
    "footer-proyectos": "Proyectos exitosos",
    "footer-explora": "Explorar",
    "footer-nosotros": "Nosotros",
    "jeremy-role": "Estudiante de Ing. Software",
    "jeremy-position": "Ahora Desarrollador Jr. en BioPafi",
    "jeremy-story": "La plataforma fue el trampolín que necesitaba. Postulé a un reto de una fintech a través de la sección de búsqueda filtrada y, al ser aceptado, el proyecto se agregó automáticamente a mi portafolio digital de la app. ¡Eso llamó la atención de mi empleador actual!",
    "leonardo-role": "Gerente de BioPafi",
    "leonardo-projects": "Ha publicado 5 retos en la plataforma",
    "leonardo-story": "Publicamos un desafío de optimización de procesos en la app. En 72 horas recibimos propuestas increíbles. El filtrado por habilidades nos permitió encontrar a Jeremy, un estudiante cuya solución estamos implementando ahora. Es la forma más eficiente de acceder a talento fresco y con ideas aplicables."
  }
};


const langButtons = document.querySelectorAll('.lang-switch [data-lang]');

function setLanguage(lang) {
  if (!lang) return;

  
  try { localStorage.setItem('language', lang); } catch (e) { /* ignore */ }

 
  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Traducir atributos alt de imágenes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('alt', translations[lang][key]);
    }
  });


  document.documentElement.lang = (lang === 'english') ? 'en' : 'es';
}

if (langButtons && langButtons.length) {
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  
  const savedLang = localStorage.getItem('language') || (document.documentElement.lang === 'en' ? 'english' : 'spanish');
  setLanguage(savedLang);
}

// MODO OSCURO 
const darkModeToggle = document.getElementById('dark-mode-toggle');

function setDarkMode(enabled) {
  document.body.classList.toggle('dark-mode', enabled);
  try { localStorage.setItem('darkMode', enabled ? '1' : '0'); } catch (e) { /* ignore */ }

  if (darkModeToggle) {
    darkModeToggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    const thumb = darkModeToggle.querySelector('.toggle-thumb');
    if (thumb) thumb.style.left = enabled ? '30px' : '1px';
    const sun = darkModeToggle.querySelector('.toggle-icon.sun');
    const moon = darkModeToggle.querySelector('.toggle-icon.moon');
    if (sun) sun.style.opacity = enabled ? '0.5' : '1';
    if (moon) moon.style.opacity = enabled ? '1' : '0.5';
  }
}

if (darkModeToggle) {
  
  const stored = localStorage.getItem('darkMode');
  const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = (stored === null) ? prefers : (stored === '1');
  setDarkMode(initial);

  darkModeToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
  });

  darkModeToggle.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setDarkMode(!document.body.classList.contains('dark-mode'));
    }
  });
}
