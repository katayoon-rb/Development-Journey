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

    // {
    //     'Title': 'Design Patterns in JavaScript',
    //     'Info': 'Discover the modern design patterns in Js',
    //     'Links': {
    //         // 'My Implementation': '',
    //         'Original Course': 'https://www.udemy.com/course/design-patterns-javascript/',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    // {
    //     'Title': 'The Ultimate Design Pattern Series',
    //     'Info': 'A deep dive into Behavioral Design Patterns',
    //     'Links': {
    //         // 'My Implementation': '',
    //         'Original Course': 'https://codewithmosh.com/p/design-patterns',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    // {
    //     'Title': 'Tailwind CSS From Scratch',
    //     'Info': 'Build layouts fast and efficiently using Tailwind',
    //     'Links': {
    //         // 'My Implementation': '',
    //         'Original Course': 'https://www.udemy.com/course/tailwind-from-scratch/',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    // {
    //     'Title': '70+ JavaScript Challenges',
    //     'Info': 'Build better foundational skills as a developer',
    //     'Links': {
    //         // 'My Implementation': '',
    //         'Original Course': 'https://www.udemy.com/course/javascript-challenges/?persist_locale=&locale=en_US',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    // {
    //     'Title': 'Clean Code',
    //     'Info': 'Learn to write readable, understandable and maintainable code',
    //     'Links': {
    //         // 'My Implementation': '',
    //         'Original Course': 'https://www.udemy.com/course/writing-clean-code/',
    //     },
    //     'End': '',
    //     'Done': false
    // },
    {
        'Title': 'Vue – The Complete Guide',
        'Info': 'Vue.js is an awesome JS Framework for building Frontend Apps!',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Vue-The-Complete-Guide',
            'Original Course': 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
        },
        'End': '',
        'Done': false
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
        'Title': 'Top Interview 150 Leetcode',
        'Info': 'Covers comprehensive interview topics',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Top-Interview-150-Leetcode',
            'The Site': 'https://leetcode.com/studyplan/top-interview-150/',
        },
        'End': '',
        'Done': false
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
        'Title': ' Java Bootcamp',
        'Info': 'Java fundamentals and syntax, data structures, & ...',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/Java-Bootcamp',
        },
        'End': '',
        'Done': false
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
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            'Original Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'End': '23 Oct, 2023',
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
        'Title': 'CSS Battle',
        'Info': 'Daily Targets & Battles - HTML/CSS',
        'Links': {
            'My Implementation': 'https://katycssbattle.netlify.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'End': '',
        'Done': false
    },
    {
        'Title': 'Frontend Mentor Challenges',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Implementation': 'https://katyfrontendmentorchallenges.netlify.app/',
            'The Site': 'https://shorturl.at/xyzP1'
        },
        'End': '',
        'Done': false
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
        'Title': 'CS50p Harvard',
        'Info': 'Python',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50p-Course',
            'Original Course': 'https://shorturl.at/ksOSU'
        },
        'End': '13 Dec, 2023',
        'Done': true
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, HTML/CSS & Flask',
        'Links': {
            'My Implementation': 'https://github.com/katayoon-rb/CS50x-Course',
            'Original Course': 'https://shorturl.at/dnvzA'
        },
        'End': '14 Nov, 2023',
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
            <a href=${links[x]} class="w-52">
                <button class="inline-flex items-center justify-center mt-2 px-4 py-2
                        rounded-md text-sm font-medium ring-offset-background transition-colors
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                        bg-cyan-100 h-10 w-full">
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
