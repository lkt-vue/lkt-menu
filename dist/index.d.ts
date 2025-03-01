import { Component, Plugin } from 'vue';
import "../style.css";
import { MenuEntry } from "lkt-vue-kernel";
declare const LktMenu: Plugin;
export default LktMenu;
export declare const createMenuEntry: (key: string, href: string, label: string) => MenuEntry;
export declare const setMenuToggleSlot: (component: string | Component) => boolean;
export { MenuEntry };
