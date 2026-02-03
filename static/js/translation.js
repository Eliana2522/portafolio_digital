const translations = {
    es: {
        web_developer: "Eliana M. | Desarrolladora Web",
        about_me: "Sobre mí",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        hero_title: "Eliana Marmolejos",
        hero_subtitle: "Soy una desarrolladora Fullstack con experiencia en Django y diseño Frontend moderno. Me gusta crear sitios web completos, funcionales y visualmente atractivos, cuidando cada detalle desde la lógica hasta la experiencia del usuario.",
        my_projects: "Mis Proyectos",
        contact_me: "Contáctame",
        about_me_title: "Sobre Mí",
        about_intro: "Desde joven, me ha fascinado descubrir qué hay detrás de la tecnología y cómo funcionan los programas que usamos a diario. Esta pasión me llevó a estudiar Informática Gerencial y a desarrollar, durante más de un año, una carrera técnica en diseño y creación de software.",
        creativity: "Creatividad",
        creativity_text: "Transformo ideas en experiencias digitales que conecten con las personas.",
        elegant_solutions: "Soluciones Elegantes",
        elegant_solutions_text: "Busco soluciones elegantes, prácticas y útiles para cada desafío.",
        continuous_learning: "Aprendizaje Continuo",
        continuous_learning_text: "Exploro cada proyecto como una oportunidad de aprender y crear algo nuevo.",
        projects_title: "Proyectos",
        view_demo: "Ver Demo",
        source_code: "Código Fuente",
        skills_title: "Habilidades",
        database: "Base de Datos",
        contact_title: "Contacto",
        your_name: "Tu Nombre",
        your_email: "Tu Email",
        your_message: "Tu Mensaje",
        send_message: "Enviar Mensaje",
    },
    en: {
        web_developer: "Eliana M. | Web Developer",
        about_me: "About Me",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        hero_title: "Eliana Marmolejos",
        hero_subtitle: "I am a Fullstack developer with experience in Django and modern Frontend design. I like to create complete, functional, and visually attractive websites, taking care of every detail from logic to user experience.",
        my_projects: "My Projects",
        contact_me: "Contact Me",
        about_me_title: "About Me",
        about_intro: "Since I was young, I have been fascinated by discovering what is behind technology and how the programs we use daily work. This passion led me to study Management Informatics and to develop, for more than a year, a technical career in software design and creation.",
        creativity: "Creativity",
        creativity_text: "I transform ideas into digital experiences that connect with people.",
        elegant_solutions: "Elegant Solutions",
        elegant_solutions_text: "I look for elegant, practical, and useful solutions for each challenge.",
        continuous_learning: "Continuous Learning",
        continuous_learning_text: "I explore each project as an opportunity to learn and create something new.",
        projects_title: "Projects",
        view_demo: "View Demo",
        source_code: "Source Code",
        skills_title: "Skills",
        database: "Database",
        contact_title: "Contact",
        your_name: "Your Name",
        your_email: "Your Email",
        your_message: "Your Message",
        send_message: "Send Message",
    },
};

const esBtn = document.getElementById("es-btn");
const enBtn = document.getElementById("en-btn");

const projectsDataElement = document.getElementById('projects-data');
const projects = projectsDataElement ? JSON.parse(projectsDataElement.textContent) : [];

const setLanguage = (lang) => {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    projects.forEach(project => {
        const titleElement = document.querySelector(`[data-key="project_title_${project.id}"]`);
        const descriptionElement = document.querySelector(`[data-key="project_description_${project.id}"]`);

        if (titleElement) {
            if (lang === 'en' && project.title_en) {
                titleElement.textContent = project.title_en;
            } else {
                titleElement.textContent = project.title;
            }
        }

        if (descriptionElement) {
            if (lang === 'en' && project.description_en) {
                descriptionElement.textContent = project.description_en;
            }
            else {
                descriptionElement.textContent = project.description;
            }
        }
    });

    document.documentElement.lang = lang;
    if (lang === 'es') {
        esBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        esBtn.classList.remove('active');
    }
};

esBtn.addEventListener("click", () => setLanguage("es"));
enBtn.addEventListener("click", () => setLanguage("en"));
