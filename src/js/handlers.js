import { controls } from '../index';

// обработчик прокрутки страницы
export function handleWindowScroll() {
    // фиксация шапки
    if (window.scrollY > 450) {
        controls.header.classList.add('header_fixed');
    } else {
        controls.header.classList.remove('header_fixed');
    }
}

// обработчик клика по полю с датой
export function handleInputDateClick(event) {
    event.target.showPicker?.();
}

// обработчик клика по табу в блоке с турами
export function handleTabToursClick(event) {
    const tab = event.target || null;
    const tabSelectedId =
        tab && tab.hasAttribute('for') ? tab.getAttribute('for') : null;
    if (tabSelectedId) {
        controls.tabPanelsTours.forEach(tabPanel => {
            const tabId = tabPanel.getAttribute('tab');
            if (tabId === tabSelectedId) {
                tabPanel.classList.add('tabbox__panel_selected');
            } else {
                tabPanel.classList.remove('tabbox__panel_selected');
            }
        });
    }
}
