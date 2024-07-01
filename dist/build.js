import { defineComponent as B, ref as $, useSlots as K, computed as r, watch as C, onMounted as G, resolveComponent as U, openBlock as u, createElementBlock as a, normalizeClass as g, createElementVNode as V, createVNode as H, withCtx as E, unref as J, renderSlot as I, createCommentVNode as m, toDisplayString as P, createBlock as M, resolveDynamicComponent as Q, Fragment as N, renderList as b, createSlots as T, reactive as X } from "vue";
import { __ as Y } from "lkt-i18n";
import { useRouter as Z } from "vue-router";
class W {
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
const L = (n, t) => (t.forEach((s) => {
  n.includes(s.key) || n.push(s.key), s.children.length > 0 && L(n, s.children);
}), n), A = class A {
};
A.toggleSlot = "", A.debugEnabled = !1;
let p = A;
const ee = { class: "lkt-menu-entry-main" }, te = { class: "lkt-entry-content" }, le = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ne = {
  key: 1,
  class: "lkt-menu-entry-text"
}, se = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ue = /* @__PURE__ */ B({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new W("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = t, d = n, e = $(d.modelValue), i = K(), O = Z(), k = $(!1), o = () => {
      e.value.isOpened = !e.value.isOpened;
    }, v = () => (e.value.children.length > 0 && o(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), f = r(() => i["icon-" + e.value.key] || e.value.icon !== ""), y = r(() => {
      let l = [];
      return f.value && l.push("has-icon"), k.value && l.push("is-active"), l.join(" ");
    }), h = r(() => L([], e.value.children)), D = r(() => {
      let l = [];
      for (let c in i)
        c.startsWith("icon-") && h.value.includes(c.substring(5)) && l.push(c);
      return l;
    }), j = r(() => e.value.label.startsWith("__:") ? Y(e.value.label.substring(3)) : e.value.label), x = r(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), z = r(() => !!p.toggleSlot), F = r(() => p.toggleSlot);
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
        e.value.children.forEach((S) => {
          l.value.path === S.href && (c = !0);
        }), c && (e.value.isOpened = !0);
      }
    }), (l, c) => {
      const S = U("lkt-anchor"), q = U("menu-item", !0);
      return u(), a("div", {
        class: g(["lkt-menu-entry", y.value])
      }, [
        V("div", ee, [
          H(S, {
            to: e.value.href,
            "on-click": v,
            "is-active": x.value,
            onActive: c[0] || (c[0] = (w) => k.value = l.$e)
          }, {
            default: E(() => [
              V("div", te, [
                f.value ? (u(), a("div", le, [
                  J(i)["icon-" + e.value.key] ? I(l.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), a("i", {
                    key: 1,
                    class: g(e.value.icon)
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
            onClick: o
          }, [
            z.value ? (u(), M(Q(F.value), {
              key: 0,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), a("div", {
              key: 1,
              class: g(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : m("", !0)
        ]),
        e.value.isOpened ? (u(), a("div", se, [
          (u(!0), a(N, null, b(e.value.children, (w, R) => (u(), M(q, {
            modelValue: e.value.children[R],
            "onUpdate:modelValue": (_) => e.value.children[R] = _,
            key: w.key
          }, T({ _: 2 }, [
            b(D.value, (_) => ({
              name: _,
              fn: E(() => [
                I(l.$slots, _)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : m("", !0)
      ], 2);
    };
  }
}), oe = { class: "lkt-menu-container" }, ie = { class: "lkt-menu" }, re = /* @__PURE__ */ V("div", { class: "lkt-menu-outside" }, null, -1), ae = /* @__PURE__ */ B({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = n, d = t, e = K(), i = $(s.modelValue), O = r(() => L([], i.value)), k = r(() => {
      let o = [];
      for (let v in e)
        v.startsWith("icon-") && O.value.includes(v.substring(5)) && o.push(v);
      return o;
    });
    return C(() => s.modelValue, (o) => {
      i.value = o;
    }, { deep: !0 }), C(i, (o) => {
      d("update:modelValue", o);
    }, { deep: !0 }), (o, v) => (u(), a("div", oe, [
      V("div", ie, [
        (u(!0), a(N, null, b(i.value, (f, y) => (u(), M(ue, {
          modelValue: i.value[y],
          "onUpdate:modelValue": (h) => i.value[y] = h,
          key: f.key
        }, T({ _: 2 }, [
          b(k.value, (h) => ({
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
}), he = {
  install: (n) => {
    n.component("lkt-menu") === void 0 && n.component("lkt-menu", ae);
  }
}, me = (n, t, s) => X(new W(n, t, s)), pe = (n) => (p.toggleSlot = n, !0);
export {
  W as MenuEntry,
  me as createMenuEntry,
  he as default,
  pe as setMenuToggleSlot
};
