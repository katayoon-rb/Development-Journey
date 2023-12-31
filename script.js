const container = document.querySelectorAll('#container')
const courses = [
    // {
    //     'Title': '',
    //     'Info': '',
    //     'Links': {
    //         'My Solutions': '',
    //         'The Course': '',
    //         'The Site': '',
    //         'The Book': ''
    //     },
    //     'Date': {
    //         'Start': '',
    //         'End': '...'
    //     },
    //     'Done': false
    // },

    // {
    //     'Title': 'Design Patterns in JavaScript',
    //     'Info': 'Discover the modern design patterns in Js',
    //     'Links': {
    //         // 'My Solutions': '',
    //         'The Course': 'https://www.udemy.com/course/design-patterns-javascript/',
    //     },
    //     'Date': {
    //         'Start': '',
    //         'End': '...'
    //     },
    //     'Done': false
    // },
    // {
    //     'Title': 'The Ultimate Design Pattern Series',
    //     'Info': 'A deep dive into Behavioral Design Patterns',
    //     'Links': {
    //         // 'My Solutions': '',
    //         'The Course': 'https://codewithmosh.com/p/design-patterns',
    //     },
    //     'Date': {
    //         'Start': '',
    //         'End': '...'
    //     },
    //     'Done': false
    // },
    // {
    //     'Title': 'Tailwind CSS From Scratch',
    //     'Info': 'Build layouts fast and efficiently using Tailwind',
    //     'Links': {
    //         // 'My Solutions': '',
    //         'The Course': 'https://www.udemy.com/course/tailwind-from-scratch/',
    //     },
    //     'Date': {
    //         'Start': '',
    //         'End': '...'
    //     },
    //     'Done': false
    // },
    // {
    //     'Title': '70+ JavaScript Challenges',
    //     'Info': 'Build better foundational skills as a developer',
    //     'Links': {
    //         // 'My Solutions': '',
    //         'The Course': 'https://www.udemy.com/course/javascript-challenges/?persist_locale=&locale=en_US',
    //     },
    //     'Date': {
    //         'Start': '',
    //         'End': '...'
    //     },
    //     'Done': false
    // },
    // {
    //     'Title': 'Clean Code',
    //     'Info': 'Learn to write readable, understandable and maintainable code',
    //     'Links': {
    //         // 'My Solutions': '',
    //         'The Course': 'https://www.udemy.com/course/writing-clean-code/',
    //     },
    //     'Date': {
    //         'Start': '',
    //         'End': '...'
    //     },
    //     'Done': false
    // },
    {
        'Title': 'Vue – The Complete Guide',
        'Info': 'Vue.js is an awesome JS Framework for building Frontend Apps!',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Vue-The-Complete-Guide',
            'The Course': 'https://www.udemy.com/course/vuejs-2-the-complete-guide/',
        },
        'Date': {
            'Start': '27 Dec, 2023',
            'End': '...'
        },
        'Done': false
    },
    {
        'Title': 'Bootstrap 5 From Scratch',
        'Info': 'Learn and build modern websites using Bootstrap 5',
        'Links': {
            'My Solutions': 'https://katybootstrapfromscratch.netlify.app/',
            'The Course': 'https://www.udemy.com/course/bootstrap-from-scratch/',
        },
        'Date': {
            'Start': '23 Dec',
            'End': '30 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Tailwind CSS - Zero to Hero',
        'Info': 'Building a tailwind css music festival site, custom plugins, components & more!',
        'Links': {
            'My Solutions': 'https://katytailwindzerotohero.netlify.app/',
            'The Course': 'https://www.udemy.com/course/tailwind-css-zero-to-hero/',
        },
        'Date': {
            'Start': '20 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'The Python Bible',
        'Info': 'Build 11 Projects from Beginner to Pro in Python',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/The-Python-Bible',
            'The Course': 'https://www.udemy.com/course/the-python-bible/',
        },
        'Date': {
            'Start': '18 Dec',
            'End': '19 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'React & TypeScript - Practical Guide',
        'Info': 'Build React apps & use TypeScript to enhance it.',
        'Links': {
            'My Solutions': 'https://katyreacttypescript.netlify.app/',
            'The Course': 'https://www.udemy.com/course/react-typescript-the-practical-guide/',
        },
        'Date': {
            'Start': '17 Dec',
            'End': '20 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Top Interview 150 Leetcode',
        'Info': 'Covers comprehensive interview topics',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Top-Interview-150-Leetcode',
            'The Site': 'https://leetcode.com/studyplan/top-interview-150/',
        },
        'Date': {
            'Start': '15 Dec, 2023',
            'End': '...'
        },
        'Done': false
    },
    {
        'Title': 'Tailwind CSS',
        'Info': 'Learn Tailwind by building projects.',
        'Links': {
            'My Solutions': 'https://katytailwindcss.netlify.app',
            'The Course': 'https://www.udemy.com/course/tailwind-css-course/',
        },
        'Date': {
            'Start': '15 Dec',
            'End': '18 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'JavaScript – The Tricky Parts',
        'Info': 'The most tricky parts of JavaScript.',
        'Links': {
            'The Course': 'https://pro.academind.com/p/javascript-the-tricky-parts',
        },
        'Date': {
            'Start': '14 Dec',
            'End': '17 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'TypeScript for Professionals',
        'Info': 'The TypeScript type system',
        'Links': {
            'The Course': 'https://www.udemy.com/course/typescript-for-professionals/',
        },
        'Date': {
            'Start': '13 Dec',
            'End': '14 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Python and Django Full Stack',
        'Info': 'HTML/CSS, JS, Jquery, Bootstrap, Python',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Python-and-Django-Full-Stack-Bootcamp',
            'The Course': 'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/',
        },
        'Date': {
            'Start': '10 Dec',
            'End': '14 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Automate Boring Stuff with Python',
        'Info': 'Python',
        'Links': {
            'The Book': 'https://automatetheboringstuff.com/',
            'The Course': 'https://www.udemy.com/course/automate/',
        },
        'Date': {
            'Start': '5 Dec',
            'End': '10 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Understanding TypeScript',
        'Info': 'Core types, Generics, TypeScript + React or Node',
        'Links': {
            'My Solutions': 'https://katyundrestandingts.netlify.app/',
            'The Course': 'https://www.udemy.com/course/understanding-typescript/',
        },
        'Date': {
            'Start': '25 Nov',
            'End': '4 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': '30 Days of JavaScript Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/30-Days-of-JavaScript-leetcode',
            'The Site': 'https://leetcode.com/studyplan/30-days-of-javascript/'
        },
        'Date': {
            'Start': '19 Nov',
            'End': '23 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Advanced CSS and Sass',
        'Info': 'master flexbox, CSS Grid, responsive design, & ...',
        'Links': {
            'My Solutions': 'https://katyadvcssandsass.netlify.app/',
            'The Course': 'https://www.udemy.com/course/advanced-css-and-sass/',
        },
        'Date': {
            'Start': '7 Nov',
            'End': '23 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': ' Java Bootcamp',
        'Info': 'Java fundamentals and syntax, data structures, & ...',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Java-Bootcamp',
        },
        'Date': {
            'Start': '3 Nov, 2023',
            'End': '...'
        },
        'Done': false
    },
    {
        'Title': 'Python with 100 Python Exercises',
        'Info': 'Python',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
            'The Course': 'https://www.udemy.com/course/python-video-workbook/',
        },
        'Date': {
            'Start': '24 Oct',
            'End': '1 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            'The Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'Date': {
            'Start': '23 Oct, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Learn and Understand NodeJS',
        'Info': 'NodeJS. Learn V8, Express & ...',
        'Links': {
            'The Course': 'https://www.udemy.com/course/understand-nodejs/'
        },
        'Date': {
            'Start': '13 Sep',
            'End': '1 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': 'Programming Skills Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Programming-Skills-leetcode/',
            'The Site': 'https://leetcode.com/studyplan/programming-skills/'
        },
        'Date': {
            'Start': '12 Oct',
            'End': '1 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': 'CSS Battle',
        'Info': 'Daily Targets & Battles - HTML/CSS',
        'Links': {
            'My Solutions': 'https://katycssbattle.netlify.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'Date': {
            'Start': '9 Oct, 2023',
            'End': '...'
        },
        'Done': false
    },
    {
        'Title': 'Frontend Mentor Challenges',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Solutions': 'https://katyfrontendmentorchallenges.netlify.app/',
            'The Site': 'https://shorturl.at/xyzP1'
        },
        'Date': {
            'Start': '6 Oct, 2023',
            'End': '...'
        },
        'Done': false
    },
    {
        'Title': '100 Days CSS Challenge',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Solutions': 'https://katy100dayscss.netlify.app/',
            'The Site': 'https://100dayscss.com/'
        },
        'Date': {
            'Start': '7 Oct',
            'End': '8 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': '50 Projects In 50 Days',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Solutions': 'https://katy50projects50days.netlify.app/',
            'The Course': 'https://www.udemy.com/course/50-projects-50-days/'
        },
        'Date': {
            'Start': '5 Sep',
            'End': '6 Oct, 2023'
        },
        'Done': true
    },
    {
        'Title': 'CS50ai Harvard',
        'Info': 'Artificial Intelligence',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/CS50ai-Course',
            'The Course': 'https://shorturl.at/dkQZ9'
        },
        'Date': {
            'Start': '29 Sep, 2023',
            'End': '...'
        },
        'Done': false
    },
    {
        'Title': 'CS50p Harvard',
        'Info': 'Python',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/CS50p-Course',
            'The Course': 'https://shorturl.at/ksOSU'
        },
        'Date': {
            'Start': '1 Sep',
            'End': '13 Dec, 2023'
        },
        'Done': true
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, HTML/CSS & Flask',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/CS50x-Course',
            'The Course': 'https://shorturl.at/dnvzA'
        },
        'Date': {
            'Start': '24 Jul',
            'End': '14 Nov, 2023'
        },
        'Done': true
    },
    {
        'Title': 'The Modern JavaScript Tutorial',
        'Info': 'All 3 Editions - JavaScript',
        'Links': {
            'The Book': 'https://javascript.Info/'
        },
        'Date': {
            'Start': 'Through 2022'
        },
        'Done': true
    },
    {
        'Title': 'Frontend Path Scrimba',
        'Info': 'CSS, Js, Responsive Design, UI Design, React',
        'Links': {
            'My Solutions': 'https://katayoon-rb.github.io/Fronend-Path-Scrimba/',
            'The Course': 'https://scrimba.com/learn/frontend'
        },
        'Date': {
            'Start': '19 March',
            'End': '14 Oct, 2022'
        },
        'Done': true
    }
]





courses.forEach(course => {
    links = course['Links']
    buttons = ``
    Object.keys(links).forEach(x => {
        buttons += `
            <a href="${links[x]}">
                <button type="button">${x}</button>
            </a>
        `
    })

    let courseDate = course['Date']
    let duration = courseDate['End'] ? courseDate['Start'] + ' - ' + courseDate['End'] : courseDate['Start']

    let courseCode = `
        <li class="item">
            <div class="BTWrap">
                <div class="bullet"></div>
                <div class="wrap">
                    <span>${course['Title']}</span>
                    <p class="duration">${duration}</p>
                    <p>${course['Info']}</p>
                </div>
            </div>
            <div class="buttons ${Object.keys(links).length == 1 ? `one-btn`: ''}">
                    ${buttons}
            </div>
        </li>
    `

    if (course['Done']) { container[1].innerHTML += courseCode }
    else { container[0].innerHTML += courseCode }
})
