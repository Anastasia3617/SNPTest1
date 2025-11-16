import './sass/main.scss';
import {
    handleWindowScroll,
    handleInputDateClick,
    handleTabToursClick,
} from './js/handlers';

// получаем элементы страницы
export const controls = {};
const selectors = {
    header: { selector: '#header-page' }, // заголовок сайта
    inputDateFrom: { selector: '#input-date-from' }, // поле с датой от в форме
    inputDateTo: { selector: '#input-date-to' }, // поле с датой до в форме
    tabsTours: { selector: '#tabbox-tours .tabbox__tab', isMulti: true }, // табы блока с турами
    tabPanelsTours: { selector: '#tabbox-tours .tabbox__panel', isMulti: true }, // контейнеры табов блока с турами
};
Object.entries(selectors).forEach(([key, { selector, isMulti = false }]) => {
    const nodes = document.querySelectorAll(selector);
    controls[key] = isMulti ? nodes : nodes[0];
});

// добавляем обработчики событий
controls.inputDateTo.addEventListener('click', handleInputDateClick);
controls.inputDateFrom.addEventListener('click', handleInputDateClick);
window.addEventListener('scroll', handleWindowScroll);
controls.tabsTours.forEach(tab =>
    tab.addEventListener('click', handleTabToursClick),
);
