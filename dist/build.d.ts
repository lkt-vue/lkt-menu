declare class W {
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
declare function me(n: any, t: any, s: any): {
    key: any;
    href: any;
    label: any;
    icon: string;
    isOpened: boolean;
    isActive: boolean;
    children: any[];
    setChildren: (t: any) => W;
    setOnClick: (t: any) => W;
    onClick: any;
    setIsActiveChecker: (t: any) => W;
    isActiveChecker: any;
    setIsActive: (t?: boolean) => W;
    setLabel: (t: any) => W;
    setIcon: (t: any) => W;
    doClose: () => void;
};
declare namespace he {
    function install(n: any): void;
}
declare function pe(n: any): boolean;
export { W as MenuEntry, me as createMenuEntry, he as default, pe as setMenuToggleSlot };
