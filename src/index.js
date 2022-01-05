import styles from './main.scss';

import { showFullDescription} from './modal.js';

Array.from(document.querySelectorAll('.show-more')).forEach(project => {
    project.onclick = (event) => {
        event.preventDefault();
        showFullDescription(project.hash);
    }
})