export class MenuEntry {
    key: string = '';
    href: string = '';
    text: string = '';

    isOpened: boolean = false;

    children: MenuEntry[] = [];

    constructor(key: string, href: string, text: string) {
        this.key = key;
        this.href = href;
        this.text = text;
    }

    setChildren(children: MenuEntry[]) {
        this.children = children;
        return this;
    }
}