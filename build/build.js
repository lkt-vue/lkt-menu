import { defineComponent as J, ref as $, useSlots as K, computed as c, watch as O, onMounted as q, resolveComponent as B, openBlock as u, createElementBlock as d, normalizeClass as b, createElementVNode as S, createVNode as G, withCtx as w, unref as H, renderSlot as L, createCommentVNode as k, toDisplayString as P, createBlock as R, resolveDynamicComponent as Q, Fragment as T, renderList as A, createSlots as W, reactive as X } from "vue";
import { __ as Y } from "lkt-i18n";
import { useRouter as Z } from "vue-router";
import { DataState as ee } from "lkt-data-state";
import { httpCall as te } from "lkt-http-client";
class x {
  constructor(t, r, i) {
    this.key = "", this.href = "", this.label = "", this.icon = "", this.onClick = void 0, this.isActiveChecker = void 0, this.isOpened = !1, this.isActive = !1, this.parent = void 0, this.children = [], this.key = t, this.href = r, this.label = i;
  }
  setChildren(t) {
    return t.forEach((r) => r.parent = this), this.children = t, this;
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
const j = (o, t) => (t.forEach((r) => {
  o.includes(r.key) || o.push(r.key), r.children.length > 0 && j(o, r.children);
}), o), I = class I {
};
I.toggleSlot = "", I.debugEnabled = !1;
let y = I;
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
    const r = t, i = o, e = $(i.modelValue), a = K(), f = Z(), m = $(!1), g = () => {
      e.value.isOpened = !e.value.isOpened;
    }, E = () => (e.value.children.length > 0 && g(), typeof e.value.onClick == "function" && e.value.onClick({
      entry: e.value
    }), 1), _ = c(() => a["icon-" + e.value.key] || e.value.icon !== ""), D = c(() => {
      let n = [];
      return _.value && n.push("has-icon"), m.value && n.push("is-active"), n.join(" ");
    }), s = c(() => j([], e.value.children)), l = c(() => {
      let n = [];
      for (let v in a)
        v.startsWith("icon-") && s.value.includes(v.substring(5)) && n.push(v);
      return n;
    }), h = c(() => e.value.label.startsWith("__:") ? Y(e.value.label.substring(3)) : e.value.label), C = c(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), p = c(() => !!y.toggleSlot), F = c(() => y.toggleSlot);
    return O(() => i.modelValue, (n) => {
      e.value = n;
    }, { deep: !0 }), O(e, (n) => {
      r("update:modelValue", n);
    }, { deep: !0 }), q(() => {
      let n = f == null ? void 0 : f.currentRoute;
      if (n) {
        if (n.value.path === e.value.href)
          e.value.isOpened = !0;
        else if (e.value.children.length > 0) {
          let v = !1;
          e.value.children.forEach((M) => {
            n.value.path === M.href && (v = !0);
          }), v && (e.value.isOpened = !0);
        }
      }
    }), (n, v) => {
      const M = B("lkt-anchor"), z = B("menu-item", !0);
      return u(), d("div", {
        class: b(["lkt-menu-entry", D.value])
      }, [
        S("div", le, [
          G(M, {
            to: e.value.href,
            "on-click": E,
            "is-active": C.value,
            onActive: v[0] || (v[0] = (U) => m.value = U)
          }, {
            default: w(() => [
              S("div", ne, [
                _.value ? (u(), d("div", re, [
                  H(a)["icon-" + e.value.key] ? L(n.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), d("i", {
                    key: 1,
                    class: b(e.value.icon)
                  }, null, 2)) : k("", !0)
                ])) : k("", !0),
                e.value.label !== "" ? (u(), d("div", se, P(h.value), 1)) : k("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          e.value.children.length > 0 ? (u(), d("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: g
          }, [
            p.value ? (u(), R(Q(F.value), {
              key: 0,
              class: b(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), d("div", {
              key: 1,
              class: b(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : k("", !0)
        ]),
        e.value.isOpened ? (u(), d("div", oe, [
          (u(!0), d(T, null, A(e.value.children, (U, N) => (u(), R(z, {
            modelValue: e.value.children[N],
            "onUpdate:modelValue": (V) => e.value.children[N] = V,
            key: e.value.children[N].key
          }, W({ _: 2 }, [
            A(l.value, (V) => ({
              name: V,
              fn: w(() => [
                L(n.$slots, V)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : k("", !0)
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
    const r = o, i = t, e = K(), a = $(r.modelValue), f = (s) => {
      let l = {};
      typeof s == "object" && Object.keys(s).length > 0 && (l = JSON.parse(JSON.stringify(s)));
      for (let h in l)
        (Array.isArray(l[h]) || typeof l[h] == "object") && (l[h] = JSON.stringify(l[h]));
      return l;
    };
    let m = new ee({});
    m.increment(f(r.resourceData));
    const g = c(() => j([], a.value)), E = c(() => {
      let s = [];
      for (let l in e)
        l.startsWith("icon-") && g.value.includes(l.substring(5)) && s.push(l);
      return s;
    }), _ = () => {
      if (!r.resource) return;
      let s = m.getData();
      i("loading"), te(r.resource, s).then((l) => {
        m.turnStoredIntoOriginal(), a.value = l.data, i("results", l.data), i("response", l);
      }).catch((l) => {
        i("error", l);
      });
    }, D = () => {
      i("click-outside");
    };
    return O(() => r.modelValue, (s) => {
      a.value = s;
    }, { deep: !0 }), O(a, (s) => {
      i("update:modelValue", s);
    }, { deep: !0 }), _(), (s, l) => (u(), d("div", ie, [
      S("div", ae, [
        (u(!0), d(T, null, A(a.value, (h, C) => (u(), R(ue, {
          modelValue: a.value[C],
          "onUpdate:modelValue": (p) => a.value[C] = p,
          key: h.key
        }, W({ _: 2 }, [
          A(E.value, (p) => ({
            name: p,
            fn: w(() => [
              L(s.$slots, p)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      S("div", {
        class: "lkt-menu-outside",
        onClick: D
      })
    ]));
  }
}), fe = {
  install: (o) => {
    o.component("lkt-menu") === void 0 && o.component("lkt-menu", ce);
  }
}, ke = (o, t, r) => X(new x(o, t, r)), ye = (o) => (y.toggleSlot = o, !0);
export {
  x as MenuEntry,
  ke as createMenuEntry,
  fe as default,
  ye as setMenuToggleSlot
};
