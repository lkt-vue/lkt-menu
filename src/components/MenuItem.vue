<script setup lang="ts">
import {MenuEntry} from "../classes/MenuEntry";
import {computed, ref, useSlots, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";
import {fetchKeys} from "../functions/helpers";
import {__} from "lkt-i18n";

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue?: MenuEntry
}>(), {
    modelValue: () => (new MenuEntry('', '', ''))
});

const entry = ref(props.modelValue);

const slots = useSlots();

const onClickToggle = () => {
        entry.value.isOpened = !entry.value.isOpened;
    },
    onClick = () => {
        if (entry.value.children.length > 0) onClickToggle();
        if (typeof entry.value.onClick === 'function') {
            entry.value.onClick({
                entry: entry.value
            });
        }
        return 1;
    };

const canRenderIcon = computed(() => {
        return slots['icon-' + entry.value.key]
            || entry.value.icon !== '';
    }),
    classes = computed(() => {
        let r = [];
        if (canRenderIcon.value) r.push('has-icon');
        return r.join(' ');
    });

const availableKeys = computed(() => {
        let r: string[] = [];
        return fetchKeys(r, entry.value.children);
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
    computedLabel = computed(() => {
        if (entry.value.label.startsWith('__:')) {
            return __(entry.value.label.substring(3));
        }
        return entry.value.label;
    }),
    computedIsActive = computed(() => {
        if (entry.value.isActive) return true;

        if (typeof entry.value.isActiveChecker === 'function') {
            let r = entry.value.isActiveChecker({
                entry: entry.value
            });
            return !!r;
        }

        return false;
    });

watch(() => props.modelValue, (v) => {
    entry.value = v
}, {deep: true});
watch(entry, (v) => {
    emit('update:modelValue', v)
}, {deep: true})
</script>

<template>
    <div class="lkt-menu-entry" :class="classes">
        <div class="lkt-menu-entry-main">
            <lkt-anchor
                :to="entry.href"
                :on-click="onClick"
                :is-active="computedIsActive"
            >
                <div class="lkt-entry-content">
                    <div class="lkt-menu-entry-icon" v-if="canRenderIcon">
                        <template v-if="slots['icon-'+entry.key]">
                            <slot :name="'icon-'+entry.key"
                                  :key="entry.key"
                                  :entry="entry"/>
                        </template>
                        <template v-else-if="entry.icon !== ''">
                            <i :class="entry.icon"/>
                        </template>
                    </div>
                    <div class="lkt-menu-entry-text" v-if="entry.label !== ''">
                        {{ computedLabel }}
                    </div>
                </div>
            </lkt-anchor>

            <div class="lkt-menu-entry-toggle" v-if="entry.children.length > 0" @click="onClickToggle">
                <div class="lkt-menu-entry-toggle-triangle" :class="entry.isOpened ? 'is-opened' : '' "/>
            </div>
        </div>
        <div class="lkt-menu-entry-children" v-if="entry.isOpened">
            <menu-item v-for="(child, i) in entry.children" v-model="entry.children[i]" :key="child.key">
                <template v-for="slot in entryIconSlots" v-slot:[slot]>
                    <slot :name="slot"/>
                </template>
            </menu-item>
        </div>
    </div>
</template>

<style scoped>

</style>