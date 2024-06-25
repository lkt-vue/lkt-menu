import { defineComponent as S, ref as L, useSlots as M, computed as a, watch as y, resolveComponent as E, openBlock as u, createElementBlock as o, normalizeClass as b, createElementVNode as m, createVNode as z, withCtx as A, unref as D, renderSlot as I, createCommentVNode as h, toDisplayString as F, Fragment as w, renderList as V, createBlock as U, createSlots as B, reactive as R } from "vue";
import { __ as T } from "lkt-i18n";
class K {
  constructor(t, l, c) {
    this.key = "", this.href = "", this.label = "", this.icon = "", this.onClick = void 0, this.isActiveChecker = void 0, this.isOpened = !1, this.isActive = !1, this.parent = void 0, this.children = [], this.key = t, this.href = l, this.label = c;
  }
  setChildren(t) {
    return t.forEach((l) => l.parent = this), this.children = t, this;
  }
  setOnClick(t) {
    return this.onClick = t, this;
  }
  setIsActiveChecker(t) {
    return this.isActiveChecker = t, this;
  }
  setIsActive(t = !0) {
    return this.isActive = t, this;
  }
  setLabel(t) {
    return this.label = t, this;
  }
  setIcon(t) {
    return this.icon = t, this;
  }
  doClose() {
    this.isOpened = !1;
  }
}
const O = (n, t) => (t.forEach((l) => {
  n.includes(l.key) || n.push(l.key), l.children.length > 0 && O(n, l.children);
}), n), q = { class: "lkt-menu-entry-main" }, G = { class: "lkt-entry-content" }, H = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, J = {
  key: 1,
  class: "lkt-menu-entry-text"
}, P = {
  key: 0,
  class: "lkt-menu-entry-children"
}, Q = /* @__PURE__ */ S({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new K("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const l = t, c = n, e = L(c.modelValue), r = M(), k = () => {
      e.value.isOpened = !e.value.isOpened;
    }, C = () => (e.value.children.length > 0 && k(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), i = a(() => r["icon-" + e.value.key] || e.value.icon !== ""), d = a(() => {
      let s = [];
      return i.value && s.push("has-icon"), s.join(" ");
    }), g = a(() => O([], e.value.children)), p = a(() => {
      let s = [];
      for (let f in r)
        f.startsWith("icon-") && g.value.includes(f.substring(5)) && s.push(f);
      return s;
    }), v = a(() => e.value.label.startsWith("__:") ? T(e.value.label.substring(3)) : e.value.label), N = a(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1);
    return y(() => c.modelValue, (s) => {
      e.value = s;
    }, { deep: !0 }), y(e, (s) => {
      l("update:modelValue", s);
    }, { deep: !0 }), (s, f) => {
      const W = E("lkt-anchor"), x = E("menu-item", !0);
      return u(), o("div", {
        class: b(["lkt-menu-entry", d.value])
      }, [
        m("div", q, [
          z(W, {
            to: e.value.href,
            "on-click": C,
            "is-active": N.value
          }, {
            default: A(() => [
              m("div", G, [
                i.value ? (u(), o("div", H, [
                  D(r)["icon-" + e.value.key] ? I(s.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), o("i", {
                    key: 1,
                    class: b(e.value.icon)
                  }, "icon", 2)) : h("", !0)
                ])) : h("", !0),
                e.value.label !== "" ? (u(), o("div", J, F(v.value), 1)) : h("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          e.value.children.length > 0 ? (u(), o("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: k
          }, [
            m("div", {
              class: b(["lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2)
          ])) : h("", !0)
        ]),
        e.value.isOpened ? (u(), o("div", P, [
          (u(!0), o(w, null, V(e.value.children, (j, $) => (u(), U(x, {
            modelValue: e.value.children[$],
            "onUpdate:modelValue": (_) => e.value.children[$] = _,
            key: j.key
          }, B({ _: 2 }, [
            V(p.value, (_) => ({
              name: _,
              fn: A(() => [
                I(s.$slots, _)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : h("", !0)
      ], 2);
    };
  }
}), X = { class: "lkt-menu-container" }, Y = { class: "lkt-menu" }, Z = /* @__PURE__ */ m("div", { class: "lkt-menu-outside" }, null, -1), ee = /* @__PURE__ */ S({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const l = n, c = t, e = M(), r = L(l.modelValue), k = a(() => O([], r.value)), C = a(() => {
      let i = [];
      for (let d in e)
        d.startsWith("icon-") && k.value.includes(d.substring(5)) && i.push(d);
      return i;
    });
    return y(() => l.modelValue, (i) => {
      r.value = i;
    }, { deep: !0 }), y(r, (i) => {
      c("update:modelValue", i);
    }, { deep: !0 }), (i, d) => (u(), o("div", X, [
      m("div", Y, [
        (u(!0), o(w, null, V(r.value, (g, p) => (u(), U(Q, {
          modelValue: r.value[p],
          "onUpdate:modelValue": (v) => r.value[p] = v,
          key: g.key
        }, B({ _: 2 }, [
          V(C.value, (v) => ({
            name: v,
            fn: A(() => [
              I(i.$slots, v)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      Z
    ]));
  }
}), ne = {
  install: (n) => {
    n.component("lkt-menu") === void 0 && n.component("lkt-menu", ee);
  }
}, se = (n, t, l) => R(new K(n, t, l));
export {
  se as createMenuEntry,
  ne as default
};
