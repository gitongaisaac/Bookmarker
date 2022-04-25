/*
================================================================================================================================
Site Constructor
================================================================================================================================
*/
class Site {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

/*
================================================================================================================================
UI
================================================================================================================================
*/
class UI {
    static displayBookmarks() {
        const storedBookmarks = [
            {
                name: 'Twitter',
                url: 'https://twitter.com/home'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/'
            },
            {
                name: 'TikTok',
                url: 'https://www.tiktok.com/en/'
            }
        ];

        const bookmarks = storedBookmarks;
        bookmarks.forEach((bookmark) => UI.addBookmark(bookmark));

    }

    static addBookmark(bookmark) {
        const container = document.querySelector('.bookmark-bar');
        container.innerHTML = `<h3 class="top">${bookmark.name}</h3>`;

        const visit = document.createElement('a');
            visit.setAttribute('href', `${bookmark.url}`)
            visit.className ='btn btn-xthin btn-primary';
            visit.textContent = 'Visit Site';

        const removeSite = document.createElement('button');
            removeSite.className = 'btn btn-thin btn-error';
            removeSite.textContent = 'Delete';

        container.appendChild(visit);
        container.appendChild(removeSite);
    }
}

/*
================================================================================================================================
Event Display Book
================================================================================================================================
*/
document.addEventListener('DOMContentLoaded', UI.displayBookmarks());


/*
================================================================================================================================
Event Get Bookmark
================================================================================================================================
*/
const form = document.querySelector('.form-3');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const url = document.querySelector('#url').value;

    const bookmark = new Site(name, url);
    UI.addBookmark(bookmark)
});




// /*
// ================================================================================================================================
// Site Constructor
// ================================================================================================================================
// */
// class Site {
//     constructor(site, url) {
//         this.site = site;
//         this.url = url;
//     }
// }


// /*
// ================================================================================================================================
// User Interface class
// ================================================================================================================================
// */
// class UI {
//     static displayBookmarks() {
//         const bookmarks = Store.getBookmark();
//         bookmarks.forEach((bookmark) => UI.addSite(bookmark));
//     }

//     static addSite(bookmark) {
//         const container = document.querySelector('.bookmark-bar');
//             container.innerHTML = `<h3 class="top">${bookmark.site}</h3>`;

//         const visit = document.createElement('a');
//             visit.setAttribute('href', `${bookmark.url}`);
//             visit.className = 'btn btn-xthin btn-primary';
//             visit.textContent = 'Visit Site';

//         const deleteBtn = document.createElement('button')
//             deleteBtn.className = 'btn btn-thin btn-error';
//             deleteBtn.textContent = 'Delete';

//         container.appendChild(visit);
//         container.appendChild(deleteBtn);
//     }
// }


// /*
// ================================================================================================================================
// Store class: Handles Storage
// ================================================================================================================================
// */
// class Store {
//     static getBookmark() {
//         let bookmarks;
//         if(localStorage.getItem(('bookmarks') === null)) {
//             bookmarks = [];
//         }
//         else {
//             bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//         }
//         return bookmarks;

//     }

//     static addBookmark(bookmark) {
//         const bookmarks = Store.getBookmark();
//         bookmarks.push('bookmark');
//         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//     }

//     static removeBookmark() {

//     }
// }


// /*
// ================================================================================================================================
// Event Display Bookmarks
// ================================================================================================================================
// */
// // const submit = document.querySelector('.form-3')
// // submit.addEventListener('submit', UI.displayBookmarks());
// document.addEventListener('DOMContentLoaded', UI.displayBookmarks());



// /*
// ================================================================================================================================
// Event get site
// ================================================================================================================================
// */
// const form = document.querySelector('.form-3');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const site = document.querySelector('#site').value;
//     const url = document.querySelector('#url').value;

//     const bookmark = new Site(site, url);
//     UI.addSite(bookmark);
// });


// /*
// ================================================================================================================================
// Storage
// ================================================================================================================================
//  */
    


// /*
// ================================================================================================================================
// Event Submit
// ================================================================================================================================
//  */





