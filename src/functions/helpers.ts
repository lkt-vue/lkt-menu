import {MenuEntry} from "lkt-vue-kernel";

export const fetchKeys = (r: string[], entries:MenuEntry[]): string[] => {
    entries.forEach(entry => {
        if (!r.includes(entry.key)) r.push(entry.key);

        if (entry.children.length > 0) fetchKeys(r, entry.children);
    })
    return r;
};