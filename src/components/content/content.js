import contentHTML from './content.html';
import './content.less';
import searchDashboardHTML from './search-dashboard/search-dashboard.html';
import listViewHTML from './list-view/list-view.html';
import filterHTML from './filters/filters.html';
import './filters/filters.less';
import './list-view/list-view.less';

document.getElementById('content').innerHTML = contentHTML;
document.getElementById('search-dashboard').innerHTML = searchDashboardHTML;
document.getElementById('list-view').innerHTML = listViewHTML;
document.getElementById('filter-wrapper').innerHTML = filterHTML;
document.getElementById('filter-md-wrapper').innerHTML = filterHTML;


document.querySelector('#action-sm .map-button').addEventListener('click', (event) => {
  event.currentTarget.style.display = 'none';
  document.querySelector('#action-sm .list-button').style.display = 'block';
  document.getElementById('person-list-view').style.display = 'none';
  document.getElementById('person-map-view').style.display = 'block';
});
document.querySelector('#action-sm .list-button').addEventListener('click', () => {
  event.currentTarget.style.display = 'none';
  document.querySelector('#action-sm .map-button').style.display = 'block';
  document.getElementById('person-list-view').style.display = 'block';
  document.getElementById('person-map-view').style.display = 'none';
});

document.querySelector('#action-md .map-button').addEventListener('click', (event) => {
  document.querySelector('#action-md .map-button').classList.add('active');
  document.querySelector('#action-md .list-button').classList.remove('active');
  document.querySelector('#action-md .table-button').classList.remove('active');
  document.getElementById('person-list-view').style.display = 'none';
  document.getElementById('person-table-view').style.display = 'none';
  document.getElementById('person-map-view').style.display = 'block';
});
document.querySelector('#action-md .list-button').addEventListener('click', () => {
  document.querySelector('#action-md .map-button').classList.remove('active');
  document.querySelector('#action-md .list-button').classList.add('active');
  document.querySelector('#action-md .table-button').classList.remove('active');
  document.getElementById('person-list-view').style.display = 'block';
  document.getElementById('person-table-view').style.display = 'none';
  document.getElementById('person-map-view').style.display = 'none';
});
document.querySelector('#action-md .table-button').addEventListener('click', () => {
  document.querySelector('#action-md .map-button').classList.remove('active');
  document.querySelector('#action-md .list-button').classList.remove('active');
  document.querySelector('#action-md .table-button').classList.add('active');
  document.getElementById('person-list-view').style.display = 'none';
  document.getElementById('person-table-view').style.display = 'block';
  document.getElementById('person-map-view').style.display = 'none';
});

const select = new mdc.select.MDCSelect(document.getElementById('location-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

const menu = new mdc.menu.MDCMenu(document.querySelector('#status-menu .mdc-menu'));

document.querySelector('#status-menu .mdc-icon-button').addEventListener('click', () => menu.open = true);

const dialog = new mdc.dialog.MDCDialog(document.querySelector('.actions .mdc-dialog'));
document.querySelector('.actions .fa-share-alt').addEventListener('click', () => dialog.open());

const dialogReport = new mdc.dialog.MDCDialog(document.querySelector('.report-dialog'));
document.querySelector('.report-person').addEventListener('click', () => dialogReport.open());

const dialogFilter = new mdc.dialog.MDCDialog(document.querySelector('#filters'));
document.querySelector('.filter-button').addEventListener('click', () => dialogFilter.open());

new mdc.textField.MDCTextField(document.querySelector('#keyword-search .mdc-text-field'));
new mdc.textField.MDCTextField(document.querySelector('#person-search .mdc-text-field'));

const slider = new mdc.slider.MDCSlider(document.querySelector('.mdc-slider'));
slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
// Known issue - https://github.com/material-components/material-components-web/issues/1017
dialogFilter.listen('MDCDialog:opened', () => slider.layout());

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

new mdc.select.MDCSelect(document.getElementById('status-select'));

new mdc.switchControl.MDCSwitch(document.querySelector('.mdc-switch'));

