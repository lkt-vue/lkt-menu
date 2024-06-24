import { MenuEntry } from "../classes/MenuEntry";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: MenuEntry | undefined;
}>, {
    modelValue: () => MenuEntry;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: MenuEntry | undefined;
}>, {
    modelValue: () => MenuEntry;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: MenuEntry;
}, {}>, Partial<Record<string, (_: {
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
        parent: any | undefined;
        children: any[];
        setChildren: (children: MenuEntry[]) => MenuEntry;
        setOnClick: (fn: Function) => MenuEntry;
        setIsActiveChecker: (fn: Function) => MenuEntry;
        setIsActive: (enabled?: boolean) => MenuEntry;
        setLabel: (str: string) => MenuEntry;
        doClose: () => void;
    };
}) => any>> & Partial<Record<any, (_: {}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
