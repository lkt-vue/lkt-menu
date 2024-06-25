<script setup lang="ts">
import {MenuEntry} from "../classes/MenuEntry";
import MenuItem from "../components/MenuItem.vue";
import {computed, ref, useSlots, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";
import {fetchKeys} from "../functions/helpers";

const props = withDefaults(defineProps<{
    modelValue?: MenuEntry[]
}>(), {
    modelValue: () => []
});

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();

const entries = ref(props.modelValue);

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
    });

watch(() => props.modelValue, (v) => {
    entries.value = v;
}, {deep: true})

watch(entries, (v) => {
    emit('update:modelValue', v);
}, {deep: true})
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
        <div class="lkt-menu-outside"/>
    </div>
</template>

<style scoped>

</style>