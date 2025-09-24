import { defineComponent as Q, ref as T, useSlots as X, computed as d, watch as S, onMounted as Y, resolveComponent as I, createElementBlock as c, openBlock as s, normalizeClass as g, createElementVNode as _, createCommentVNode as f, createBlock as y, unref as p, normalizeProps as H, mergeProps as j, createSlots as q, withCtx as h, renderSlot as k, toDisplayString as x, resolveDynamicComponent as ee, Fragment as Z, renderList as P, mergeDefaults as te } from "vue";
import { MenuEntryType as R, MenuController as W, MenuType as le, getDefaultValues as ne, Menu as oe } from "lkt-vue-kernel";
import { useRouter as ue } from "vue-router";
import { DataState as se } from "lkt-data-state";
import { httpCall as ae } from "lkt-http-client";
const G = (a, V) => (V.forEach((o) => {
  o.key && !a.includes(o.key) && a.push(o.key), o.children && o.children.length > 0 && G(a, o.children);
}), a), U = class U {
};
U.toggleSlot = "", U.debugEnabled = !1;
let M = U;
const ie = { class: "lkt-menu-entry-main" }, re = { class: "lkt-entry-content" }, ce = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, de = {
  key: 1,
  class: "lkt-menu-entry-text"
}, pe = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ve = /* @__PURE__ */ Q({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => ({}) }
  },
  emits: [
    "update:modelValue"
  ],
  setup(a, { emit: V }) {
    const o = V, v = a, e = T(v.modelValue), r = X(), i = ue(), A = T(!1), K = () => {
      e.value.isOpened = !e.value.isOpened;
    }, C = () => {
      var t, n;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && K(), typeof ((n = e.value.events) == null ? void 0 : n.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, D = d(() => r["icon-" + e.value.key] || e.value.icon !== ""), w = d(() => {
      let t = [];
      return D.value && t.push("has-icon"), A.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), F = d(() => {
      var n;
      return G([], ((n = e.value) == null ? void 0 : n.children) ?? []);
    }), J = d(() => {
      let t = [];
      for (let n in r)
        n.startsWith("icon-") && F.value.includes(n.substring(5)) && t.push(n);
      return t;
    }), N = d(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), l = d(() => !!M.toggleSlot), u = d(() => M.toggleSlot);
    return S(() => v.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), S(e, (t) => {
      o("update:modelValue", t);
    }, { deep: !0 }), Y(() => {
      var n, m, B;
      let t = i == null ? void 0 : i.currentRoute;
      if (t) {
        if (t.value.path === ((n = e.value.anchor) == null ? void 0 : n.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((m = e.value.children) == null ? void 0 : m.length) > 0) {
          let O = !1;
          (B = e.value.children) == null || B.forEach((L) => {
            var b;
            t.value.path === ((b = L.anchor) == null ? void 0 : b.to) && (O = !0);
          }), O && (e.value.isOpened = !0);
        }
      }
    }), (t, n) => {
      var b;
      const m = I("lkt-button"), B = I("lkt-header"), O = I("lkt-anchor"), L = I("menu-item", !0);
      return s(), c("div", {
        class: g(["lkt-menu-entry", w.value])
      }, [
        _("div", ie, [
          e.value.type === p(R).Button ? (s(), y(m, H(j({ key: 0 }, e.value.button)), q({ _: 2 }, [
            p(r).tooltip ? {
              name: "tooltip",
              fn: h(() => [
                k(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            p(r).split ? {
              name: "split",
              fn: h(() => [
                k(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === p(R).Header ? (s(), y(B, H(j({ key: 1 }, e.value.header)), null, 16)) : e.value.type === p(R).Anchor ? (s(), y(O, H(j({ key: 2 }, e.value.anchor)), null, 16)) : (s(), y(O, j({ key: 3 }, e.value.anchor, {
            "on-click": C,
            "is-active": N.value,
            onActive: n[0] || (n[0] = ($) => A.value = $)
          }), {
            text: h(({ text: $ }) => [
              _("div", re, [
                D.value ? (s(), c("div", ce, [
                  p(r)["icon-" + e.value.key] ? k(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (s(), c("i", {
                    key: 1,
                    class: g(e.value.icon)
                  }, null, 2)) : f("", !0)
                ])) : f("", !0),
                $ !== "" ? (s(), c("div", de, x($), 1)) : f("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== p(R).Button && e.value.children && ((b = e.value.children) == null ? void 0 : b.length) > 0 ? (s(), c("div", {
            key: 4,
            class: "lkt-menu-entry-toggle",
            onClick: K
          }, [
            l.value ? (s(), y(ee(u.value), {
              key: 0,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (s(), c("div", {
              key: 1,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, n[1] || (n[1] = [
              _("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : f("", !0)
        ]),
        e.value.isOpened ? (s(), c("div", pe, [
          (s(!0), c(Z, null, P(e.value.children, ($, z) => (s(), y(L, {
            modelValue: e.value.children[z],
            "onUpdate:modelValue": (E) => e.value.children[z] = E,
            key: e.value.children[z].key
          }, q({ _: 2 }, [
            P(J.value, (E) => ({
              name: E,
              fn: h(() => [
                k(t.$slots, E)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : f("", !0)
      ], 2);
    };
  }
}), me = { class: "lkt-menu-main" }, ke = { class: "lkt-menu-entries" }, ye = /* @__PURE__ */ Q({
  __name: "LktMenu",
  props: /* @__PURE__ */ te({
    modelValue: {},
    type: {},
    menuKey: { type: [String, Number, Function] },
    hiddenPosition: {},
    closeOnClickOutside: { type: Boolean },
    http: {}
  }, ne(oe)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(a, { emit: V }) {
    var N;
    const o = a, v = V, e = T(!1), r = X(), i = T(o.modelValue), A = (l) => {
      let u = {};
      typeof l == "object" && Object.keys(l).length > 0 && (u = JSON.parse(JSON.stringify(l)));
      for (let t in u)
        (Array.isArray(u[t]) || typeof u[t] == "object") && (u[t] = JSON.stringify(u[t]));
      return u;
    };
    S(() => W.config.value, (l) => {
    }, { deep: !0 });
    const K = d(() => {
      let l = [
        `type-${o.type}`
      ];
      return o.menuKey && l.push(o.menuKey), e.value && l.push("is-visible"), o.type === le.Hidden && l.push(`${o.hiddenPosition}-hidden`), l.join(" ");
    });
    let C = new se({});
    C.increment(A(((N = o.http) == null ? void 0 : N.data) ?? {}));
    const D = d(() => G([], i.value)), w = d(() => {
      let l = [];
      for (let u in r)
        u.startsWith("icon-") && D.value.includes(u.substring(5)) && l.push(u);
      return l;
    }), F = () => {
      var u, t;
      if (!((u = o.http) != null && u.resource)) return;
      let l = C.getData();
      v("loading"), ae((t = o.http) == null ? void 0 : t.resource, l).then((n) => {
        C.turnStoredIntoOriginal(), i.value = n.data, v("results", n.data), v("response", n);
      }).catch((n) => {
        v("error", n);
      });
    }, J = () => {
      o.closeOnClickOutside && W.closeMenu(o.menuKey), v("click-outside");
    };
    return S(() => o.modelValue, (l) => {
      i.value = l;
    }, { deep: !0 }), S(i, (l) => {
      v("update:modelValue", l);
    }, { deep: !0 }), Y(() => {
      W.addMenu(o.menuKey, e), F();
    }), (l, u) => (s(), c("div", {
      class: g(["lkt-menu", K.value])
    }, [
      _("div", me, [
        p(r).before ? k(l.$slots, "before", { key: 0 }) : f("", !0),
        _("div", ke, [
          (s(!0), c(Z, null, P(i.value, (t, n) => (s(), y(ve, {
            modelValue: i.value[n],
            "onUpdate:modelValue": (m) => i.value[n] = m,
            class: g(t.class)
          }, q({ _: 2 }, [
            P(w.value, (m) => ({
              name: m,
              fn: h(() => [
                k(l.$slots, m)
              ])
            })),
            p(r)[`tooltip-${t.key}`] ? {
              name: "tooltip",
              fn: h(() => [
                k(l.$slots, `tooltip-${t.key}`)
              ]),
              key: "0"
            } : void 0,
            p(r)[`split-${t.key}`] ? {
              name: "split",
              fn: h(() => [
                k(l.$slots, `split-${t.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class"]))), 256))
        ])
      ]),
      _("div", {
        class: "lkt-menu-outside",
        onClick: J
      })
    ], 2));
  }
}), Ce = {
  install: (a) => {
    a.component("lkt-menu") === void 0 && a.component("lkt-menu", ye);
  }
}, Oe = (a) => (M.toggleSlot = a, !0);
export {
  Ce as default,
  Oe as setMenuToggleSlot
};
