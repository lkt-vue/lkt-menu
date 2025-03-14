import { MenuEntryConfig } from 'lkt-vue-kernel';

export const fetchKeys = (r: string[], entries:MenuEntryConfig[]): string[] => {
    entries.forEach(entry => {
        if (entry.key && !r.includes(entry.key)) r.push(entry.key);

        if (entry.children && entry.children.length > 0) fetchKeys(r, entry.children);
    })
    return r;
};