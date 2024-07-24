import { defineComponent as J, ref as $, useSlots as K, computed as c, watch as b, onMounted as q, resolveComponent as B, openBlock as u, createElementBlock as d, normalizeClass as V, createElementVNode as O, createVNode as G, withCtx as w, unref as H, renderSlot as L, createCommentVNode as f, toDisplayString as P, createBlock as R, resolveDynamicComponent as Q, Fragment as T, renderList as S, createSlots as W, reactive as X } from "vue";
import { __ as Y } from "lkt-i18n";
import { useRouter as Z } from "vue-router";
import { DataState as ee } from "lkt-data-state";
import { httpCall as te } from "lkt-http-client";
class x {
  constructor(t, n, i) {
    this.key = "", this.href = "", this.label = "", this.icon = "", this.onClick = void 0, this.isActiveChecker = void 0, this.isOpened = !1, this.isActive = !1, this.parent = void 0, this.children = [], this.key = t, this.href = n, this.label = i;
  }
  setChildren(t) {
    return t.forEach((n) => n.parent = this), this.children = t, this;
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
const j = (o, t) => (t.forEach((n) => {
  o.includes(n.key) || o.push(n.key), n.children.length > 0 && j(o, n.children);
}), o), A = class A {
};
A.toggleSlot = "", A.debugEnabled = !1;
let k = A;
const le = { class: "lkt-menu-entry-main" }, ne = { class: "lkt-entry-content" }, re = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, se = {
  key: 1,
  class: "lkt-menu-entry-text"
}, oe = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ue = /* @__PURE__ */ J({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new x("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const n = t, i = o, e = $(i.modelValue), a = K(), I = Z(), m = $(!1), y = () => {
      e.value.isOpened = !e.value.isOpened;
    }, E = () => (e.value.children.length > 0 && y(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), g = c(() => a["icon-" + e.value.key] || e.value.icon !== ""), D = c(() => {
      let r = [];
      return g.value && r.push("has-icon"), m.value && r.push("is-active"), r.join(" ");
    }), s = c(() => j([], e.value.children)), l = c(() => {
      let r = [];
      for (let v in a)
        v.startsWith("icon-") && s.value.includes(v.substring(5)) && r.push(v);
      return r;
    }), h = c(() => e.value.label.startsWith("__:") ? Y(e.value.label.substring(3)) : e.value.label), _ = c(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), p = c(() => !!k.toggleSlot), F = c(() => k.toggleSlot);
    return b(() => i.modelValue, (r) => {
      e.value = r;
    }, { deep: !0 }), b(e, (r) => {
      n("update:modelValue", r);
    }, { deep: !0 }), q(() => {
      let r = I.currentRoute;
      if (r.value.path === e.value.href)
        e.value.isOpened = !0;
      else if (e.value.children.length > 0) {
        let v = !1;
        e.value.children.forEach((M) => {
          r.value.path === M.href && (v = !0);
        }), v && (e.value.isOpened = !0);
      }
    }), (r, v) => {
      const M = B("lkt-anchor"), z = B("menu-item", !0);
      return u(), d("div", {
        class: V(["lkt-menu-entry", D.value])
      }, [
        O("div", le, [
          G(M, {
            to: e.value.href,
            "on-click": E,
            "is-active": _.value,
            onActive: v[0] || (v[0] = (U) => m.value = U)
          }, {
            default: w(() => [
              O("div", ne, [
                g.value ? (u(), d("div", re, [
                  H(a)["icon-" + e.value.key] ? L(r.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), d("i", {
                    key: 1,
                    class: V(e.value.icon)
                  }, null, 2)) : f("", !0)
                ])) : f("", !0),
                e.value.label !== "" ? (u(), d("div", se, P(h.value), 1)) : f("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          e.value.children.length > 0 ? (u(), d("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: y
          }, [
            p.value ? (u(), R(Q(F.value), {
              key: 0,
              class: V(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), d("div", {
              key: 1,
              class: V(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : f("", !0)
        ]),
        e.value.isOpened ? (u(), d("div", oe, [
          (u(!0), d(T, null, S(e.value.children, (U, N) => (u(), R(z, {
            modelValue: e.value.children[N],
            "onUpdate:modelValue": (C) => e.value.children[N] = C,
            key: e.value.children[N].key
          }, W({ _: 2 }, [
            S(l.value, (C) => ({
              name: C,
              fn: w(() => [
                L(r.$slots, C)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : f("", !0)
      ], 2);
    };
  }
}), ie = { class: "lkt-menu-container" }, ae = { class: "lkt-menu" }, ce = /* @__PURE__ */ J({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] },
    resource: { default: "" },
    resourceData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "click-outside", "loading", "results", "response", "error"],
  setup(o, { emit: t }) {
    const n = o, i = t, e = K(), a = $(n.modelValue), I = (s) => {
      let l = {};
      typeof s == "object" && Object.keys(s).length > 0 && (l = JSON.parse(JSON.stringify(s)));
      for (let h in l)
        (Array.isArray(l[h]) || typeof l[h] == "object") && (l[h] = JSON.stringify(l[h]));
      return l;
    };
    let m = new ee({});
    m.increment(I(n.resourceData));
    const y = c(() => j([], a.value)), E = c(() => {
      let s = [];
      for (let l in e)
        l.startsWith("icon-") && y.value.includes(l.substring(5)) && s.push(l);
      return s;
    }), g = () => {
      if (!n.resource)
        return;
      let s = m.getData();
      i("loading"), te(n.resource, s).then((l) => {
        m.turnStoredIntoOriginal(), a.value = l.data, i("results", l.data), i("response", l);
      }).catch((l) => {
        i("error", l);
      });
    }, D = () => {
      i("click-outside");
    };
    return b(() => n.modelValue, (s) => {
      a.value = s;
    }, { deep: !0 }), b(a, (s) => {
      i("update:modelValue", s);
    }, { deep: !0 }), g(), (s, l) => (u(), d("div", ie, [
      O("div", ae, [
        (u(!0), d(T, null, S(a.value, (h, _) => (u(), R(ue, {
          modelValue: a.value[_],
          "onUpdate:modelValue": (p) => a.value[_] = p,
          key: h.key
        }, W({ _: 2 }, [
          S(E.value, (p) => ({
            name: p,
            fn: w(() => [
              L(s.$slots, p)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      O("div", {
        class: "lkt-menu-outside",
        onClick: D
      })
    ]));
  }
}), fe = {
  install: (o) => {
    o.component("lkt-menu") === void 0 && o.component("lkt-menu", ce);
  }
}, ke = (o, t, n) => X(new x(o, t, n)), ye = (o) => (k.toggleSlot = o, !0);
export {
  x as MenuEntry,
  ke as createMenuEntry,
  fe as default,
  ye as setMenuToggleSlot
};
