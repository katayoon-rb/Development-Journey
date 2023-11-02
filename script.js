const container = document.getElementById('container')

const courses = [
    {
        'Title': 'Frontend Path Scrimba',
        'Info': 'CSS, Js, Responsive Design Code review, UI Design, React',
        'Links': {
            'My Solutions': 'https://katayoon-rb.github.io/Fronend-Path-Scrimba/',
            'The Course': 'https://scrimba.com/learn/frontend'
        },
        'Done': true
    },
    {
        'Title': 'The Modern JavaScript Tutorial By Ilya Kantor',
        'Info': 'All 3 Editions - JavaScript',
        'Links': {
            'The Book': 'https://javascript.Info/'
        },
        'Done': true
    },
    {
        'Title': 'CS50x Harvard',
        'Info': 'Scratch, C, Python, SQL, Data Structures, HTML/CSS & Flask',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/CS50x-Course',
            'The Course': 'https://shorturl.at/dnvzA'
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
        'Done': false
    },
    {
        'Title': 'CS50ai Harvard',
        'Info': 'Artificial Intelligence',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/CS50ai-Course',
            'The Course': 'https://shorturl.at/dkQZ9'
        },
        'Done': false
    },
    {
        'Title': '50 Projects In 50 Days',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Solutions': 'https://katy50projects50days.netlify.app/',
            'The Course': 'https://www.udemy.com/course/50-projects-50-days/'
        },
        'Done': true
    },
    {
        'Title': '100 Days CSS Challenge',
        'Info': 'HTML, CSS & Js',
        'Links': {
            'My Solutions': 'https://katy100dayscss.netlify.app/',
            'The Site': 'https://100dayscss.com/'
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
        'Done': false
    },
    {
        'Title': 'CSS Battle',
        'Info': 'HTML & CSS',
        'Links': {
            'My Solutions': 'https://katycssbattle.netlify.app/',
            'The Site': 'https://cssbattle.dev/'
        },
        'Done': false
    },
    {
        'Title': 'Programming Skills Leetcode',
        'Info': 'JavaScript',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Programming-Skills-leetcode/',
            'The Site': 'https://leetcode.com/studyplan/programming-skills/'
        },
        'Done': true
    },
    {
        'Title': 'Learn and Understand NodeJS',
        'Info': 'NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts.',
        'Links': {
            'The Course': 'https://www.udemy.com/course/understand-nodejs/'
        },
        'Done': true
    },
    {
        'Title': 'Complete Flexbox Course',
        'Info': 'Master CSS3 Flexbox for Good',
        'Links': {
            // 'My Solutions': '',
            'The Course': 'https://www.udemy.com/course/flexbox-tutorial/',
        },
        'Done': true
    },
    {
        'Title': 'Practice Python with 100 Python Exercises',
        'Info': 'Python',
        'Links': {
            'My Solutions': 'https://github.com/katayoon-rb/Practice-Python-with-100-Exercises',
            'The Course': 'https://www.udemy.com/course/python-video-workbook/',
        },
        'Done': true
    },
    {
        'Title': 'Understanding TypeScript',
        'Info': 'Core types, Generics, TypeScript + React or Node',
        'Links': {
            // 'My Solutions': '',
            'The Course': 'https://www.udemy.com/course/understanding-typescript/',
        },
        'Done': false
    },

    
    // {
    //     'Title': '',
    //     'Info': '',
    //     'Links': {
    //         'My Solutions': '',
    //         'The Course': '',
    //         'The Site': '',
    //         'The Book': ''
    //     },
    //     'Done': false
    // },
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

    container.innerHTML += `
        <li class="item ${course['Done'] ? `done`: ''}">
            <div class="bullet"></div>
            <div class="wrap">
                <span>${course['Title']}</span>
                <p>${course['Info']}</p>
            </div>
            <div class="buttons ${Object.keys(links).length == 1 ? `one-btn`: ''}">
                    ${buttons}
            </div>
        </li>
    `
})


const items = document.querySelectorAll('.item')
items[items.length - 1].style.border = 'none'
