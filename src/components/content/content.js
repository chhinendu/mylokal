import contentHTML from './content.html';
import './content.scss';
import searchDashboardHTML from './search-dashboard/search-dashboard.html';
import {MDCSelect} from '@material/select';
import {MDCMenu} from '@material/menu';
import {MDCDialog} from '@material/dialog';
import listViewHTML from './list-view/list-view.html';
import './list-view/list-view.scss';

document.getElementById('content').innerHTML = contentHTML;
document.getElementById('search-dashboard').innerHTML = searchDashboardHTML;
document.getElementById('list-view').innerHTML = listViewHTML;

document.getElementById('map-button').addEventListener('click', (event) => {
  event.currentTarget.style.display = 'none';
  document.getElementById('list-button').style.display = 'block';
  document.getElementById('person-list-view').style.display = 'none';
  document.getElementById('person-map-view').style.display = 'block';
});
document.getElementById('list-button').addEventListener('click', () => {
  event.currentTarget.style.display = 'none';
  document.getElementById('map-button').style.display = 'block';
  document.getElementById('person-list-view').style.display = 'block';
  document.getElementById('person-map-view').style.display = 'none';
});

const select = new MDCSelect(document.getElementById('location-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

const menu = new MDCMenu(document.querySelector('#status-menu .mdc-menu'));

document.querySelector('#status-menu .mdc-icon-button').addEventListener('click', () => menu.open = true);

const dialog = new MDCDialog(document.querySelector('.actions .mdc-dialog'));
document.querySelector('.actions .fa-share-alt').addEventListener('click', () => dialog.open());