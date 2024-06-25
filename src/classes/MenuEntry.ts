export class MenuEntry {
    key: string = '';
    href: string = '';
    label: string = '';
    icon: string = '';

    onClick: Function|undefined = undefined;
    isActiveChecker: Function|undefined = undefined;

    isOpened: boolean = false;
    isActive: boolean = false;
    parent: MenuEntry|undefined = undefined;

    children: MenuEntry[] = [];

    constructor(key: string, href: string, label: string) {
        this.key = key;
        this.href = href;
        this.label = label;
    }

    setChildren(children: MenuEntry[]) {
        children.forEach(c => c.parent = this);
        this.children = children;
        return this;
    }

    setOnClick(fn: Function) {
        this.onClick = fn;
        return this;
    }

    setIsActiveChecker(fn: Function) {
        this.isActiveChecker = fn;
        return this;
    }

    setIsActive(enabled: boolean = true) {
        this.isActive = enabled;
        return this;
    }

    setLabel(str: string) {
        this.label = str;
        return this;
    }

    setIcon(str: string) {
        this.icon = str;
        return this;
    }

    doClose() {
        // if (this.parent) this.parent.doClose();
        this.isOpened = false;
    }
}