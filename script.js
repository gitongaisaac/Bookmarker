/*
================================================================================================================================
Site Constructor
================================================================================================================================
*/
class Bookmark {
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
                name: 'GitHub',
                url: 'https://github.com/isaac-gie/Book-List'
            }
        ];
        // const bookmarks = Store.getBookmark();
        const bookmarks = storedBookmarks;
        bookmarks.forEach((bookmark) => UI.addBookmark(bookmark));
    }

    static addBookmark(bookmark) {
        const container = document.querySelector('.site-container');
        const div = document.createElement('div');
        div.className = 'bookmark-bar flex my-1 py-1';
        div.innerHTML = `
            <h3 class="top">${bookmark.name}</h3>
            <a href="${bookmark.url}" class="btn btn-xthin btn-secondary">Visit Site</a>
            <button class="btn btn-thin btn-error delete">Delete</button>
            `
        container.appendChild(div);
        
    }

    static alerts(message, type) {
        const form = document.querySelector('.form-3');
        const detail = document.querySelector('.detail');
        const div = document.createElement('div');
        div.className = 'alert-div';
        div.innerHTML = `<p class="alert alert-${type}">${message}</p>`;

        form.insertBefore(div, detail);
        setTimeout(() => document.querySelector('.alert').remove(), (2500));
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#url').value = '';
    }

    static deleteBookmark(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.remove();
        }
    }
}



/*
================================================================================================================================
Storage
================================================================================================================================
 */
class Store {
    static getBookmark() {
        let bookmarks;
        if(localStorage.getItem('bookmarks') === null) {
            bookmarks = [];
        }
        else {
            bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        }
        return bookmarks
    }

    static addBookmark(bookmark) {
        const bookmarks = Store.getBookmark();
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    static deleteBookmark() {

    }
}



/*
================================================================================================================================
Event Display Book
================================================================================================================================
*/
document.addEventListener('DOMContentLoaded', UI.displayBookmarks);



/*
================================================================================================================================
Event: Get Bookmark
================================================================================================================================
*/
const form = document.querySelector('.form-3');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const url = document.querySelector('#url').value;

    const bookmark = new Bookmark(name, url);

    if(name === '' || url === '') {
        UI.alerts('Please fill in all the fields', 'error');
    }
    else{
        UI.addBookmark(bookmark)
        UI.clearFields();
        UI.alerts('Bookmark Added', 'success')
    }
    
});


/*
================================================================================================================================
Event: Delete Book
================================================================================================================================
*/
const sites = document.querySelector('.sites');
sites.addEventListener('click', (e) => {
    e.preventDefault();
    UI.deleteBookmark(e.target);
    UI.alerts('Bookmark Deleted', 'success');
});

