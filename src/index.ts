import {App, Plugin, reactive} from 'vue';

import "../style.css";
import {default as libComponent} from './lib-components/LktMenu.vue';
import {MenuEntry} from "./classes/MenuEntry";

const LktMenu: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-menu') === undefined) app.component('lkt-menu', libComponent);
  }
};

export default LktMenu;


export const createMenuEntry = (key: string, href: string, label: string): MenuEntry => {
  return reactive(new MenuEntry(key, href, label));
}