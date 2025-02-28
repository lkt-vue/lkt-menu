import { MenuEntry } from "../classes/MenuEntry";
import MenuItem from "../components/MenuItem.vue";
import { LktObject } from "lkt-ts-interfaces";
type __VLS_Props = {
    modelValue?: MenuEntry[];
    resource?: string;
    resourceData: LktObject;
};
declare const entries: import("vue").Ref<{
    key: string;
    href: string;
    label: string;
    icon: string;
    onClick: Function | undefined;
    isActiveChecker: Function | undefined;
    isOpened: boolean;
    isActive: boolean;
    parent: /*elided*/ any | undefined;
    children: /*elided*/ any[];
    setChildren: (children: MenuEntry[]) => MenuEntry;
    setOnClick: (fn: Function) => MenuEntry;
    setIsActiveChecker: (fn: Function) => MenuEntry;
    setIsActive: (enabled?: boolean) => MenuEntry;
    setLabel: (str: string) => MenuEntry;
    setIcon: (str: string) => MenuEntry;
    doClose: () => void;
}[], MenuEntry[] | {
    key: string;
    href: string;
    label: string;
    icon: string;
    onClick: Function | undefined;
    isActiveChecker: Function | undefined;
    isOpened: boolean;
    isActive: boolean;
    parent: /*elided*/ any | undefined;
    children: /*elided*/ any[];
    setChildren: (children: MenuEntry[]) => MenuEntry;
    setOnClick: (fn: Function) => MenuEntry;
    setIsActiveChecker: (fn: Function) => MenuEntry;
    setIsActive: (enabled?: boolean) => MenuEntry;
    setLabel: (str: string) => MenuEntry;
    setIcon: (str: string) => MenuEntry;
    doClose: () => void;
}[]>;
declare const entryIconSlots: import("vue").ComputedRef<LktObject>;
declare const onClickOutside: () => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_5: any, __VLS_6: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_5>]?: (props: typeof __VLS_6) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    MenuItem: typeof MenuItem;
    entries: typeof entries;
    entryIconSlots: typeof entryIconSlots;
    onClickOutside: typeof onClickOutside;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    loading: (...args: any[]) => void;
    results: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-outside": (...args: any[]) => void;
    response: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((...args: any[]) => any) | undefined;
    onLoading?: ((...args: any[]) => any) | undefined;
    onResults?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-outside"?: ((...args: any[]) => any) | undefined;
    onResponse?: ((...args: any[]) => any) | undefined;
}>, {
    resource: string;
    resourceData: LktObject;
    modelValue: MenuEntry[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    loading: (...args: any[]) => void;
    results: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-outside": (...args: any[]) => void;
    response: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((...args: any[]) => any) | undefined;
    onLoading?: ((...args: any[]) => any) | undefined;
    onResults?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-outside"?: ((...args: any[]) => any) | undefined;
    onResponse?: ((...args: any[]) => any) | undefined;
}>, {
    resource: string;
    resourceData: LktObject;
    modelValue: MenuEntry[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
