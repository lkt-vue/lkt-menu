export declare class MenuEntry {
    key: string;
    href: string;
    text: string;
    isOpened: boolean;
    children: MenuEntry[];
    constructor(key: string, href: string, text: string);
    setChildren(children: MenuEntry[]): this;
}
