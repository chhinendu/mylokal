import contentHTML from './content.html';
import './content.scss';
import searchDashboardHTML from './search-dashboard/search-dashboard.html';
import {MDCSelect} from '@material/select';
import {MDCMenu} from '@material/menu';
import listViewHTML from './list-view/list-view.html';
import './list-view/list-view.scss';

document.getElementById('content').innerHTML = contentHTML;
document.getElementById('search-dashboard').innerHTML = searchDashboardHTML;
document.getElementById('list-view').innerHTML = listViewHTML;



const select = new MDCSelect(document.getElementById('location-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

const menu = new MDCMenu(document.querySelector('#status-menu .mdc-menu'));

document.querySelector('#status-menu .mdc-icon-button').addEventListener('click', () => menu.open = true);