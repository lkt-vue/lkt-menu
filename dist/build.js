import { defineComponent as Z, ref as L, useSlots as x, computed as c, watch as K, onMounted as ee, resolveComponent as I, createElementBlock as p, openBlock as u, normalizeClass as O, createElementVNode as V, createCommentVNode as C, createBlock as f, unref as r, normalizeProps as W, mergeProps as R, createSlots as q, withCtx as g, renderSlot as k, toDisplayString as le, resolveDynamicComponent as ne, Fragment as te, renderList as P, mergeDefaults as oe } from "vue";
import { MenuEntryType as T, MenuController as j, MenuType as Y, getDefaultValues as ue, Menu as se } from "lkt-vue-kernel";
import { useRouter as ie } from "vue-router";
import { DataState as ae } from "lkt-data-state";
import { httpCall as re } from "lkt-http-client";
const G = (s, b) => (b.forEach((o) => {
  o.key && !s.includes(o.key) && s.push(o.key), o.children && o.children.length > 0 && G(s, o.children);
}), s), U = class U {
};
U.toggleSlot = "", U.debugEnabled = !1;
let E = U;
const ce = ["id"], de = { class: "lkt-menu-entry-main" }, ve = { class: "lkt-entry-content" }, pe = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, me = {
  key: 1,
  class: "lkt-menu-entry-text"
}, ke = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ye = /* @__PURE__ */ Z({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => ({}) },
    menuKey: {},
    closeOnClickEntry: { type: Boolean }
  },
  emits: [
    "update:modelValue"
  ],
  setup(s, { emit: b }) {
    const o = b, d = s, e = L(d.modelValue), v = x(), a = ie(), A = L(!1), B = () => {
      e.value.isOpened = !e.value.isOpened;
    }, $ = () => {
      var t, l;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && B(), typeof ((l = e.value.events) == null ? void 0 : l.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, D = c(() => v["icon-" + e.value.key] || e.value.icon !== ""), w = c(() => {
      let t = [];
      return D.value && t.push("has-icon"), A.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), F = c(() => {
      var l;
      return G([], ((l = e.value) == null ? void 0 : l.children) ?? []);
    }), J = c(() => {
      let t = [];
      for (let l in v)
        l.startsWith("icon-") && F.value.includes(l.substring(5)) && t.push(l);
      return t;
    }), z = c(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), N = c(() => !!E.toggleSlot), n = c(() => E.toggleSlot);
    return K(() => d.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), K(e, (t) => {
      o("update:modelValue", t);
    }, { deep: !0 }), ee(() => {
      var l, i, m;
      let t = a == null ? void 0 : a.currentRoute;
      if (t) {
        if (t.value.path === ((l = e.value.anchor) == null ? void 0 : l.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((i = e.value.children) == null ? void 0 : i.length) > 0) {
          let S = !1;
          (m = e.value.children) == null || m.forEach((H) => {
            var M;
            t.value.path === ((M = H.anchor) == null ? void 0 : M.to) && (S = !0);
          }), S && (e.value.isOpened = !0);
        }
      }
    }), (t, l) => {
      var M;
      const i = I("lkt-button"), m = I("lkt-header"), S = I("lkt-anchor"), H = I("menu-item", !0);
      return u(), p("div", {
        class: O(["lkt-menu-entry", w.value]),
        id: `entry-${e.value.key}`
      }, [
        V("div", de, [
          e.value.type === r(T).Button ? (u(), f(i, W(R({ key: 0 }, e.value.button)), q({ _: 2 }, [
            r(v).tooltip ? {
              name: "tooltip",
              fn: g(() => [
                k(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            r(v).split ? {
              name: "split",
              fn: g(() => [
                k(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === r(T).Header ? (u(), f(m, W(R({ key: 1 }, e.value.header)), null, 16)) : e.value.type === r(T).Anchor ? (u(), f(S, W(R({ key: 2 }, {
            ...e.value.anchor
          })), null, 16)) : (u(), f(S, R({ key: 3 }, {
            ...e.value.anchor,
            events: {
              ...e.value.anchor.events,
              click: (y) => {
                var _, h, Q, X;
                t.closeOnClickEntry && r(j).closeMenu(d.menuKey), typeof ((h = (_ = e.value.anchor) == null ? void 0 : _.events) == null ? void 0 : h.click) == "function" && ((X = (Q = e.value.anchor) == null ? void 0 : Q.events) == null || X.click(y));
              }
            }
          }, {
            "on-click": $,
            "is-active": z.value,
            onActive: l[0] || (l[0] = (y) => A.value = y)
          }), {
            text: g(({ text: y }) => [
              V("div", ve, [
                D.value ? (u(), p("div", pe, [
                  r(v)["icon-" + e.value.key] ? k(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), p("i", {
                    key: 1,
                    class: O(e.value.icon)
                  }, null, 2)) : C("", !0)
                ])) : C("", !0),
                y !== "" ? (u(), p("div", me, le(y), 1)) : C("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== r(T).Button && e.value.children && ((M = e.value.children) == null ? void 0 : M.length) > 0 ? (u(), p("div", {
            key: 4,
            class: "lkt-menu-entry-toggle",
            onClick: B
          }, [
            N.value ? (u(), f(ne(n.value), {
              key: 0,
              class: O(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), p("div", {
              key: 1,
              class: O(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, l[1] || (l[1] = [
              V("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : C("", !0)
        ]),
        e.value.isOpened ? (u(), p("div", ke, [
          (u(!0), p(te, null, P(e.value.children, (y, _) => (u(), f(H, {
            modelValue: e.value.children[_],
            "onUpdate:modelValue": (h) => e.value.children[_] = h,
            key: e.value.children[_].key
          }, q({ _: 2 }, [
            P(J.value, (h) => ({
              name: h,
              fn: g(() => [
                k(t.$slots, h)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : C("", !0)
      ], 10, ce);
    };
  }
}), he = ["role"], fe = { class: "lkt-menu-main" }, ge = { class: "lkt-menu-entries" }, _e = /* @__PURE__ */ Z({
  __name: "LktMenu",
  props: /* @__PURE__ */ oe({
    modelValue: {},
    type: {},
    menuKey: { type: [String, Number, Function] },
    hiddenPosition: {},
    closeOnClickOutside: { type: Boolean },
    closeOnClickEntry: { type: Boolean },
    http: {}
  }, ue(se)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(s, { emit: b }) {
    var N;
    const o = s, d = b, e = L(!1), v = x(), a = L(o.modelValue), A = (n) => {
      let t = {};
      typeof n == "object" && Object.keys(n).length > 0 && (t = JSON.parse(JSON.stringify(n)));
      for (let l in t)
        (Array.isArray(t[l]) || typeof t[l] == "object") && (t[l] = JSON.stringify(t[l]));
      return t;
    };
    K(() => j.config.value, (n) => {
    }, { deep: !0 });
    const B = c(() => {
      let n = [
        `type-${o.type}`
      ];
      return o.menuKey && n.push(o.menuKey), e.value && n.push("is-visible"), o.type === Y.Hidden && n.push(`${o.hiddenPosition}-hidden`), n.join(" ");
    });
    let $ = new ae({});
    $.increment(A(((N = o.http) == null ? void 0 : N.data) ?? {}));
    const D = c(() => G([], a.value)), w = c(() => {
      let n = [];
      for (let t in v)
        t.startsWith("icon-") && D.value.includes(t.substring(5)) && n.push(t);
      return n;
    }), F = () => {
      var t, l;
      if (!((t = o.http) != null && t.resource)) return;
      let n = $.getData();
      d("loading"), re((l = o.http) == null ? void 0 : l.resource, n).then((i) => {
        $.turnStoredIntoOriginal(), a.value = i.data, d("results", i.data), d("response", i);
      }).catch((i) => {
        d("error", i);
      });
    }, J = () => {
      o.closeOnClickOutside && j.closeMenu(o.menuKey), d("click-outside");
    };
    K(() => o.modelValue, (n) => {
      a.value = n;
    }, { deep: !0 }), K(a, (n) => {
      d("update:modelValue", n);
    }, { deep: !0 }), ee(() => {
      j.addMenu(o.menuKey, e), F();
    });
    const z = c(() => {
      if (o.type === Y.TabList) return "tablist";
    });
    return (n, t) => (u(), p("div", {
      class: O(["lkt-menu", B.value]),
      role: z.value
    }, [
      V("div", fe, [
        r(v).before ? k(n.$slots, "before", { key: 0 }) : C("", !0),
        V("div", ge, [
          (u(!0), p(te, null, P(a.value, (l, i) => (u(), f(ye, {
            modelValue: a.value[i],
            "onUpdate:modelValue": (m) => a.value[i] = m,
            class: O(l.class),
            "menu-key": n.menuKey,
            "close-on-click-entry": n.closeOnClickEntry
          }, q({ _: 2 }, [
            P(w.value, (m) => ({
              name: m,
              fn: g(() => [
                k(n.$slots, m)
              ])
            })),
            r(v)[`tooltip-${l.key}`] ? {
              name: "tooltip",
              fn: g(() => [
                k(n.$slots, `tooltip-${l.key}`)
              ]),
              key: "0"
            } : void 0,
            r(v)[`split-${l.key}`] ? {
              name: "split",
              fn: g(() => [
                k(n.$slots, `split-${l.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class", "menu-key", "close-on-click-entry"]))), 256))
        ])
      ]),
      V("div", {
        class: "lkt-menu-outside",
        onClick: J
      })
    ], 10, he));
  }
}), Se = {
  install: (s) => {
    s.component("lkt-menu") === void 0 && s.component("lkt-menu", _e);
  }
}, Me = (s) => (E.toggleSlot = s, !0);
export {
  Se as default,
  Me as setMenuToggleSlot
};
