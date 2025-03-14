import { App, Component, Plugin } from 'vue';

import '../style.css';
import { default as libComponent } from './lib-components/LktMenu.vue';
import { Settings } from './settings/Settings';

const LktMenu: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-menu') === undefined) app.component('lkt-menu', libComponent);
  }
};

export default LktMenu;

export const setMenuToggleSlot = (component: string|Component) => {
  Settings.toggleSlot = component;
  return true;
}