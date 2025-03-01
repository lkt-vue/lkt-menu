import MenuItem from '../components/MenuItem.vue';
import { LktObject } from 'lkt-ts-interfaces';
import { MenuConfig } from 'lkt-vue-kernel';
declare const entries: import("vue").Ref<{
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
}[], import("lkt-vue-kernel").MenuEntryConfig[] | {
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
}[]>;
declare const entryIconSlots: import("vue").ComputedRef<LktObject>;
declare const onClickOutside: () => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_8: any, __VLS_9: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    [K in NonNullable<typeof __VLS_8>]?: (props: typeof __VLS_9) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<MenuConfig, {
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
}, string, import("vue").PublicProps, Readonly<MenuConfig> & Readonly<{
    onError?: ((...args: any[]) => any) | undefined;
    onLoading?: ((...args: any[]) => any) | undefined;
    onResults?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-outside"?: ((...args: any[]) => any) | undefined;
    onResponse?: ((...args: any[]) => any) | undefined;
}>, {
    resource: string;
    resourceData: import("lkt-vue-kernel").LktObject;
    modelValue: import("lkt-vue-kernel").MenuEntryConfig[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<MenuConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    loading: (...args: any[]) => void;
    results: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-outside": (...args: any[]) => void;
    response: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<MenuConfig> & Readonly<{
    onError?: ((...args: any[]) => any) | undefined;
    onLoading?: ((...args: any[]) => any) | undefined;
    onResults?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-outside"?: ((...args: any[]) => any) | undefined;
    onResponse?: ((...args: any[]) => any) | undefined;
}>, {
    resource: string;
    resourceData: import("lkt-vue-kernel").LktObject;
    modelValue: import("lkt-vue-kernel").MenuEntryConfig[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
