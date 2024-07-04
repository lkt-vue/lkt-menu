declare class D {
    constructor(t: any, s: any, d: any);
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
    setChildren: (t: any) => D;
    setOnClick: (t: any) => D;
    onClick: any;
    setIsActiveChecker: (t: any) => D;
    isActiveChecker: any;
    setIsActive: (t?: boolean) => D;
    setLabel: (t: any) => D;
    setIcon: (t: any) => D;
    doClose: () => void;
};
declare namespace ve {
    function install(n: any): void;
}
declare function me(n: any): boolean;
export { D as MenuEntry, he as createMenuEntry, ve as default, me as setMenuToggleSlot };
