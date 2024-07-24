import { MenuEntry } from "../classes/MenuEntry";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: MenuEntry[] | undefined;
    resource?: string | undefined;
    resourceData: LktObject;
}>, {
    modelValue: () => never[];
    resource: string;
    resourceData: () => {};
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    loading: (...args: any[]) => void;
    results: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-outside": (...args: any[]) => void;
    response: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: MenuEntry[] | undefined;
    resource?: string | undefined;
    resourceData: LktObject;
}>, {
    modelValue: () => never[];
    resource: string;
    resourceData: () => {};
}>>> & {
    onError?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onLoading?: ((...args: any[]) => any) | undefined;
    onResults?: ((...args: any[]) => any) | undefined;
    "onClick-outside"?: ((...args: any[]) => any) | undefined;
    onResponse?: ((...args: any[]) => any) | undefined;
}, {
    resource: string;
    modelValue: MenuEntry[];
    resourceData: LktObject;
}, {}>, Partial<Record<any, (_: {}) => any>>>;
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
