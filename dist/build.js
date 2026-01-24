import { defineComponent as Z, ref as L, useSlots as x, computed as d, watch as M, onMounted as ee, resolveComponent as I, createElementBlock as r, openBlock as u, normalizeClass as C, createElementVNode as K, createCommentVNode as g, createBlock as f, unref as c, normalizeProps as W, mergeProps as R, createSlots as q, withCtx as _, renderSlot as y, toDisplayString as le, resolveDynamicComponent as ne, Fragment as te, renderList as P, mergeDefaults as oe } from "vue";
import { MenuEntryType as T, MenuController as j, MenuType as Y, getDefaultValues as ue, Menu as se } from "lkt-vue-kernel";
import { useRouter as ie } from "vue-router";
import { DataState as ae } from "lkt-data-state";
import { httpCall as re } from "lkt-http-client";
const G = (s, V) => (V.forEach((o) => {
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
}, ye = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ke = /* @__PURE__ */ Z({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => ({}) },
    menuKey: {},
    closeOnClickEntry: { type: Boolean }
  },
  emits: [
    "update:modelValue"
  ],
  setup(s, { emit: V }) {
    const o = V, v = s, e = L(v.modelValue), p = x(), a = ie(), A = L(!1), B = () => {
      e.value.isOpened = !e.value.isOpened;
    }, b = () => {
      var t, l;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && B(), typeof ((l = e.value.events) == null ? void 0 : l.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, D = d(() => p["icon-" + e.value.key] || e.value.icon !== ""), w = d(() => {
      let t = [];
      return D.value && t.push("has-icon"), A.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), F = d(() => {
      var l;
      return G([], ((l = e.value) == null ? void 0 : l.children) ?? []);
    }), J = d(() => {
      let t = [];
      for (let l in p)
        l.startsWith("icon-") && F.value.includes(l.substring(5)) && t.push(l);
      return t;
    }), z = d(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), N = d(() => !!E.toggleSlot), n = d(() => E.toggleSlot);
    return M(() => v.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), M(e, (t) => {
      o("update:modelValue", t);
    }, { deep: !0 }), ee(() => {
      var l, i, m;
      let t = a == null ? void 0 : a.currentRoute;
      if (t) {
        if (t.value.path === ((l = e.value.anchor) == null ? void 0 : l.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((i = e.value.children) == null ? void 0 : i.length) > 0) {
          let $ = !1;
          (m = e.value.children) == null || m.forEach((H) => {
            var S;
            t.value.path === ((S = H.anchor) == null ? void 0 : S.to) && ($ = !0);
          }), $ && (e.value.isOpened = !0);
        }
      }
    }), (t, l) => {
      var S;
      const i = I("lkt-button"), m = I("lkt-header"), $ = I("lkt-anchor"), H = I("menu-item", !0);
      return u(), r("div", {
        class: C(["lkt-menu-entry", w.value]),
        id: `entry-${e.value.key}`
      }, [
        K("div", de, [
          e.value.type === c(T).Button ? (u(), f(i, W(R({ key: 0 }, e.value.button)), q({ _: 2 }, [
            c(p).tooltip ? {
              name: "tooltip",
              fn: _(() => [
                y(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            c(p).split ? {
              name: "split",
              fn: _(() => [
                y(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === c(T).Header ? (u(), f(m, W(R({ key: 1 }, e.value.header)), null, 16)) : e.value.type === c(T).Anchor ? (u(), f($, W(R({ key: 2 }, {
            ...e.value.anchor
          })), null, 16)) : (u(), f($, R({ key: 3 }, {
            ...e.value.anchor,
            events: {
              ...e.value.anchor.events,
              click: (k) => {
                var O, h, Q, X;
                t.closeOnClickEntry && c(j).closeMenu(v.menuKey), typeof ((h = (O = e.value.anchor) == null ? void 0 : O.events) == null ? void 0 : h.click) == "function" && ((X = (Q = e.value.anchor) == null ? void 0 : Q.events) == null || X.click(k));
              }
            }
          }, {
            "on-click": b,
            "is-active": z.value,
            onActive: l[0] || (l[0] = (k) => A.value = k)
          }), {
            text: _(({ text: k }) => [
              K("div", ve, [
                D.value ? (u(), r("div", pe, [
                  c(p)["icon-" + e.value.key] ? y(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), r("i", {
                    key: 1,
                    class: C(e.value.icon)
                  }, null, 2)) : g("", !0)
                ])) : g("", !0),
                k !== "" ? (u(), r("div", me, le(k), 1)) : g("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== c(T).Button && e.value.children && ((S = e.value.children) == null ? void 0 : S.length) > 0 ? (u(), r("div", {
            key: 4,
            class: "lkt-menu-entry-toggle",
            onClick: B
          }, [
            N.value ? (u(), f(ne(n.value), {
              key: 0,
              class: C(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), r("div", {
              key: 1,
              class: C(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, l[1] || (l[1] = [
              K("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : g("", !0)
        ]),
        e.value.isOpened ? (u(), r("div", ye, [
          (u(!0), r(te, null, P(e.value.children, (k, O) => (u(), f(H, {
            modelValue: e.value.children[O],
            "onUpdate:modelValue": (h) => e.value.children[O] = h,
            key: e.value.children[O].key
          }, q({ _: 2 }, [
            P(J.value, (h) => ({
              name: h,
              fn: _(() => [
                y(t.$slots, h)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : g("", !0)
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
    renderOutside: { type: Boolean },
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
  setup(s, { emit: V }) {
    var N;
    const o = s, v = V, e = L(!1), p = x(), a = L(o.modelValue), A = (n) => {
      let t = {};
      typeof n == "object" && Object.keys(n).length > 0 && (t = JSON.parse(JSON.stringify(n)));
      for (let l in t)
        (Array.isArray(t[l]) || typeof t[l] == "object") && (t[l] = JSON.stringify(t[l]));
      return t;
    };
    M(() => j.config.value, (n) => {
    }, { deep: !0 });
    const B = d(() => {
      let n = [
        `type-${o.type}`
      ];
      return o.menuKey && n.push(o.menuKey), e.value && n.push("is-visible"), o.type === Y.Hidden && n.push(`${o.hiddenPosition}-hidden`), n.join(" ");
    });
    let b = new ae({});
    b.increment(A(((N = o.http) == null ? void 0 : N.data) ?? {}));
    const D = d(() => G([], a.value)), w = d(() => {
      let n = [];
      for (let t in p)
        t.startsWith("icon-") && D.value.includes(t.substring(5)) && n.push(t);
      return n;
    }), F = () => {
      var t, l;
      if (!((t = o.http) != null && t.resource)) return;
      let n = b.getData();
      v("loading"), re((l = o.http) == null ? void 0 : l.resource, n).then((i) => {
        b.turnStoredIntoOriginal(), a.value = i.data, v("results", i.data), v("response", i);
      }).catch((i) => {
        v("error", i);
      });
    }, J = () => {
      o.closeOnClickOutside && j.closeMenu(o.menuKey), v("click-outside");
    };
    M(() => o.modelValue, (n) => {
      a.value = n;
    }, { deep: !0 }), M(a, (n) => {
      v("update:modelValue", n);
    }, { deep: !0 }), ee(() => {
      j.addMenu(o.menuKey, e), F();
    });
    const z = d(() => {
      if (o.type === Y.TabList) return "tablist";
    });
    return (n, t) => (u(), r("div", {
      class: C(["lkt-menu", B.value]),
      role: z.value
    }, [
      K("div", fe, [
        c(p).before ? y(n.$slots, "before", { key: 0 }) : g("", !0),
        K("div", ge, [
          (u(!0), r(te, null, P(a.value, (l, i) => (u(), f(ke, {
            modelValue: a.value[i],
            "onUpdate:modelValue": (m) => a.value[i] = m,
            class: C(l.class),
            "menu-key": n.menuKey,
            "close-on-click-entry": n.closeOnClickEntry
          }, q({ _: 2 }, [
            P(w.value, (m) => ({
              name: m,
              fn: _(() => [
                y(n.$slots, m)
              ])
            })),
            c(p)[`tooltip-${l.key}`] ? {
              name: "tooltip",
              fn: _(() => [
                y(n.$slots, `tooltip-${l.key}`)
              ]),
              key: "0"
            } : void 0,
            c(p)[`split-${l.key}`] ? {
              name: "split",
              fn: _(() => [
                y(n.$slots, `split-${l.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class", "menu-key", "close-on-click-entry"]))), 256))
        ])
      ]),
      n.renderOutside ? (u(), r("div", {
        key: 0,
        class: "lkt-menu-outside",
        onClick: J
      })) : g("", !0)
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
