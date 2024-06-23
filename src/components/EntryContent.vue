<script setup lang="ts">
import {MenuEntry} from "../classes/MenuEntry";
import {ref} from "vue";

const props = withDefaults(defineProps<{
    modelValue?: MenuEntry
}>(), {
    modelValue: () => (new MenuEntry('', '', ''))
});

const entry = ref(props.modelValue);
</script>

<template>
    <div class="lkt-entry-content">
        <div class="lkt-menu-entry-icon">
            icn
        </div>
        <div class="lkt-menu-entry-text" v-if="entry.text !== ''">
            {{entry.text}}
        </div>
    </div>
</template>

<style scoped>

</style>