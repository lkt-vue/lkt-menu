import { MenuEntry } from '../classes/MenuEntry';
import { LktObject } from 'lkt-ts-interfaces';
type __VLS_Props = {
    modelValue?: MenuEntry;
};
declare const entry: import("vue").Ref<{
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
}, MenuEntry | {
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
}>, slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>, isActive: import("vue").Ref<boolean, boolean>;
declare const onClickToggle: () => void, onClick: () => number;
declare const canRenderIcon: import("vue").ComputedRef<boolean | import("vue").Slot<any>>, classes: import("vue").ComputedRef<string>;
declare const entryIconSlots: import("vue").ComputedRef<LktObject>, computedLabel: import("vue").ComputedRef<any>, computedIsActive: import("vue").ComputedRef<boolean>, hasToggleSlot: import("vue").ComputedRef<boolean>, toggleSlot: import("vue").ComputedRef<string | import("vue").Component>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_10: string, __VLS_11: {
    key: string;
    entry: {
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
    };
}, __VLS_22: any, __VLS_23: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_10>]?: (props: typeof __VLS_11) => any;
} & {
    [K in NonNullable<typeof __VLS_22>]?: (props: typeof __VLS_23) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    entry: typeof entry;
    slots: typeof slots;
    isActive: typeof isActive;
    onClickToggle: typeof onClickToggle;
    onClick: typeof onClick;
    canRenderIcon: typeof canRenderIcon;
    classes: typeof classes;
    entryIconSlots: typeof entryIconSlots;
    computedLabel: typeof computedLabel;
    computedIsActive: typeof computedIsActive;
    hasToggleSlot: typeof hasToggleSlot;
    toggleSlot: typeof toggleSlot;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: MenuEntry;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: MenuEntry;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
