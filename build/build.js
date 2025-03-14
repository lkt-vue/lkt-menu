import { defineComponent as K, ref as R, useSlots as T, computed as i, watch as M, onMounted as G, resolveComponent as J, createElementBlock as c, openBlock as r, normalizeClass as D, createElementVNode as A, createCommentVNode as h, createVNode as H, withCtx as j, renderSlot as x, unref as P, toDisplayString as Q, createBlock as L, resolveDynamicComponent as X, Fragment as F, renderList as E, createSlots as W, mergeDefaults as Y, reactive as Z } from "vue";
import { MenuEntry as z, extractI18nValue as ee, getDefaultValues as te, Menu as le } from "lkt-vue-kernel";
import { MenuEntry as be } from "lkt-vue-kernel";
import { useRouter as ne } from "vue-router";
import { DataState as ue } from "lkt-data-state";
import { httpCall as oe } from "lkt-http-client";
const U = (u, m) => (m.forEach((o) => {
  u.includes(o.key) || u.push(o.key), o.children.length > 0 && U(u, o.children);
}), u), I = class I {
};
I.toggleSlot = "", I.debugEnabled = !1;
let y = I;
const re = { class: "lkt-menu-entry-main" }, ae = { class: "lkt-entry-content" }, se = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ie = {
  key: 1,
  class: "lkt-menu-entry-text"
}, ce = {
  key: 0,
  class: "lkt-menu-entry-children"
}, de = /* @__PURE__ */ K({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new z() }
  },
  emits: [
    "update:modelValue"
  ],
  setup(u, { emit: m }) {
    const o = m, d = u, e = R(d.modelValue), s = T(), k = ne(), p = R(!1), g = () => {
      e.value.isOpened = !e.value.isOpened;
    }, N = () => {
      var t, a;
      return ((t = e.value.children) == null ? void 0 : t.length) > 0 && g(), typeof ((a = e.value.events) == null ? void 0 : a.click) == "function" ? (e.value.events.click({
        entry: e.value
      }), 1) : (typeof e.value.onClick == "function" && e.value.onClick({
        entry: e.value
      }), 1);
    }, _ = i(() => s["icon-" + e.value.key] || e.value.icon !== ""), $ = i(() => {
      let t = [];
      return _.value && t.push("has-icon"), p.value && t.push("is-active"), t.join(" ");
    }), n = i(() => U([], e.value.children)), l = i(() => {
      let t = [];
      for (let a in s)
        a.startsWith("icon-") && n.value.includes(a.substring(5)) && t.push(a);
      return t;
    }), v = i(() => ee(e.value.label)), V = i(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), f = i(() => !!y.toggleSlot), q = i(() => y.toggleSlot);
    return M(() => d.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), M(e, (t) => {
      o("update:modelValue", t);
    }, { deep: !0 }), G(() => {
      var a, C;
      let t = k == null ? void 0 : k.currentRoute;
      if (t) {
        if (t.value.path === e.value.href)
          e.value.isOpened = !0;
        else if (((a = e.value.children) == null ? void 0 : a.length) > 0) {
          let S = !1;
          (C = e.value.children) == null || C.forEach((O) => {
            t.value.path === O.href && (S = !0);
          }), S && (e.value.isOpened = !0);
        }
      }
    }), (t, a) => {
      var O;
      const C = J("lkt-anchor"), S = J("menu-item", !0);
      return r(), c("div", {
        class: D(["lkt-menu-entry", $.value])
      }, [
        A("div", re, [
          H(C, {
            to: e.value.href,
            "on-click": N,
            "is-active": V.value,
            onActive: a[0] || (a[0] = (B) => p.value = B)
          }, {
            default: j(() => [
              A("div", ae, [
                _.value ? (r(), c("div", se, [
                  P(s)["icon-" + e.value.key] ? x(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (r(), c("i", {
                    key: 1,
                    class: D(e.value.icon)
                  }, null, 2)) : h("", !0)
                ])) : h("", !0),
                e.value.label !== "" ? (r(), c("div", ie, Q(v.value), 1)) : h("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          ((O = e.value.children) == null ? void 0 : O.length) > 0 ? (r(), c("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: g
          }, [
            f.value ? (r(), L(X(q.value), {
              key: 0,
              class: D(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (r(), c("div", {
              key: 1,
              class: D(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", e.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : h("", !0)
        ]),
        e.value.isOpened ? (r(), c("div", ce, [
          (r(!0), c(F, null, E(e.value.children, (B, w) => (r(), L(S, {
            modelValue: e.value.children[w],
            "onUpdate:modelValue": (b) => e.value.children[w] = b,
            key: e.value.children[w].key
          }, W({ _: 2 }, [
            E(l.value, (b) => ({
              name: b,
              fn: j(() => [
                x(t.$slots, b)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : h("", !0)
      ], 2);
    };
  }
}), ve = { class: "lkt-menu-container" }, me = { class: "lkt-menu" }, pe = /* @__PURE__ */ K({
  __name: "LktMenu",
  props: /* @__PURE__ */ Y({
    modelValue: {},
    resource: {},
    resourceData: {}
  }, te(le)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(u, { emit: m }) {
    const o = u, d = m, e = T(), s = R(o.modelValue), k = (n) => {
      let l = {};
      typeof n == "object" && Object.keys(n).length > 0 && (l = JSON.parse(JSON.stringify(n)));
      for (let v in l)
        (Array.isArray(l[v]) || typeof l[v] == "object") && (l[v] = JSON.stringify(l[v]));
      return l;
    };
    let p = new ue({});
    p.increment(k(o.resourceData));
    const g = i(() => U([], s.value)), N = i(() => {
      let n = [];
      for (let l in e)
        l.startsWith("icon-") && g.value.includes(l.substring(5)) && n.push(l);
      return n;
    }), _ = () => {
      if (!o.resource) return;
      let n = p.getData();
      d("loading"), oe(o.resource, n).then((l) => {
        p.turnStoredIntoOriginal(), s.value = l.data, d("results", l.data), d("response", l);
      }).catch((l) => {
        d("error", l);
      });
    }, $ = () => {
      d("click-outside");
    };
    return M(() => o.modelValue, (n) => {
      s.value = n;
    }, { deep: !0 }), M(s, (n) => {
      d("update:modelValue", n);
    }, { deep: !0 }), _(), (n, l) => (r(), c("div", ve, [
      A("div", me, [
        (r(!0), c(F, null, E(s.value, (v, V) => (r(), L(de, {
          modelValue: s.value[V],
          "onUpdate:modelValue": (f) => s.value[V] = f,
          key: v.key
        }, W({ _: 2 }, [
          E(N.value, (f) => ({
            name: f,
            fn: j(() => [
              x(n.$slots, f)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      A("div", {
        class: "lkt-menu-outside",
        onClick: $
      })
    ]));
  }
}), _e = {
  install: (u) => {
    u.component("lkt-menu") === void 0 && u.component("lkt-menu", pe);
  }
}, Ve = (u, m, o) => Z(new z({
  key: u,
  href: m,
  label: o
})), Ce = (u) => (y.toggleSlot = u, !0);
export {
  be as MenuEntry,
  Ve as createMenuEntry,
  _e as default,
  Ce as setMenuToggleSlot
};
