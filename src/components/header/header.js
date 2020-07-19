import './header.less';
import headerHTML from './header.html';

document.getElementById("header").innerHTML = headerHTML;

new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));

const dialog = new mdc.dialog.MDCDialog(document.querySelector('#header-user .mdc-dialog'));
document.querySelector('#header-user .fa-search').addEventListener('click', () => dialog.open());
document.querySelector('#header-user .md-close').addEventListener('click', () => dialog.close());