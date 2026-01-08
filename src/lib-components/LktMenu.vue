<script setup lang="ts">
    import MenuItem from '../components/MenuItem.vue';
    import { computed, onMounted, ref, useSlots, watch } from 'vue';
    import { getDefaultValues, LktObject, Menu, MenuConfig, MenuController, MenuType } from 'lkt-vue-kernel';
    import { fetchKeys } from '../functions/helpers';
    import { DataState } from 'lkt-data-state';
    import { httpCall, HTTPResponse } from 'lkt-http-client';

    const props = withDefaults(defineProps<MenuConfig>(), getDefaultValues(Menu));

    const emit = defineEmits([
        'update:modelValue',
        'click-outside',
        'loading',
        'results',
        'response',
        'error',
    ]);

    const isVisible = ref(false);

    const slots = useSlots();

    const entries = ref(props.modelValue);

    const parseFilters = (filters: LktObject) => {
        let d: LktObject = {};
        if (typeof filters === 'object' && Object.keys(filters).length > 0) {
            d = JSON.parse(JSON.stringify(filters));
        }
        for (let k in d) {
            if (Array.isArray(d[k]) || typeof d[k] === 'object') {
                d[k] = JSON.stringify(d[k]);
            }
        }
        return d;
    };

    watch(() => MenuController.config.value, (v) => {
    }, {deep: true})

    const computedClassName = computed(() => {
        let r = [
            `type-${props.type}`,
        ];

        if (props.menuKey) r.push(props.menuKey);
        if (isVisible.value) r.push('is-visible');

        if (props.type === MenuType.Hidden) {
            r.push(`${props.hiddenPosition}-hidden`)
        }

        return r.join(' ');
    });


    let resourceDataState = new DataState({});
    resourceDataState.increment(parseFilters(props.http?.data ?? {}));

    const availableKeys = computed(() => {
            let r: string[] = [];
            return fetchKeys(r, entries.value);
        }),
        entryIconSlots = computed((): LktObject => {
            let r = [];
            for (let k in slots) {
                if (k.startsWith('icon-')) {
                    if (availableKeys.value.includes(k.substring(5))) {
                        r.push(k);
                    }
                }
            }
            return r;
        }),
        loadResource = () => {
            if (!props.http?.resource) return;

            let d = resourceDataState.getData();
            emit('loading');

            httpCall(props.http?.resource, d).then((r: HTTPResponse) => {
                resourceDataState.turnStoredIntoOriginal();
                //@ts-ignore
                entries.value = r.data;
                emit('results', r.data);
                emit('response', r);

            }).catch((r: any) => {
                emit('error', r);
            });
        };

    const onClickOutside = () => {
        if (props.closeOnClickOutside) {
            MenuController.closeMenu(props.menuKey);
        }
        emit('click-outside');
    };

    watch(() => props.modelValue, (v) => {
        entries.value = v;
    }, { deep: true });

    watch(entries, (v) => {
        emit('update:modelValue', v);
    }, { deep: true });

    onMounted(() => {
        MenuController.addMenu(props.menuKey, isVisible)
        loadResource();
    })


    const computedRole = computed(() => {
        if (props.type === MenuType.TabList) return 'tablist';
        return undefined;
    })
</script>

<template>
    <div class="lkt-menu" :class="computedClassName" :role="computedRole">
        <div class="lkt-menu-main">
            <template v-if="slots.before">
                <slot name="before"/>
            </template>
            <div class="lkt-menu-entries">
                <menu-item v-for="(entry, i) in entries" v-model="entries[i]" :class="entry.class" :menu-key="menuKey" :close-on-click-entry="closeOnClickEntry">
                    <template v-for="slot in entryIconSlots" v-slot:[slot]>
                        <slot :name="slot" />
                    </template>

                    <template v-if="slots[`tooltip-${entry.key}`]" #tooltip>
                        <slot :name="`tooltip-${entry.key}`"/>
                    </template>

                    <template v-if="slots[`split-${entry.key}`]" #split>
                        <slot :name="`split-${entry.key}`"/>
                    </template>
                </menu-item>
            </div>
        </div>
        <div class="lkt-menu-outside" v-on:click="onClickOutside" />
    </div>
</template>