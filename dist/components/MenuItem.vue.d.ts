import { LktObject, MenuEntry } from 'lkt-vue-kernel';
type __VLS_Props = {
    modelValue?: MenuEntry;
};
declare const entry: import("vue").Ref<{
    key?: string | undefined;
    href?: string | undefined;
    label?: string | undefined;
    icon?: string | undefined;
    isActiveChecker?: Function | undefined;
    isOpened?: boolean | undefined;
    isActive?: boolean | undefined;
    parent?: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: /*elided*/ any | undefined;
        children?: /*elided*/ any[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
    } | undefined;
    children?: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: /*elided*/ any | undefined;
        children?: /*elided*/ any[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
    }[] | undefined;
    events?: {
        click?: Function | undefined;
    } | undefined;
    onClick?: Function | undefined;
    setChildren: (children: MenuEntry[]) => MenuEntry;
    setOnClick: (fn: Function) => MenuEntry;
    setIsActiveChecker: (fn: Function) => MenuEntry;
    setIsActive: (enabled?: boolean) => MenuEntry;
    setLabel: (str: string) => MenuEntry;
    setIcon: (str: string) => MenuEntry;
    doClose: () => void;
    feed: (data?: LktObject, target?: MenuEntry | undefined) => void;
    assignProp: (key: string, value: any) => void;
}, MenuEntry | {
    key?: string | undefined;
    href?: string | undefined;
    label?: string | undefined;
    icon?: string | undefined;
    isActiveChecker?: Function | undefined;
    isOpened?: boolean | undefined;
    isActive?: boolean | undefined;
    parent?: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: /*elided*/ any | undefined;
        children?: /*elided*/ any[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
    } | undefined;
    children?: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: /*elided*/ any | undefined;
        children?: /*elided*/ any[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
    }[] | undefined;
    events?: {
        click?: Function | undefined;
    } | undefined;
    onClick?: Function | undefined;
    setChildren: (children: MenuEntry[]) => MenuEntry;
    setOnClick: (fn: Function) => MenuEntry;
    setIsActiveChecker: (fn: Function) => MenuEntry;
    setIsActive: (enabled?: boolean) => MenuEntry;
    setLabel: (str: string) => MenuEntry;
    setIcon: (str: string) => MenuEntry;
    doClose: () => void;
    feed: (data?: LktObject, target?: MenuEntry | undefined) => void;
    assignProp: (key: string, value: any) => void;
}>, slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>, isActive: import("vue").Ref<boolean, boolean>;
declare const onClickToggle: () => void, onClick: () => number;
declare const canRenderIcon: import("vue").ComputedRef<boolean | import("vue").Slot<any>>, classes: import("vue").ComputedRef<string>;
declare const entryIconSlots: import("vue").ComputedRef<LktObject>, computedLabel: import("vue").ComputedRef<any>, computedIsActive: import("vue").ComputedRef<boolean>, hasToggleSlot: import("vue").ComputedRef<boolean>, toggleSlot: import("vue").ComputedRef<string | import("vue").Component>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_9: string, __VLS_10: {
    key: string | undefined;
    entry: {
        key?: string | undefined;
        href?: string | undefined;
        label?: string | undefined;
        icon?: string | undefined;
        isActiveChecker?: Function | undefined;
        isOpened?: boolean | undefined;
        isActive?: boolean | undefined;
        parent?: {
            key?: string | undefined;
            href?: string | undefined;
            label?: string | undefined;
            icon?: string | undefined;
            isActiveChecker?: Function | undefined;
            isOpened?: boolean | undefined;
            isActive?: boolean | undefined;
            parent?: /*elided*/ any | undefined;
            children?: /*elided*/ any[] | undefined;
            events?: {
                click?: Function | undefined;
            } | undefined;
            onClick?: Function | undefined;
        } | undefined;
        children?: {
            key?: string | undefined;
            href?: string | undefined;
            label?: string | undefined;
            icon?: string | undefined;
            isActiveChecker?: Function | undefined;
            isOpened?: boolean | undefined;
            isActive?: boolean | undefined;
            parent?: /*elided*/ any | undefined;
            children?: /*elided*/ any[] | undefined;
            events?: {
                click?: Function | undefined;
            } | undefined;
            onClick?: Function | undefined;
        }[] | undefined;
        events?: {
            click?: Function | undefined;
        } | undefined;
        onClick?: Function | undefined;
        setChildren: (children: MenuEntry[]) => MenuEntry;
        setOnClick: (fn: Function) => MenuEntry;
        setIsActiveChecker: (fn: Function) => MenuEntry;
        setIsActive: (enabled?: boolean) => MenuEntry;
        setLabel: (str: string) => MenuEntry;
        setIcon: (str: string) => MenuEntry;
        doClose: () => void;
        feed: (data?: LktObject, target?: MenuEntry | undefined) => void;
        assignProp: (key: string, value: any) => void;
    };
}, __VLS_24: any, __VLS_25: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_9>]?: (props: typeof __VLS_10) => any;
} & {
    [K in NonNullable<typeof __VLS_24>]?: (props: typeof __VLS_25) => any;
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
