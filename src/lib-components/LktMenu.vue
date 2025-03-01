<script setup lang="ts">
  import MenuItem from '../components/MenuItem.vue';
  import { computed, ref, useSlots, watch } from 'vue';
  import { LktObject } from 'lkt-ts-interfaces';
  import { fetchKeys } from '../functions/helpers';
  import { DataState } from 'lkt-data-state';
  import { httpCall, HTTPResponse } from 'lkt-http-client';
  import { getDefaultValues, Menu, MenuConfig } from 'lkt-vue-kernel';

  const props = withDefaults(defineProps<MenuConfig>(), getDefaultValues(Menu));

const emit = defineEmits([
  'update:modelValue',
  'click-outside',
  'loading',
  'results',
  'response',
  'error'
]);

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
}
let resourceDataState = new DataState({});
resourceDataState.increment(parseFilters(props.resourceData))

const availableKeys = computed(() => {
        let r:string[] = [];
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
        if (!props.resource) return;

        let d = resourceDataState.getData();
        emit('loading');

        httpCall(props.resource, d).then((r: HTTPResponse) => {
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
    emit('click-outside');
}

watch(() => props.modelValue, (v) => {
    entries.value = v;
}, {deep: true})

watch(entries, (v) => {
    emit('update:modelValue', v);
}, {deep: true})

loadResource();
</script>

<template>
    <div class="lkt-menu-container">
        <div class="lkt-menu">
            <menu-item v-for="(entry, i) in entries" v-model="entries[i]" :key="entry.key">
                <template v-for="slot in entryIconSlots" v-slot:[slot]>
                    <slot :name="slot"/>
                </template>
            </menu-item>
        </div>
        <div class="lkt-menu-outside" v-on:click="onClickOutside"/>
    </div>
</template>