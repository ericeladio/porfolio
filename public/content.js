export const ICONS = {
    'react': '/porfolio/react.svg',
    'docker': '/porfolio/docker.svg',
    'mongo': '/porfolio/mongodb.svg',
    'fastapi': '/porfolio/fastapi.svg',
    'astro': '/porfolio/favicon.svg',
    'sqlite': '/porfolio/sqlite.svg',
    'js': '/porfolio/js.svg',
    'svelte': '/porfolio/Svelte.svg',
}
export const INFO = {
    english: {
        nav: {
            home: "Home",
            experience: "Experience",
            projects: "Projects",
            about_me: "About me",
            contact: "Contact",
            lang: "Español",
        },
        titles: {
            experience: "Work Experience",
            projects: "Projects",
            about_me: "About me",
            contact: "Contact",
            code: "Code",
            view: "View",
        },
        direction: {
            home: '/porfolio',
        },
        intro: {
            based: 'Developer, based in Mexico.',
            slogan: '+ 3 years of experience, lover of good practices and clean code.',
        },
        about:{
            img: '/porfolio/Eric-shake.jpeg',

        },
        work_experience: [
            {
                title: 'SEGARMEX',
                date: 'February 2023 - October 2023',
                description: 'In charge of the data and analytics area, using Python, a data workflow was developed along with an application that achieved process automation, reducing task execution time by 70%.',
            },
            {
                title: 'Lisa insurtech',
                date: 'June 2022 - December  2022',
                description: "In charge of training AI for the analysis of documents related to the finance world within the insurance sector, implementing the 'Don't Repeat Yourself' (DRY) model using Regex and Python to create generic pipelines",
            },
            {
                title: 'Graviti',
                date: 'February 2022 - June 2022',
                description: 'In charge of providing support for client and supplier data using Django and PostgreSQL, addressing issues and bug fixes, and structuring the marketplace using Next.js.',
            },
            {
                title: 'Kondosoft',
                date: 'December 2020 - January 2023',
                description: 'Creation and maintenance of websites using Next.js and hybrid mobile applications using React Native',
            },
        ],
        Projects: [
            {
                title: 'Ecommerce Fron-Tend',
                description: 'Project in the process of creation, which will have a frontend based on microservices architecture with different technologies.',
                stack: [ICONS.astro, ICONS.svelte, ICONS.docker],
                imgr: '/porfolio/ecommercefront.jpeg',
                code: 'https://github.com/ericeladio/eccomer-svelte',
                page: 'https://ecommerce-example-nnlr.onrender.com/',
            },
            {
                title: 'Cromostereopsis',
                description: 'Informational page about chromostereopsis. Chromostereopsis is a visual illusion in which the impression of depth is conveyed in two-dimensional color images.',
                stack: [ICONS.astro, ICONS.js],
                imgr: '/porfolio/cromopage.jpeg',
                code: 'https://github.com/ericeladio/cromoestereopsis',
                page: '',

            },
            {
                title: 'Task manager',
                description: 'A small project to practice the knowledge of FastAPI and MongoDB for the backend, React for the frontend, and Docker for deployment in a container.',
                stack: [ICONS.react, ICONS.mongo, ICONS.fastapi, ICONS.docker],
                imgr: '/porfolio/taskpage.jpeg',
                code: 'https://github.com/ericeladio/FARM_CRUD',
                page: '',
            },
            {
                title: 'Ecommerce',
                description: 'A project in the process of creation, very similar to a task manager, but instead of MongoDB, the Tortoise ORM with SQLite is being used, and the frontend is planned to be built with Astro.',
                stack: [ICONS.fastapi, ICONS.sqlite],
                imgr: '/porfolio/ecommercepage.jpeg',
                code: 'https://github.com/ericeladio/ecommerce',
                page: '',
            },

        ]

    },
    spanish: {
        nav: {
            home: "Inicio",
            experience: "Experiencia",
            projects: "Projectos",
            about_me: "Sobre mi",
            contact: "Contacto",
            lang: "English",
        },
        titles: {
            experience: "Eperiencia laboral.",
            projects: "Proyectos.",
            about_me: "Sobre mi.",
            contact: "Contacto.",
            code: "Codigo",
            view: "Vista",
        },
        direction: {
            home: '/porfolio/es',
        },
        intro: {
            based: 'Desarrollador, ubicado en Mexico.',
            slogan: 'más de 3 años de experiencia, amante de las buenas practicas y el código limpio.',
        },
        about:{
            img: '/porfolio/Eric-shake.jpeg',

        },
        work_experience: [
            {
                title: 'SEGARMEX',
                date: 'Febrero 2023 - Octubre  2023',
                description: 'Encargado del área de  datos y analitica, utilizando Python se desarrolló un flujo de datos que de trabajo y una aplicación que logró la automatización de  procesos reduciendo el tiempo de ejecución de las tareas en un 70%.',
            },
            {
                title: 'Lisa insurtech',
                date: 'Junio 2022 - Diciembre  2022',
                description: "Encargado del entrenamiento de la IA  para el análisis de documentos relacionados al mundo de las finanzas por el sector de los seguros, implementando el modelo  don't repeat yourself (DRY) por medio de Regex y Python creando pipeline genéricos.",
            },
            {
                title: 'Graviti',
                date: 'Febrero 2022 - Junio  2022',
                description: 'Encargado de dar soporte a los datos de los clientes y Proveedores por medio de Django y postgresql , arreglar issues y correcciones de bugs, y maquetar el marketplace usando nextjs.',
            },
            {
                title: 'Kondosoft',
                date: 'Diciembre 2020 - Enenero 2023',
                description: 'creación y mantenimiento de páginas web usando NextJS y aplicaciones móviles de manera híbrida usando react native.',
            },
        ],
        Projects: [
            {
                title: 'Ecommerce Fron-Tend',
                description: 'Proyecto en proceso de creación, el cual tendrá un frontend basado en la arquitectura de  micro servicios con diferentes tecnologías.',
                stack: [ICONS.astro, ICONS.svelte, ICONS.docker],
                imgr: '/porfolio/ecommercefront.jpeg',
                code: 'https://github.com/ericeladio/eccomer-svelte',
                page: 'https://ecommerce-example-nnlr.onrender.com/',
            },
            {
                title: 'Cromoestereopsis',
                description: 'Página informativa sobre la cromoestereopsis. Cromostereopsis es una ilusión visual por la cual la impresión de profundidad se transmite en imágenes de color bidimensionales.',
                stack: [ICONS.astro, ICONS.js],
                imgr: '/porfolio/cromopage.jpeg',
                code: 'https://github.com/ericeladio/cromoestereopsis',
                page: '',

            },
            {
                title: 'Administrador de de Tareas',
                description: 'pequeño proyecto para poner en prácticas los conocimientos de fastapi y mongo para el backend , react para el frontend y docker para poder desplegarlo en un contenedor.',
                stack: [ICONS.react, ICONS.mongo, ICONS.fastapi, ICONS.docker],
                imgr: '/porfolio/taskpage.jpeg',
                code: 'https://github.com/ericeladio/FARM_CRUD',
                page: '',
            },
            {
                title: 'Ecommerce',
                description: 'Proyecto en proceso de creación muy similar al de administrador de tareas pero en lugar de mongo se utilizó el ORM  tortoise con sqlite y el frontend está planeado ser construido con astro.',
                stack: [ICONS.fastapi, ICONS.sqlite],
                imgr: '/porfolio/ecommercepage.jpeg',
                code: 'https://github.com/ericeladio/ecommerce',
                page: '',
            },

        ]

    }
}


