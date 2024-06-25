export declare class MenuEntry {
    key: string;
    href: string;
    label: string;
    icon: string;
    onClick: Function | undefined;
    isActiveChecker: Function | undefined;
    isOpened: boolean;
    isActive: boolean;
    parent: MenuEntry | undefined;
    children: MenuEntry[];
    constructor(key: string, href: string, label: string);
    setChildren(children: MenuEntry[]): this;
    setOnClick(fn: Function): this;
    setIsActiveChecker(fn: Function): this;
    setIsActive(enabled?: boolean): this;
    setLabel(str: string): this;
    setIcon(str: string): this;
    doClose(): void;
}
