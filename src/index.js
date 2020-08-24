import styles from './main.scss';

import { showFullDescription} from './modal.js';

Array.from(document.querySelectorAll('.show-more')).forEach(project => {
    project.onclick = (event) => {
        event.preventDefault();
        showFullDescription(project.hash);
    }
})


// Landing
import hi_white from './assets/hi_white.svg';

// En ruta
import en_ruta_marker_base_bicicas_negatiu from './assets/projectes/en_ruta/marker_base_bicicas_negatiu.png';
import en_ruta_check_bock_unchecked from './assets/projectes/en_ruta/check_bock_unchecked.png';
import en_ruta_logo from './assets/projectes/en_ruta/logo.png';
import en_ruta_check_bock_checked from './assets/projectes/en_ruta/check_bock_checked.png';
import en_ruta_marker_base_negatiu from './assets/projectes/en_ruta/marker_base_negatiu.png';

// CMS BandaUJI
import bandauji_landingpage from './assets/projectes/bandauji/bandauji-landingpage.png';
import bandauji_musics from './assets/projectes/bandauji/bandauji-musics.png';
import bandauji_newsletter from './assets/projectes/bandauji/bandauji-newsletter.png';

// Hackathon 19
import hackathon_foto_equip from './assets/projectes/hackathon/foto_equip.jpg';

// p5
import p5_arbre from './assets/projectes/p5/arbre.png';
import p5_linees from './assets/projectes/p5/linees.png';
import p5_logo from './assets/projectes/p5/logo.svg';
import p5_print10 from './assets/projectes/p5/print10.png';

// Stickers
import stickers_angel from './assets/projectes/stickers/angel.png';
import stickers_eriso_bass from './assets/projectes/stickers/eriso-bass.png';
import stickers_eriso_clarinet from './assets/projectes/stickers/eriso-clarinet.png';
import stickers_eriso_hi from './assets/projectes/stickers/eriso-hi.png';

// css dices

import d20 from './assets/projectes/daus/d20.png';
import d12 from './assets/projectes/daus/d12.png';
import d8 from './assets/projectes/daus/d8.png';
import d6 from './assets/projectes/daus/d6.png';
import d4 from './assets/projectes/daus/d4.png';