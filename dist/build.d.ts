declare class T {
    constructor(t: any, s: any, v: any);
    key: any;
    href: any;
    label: any;
    icon: string;
    isOpened: boolean;
    isActive: boolean;
    children: any[];
    setChildren(t: any): this;
    setOnClick(t: any): this;
    onClick: any;
    setIsActiveChecker(t: any): this;
    isActiveChecker: any;
    setIsActive(t?: boolean): this;
    setLabel(t: any): this;
    setIcon(t: any): this;
    doClose(): void;
}
declare function he(n: any, t: any, s: any): {
    key: any;
    href: any;
    label: any;
    icon: string;
    isOpened: boolean;
    isActive: boolean;
    children: any[];
    setChildren: (t: any) => T;
    setOnClick: (t: any) => T;
    onClick: any;
    setIsActiveChecker: (t: any) => T;
    isActiveChecker: any;
    setIsActive: (t?: boolean) => T;
    setLabel: (t: any) => T;
    setIcon: (t: any) => T;
    doClose: () => void;
};
declare namespace ve {
    function install(n: any): void;
}
declare function me(n: any): boolean;
export { T as MenuEntry, he as createMenuEntry, ve as default, me as setMenuToggleSlot };
