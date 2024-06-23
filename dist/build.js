import { defineComponent as p, ref as _, openBlock as t, createElementBlock as l, toDisplayString as U, createCommentVNode as d, createElementVNode as i, resolveComponent as V, createBlock as m, withCtx as $, createVNode as y, normalizeClass as E, Fragment as g, renderList as x, reactive as M } from "vue";
class h {
  constructor(o, e, s) {
    this.key = "", this.href = "", this.text = "", this.isOpened = !1, this.children = [], this.key = o, this.href = e, this.text = s;
  }
  setChildren(o) {
    return this.children = o, this;
  }
}
const O = { class: "lkt-entry-content" }, w = /* @__PURE__ */ i("div", { class: "lkt-menu-entry-icon" }, " icn ", -1), B = {
  key: 0,
  class: "lkt-menu-entry-text"
}, f = /* @__PURE__ */ p({
  __name: "EntryContent",
  props: {
    modelValue: { default: () => new h("", "", "") }
  },
  setup(n) {
    const e = _(n.modelValue);
    return (s, v) => (t(), l("div", O, [
      w,
      e.value.text !== "" ? (t(), l("div", B, U(e.value.text), 1)) : d("", !0)
    ]));
  }
}), L = { class: "lkt-menu-entry" }, N = { class: "lkt-menu-entry-main" }, z = {
  key: 1,
  class: "lkt-anchor"
}, D = {
  key: 0,
  class: "lkt-menu-entry-children"
}, F = /* @__PURE__ */ p({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new h("", "", "") }
  },
  setup(n) {
    const e = _(n.modelValue), s = () => {
      e.value.isOpened = !e.value.isOpened;
    };
    return (v, u) => {
      const a = V("lkt-anchor"), c = V("menu-item", !0);
      return t(), l("div", L, [
        i("div", N, [
          e.value.href !== "" ? (t(), m(a, {
            key: 0,
            to: e.value.href
          }, {
            default: $(() => [
              y(f, {
                modelValue: e.value,
                "onUpdate:modelValue": u[0] || (u[0] = (r) => e.value = r)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["to"])) : (t(), l("div", z, [
            y(f, {
              modelValue: e.value,
              "onUpdate:modelValue": u[1] || (u[1] = (r) => e.value = r),
              onClick: s
            }, null, 8, ["modelValue"])
          ])),
          e.value.children.length > 0 ? (t(), l("div", {
            key: 2,
            class: "lkt-menu-entry-toggle",
            onClick: s
          }, [
            i("div", {
              class: E(["lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2)
          ])) : d("", !0)
        ]),
        e.value.isOpened ? (t(), l("div", D, [
          (t(!0), l(g, null, x(e.value.children, (r, k) => (t(), m(c, {
            modelValue: e.value.children[k],
            "onUpdate:modelValue": (C) => e.value.children[k] = C
          }, null, 8, ["modelValue", "onUpdate:modelValue"]))), 256))
        ])) : d("", !0)
      ]);
    };
  }
}), I = { class: "lkt-menu" }, S = /* @__PURE__ */ p({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] }
  },
  setup(n) {
    const e = _(n.modelValue);
    return (s, v) => (t(), l("div", I, [
      (t(!0), l(g, null, x(e.value, (u, a) => (t(), m(F, {
        modelValue: e.value[a],
        "onUpdate:modelValue": (c) => e.value[a] = c
      }, null, 8, ["modelValue", "onUpdate:modelValue"]))), 256))
    ]));
  }
}), b = {
  install: (n) => {
    n.component("lkt-menu") === void 0 && n.component("lkt-menu", S);
  }
}, j = (n, o, e) => M(new h(n, o, e));
export {
  j as createMenuEntry,
  b as default
};
