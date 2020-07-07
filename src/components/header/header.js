import './header.scss';
import headerHTML from './header.html';
import {MDCDialog} from '@material/dialog';
import {MDCTextField} from '@material/textfield';  

document.getElementById("header").innerHTML = headerHTML;

const icon = new MDCTextField(document.querySelector('.mdc-text-field'));

const dialog = new MDCDialog(document.querySelector('#header-user .mdc-dialog'));
document.querySelector('#header-user .fa-search').addEventListener('click', () => dialog.open());
document.querySelector('#header-user .md-close').addEventListener('click', () => dialog.close());