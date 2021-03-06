import { createMainContent } from './main.js';
import { createScoreContainer } from './score.js';
import { createCommentSection, restoreComments } from './comments.js';


const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};
// const storeCount = (count) => {
//     localStorage.setItem('countVar', count)
// }

window.onload = () => {

    initializePage();
    createMainContent();
    createScoreContainer();
    createCommentSection();

    const storeComments = localStorage.getItem('comments');
    if (storeComments) {
        restoreComments(storeComments)
    }

};
