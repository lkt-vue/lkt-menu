<script setup lang="ts">
import {MenuEntry} from "../classes/MenuEntry";
import {ref} from "vue";
import EntryContent from "./EntryContent.vue";

const props = withDefaults(defineProps<{
    modelValue?: MenuEntry
}>(), {
    modelValue: () => (new MenuEntry('', '', ''))
});

const entry = ref(props.modelValue);

const onClickToggle = () => {
    entry.value.isOpened = !entry.value.isOpened;
}
</script>

<template>
<div class="lkt-menu-entry">
    <div class="lkt-menu-entry-main">
        <lkt-anchor v-if="entry.href !== ''" :to="entry.href">
            <entry-content v-model="entry"/>
        </lkt-anchor>
        <div class="lkt-anchor" v-else>
            <entry-content v-model="entry" @click="onClickToggle"/>
        </div>
        <div class="lkt-menu-entry-toggle" v-if="entry.children.length > 0" @click="onClickToggle">
            <div class="lkt-menu-entry-toggle-triangle" :class="entry.isOpened ? 'is-opened' : '' "/>
        </div>
    </div>
    <div class="lkt-menu-entry-children" v-if="entry.isOpened">
        <menu-item v-for="(_, i) in entry.children" v-model="entry.children[i]"/>
    </div>
</div>
</template>

<style scoped>

</style>