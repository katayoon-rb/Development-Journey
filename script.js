const container = document.querySelectorAll('#container')
const courses = [
    // {
    //     'Title': '',
    //     'Info': '',
    //     'Links': {
    //         'My Implementation': '',
    //         'Original Course': '',
    //         'The Site': '',
    //         'The Book': ''
    //     },
    //     'End': '',
    //     'Done': false
    // },

    // ONGOING
    // {
    //     'Title': 'Nuxt.js 2 - Vue.js on Steroids',
    //     'Info': 'Build highly engaging Vue JS apps with Nuxt.js.',
    //     'Links': {
    //         'My Implementation': 'https://github.com/katayoon-rb/Nuxtjs-Vue-on-Steroids',
    //         'Original Course': 'https://www.udemy.com/course/nuxtjs-vuejs-on-steroids',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    // {
    //     'Title': 'The Mastering Nuxt 3',
    //     'Info': ' The complete guide to developing and deploying fast, production-ready Nuxt 3 apps.',
    //     'Links': {
    //         'My Implementation': 'https://github.com/katayoon-rb/Mastering-Nuxt',
    //         'Original Course': 'https://masteringnuxt.com/nuxt3',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    {
        'Title': 'CS50w',
        'Info': "CS50's Web Programming with Python and JavaScript",
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50w-Course',
            'Original Course': 'https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript',
        },
        'End': '',
        'Done': false
    },
    {
        'Title': 'CS50ai',
        'Info': 'Artificial intelligence',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50ai-Course',
            'Original Course': 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python',
        },
        'End': '',
        'Done': false
    },
    {
        'Title': 'CSS Battle',
        'Info': 'Daily Targets & Battles - HTML/CSS',
        'Links': {
            'My Implementation': 'https://katycssbattle.netlify.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'End': '',
        'Done': false
    },

    // FINISHED
    {
        'Title': 'The Nuxt 3 Bootcamp - The Complete Developer Guide',
        'Info': 'Build complex & engaging Vue apps with Nuxt3.',
        'Links': {
            'My Implementation': 'https://katynuxtbootcamp.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-nuxt-3-bootcamp-the-complete-developer-guide',
        },
        'End': '25 July, 2024',
        'Done': true
    },
    {
        'Title': 'Python Django - The Practical Guide',
        'Info': 'Learn how to build web applications and websites with Python and the Django framework',
        'Links': {
            'My Implementation': 'https://katydjangoblog.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/python-django-the-practical-guide/',
        },
        'End': '5 July, 2024',
        'Done': true
    },
    {
        'Title': 'Django Bootcamp: Zero to Mastery',
        'Info': 'Learn Django from scratch and from an industry expert by building real-world apps.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Django-Bootcamp',
            'Original Course': 'https://zerotomastery.io/courses/django-bootcamp/',
        },
        'End': '2 July, 2024',
        'Done': true
    },
    {
        'Title': 'HTMX - The Practical Guide',
        'Info': 'Learn how to use the HTMX library to extend HTML and write simple yet powerful code.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/HTMX-Practical-Guide',
            'The Course': 'https://www.udemy.com/course/htmx-the-practical-guide/'
        },
        'End': '26 Jun, 2024',
        'Done': true
    },
    {
        'Title': 'Crash Course: Build a Full-Stack Web App',
        'Info': 'A quick, fun, and hands-on introduction to web development.',
        'Links': {
            'My Implementation': 'https://katyfullstack.vercel.app/',
            'The Course': 'https://www.udemy.com/course/full-stack-crash-course/',
        },
        'End': '25 Jun, 2024',
        'Done': true
    },
        {
        'Title': 'Next.js 14 & React',
        'Info': "Learn NextJS 14 and build fullstack ReactJS + NextJS apps with the App or Pages Router!",
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Nextjs-Complete-Guide',
            'Original Course': 'https://www.udemy.com/course/nextjs-react-the-complete-guide/',
        },
        'End': '24 Jun, 2024',
        'Done': true
    },
    {
        'Title': 'Angular Material In Depth',
        'Info': 'In-depth guided tour to the Angular Material component library (in Angular 17)',
        'Links': {
            'My Implementation': 'https://katyangularmaterial.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/angular-material-course/',
        },
        'End': '6 May, 2024',
        'Done': true
    },
    {
        'Title': 'Angular Core Deep Dive',
        'Info': 'Advanced Features of the Angular Core and Common modules.',
        'Links': {
            'My Implementation': 'https://katyangularunicourses.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/angular-course/',
        },
        'End': '5 May, 2024',
        'Done': true
    },
    {
        'Title': 'Angular – The Complete Guide',
        'Info': 'Master Angular (formerly "Angular 2") and build awesome, reactive web apps!',
        'Links': {
            'My Implementation': 'https://katyangularrecipebook.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-complete-guide-to-angular-2/',
        },
        'End': '4 May, 2024',
        'Done': true
    },
    {
        'Title': 'The Next.js Bootcamp',
        'Info': 'The Complete Developer Guide',
        'Links': {
            'My Implementation': 'https://katyopentablenextjs.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-nextjs-13-bootcamp-the-complete-developer-guide/',
        },
        'End': '27 Apr, 2024',
        'Done': true
    },
    {
        'Title': 'Next JS: The Complete Developer Guide',
        'Info': 'Using App Router, Next Auth, NextUI, and TailwindCSS!',
        'Links': {
            'My Implementation': 'https://katynextjsdevguide.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/the-nextjs-13-bootcamp-the-complete-developer-guide/',
        },
        'End': '24 Apr, 2024',
        'Done': true
    },
    {
        'Title': 'Ultimate Next.js 13 Course',
        'Info': 'Escape the shallow content & dive deep into the hottest tech of 2024',
        'Links': {
            'My Implementation': 'https://katydevflow.vercel.app/',
            'Original Course': 'https://www.jsmastery.pro/ultimate-next13-course',
        },
        'End': '20 Apr, 2024',
        'Done': true
    },
    {
        'Title': 'The Ultimate Java Mastery Series',
        'Info': 'Master Java - the most popular programming language underpinning most apps and websites.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Java-Mastery',
            'Original Course': 'https://codewithmosh.com/p/the-ultimate-java-mastery-series',
        },
        'End': '10 Mar, 2024',
        'Done': true
    },
    {
        'Title': 'Java Bootcamp: Zero to Mastery',
        'Info': 'Learn Java from scratch with an industry expert.',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp-ZeroToMastery',
            'Original Course': 'https://zerotomastery.io/courses/java-bootcamp/',
        },
        'End': '6 Mar, 2024',
        'Done': true
    },
    {
        'Title': 'Software Engineering 101',
        'Info': 'Use Software Engineering to Plan and Build Amazing Software + Learn SCRUM Framework!',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/software-engineering-101',
        },
        'End': '28 Feb, 2024',
        'Done': true
    },
    {
        'Title': ' Java Bootcamp',
        'Info': 'Java fundamentals and syntax, data structures, & ...',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp',
        },
        'End': '25 Feb, 2024',
        'Done': true
    },
    {
        'Title': 'React Testing Library and Jest',
        'Info': 'A complete, all-in-one guide to fully testing your React projects using React Testing Library and Jest.',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/react-testing-library-and-jest',
        },
        'End': '24 Feb, 2024',
        'Done': true
    },
    {
        'Title': 'React Front To Back',
        'Info': 'Learn modern React by building 4 projects.',
        'Links': {
            'My Implementation': 'https://katyreactfronttoback.vercel.app/',
            'Original Course': 'https://www.udemy.com/course/react-front-to-back-2022/',
        },
        'End': '22 Feb, 2024',
        'Done': true
    },
    {
        'Title': 'The Joy of React',
        'Info': 'Build rich, dynamic web apps with React',
        'Links': {
            'My Implementation': 'https://katyjoyofreact.vercel.app/',
            'Original Course': 'https://www.joyofreact.com/',
        },
        'End': '3 Feb, 2024',
        'Done': true
    },
    {
        'Title': 'Design Patterns in JavaScript',
        'Info': 'Discover the modern design patterns in Js',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Design-Patterns-in-Js',
            'Original Course': 'https://www.udemy.com/course/design-patterns-javascript/',
        },
        'End': '15 Jan, 2024',
        'Done': true
    },
    {
        'Title': 'Svelte.js – The Complete Guide',
        'Info': 'Build high-performance web apps with SvelteJS',
        'Links': {
            'My Implementation': 'https://katysveltejs.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/sveltejs-the-complete-guide/',
        },
        'End': '15 Jan, 2024',
        'Done': true
    },
    {
        'Title': 'Tailwind CSS From Scratch',
        'Info': 'Build layouts fast and efficiently using Tailwind',
        'Links': {
            'My Implementation': 'https://katytailwindfromscratch.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/tailwind-from-scratch/',
        },
        'End': '15 Jan, 2024',
        'Done': true
    },
    {
        'Title': 'The Ultimate Design Pattern Series',
        'Info': 'A deep dive into Behavioral Design Patterns',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Ultimate-Design-Pattern',
            'Original Course': 'https://codewithmosh.com/p/design-patterns',
        },
        'End': '10 Jan, 2024',
        'Done': true
    },
    {
        'Title': '70+ JavaScript Challenges',
        'Info': 'Build better foundational skills as a developer',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/70-JavaScript-Challenges',
            'Original Course': 'https://www.udemy.com/course/javascript-challenges/?persist_locale=&locale=en_US',
        },
        'End': '8 Jan, 2024',
        'Done': true
    },
    {
        'Title': 'Vue – The Complete Guide',
        'Info': 'Vue.js is an awesome JS Framework for building Frontend Apps!',
        'Links': {
            'My Implementation': 'https://katyvueguide.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
        },
        'End': '8 Jan, 2024',
        'Done': true
    },
    {
        'Title': 'Clean Code',
        'Info': 'Learn to write readable, understandable and maintainable code',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/writing-clean-code/',
        },
        'End': '3 Jan, 2024',
        'Done': true
    },
    {
        'Title': 'Bootstrap 5 From Scratch',
        'Info': 'Learn and build modern websites using Bootstrap 5',
        'Links': {
            'My Implementation': 'https://katybootstrapfromscratch.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/bootstrap-from-scratch/',
        },
        'End': '30 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'Tailwind CSS - Zero to Hero',
        'Info': 'Building a tailwind css music festival site, custom plugins, components & more!',
        'Links': {
            'My Implementation': 'https://katytailwindzerotohero.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/tailwind-css-zero-to-hero/',
        },
        'End': '20 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'React & TypeScript - Practical Guide',
        'Info': 'Build React apps & use TypeScript to enhance it.',
        'Links': {
            'My Implementation': 'https://katyreacttypescript.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/react-typescript-the-practical-guide/',
        },
        'End': '20 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'The Python Bible',
        'Info': 'Build 11 Projects from Beginner to Pro in Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/The-Python-Bible',
            'Original Course': 'https://www.udemy.com/course/the-python-bible/',
        },
        'End': '19 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'Tailwind CSS',
        'Info': 'Learn Tailwind by building projects.',
        'Links': {
            'My Implementation': 'https://katytailwindcss.netlify.app',
            'Original Course': 'https://www.udemy.com/course/tailwind-css-course/',
        },
        'End': '18 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'JavaScript – The Tricky Parts',
        'Info': 'The most tricky parts of JavaScript.',
        'Links': {
            'Original Course': 'https://pro.academind.com/p/javascript-the-tricky-parts',
        },
        'End': '17 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'TypeScript for Professionals',
        'Info': 'The TypeScript type system',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/typescript-for-professionals/',
        },
        'End': '14 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'Python and Django Full Stack',
        'Info': 'HTML/CSS, JS, Jquery, Bootstrap, Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp',
            'Original Course': 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/',
        },
        'End': '14 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'CS50p Harvard',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50p-Course',
            'Original Course': 'https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python'
        },
        'End': '13 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'Automate Boring Stuff with Python',
        'Info': 'Python',
        'Links': {
            'The Book': 'https://automatetheboringstuff.com/',
            'Original Course': 'https://www.udemy.com/course/automate/',
        },
        'End': '10 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'Understanding TypeScript',
        'Info': 'Core types, Generics, TypeScript + React or Node',
        'Links': {
            'My Implementation': 'https://katyundrestandingts.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/understanding-typescript/',
        },
        'End': '4 Dec, 2023',
        'Done': true
    },
    {
        'Title': '30 Days of JavaScript Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode',
            'The Site': 'https://leetcode.com/studyplan/30-days-of-javascript/'
        },
        'End': '23 Nov, 2023',
        'Done': true
    },
    {
        'Title': 'Advanced CSS and Sass',
        'Info': 'master flexbox, CSS Grid, responsive design, & ...',
        'Links': {
            'My Implementation': 'https://katyadvcssandsass.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/advanced-css-and-sass/',
        },
        'End': '23 Nov, 2023',
        'Done': true
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, HTML/CSS & Flask',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50x-Course',
            'Original Course': 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science'
        },
        'End': '14 Nov, 2023',
        'Done': true
    },
    {
        'Title': '100 Days CSS Challenge',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy100dayscss.netlify.app/',
            'The Site': 'https://100dayscss.com/'
        },
        'End': '8 Nov, 2023',
        'Done': true
    },
    {
        'Title': 'Python with 100 Python Exercises',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
            'Original Course': 'https://www.udemy.com/course/python-video-workbook/',
        },
        'End': '1 Nov, 2023',
        'Done': true
    },
    {
        'Title': 'Frontend Mentor Challenges',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katyfrontendmentorchallenges.netlify.app/',
            'The Site': 'https://shorturl.at/xyzP1'
        },
        'End': '',
        'Done': true
    },
    {
        'Title': 'Learn and Understand NodeJS',
        'Info': 'NodeJS. Learn V8, Express & ...',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/understand-nodejs/'
        },
        'End': '1 Nov, 2023',
        'Done': true
    },
    {
        'Title': 'Programming Skills Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Programming-Skills-leetcode/',
            'The Site': 'https://leetcode.com/studyplan/programming-skills/'
        },
        'End': '1 Nov, 2023',
        'Done': true
    },
    {
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'End': '23 Oct, 2023',
        'Done': true
    },
    {
        'Title': '50 Projects In 50 Days',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katy50projects50days.netlify.app/',
            'Original Course': 'https://www.udemy.com/course/50-projects-50-days/'
        },
        'End': '6 Oct, 2023',
        'Done': true
    },
    {
        'Title': 'The Modern JavaScript Tutorial',
        'Info': 'All 3 Editions - JavaScript',
        'Links': {
            'The Book': 'https://javascript.Info/'
        },
        'End': 'Dec 2022',
        'Done': true
    },
    {
        'Title': 'Frontend Path Scrimba',
        'Info': 'CSS, Js, Responsive Design, UI Design, React',
        'Links': {
            'My Implementation': 'https://katayoon-rb.github.io/Fronend-Path-Scrimba/',
            'Original Course': 'https://scrimba.com/learn/frontend'
        },
        'End': '14 Oct, 2022',
        'Done': true
    }
]


courses.forEach(course => {
    links = course['Links']
    buttons = ``
    Object.keys(links).forEach(x => {
        buttons += `
            <a href=${links[x]} class="w-52 text-white">
                <button class="inline-flex items-center justify-center mt-2 px-4 py-2
                        rounded-md text-sm ring-offset-background transition-colors
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                        bg-myBlue h-10 w-full text-white font-semibold">
                    ${x}</button>
            </a>
        `
    })

    let courseCode = `
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-xl font-semibold">${course['Title']}</h3>
                ${course['Done'] ? `<p class="text-gray-500">Completed: ${course['End']}</p>` : ``}
            </div>
            <div class="p-6 pt-1">
                <p class="text-gray-500 text-justify">${course['Info']}</p>
                <div class="flex flex-col md:flex-row items-center justify-center space-4 md:space-x-4 mt-2">
                    ${buttons}</div>
            </div>
        </div>
    `

    course['Done'] ? container[0].innerHTML += courseCode : container[1].innerHTML += courseCode
})
