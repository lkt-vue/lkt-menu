declare class H {
    constructor(r: any, a: any, s: any);
    key: any;
    href: any;
    label: any;
    icon: string;
    isOpened: boolean;
    isActive: boolean;
    children: any[];
    setChildren(r: any): this;
    setOnClick(r: any): this;
    onClick: any;
    setIsActiveChecker(r: any): this;
    isActiveChecker: any;
    setIsActive(r?: boolean): this;
    setLabel(r: any): this;
    setIcon(r: any): this;
    doClose(): void;
}
declare function Xe(e: any, r: any, a: any): {
    key: any;
    href: any;
    label: any;
    icon: string;
    isOpened: boolean;
    isActive: boolean;
    children: any[];
    setChildren: (r: any) => H;
    setOnClick: (r: any) => H;
    onClick: any;
    setIsActiveChecker: (r: any) => H;
    isActiveChecker: any;
    setIsActive: (r?: boolean) => H;
    setLabel: (r: any) => H;
    setIcon: (r: any) => H;
    doClose: () => void;
};
declare namespace Qe {
    function install(e: any): void;
}
declare function Ye(e: any): boolean;
export { H as MenuEntry, Xe as createMenuEntry, Qe as default, Ye as setMenuToggleSlot };
