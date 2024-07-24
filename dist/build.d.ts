declare class x {
    constructor(t: any, n: any, i: any);
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
declare function ke(o: any, t: any, n: any): {
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
declare namespace fe {
    function install(o: any): void;
}
declare function ye(o: any): boolean;
export { x as MenuEntry, ke as createMenuEntry, fe as default, ye as setMenuToggleSlot };
