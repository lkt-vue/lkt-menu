import { defineComponent as Q, ref as T, useSlots as X, computed as d, watch as O, onMounted as Y, resolveComponent as B, createElementBlock as c, openBlock as u, normalizeClass as g, createElementVNode as _, createCommentVNode as y, createBlock as f, unref as v, normalizeProps as W, mergeProps as K, createSlots as H, withCtx as h, renderSlot as k, toDisplayString as x, resolveDynamicComponent as ee, Fragment as Z, renderList as U, mergeDefaults as te } from "vue";
import { MenuEntryType as R, MenuController as G, getDefaultValues as le, Menu as ne } from "lkt-vue-kernel";
import { useRouter as oe } from "vue-router";
import { DataState as ue } from "lkt-data-state";
import { httpCall as se } from "lkt-http-client";
const q = (a, V) => (V.forEach((s) => {
  s.key && !a.includes(s.key) && a.push(s.key), s.children && s.children.length > 0 && q(a, s.children);
}), a), w = class w {
};
w.toggleSlot = "", w.debugEnabled = !1;
let A = w;
const ae = { class: "lkt-menu-entry-main" }, re = { class: "lkt-entry-content" }, ie = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ce = {
  key: 1,
  class: "lkt-menu-entry-text"
}, de = {
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
    const s = V, p = a, e = T(p.modelValue), i = X(), r = oe(), M = T(!1), D = () => {
      e.value.isOpened = !e.value.isOpened;
    }, b = () => {
      var t, l;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && D(), typeof ((l = e.value.events) == null ? void 0 : l.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, N = d(() => i["icon-" + e.value.key] || e.value.icon !== ""), F = d(() => {
      let t = [];
      return N.value && t.push("has-icon"), M.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), J = d(() => {
      var l;
      return q([], ((l = e.value) == null ? void 0 : l.children) ?? []);
    }), L = d(() => {
      let t = [];
      for (let l in i)
        l.startsWith("icon-") && J.value.includes(l.substring(5)) && t.push(l);
      return t;
    }), E = d(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), n = d(() => !!A.toggleSlot), o = d(() => A.toggleSlot);
    return O(() => p.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), O(e, (t) => {
      s("update:modelValue", t);
    }, { deep: !0 }), Y(() => {
      var l, m, I;
      let t = r == null ? void 0 : r.currentRoute;
      if (t) {
        if (t.value.path === ((l = e.value.anchor) == null ? void 0 : l.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((m = e.value.children) == null ? void 0 : m.length) > 0) {
          let C = !1;
          (I = e.value.children) == null || I.forEach((z) => {
            var S;
            t.value.path === ((S = z.anchor) == null ? void 0 : S.to) && (C = !0);
          }), C && (e.value.isOpened = !0);
        }
      }
    }), (t, l) => {
      var S;
      const m = B("lkt-button"), I = B("lkt-header"), C = B("lkt-anchor"), z = B("menu-item", !0);
      return u(), c("div", {
        class: g(["lkt-menu-entry", F.value])
      }, [
        _("div", ae, [
          e.value.type === v(R).Button ? (u(), f(m, W(K({ key: 0 }, e.value.button)), H({ _: 2 }, [
            v(i).tooltip ? {
              name: "tooltip",
              fn: h(() => [
                k(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            v(i).split ? {
              name: "split",
              fn: h(() => [
                k(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === v(R).Header ? (u(), f(I, W(K({ key: 1 }, e.value.header)), null, 16)) : e.value.type === v(R).Anchor ? (u(), f(C, W(K({ key: 2 }, e.value.anchor)), null, 16)) : (u(), f(C, K({ key: 3 }, e.value.anchor, {
            "on-click": b,
            "is-active": E.value,
            onActive: l[0] || (l[0] = ($) => M.value = $)
          }), {
            text: h(({ text: $ }) => [
              _("div", re, [
                N.value ? (u(), c("div", ie, [
                  v(i)["icon-" + e.value.key] ? k(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), c("i", {
                    key: 1,
                    class: g(e.value.icon)
                  }, null, 2)) : y("", !0)
                ])) : y("", !0),
                $ !== "" ? (u(), c("div", ce, x($), 1)) : y("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== v(R).Button && e.value.children && ((S = e.value.children) == null ? void 0 : S.length) > 0 ? (u(), c("div", {
            key: 4,
            class: "lkt-menu-entry-toggle",
            onClick: D
          }, [
            n.value ? (u(), f(ee(o.value), {
              key: 0,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), c("div", {
              key: 1,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, l[1] || (l[1] = [
              _("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : y("", !0)
        ]),
        e.value.isOpened ? (u(), c("div", de, [
          (u(!0), c(Z, null, U(e.value.children, ($, P) => (u(), f(z, {
            modelValue: e.value.children[P],
            "onUpdate:modelValue": (j) => e.value.children[P] = j,
            key: e.value.children[P].key
          }, H({ _: 2 }, [
            U(L.value, (j) => ({
              name: j,
              fn: h(() => [
                k(t.$slots, j)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : y("", !0)
      ], 2);
    };
  }
}), pe = { class: "lkt-menu-main" }, me = { class: "lkt-menu-entries" }, ke = /* @__PURE__ */ Q({
  __name: "LktMenu",
  props: /* @__PURE__ */ te({
    modelValue: {},
    type: {},
    menuKey: { type: [String, Number, Function] },
    http: {}
  }, le(ne)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(a, { emit: V }) {
    var E;
    const s = a, p = V, e = T(!1), i = X(), r = T(s.modelValue), M = (n) => {
      let o = {};
      typeof n == "object" && Object.keys(n).length > 0 && (o = JSON.parse(JSON.stringify(n)));
      for (let t in o)
        (Array.isArray(o[t]) || typeof o[t] == "object") && (o[t] = JSON.stringify(o[t]));
      return o;
    };
    O(() => G.config.value, (n) => {
    }, { deep: !0 });
    const D = d(() => {
      let n = [];
      return e.value && n.push("is-visible"), n.join(" ");
    });
    let b = new ue({});
    b.increment(M(((E = s.http) == null ? void 0 : E.data) ?? {}));
    const N = d(() => q([], r.value)), F = d(() => {
      let n = [];
      for (let o in i)
        o.startsWith("icon-") && N.value.includes(o.substring(5)) && n.push(o);
      return n;
    }), J = () => {
      var o, t;
      if (!((o = s.http) != null && o.resource)) return;
      let n = b.getData();
      p("loading"), se((t = s.http) == null ? void 0 : t.resource, n).then((l) => {
        b.turnStoredIntoOriginal(), r.value = l.data, p("results", l.data), p("response", l);
      }).catch((l) => {
        p("error", l);
      });
    }, L = () => {
      p("click-outside");
    };
    return O(() => s.modelValue, (n) => {
      r.value = n;
    }, { deep: !0 }), O(r, (n) => {
      p("update:modelValue", n);
    }, { deep: !0 }), Y(() => {
      G.addMenu(s.menuKey, e), J();
    }), (n, o) => (u(), c("div", {
      class: g(["lkt-menu", D.value])
    }, [
      _("div", pe, [
        v(i).before ? k(n.$slots, "before", { key: 0 }) : y("", !0),
        _("div", me, [
          (u(!0), c(Z, null, U(r.value, (t, l) => (u(), f(ve, {
            modelValue: r.value[l],
            "onUpdate:modelValue": (m) => r.value[l] = m,
            class: g(t.class)
          }, H({ _: 2 }, [
            U(F.value, (m) => ({
              name: m,
              fn: h(() => [
                k(n.$slots, m)
              ])
            })),
            v(i)[`tooltip-${t.key}`] ? {
              name: "tooltip",
              fn: h(() => [
                k(n.$slots, `tooltip-${t.key}`)
              ]),
              key: "0"
            } : void 0,
            v(i)[`split-${t.key}`] ? {
              name: "split",
              fn: h(() => [
                k(n.$slots, `split-${t.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class"]))), 256))
        ])
      ]),
      _("div", {
        class: "lkt-menu-outside",
        onClick: L
      })
    ], 2));
  }
}), Ve = {
  install: (a) => {
    a.component("lkt-menu") === void 0 && a.component("lkt-menu", ke);
  }
}, be = (a) => (A.toggleSlot = a, !0);
export {
  Ve as default,
  be as setMenuToggleSlot
};
