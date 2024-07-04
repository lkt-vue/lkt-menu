import { defineComponent as K, ref as w, useSlots as N, computed as o, watch as V, onMounted as H, resolveComponent as D, openBlock as u, createElementBlock as c, normalizeClass as _, createElementVNode as m, createVNode as J, withCtx as $, unref as P, renderSlot as L, createCommentVNode as C, toDisplayString as Q, createBlock as R, resolveDynamicComponent as X, withDirectives as Y, Fragment as T, renderList as b, createSlots as W, vShow as Z, reactive as ee } from "vue";
import { __ as te } from "lkt-i18n";
import { useRouter as le } from "vue-router";
class x {
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
const U = (n, t) => (t.forEach((s) => {
  n.includes(s.key) || n.push(s.key), s.children.length > 0 && U(n, s.children);
}), n), A = class A {
};
A.toggleSlot = "", A.debugEnabled = !1;
let k = A;
const ne = { class: "lkt-menu-entry-main" }, se = { class: "lkt-entry-content" }, ue = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ie = {
  key: 1,
  class: "lkt-menu-entry-text"
}, oe = { class: "lkt-menu-entry-children" }, re = /* @__PURE__ */ K({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new x("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = t, d = n, e = w(d.modelValue), r = N(), S = le(), p = w(!1), f = () => {
      e.value.isOpened = !e.value.isOpened;
    }, i = () => (e.value.children.length > 0 && f(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), v = o(() => r["icon-" + e.value.key] || e.value.icon !== ""), O = o(() => {
      let l = [];
      return v.value && l.push("has-icon"), p.value && l.push("is-active"), l.join(" ");
    }), y = o(() => U([], e.value.children)), h = o(() => {
      let l = [];
      for (let a in r)
        a.startsWith("icon-") && y.value.includes(a.substring(5)) && l.push(a);
      return l;
    }), j = o(() => e.value.label.startsWith("__:") ? te(e.value.label.substring(3)) : e.value.label), z = o(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), F = o(() => !!k.toggleSlot), q = o(() => k.toggleSlot);
    V(() => d.modelValue, (l) => {
      e.value = l;
    }, { deep: !0 }), V(e, (l) => {
      s("update:modelValue", l);
    }, { deep: !0 }), H(() => {
      let l = S.currentRoute;
      if (l.value.path === e.value.href)
        e.value.isOpened = !0;
      else if (e.value.children.length > 0) {
        let a = !1;
        e.value.children.forEach((I) => {
          l.value.path === I.href && (a = !0);
        }), a && (e.value.isOpened = !0);
      }
    });
    const E = o(() => e.value.isOpened);
    return (l, a) => {
      const I = D("lkt-anchor"), G = D("menu-item", !0);
      return u(), c("div", {
        class: _(["lkt-menu-entry", O.value])
      }, [
        m("div", ne, [
          J(I, {
            to: e.value.href,
            "on-click": i,
            "is-active": z.value,
            onActive: a[0] || (a[0] = (B) => p.value = B)
          }, {
            default: $(() => [
              m("div", se, [
                v.value ? (u(), c("div", ue, [
                  P(r)["icon-" + e.value.key] ? L(l.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), c("i", {
                    key: 1,
                    class: _(e.value.icon)
                  }, null, 2)) : C("", !0)
                ])) : C("", !0),
                e.value.label !== "" ? (u(), c("div", ie, Q(j.value), 1)) : C("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          e.value.children.length > 0 ? (u(), c("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: f
          }, [
            F.value ? (u(), R(X(q.value), {
              key: 0,
              class: _(["lkt-menu-entry-toggle-inner", E.value ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), c("div", {
              key: 1,
              class: _(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", E.value ? "is-opened" : ""])
            }, null, 2))
          ])) : C("", !0)
        ]),
        Y(m("div", oe, [
          (u(!0), c(T, null, b(e.value.children, (B, M) => (u(), R(G, {
            modelValue: e.value.children[M],
            "onUpdate:modelValue": (g) => e.value.children[M] = g,
            key: e.value.children[M].key
          }, W({ _: 2 }, [
            b(h.value, (g) => ({
              name: g,
              fn: $(() => [
                L(l.$slots, g)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ], 512), [
          [Z, E.value]
        ])
      ], 2);
    };
  }
}), ae = { class: "lkt-menu-container" }, ce = { class: "lkt-menu" }, de = /* @__PURE__ */ K({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue", "click-outside"],
  setup(n, { emit: t }) {
    const s = n, d = t, e = N(), r = w(s.modelValue), S = o(() => U([], r.value)), p = o(() => {
      let i = [];
      for (let v in e)
        v.startsWith("icon-") && S.value.includes(v.substring(5)) && i.push(v);
      return i;
    }), f = () => {
      d("click-outside");
    };
    return V(() => s.modelValue, (i) => {
      r.value = i;
    }, { deep: !0 }), V(r, (i) => {
      d("update:modelValue", i);
    }, { deep: !0 }), (i, v) => (u(), c("div", ae, [
      m("div", ce, [
        (u(!0), c(T, null, b(r.value, (O, y) => (u(), R(re, {
          modelValue: r.value[y],
          "onUpdate:modelValue": (h) => r.value[y] = h,
          key: O.key
        }, W({ _: 2 }, [
          b(p.value, (h) => ({
            name: h,
            fn: $(() => [
              L(i.$slots, h)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      m("div", {
        class: "lkt-menu-outside",
        onClick: f
      })
    ]));
  }
}), ke = {
  install: (n) => {
    n.component("lkt-menu") === void 0 && n.component("lkt-menu", de);
  }
}, pe = (n, t, s) => ee(new x(n, t, s)), fe = (n) => (k.toggleSlot = n, !0);
export {
  x as MenuEntry,
  pe as createMenuEntry,
  ke as default,
  fe as setMenuToggleSlot
};
