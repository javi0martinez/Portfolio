/* ─── i18n ───────────────────────────────────────────────
   Translations object. Keys match data-i18n attributes.
──────────────────────────────────────────────────────── */
const translations = {
  en: {
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.certifications': 'Certifications',
    'nav.education':  'Education',
    'nav.contact':    'Contact',

    'hero.title': 'Data &amp; Cloud Engineer',
    'hero.desc':  'Building data pipelines and cloud infrastructure. Passionate about AI, automation, and clean engineering.',
    'hero.cta1':  'About me',
    'hero.cta2':  'Download CV',

    'exp.label':          'Career',
    'exp.title':          'Experience',
    'exp.job1.role':      'Data Solution &amp; Infrastructure Analyst',
    'exp.job1.date':      'Sep 2023 — Present',
    'exp.job1.company':   'Santander CFGS · Valladolid, Spain',
    'exp.job1.b1':        'Built a data lake to evaluate performance across initiatives, workflows, and 100+ developers — delivering visibility into 20+ KPIs and reducing project delivery time by 7.6%.',
    'exp.job1.b2':        'Integrated code quality tooling using SOLID principles, achieving a 45.5% improvement in code quality metrics.',
    'exp.job1.b3':        'Deployed AWS Cloud components as part of the DevOps team, using Terraform for infrastructure as code.',
    'exp.job2.role':      'Big Data Engineer',
    'exp.job2.date':      'Jun 2021 — Aug 2021',
    'exp.job2.company':   'Luce IT · Valladolid, Spain',
    'exp.job2.b1':        'Developed a customer service chatbot for a parcel company.',
    'exp.job2.b2':        'Conducted exploratory data analysis in Google Cloud on 100+ TB of data to support downstream machine learning modeling.',
    'exp.job2.b3':        'Implemented form field validations using regular expressions in Snowflake.',

    'proj.label':       'Work',
    'proj.title':       'Projects',
    'proj.placeholder': 'Image placeholder',
    'proj.wip':         'In progress',
    'proj.p1.desc':     'Binary image classifier combining classical and quantum computing. Cats vs. dogs, but with qubits.',
    'proj.p2.desc':     'Comparative study of classical statistics and ML for modeling energy consumption in a smart building.',
    'proj.p3.desc':     'Web app for tracking gym weights and progression over time.',

    'cert.label':     'Credentials',
    'cert.title':     'Certifications',
    'cert.c1.title':  'AWS Cloud Practitioner',
    'cert.c2.title':  'AWS AI Practitioner — Early Adopter',
    'cert.c2.badge':  'Early Adopter',
    'cert.c3.title':  'ISE III — C1 English',

    'edu.label':         'Background',
    'edu.title':         'Education',
    'edu.thesis.label':  'Undergraduate Thesis',
    'edu.thesis.link':   'View project',
    'edu.d1.degree':     'Computer Science Bachelor — Computation',
    'edu.d1.uni':        'Universidad de Valladolid · Valladolid, Spain',
    'edu.d1.thesis':     'Quantum computing-based machine learning. Image classification using quantum kernels.',
    'edu.d2.degree':     'Statistics Bachelor',
    'edu.d2.uni':        'Universidad de Valladolid · Valladolid, Spain',
    'edu.d2.thesis':     'Creation of a predictive model for energy consumption in an intelligent building.',
    'edu.d2.grade':      'Grade: 9.6 / 10',

    'contact.label': 'Get in touch',
    'contact.title': 'Contact',
    'contact.desc':  'Interested in working together or have a question? Feel free to reach out.',

  },

  es: {
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.certifications': 'Certificaciones',
    'nav.education':  'Educación',
    'nav.contact':    'Contacto',

    'hero.title': 'Ingeniero de Datos y Cloud',
    'hero.desc':  'Construyendo pipelines de datos e infraestructura cloud. Apasionado por la IA, la automatización y la ingeniería limpia.',
    'hero.cta1':  'Sobre mí',
    'hero.cta2':  'Descargar CV',

    'exp.label':          'Trayectoria',
    'exp.title':          'Experiencia',
    'exp.job1.role':      'Analista de Soluciones de Datos e Infraestructura',
    'exp.job1.date':      'Sep 2023 — Actualidad',
    'exp.job1.company':   'Santander CFGS · Valladolid, España',
    'exp.job1.b1':        'Construí un data lake para evaluar el rendimiento en iniciativas, flujos de trabajo y más de 100 desarrolladores — proporcionando visibilidad sobre 20+ KPIs y reduciendo el tiempo de entrega en un 7,6%.',
    'exp.job1.b2':        'Integré herramientas de calidad de código usando principios SOLID, logrando una mejora del 45,5% en las métricas de calidad.',
    'exp.job1.b3':        'Despliegué componentes Cloud en AWS como parte del equipo DevOps, usando Terraform como infraestructura como código.',
    'exp.job2.role':      'Ingeniero Big Data',
    'exp.job2.date':      'Jun 2021 — Ago 2021',
    'exp.job2.company':   'Luce IT · Valladolid, España',
    'exp.job2.b1':        'Desarrollé un chatbot de atención al cliente para una empresa de paquetería.',
    'exp.job2.b2':        'Realicé análisis exploratorio de datos en Google Cloud sobre más de 100 TB para apoyar modelos de aprendizaje automático.',
    'exp.job2.b3':        'Implementé validaciones de campos de formulario usando expresiones regulares en Snowflake.',

    'proj.label':       'Trabajo',
    'proj.title':       'Proyectos',
    'proj.placeholder': 'Imagen de ejemplo',
    'proj.wip':         'En progreso',
    'proj.p1.desc':     'Clasificador binario de imágenes que combina computación clásica y cuántica. Gatos vs. perros, pero con qubits.',
    'proj.p2.desc':     'Estudio comparativo de estadística clásica y ML para modelar el consumo energético en un edificio inteligente.',
    'proj.p3.desc':     'Aplicación web para registrar pesos en el gimnasio y seguir la progresión.',

    'cert.label':     'Credenciales',
    'cert.title':     'Certificaciones',
    'cert.c1.title':  'AWS Cloud Practitioner',
    'cert.c2.title':  'AWS AI Practitioner — Early Adopter',
    'cert.c2.badge':  'Early Adopter',
    'cert.c3.title':  'ISE III — C1 Inglés',

    'edu.label':         'Formación',
    'edu.title':         'Educación',
    'edu.thesis.label':  'Trabajo Fin de Grado',
    'edu.thesis.link':   'Ver proyecto',
    'edu.d1.degree':     'Grado en Ingeniería Informática — Computación',
    'edu.d1.uni':        'Universidad de Valladolid · Valladolid, España',
    'edu.d1.thesis':     'Aprendizaje automático basado en computación cuántica. Clasificación de imágenes mediante kernels cuánticos.',
    'edu.d2.degree':     'Grado en Estadística',
    'edu.d2.uni':        'Universidad de Valladolid · Valladolid, España',
    'edu.d2.thesis':     'Creación de un modelo predictivo del consumo energético en un edificio inteligente.',
    'edu.d2.grade':      'Nota: 9,6 / 10',

    'contact.label': 'Contacto',
    'contact.title': 'Contacto',
    'contact.desc':  '¿Interesado en colaborar o tienes alguna pregunta? No dudes en escribirme.',

  },
};

/* ─── Language state & toggle ───────────────────────────── */
let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  currentLang = lang;
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? 'EN · ES' : 'ES · EN';
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

/* ─── Smooth scroll for nav links ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ─── Intersection Observer — fade-in ───────────────────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

