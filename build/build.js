import { defineComponent as R, ref as U, useSlots as B, computed as i, watch as g, onMounted as q, resolveComponent as w, openBlock as u, createElementBlock as a, normalizeClass as _, createElementVNode as C, createVNode as G, withCtx as E, unref as H, renderSlot as I, createCommentVNode as m, toDisplayString as J, createBlock as M, resolveDynamicComponent as P, Fragment as K, renderList as V, createSlots as N, reactive as Q } from "vue";
import { __ as X } from "lkt-i18n";
import { useRouter as Y } from "vue-router";
class T {
  constructor(t, s, v) {
    this.key = "", this.href = "", this.label = "", this.icon = "", this.onClick = void 0, this.isActiveChecker = void 0, this.isOpened = !1, this.isActive = !1, this.parent = void 0, this.children = [], this.key = t, this.href = s, this.label = v;
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
const $ = (n, t) => (t.forEach((s) => {
  n.includes(s.key) || n.push(s.key), s.children.length > 0 && $(n, s.children);
}), n), b = class b {
};
b.toggleSlot = "", b.debugEnabled = !1;
let k = b;
const Z = { class: "lkt-menu-entry-main" }, ee = { class: "lkt-entry-content" }, te = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, le = {
  key: 1,
  class: "lkt-menu-entry-text"
}, ne = {
  key: 0,
  class: "lkt-menu-entry-children"
}, se = /* @__PURE__ */ R({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new T("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = t, v = n, e = U(v.modelValue), r = B(), A = Y(), p = () => {
      e.value.isOpened = !e.value.isOpened;
    }, o = () => (e.value.children.length > 0 && p(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), c = i(() => r["icon-" + e.value.key] || e.value.icon !== ""), O = i(() => {
      let l = [];
      return c.value && l.push("has-icon"), l.join(" ");
    }), f = i(() => $([], e.value.children)), h = i(() => {
      let l = [];
      for (let d in r)
        d.startsWith("icon-") && f.value.includes(d.substring(5)) && l.push(d);
      return l;
    }), W = i(() => e.value.label.startsWith("__:") ? X(e.value.label.substring(3)) : e.value.label), x = i(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), D = i(() => !!k.toggleSlot), j = i(() => k.toggleSlot);
    return g(() => v.modelValue, (l) => {
      e.value = l;
    }, { deep: !0 }), g(e, (l) => {
      s("update:modelValue", l);
    }, { deep: !0 }), q(() => {
      let l = A.currentRoute;
      if (l.value.path === e.value.href)
        e.value.isOpened = !0;
      else if (e.value.children.length > 0) {
        let d = !1;
        e.value.children.forEach((S) => {
          l.value.path === S.href && (d = !0);
        }), d && (e.value.isOpened = !0);
      }
    }), (l, d) => {
      const S = w("lkt-anchor"), z = w("menu-item", !0);
      return u(), a("div", {
        class: _(["lkt-menu-entry", O.value])
      }, [
        C("div", Z, [
          G(S, {
            to: e.value.href,
            "on-click": o,
            "is-active": x.value
          }, {
            default: E(() => [
              C("div", ee, [
                c.value ? (u(), a("div", te, [
                  H(r)["icon-" + e.value.key] ? I(l.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), a("i", {
                    key: 1,
                    class: _(e.value.icon)
                  }, null, 2)) : m("", !0)
                ])) : m("", !0),
                e.value.label !== "" ? (u(), a("div", le, J(W.value), 1)) : m("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          e.value.children.length > 0 ? (u(), a("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: p
          }, [
            D.value ? (u(), M(P(j.value), {
              key: 0,
              class: _(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), a("div", {
              key: 1,
              class: _(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : m("", !0)
        ]),
        e.value.isOpened ? (u(), a("div", ne, [
          (u(!0), a(K, null, V(e.value.children, (F, L) => (u(), M(z, {
            modelValue: e.value.children[L],
            "onUpdate:modelValue": (y) => e.value.children[L] = y,
            key: F.key
          }, N({ _: 2 }, [
            V(h.value, (y) => ({
              name: y,
              fn: E(() => [
                I(l.$slots, y)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : m("", !0)
      ], 2);
    };
  }
}), ue = { class: "lkt-menu-container" }, oe = { class: "lkt-menu" }, re = /* @__PURE__ */ C("div", { class: "lkt-menu-outside" }, null, -1), ie = /* @__PURE__ */ R({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = n, v = t, e = B(), r = U(s.modelValue), A = i(() => $([], r.value)), p = i(() => {
      let o = [];
      for (let c in e)
        c.startsWith("icon-") && A.value.includes(c.substring(5)) && o.push(c);
      return o;
    });
    return g(() => s.modelValue, (o) => {
      r.value = o;
    }, { deep: !0 }), g(r, (o) => {
      v("update:modelValue", o);
    }, { deep: !0 }), (o, c) => (u(), a("div", ue, [
      C("div", oe, [
        (u(!0), a(K, null, V(r.value, (O, f) => (u(), M(se, {
          modelValue: r.value[f],
          "onUpdate:modelValue": (h) => r.value[f] = h,
          key: O.key
        }, N({ _: 2 }, [
          V(p.value, (h) => ({
            name: h,
            fn: E(() => [
              I(o.$slots, h)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      re
    ]));
  }
}), ve = {
  install: (n) => {
    n.component("lkt-menu") === void 0 && n.component("lkt-menu", ie);
  }
}, he = (n, t, s) => Q(new T(n, t, s)), me = (n) => (k.toggleSlot = n, !0);
export {
  T as MenuEntry,
  he as createMenuEntry,
  ve as default,
  me as setMenuToggleSlot
};
