<script setup lang="ts">
  import { MenuEntry } from '../classes/MenuEntry';
  import { computed, onMounted, ref, useSlots, watch } from 'vue';
  import { LktObject } from 'lkt-ts-interfaces';
  import { fetchKeys } from '../functions/helpers';
  import { useRouter } from 'vue-router';
  import { Settings } from '../settings/Settings';
  import { extractI18nValue } from 'lkt-vue-kernel';

  const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue?: MenuEntry
}>(), {
    modelValue: () => (new MenuEntry('', '', ''))
});

const entry = ref(props.modelValue),
    slots = useSlots(),
    router = useRouter(),
    isActive = ref(false);

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
        if (isActive.value) r.push('is-active');
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
        return extractI18nValue(entry.value.label);
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
    }),
    hasToggleSlot = computed(() => {
        return !!Settings.toggleSlot;
    }),
    toggleSlot = computed(() => {
        return Settings.toggleSlot;
    });

watch(() => props.modelValue, (v) => {
    entry.value = v
}, {deep: true});

watch(entry, (v) => {
    emit('update:modelValue', v)
}, {deep: true});

onMounted(() => {
    let currentRoute = router?.currentRoute;
    if (currentRoute) {
      if (currentRoute.value.path === entry.value.href) {
          entry.value.isOpened = true;

      } else if (entry.value.children.length > 0) {
          let opened = false;
          entry.value.children.forEach((child) => {
              if (currentRoute.value.path === child.href) opened = true;
          });

          if (opened) entry.value.isOpened = true;
      }
    }
});
</script>

<template>
    <div class="lkt-menu-entry" :class="classes">
        <div class="lkt-menu-entry-main">
            <lkt-anchor
                :to="entry.href"
                :on-click="onClick"
                :is-active="computedIsActive"
                @active="($e: any) => isActive = $e"
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
                <template v-if="hasToggleSlot">
                    <component :is="toggleSlot" class="lkt-menu-entry-toggle-inner" :class="entry.isOpened ? 'is-opened' : '' "/>
                </template>
                <div v-else class="lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle" :class="entry.isOpened ? 'is-opened' : '' "/>
            </div>
        </div>
        <div class="lkt-menu-entry-children" v-if="entry.isOpened">
            <menu-item v-for="(_, i) in entry.children" v-model="entry.children[i]" :key="entry.children[i].key">
                <template v-for="slot in entryIconSlots" v-slot:[slot]>
                    <slot :name="slot"/>
                </template>
            </menu-item>
        </div>
    </div>
</template>