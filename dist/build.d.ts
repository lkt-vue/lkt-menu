declare function se(n: any, t: any, l: any): {
    key: any;
    href: any;
    label: any;
    icon: string;
    isOpened: boolean;
    isActive: boolean;
    children: any[];
    setChildren: (t: any) => K;
    setOnClick: (t: any) => K;
    onClick: any;
    setIsActiveChecker: (t: any) => K;
    isActiveChecker: any;
    setIsActive: (t?: boolean) => K;
    setLabel: (t: any) => K;
    doClose: () => void;
};
declare namespace ne {
    function install(n: any): void;
}
declare class K {
    constructor(t: any, l: any, c: any);
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
    doClose(): void;
}
export { se as createMenuEntry, ne as default };
