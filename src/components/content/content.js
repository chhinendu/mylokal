import contentHTML from './content.html';
import './content.scss';
import searchDashboardHTML from './search-dashboard/search-dashboard.html';
import { MDCSelect } from '@material/select';
import { MDCMenu } from '@material/menu';
import { MDCDialog } from '@material/dialog';
import { MDCTextField } from '@material/textfield';
import { MDCSlider } from '@material/slider';
import { MDCSwitch } from '@material/switch';
import listViewHTML from './list-view/list-view.html';
import filterHTML from './filters/filters.html';
import './filters/filters.scss';
import './list-view/list-view.scss';

document.getElementById('content').innerHTML = contentHTML;
document.getElementById('search-dashboard').innerHTML = searchDashboardHTML;
document.getElementById('list-view').innerHTML = listViewHTML;
document.getElementById('filter-wrapper').innerHTML = filterHTML;
document.getElementById('filter-md-wrapper').innerHTML = filterHTML;


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

const dialogReport = new MDCDialog(document.querySelector('.report-dialog'));
document.querySelector('.report-person').addEventListener('click', () => dialogReport.open());

const dialogFilter = new MDCDialog(document.querySelector('#filters'));
document.querySelector('#filter-button').addEventListener('click', () => dialogFilter.open());

new MDCTextField(document.querySelector('#keyword-search .mdc-text-field'));
new MDCTextField(document.querySelector('#person-search .mdc-text-field'));

const slider = new MDCSlider(document.querySelector('.mdc-slider'));
slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
// Known issue - https://github.com/material-components/material-components-web/issues/1017
dialogFilter.listen('MDCDialog:opened', () => slider.layout());

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

new MDCSelect(document.getElementById('status-select'));

new MDCSwitch(document.querySelector('.mdc-switch'));

