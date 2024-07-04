declare class x {
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
    setChildren: (t: any) => x;
    setOnClick: (t: any) => x;
    onClick: any;
    setIsActiveChecker: (t: any) => x;
    isActiveChecker: any;
    setIsActive: (t?: boolean) => x;
    setLabel: (t: any) => x;
    setIcon: (t: any) => x;
    doClose: () => void;
};
declare namespace ve {
    function install(n: any): void;
}
declare function me(n: any): boolean;
export { x as MenuEntry, he as createMenuEntry, ve as default, me as setMenuToggleSlot };
