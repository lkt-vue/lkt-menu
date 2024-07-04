import { defineComponent as K, ref as I, useSlots as N, computed as r, watch as C, onMounted as G, resolveComponent as B, openBlock as u, createElementBlock as a, normalizeClass as _, createElementVNode as V, createVNode as H, withCtx as $, unref as J, renderSlot as M, createCommentVNode as m, toDisplayString as P, createBlock as L, resolveDynamicComponent as Q, Fragment as T, renderList as b, createSlots as W, reactive as X } from "vue";
import { __ as Y } from "lkt-i18n";
import { useRouter as Z } from "vue-router";
class D {
  constructor(t, s, d) {
    this.key = "", this.href = "", this.label = "", this.icon = "", this.onClick = void 0, this.isActiveChecker = void 0, this.isOpened = !1, this.isActive = !1, this.parent = void 0, this.children = [], this.key = t, this.href = s, this.label = d;
  }
  setChildren(t) {
    return t.forEach((s) => s.parent = this), this.children = t, this;
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
const w = (n, t) => (t.forEach((s) => {
  n.includes(s.key) || n.push(s.key), s.children.length > 0 && w(n, s.children);
}), n), A = class A {
};
A.toggleSlot = "", A.debugEnabled = !1;
let k = A;
const ee = { class: "lkt-menu-entry-main" }, te = { class: "lkt-entry-content" }, le = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ne = {
  key: 1,
  class: "lkt-menu-entry-text"
}, se = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ue = /* @__PURE__ */ K({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new D("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = t, d = n, e = I(d.modelValue), o = N(), O = Z(), p = I(!1), f = () => {
      e.value.isOpened = !e.value.isOpened;
    }, i = () => (e.value.children.length > 0 && f(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), v = r(() => o["icon-" + e.value.key] || e.value.icon !== ""), S = r(() => {
      let l = [];
      return v.value && l.push("has-icon"), p.value && l.push("is-active"), l.join(" ");
    }), y = r(() => w([], e.value.children)), h = r(() => {
      let l = [];
      for (let c in o)
        c.startsWith("icon-") && y.value.includes(c.substring(5)) && l.push(c);
      return l;
    }), j = r(() => e.value.label.startsWith("__:") ? Y(e.value.label.substring(3)) : e.value.label), x = r(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), z = r(() => !!k.toggleSlot), F = r(() => k.toggleSlot);
    return C(() => d.modelValue, (l) => {
      e.value = l;
    }, { deep: !0 }), C(e, (l) => {
      s("update:modelValue", l);
    }, { deep: !0 }), G(() => {
      let l = O.currentRoute;
      if (l.value.path === e.value.href)
        e.value.isOpened = !0;
      else if (e.value.children.length > 0) {
        let c = !1;
        e.value.children.forEach((E) => {
          l.value.path === E.href && (c = !0);
        }), c && (e.value.isOpened = !0);
      }
    }), (l, c) => {
      const E = B("lkt-anchor"), q = B("menu-item", !0);
      return u(), a("div", {
        class: _(["lkt-menu-entry", S.value])
      }, [
        V("div", ee, [
          H(E, {
            to: e.value.href,
            "on-click": i,
            "is-active": x.value,
            onActive: c[0] || (c[0] = (R) => p.value = l.$e)
          }, {
            default: $(() => [
              V("div", te, [
                v.value ? (u(), a("div", le, [
                  J(o)["icon-" + e.value.key] ? M(l.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), a("i", {
                    key: 1,
                    class: _(e.value.icon)
                  }, null, 2)) : m("", !0)
                ])) : m("", !0),
                e.value.label !== "" ? (u(), a("div", ne, P(j.value), 1)) : m("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          e.value.children.length > 0 ? (u(), a("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: f
          }, [
            z.value ? (u(), L(Q(F.value), {
              key: 0,
              class: _(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), a("div", {
              key: 1,
              class: _(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : m("", !0)
        ]),
        e.value.isOpened ? (u(), a("div", se, [
          (u(!0), a(T, null, b(e.value.children, (R, U) => (u(), L(q, {
            modelValue: e.value.children[U],
            "onUpdate:modelValue": (g) => e.value.children[U] = g,
            key: R.key
          }, W({ _: 2 }, [
            b(h.value, (g) => ({
              name: g,
              fn: $(() => [
                M(l.$slots, g)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : m("", !0)
      ], 2);
    };
  }
}), ie = { class: "lkt-menu-container" }, oe = { class: "lkt-menu" }, re = /* @__PURE__ */ K({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue", "click-outside"],
  setup(n, { emit: t }) {
    const s = n, d = t, e = N(), o = I(s.modelValue), O = r(() => w([], o.value)), p = r(() => {
      let i = [];
      for (let v in e)
        v.startsWith("icon-") && O.value.includes(v.substring(5)) && i.push(v);
      return i;
    }), f = () => {
      d("click-outside");
    };
    return C(() => s.modelValue, (i) => {
      o.value = i;
    }, { deep: !0 }), C(o, (i) => {
      d("update:modelValue", i);
    }, { deep: !0 }), (i, v) => (u(), a("div", ie, [
      V("div", oe, [
        (u(!0), a(T, null, b(o.value, (S, y) => (u(), L(ue, {
          modelValue: o.value[y],
          "onUpdate:modelValue": (h) => o.value[y] = h,
          key: S.key
        }, W({ _: 2 }, [
          b(p.value, (h) => ({
            name: h,
            fn: $(() => [
              M(i.$slots, h)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      V("div", {
        class: "lkt-menu-outside",
        onClick: f
      })
    ]));
  }
}), ve = {
  install: (n) => {
    n.component("lkt-menu") === void 0 && n.component("lkt-menu", re);
  }
}, he = (n, t, s) => X(new D(n, t, s)), me = (n) => (k.toggleSlot = n, !0);
export {
  D as MenuEntry,
  he as createMenuEntry,
  ve as default,
  me as setMenuToggleSlot
};
