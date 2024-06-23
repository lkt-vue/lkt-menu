declare function j(n: any, o: any, e: any): {
    key: any;
    href: any;
    text: any;
    isOpened: boolean;
    children: any[];
    setChildren: (o: any) => h;
};
declare namespace b {
    function install(n: any): void;
}
declare class h {
    constructor(o: any, e: any, s: any);
    key: any;
    href: any;
    text: any;
    isOpened: boolean;
    children: any[];
    setChildren(o: any): this;
}
export { j as createMenuEntry, b as default };
