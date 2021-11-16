import makeElement from './../utils/makeElement'
import link from './../components/ui/link'

const index = function() {
    const page = document.createElement('div')
    const todoListLink = link("Enter to Todo App", '/directory')
    const template = `
        <header class="ui-header">
        <h1>Kids Todo App</h1>
        <h2> Esay to organaizde your schedule</h2>
        </header>
    `;
    const pageHeader = makeElement(template);
    pageHeader.append(todoListLink);
    page.append(pageHeader);

    return page
}

export default index