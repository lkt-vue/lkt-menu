import { MenuEntry as be } from "lkt-vue-kernel";
declare function Ve(u: any, m: any, o: any): {
    key?: string | undefined;
    href?: string | undefined;
    label?: string | undefined;
    icon?: string | undefined;
    isActiveChecker?: Function | undefined;
    isOpened?: boolean | undefined;
    isActive?: boolean | undefined;
    parent?: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: /*elided*/ any | undefined;
        children?: /*elided*/ any[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
    } | undefined;
    children?: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: /*elided*/ any | undefined;
        children?: /*elided*/ any[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
    }[] | undefined;
    events?: {
        click?: Function | undefined;
    } | undefined;
    onClick?: Function | undefined;
    setChildren: (children: z[]) => z;
    setOnClick: (fn: Function) => z;
    setIsActiveChecker: (fn: Function) => z;
    setIsActive: (enabled?: boolean) => z;
    setLabel: (str: string) => z;
    setIcon: (str: string) => z;
    doClose: () => void;
    feed: (data?: import("lkt-vue-kernel").LktObject, target?: z | undefined) => void;
    assignProp: (key: string, value: any) => void;
};
declare namespace _e {
    function install(u: any): void;
}
declare function Ce(u: any): boolean;
import { MenuEntry as z } from "lkt-vue-kernel";
export { be as MenuEntry, Ve as createMenuEntry, _e as default, Ce as setMenuToggleSlot };
