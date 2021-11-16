import makeElement from './../../utils/makeElement'
const directory = function (){
    const template = `
    <aside id="directory" class="directory">
        <header>
            <h1>Kids Todo App</h1>
            <h2>Easy to organize your schedule</h2>
        </header>
        <div class="main-content">
            <ul id="todos" class="todos">
            
            </ul>
            
            <div class="add-item">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus-square fa-w-14 fa-7x">
                <path  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" class=""></path>
            </svg>
            </div>
        </div>
        <footer>

        </footer>
    </aside>
    `

    return makeElement(template)
}

export default directory