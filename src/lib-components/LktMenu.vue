<script setup lang="ts">
import {MenuEntry} from "../classes/MenuEntry";
import MenuItem from "../components/MenuItem.vue";
import {ref} from "vue";

const props = withDefaults(defineProps<{
    modelValue?: MenuEntry[]
}>(), {
    modelValue: () => []
});

const entries = ref(props.modelValue);
</script>

<template>
<div class="lkt-menu">
    <menu-item v-for="(_, i) in entries" v-model="entries[i]"/>
</div>
</template>

<style scoped>

</style>