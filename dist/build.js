import { defineComponent as G, ref as W, useSlots as Q, computed as m, watch as U, onMounted as Y, resolveComponent as R, createElementBlock as d, openBlock as u, normalizeClass as O, createElementVNode as _, createCommentVNode as g, createBlock as h, unref as v, normalizeProps as P, mergeProps as j, createSlots as H, withCtx as f, renderSlot as k, toDisplayString as Z, resolveDynamicComponent as x, Fragment as X, renderList as w, mergeDefaults as ee } from "vue";
import { MenuEntryType as T, getDefaultValues as te, Menu as le } from "lkt-vue-kernel";
import { useRouter as ne } from "vue-router";
import { DataState as oe } from "lkt-data-state";
import { httpCall as ue } from "lkt-http-client";
const q = (r, V) => (V.forEach((a) => {
  a.key && !r.includes(a.key) && r.push(a.key), a.children && a.children.length > 0 && q(r, a.children);
}), r), J = class J {
};
J.toggleSlot = "", J.debugEnabled = !1;
let A = J;
const se = { class: "lkt-menu-entry-main" }, ae = { class: "lkt-entry-content" }, re = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ie = {
  key: 1,
  class: "lkt-menu-entry-text"
}, ce = {
  key: 0,
  class: "lkt-menu-entry-children"
}, de = /* @__PURE__ */ G({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => ({}) }
  },
  emits: [
    "update:modelValue"
  ],
  setup(r, { emit: V }) {
    const a = V, p = r, e = W(p.modelValue), i = Q(), $ = ne(), y = W(!1), D = () => {
      e.value.isOpened = !e.value.isOpened;
    }, K = () => {
      var t, o;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && D(), typeof ((o = e.value.events) == null ? void 0 : o.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, M = m(() => i["icon-" + e.value.key] || e.value.icon !== ""), L = m(() => {
      let t = [];
      return M.value && t.push("has-icon"), y.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), E = m(() => {
      var o;
      return q([], ((o = e.value) == null ? void 0 : o.children) ?? []);
    }), l = m(() => {
      let t = [];
      for (let o in i)
        o.startsWith("icon-") && E.value.includes(o.substring(5)) && t.push(o);
      return t;
    }), n = m(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), s = m(() => !!A.toggleSlot), c = m(() => A.toggleSlot);
    return U(() => p.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), U(e, (t) => {
      a("update:modelValue", t);
    }, { deep: !0 }), Y(() => {
      var o, I, B;
      let t = $ == null ? void 0 : $.currentRoute;
      if (t) {
        if (t.value.path === ((o = e.value.anchor) == null ? void 0 : o.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((I = e.value.children) == null ? void 0 : I.length) > 0) {
          let C = !1;
          (B = e.value.children) == null || B.forEach((z) => {
            var S;
            t.value.path === ((S = z.anchor) == null ? void 0 : S.to) && (C = !0);
          }), C && (e.value.isOpened = !0);
        }
      }
    }), (t, o) => {
      var S;
      const I = R("lkt-button"), B = R("lkt-header"), C = R("lkt-anchor"), z = R("menu-item", !0);
      return u(), d("div", {
        class: O(["lkt-menu-entry", L.value])
      }, [
        _("div", se, [
          e.value.type === v(T).Button ? (u(), h(I, P(j({ key: 0 }, e.value.button)), H({ _: 2 }, [
            v(i).tooltip ? {
              name: "tooltip",
              fn: f(() => [
                k(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            v(i).split ? {
              name: "split",
              fn: f(() => [
                k(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === v(T).Header ? (u(), h(B, P(j({ key: 1 }, e.value.header)), null, 16)) : e.value.type === v(T).Anchor ? (u(), h(C, P(j({ key: 2 }, e.value.anchor)), null, 16)) : (u(), h(C, j({ key: 3 }, e.value.anchor, {
            "on-click": K,
            "is-active": n.value,
            onActive: o[0] || (o[0] = (b) => y.value = b)
          }), {
            text: f(({ text: b }) => [
              _("div", ae, [
                M.value ? (u(), d("div", re, [
                  v(i)["icon-" + e.value.key] ? k(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), d("i", {
                    key: 1,
                    class: O(e.value.icon)
                  }, null, 2)) : g("", !0)
                ])) : g("", !0),
                b !== "" ? (u(), d("div", ie, Z(b), 1)) : g("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== v(T).Button && e.value.children && ((S = e.value.children) == null ? void 0 : S.length) > 0 ? (u(), d("div", {
            key: 4,
            class: "lkt-menu-entry-toggle",
            onClick: D
          }, [
            s.value ? (u(), h(x(c.value), {
              key: 0,
              class: O(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), d("div", {
              key: 1,
              class: O(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, o[1] || (o[1] = [
              _("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : g("", !0)
        ]),
        e.value.isOpened ? (u(), d("div", ce, [
          (u(!0), d(X, null, w(e.value.children, (b, F) => (u(), h(z, {
            modelValue: e.value.children[F],
            "onUpdate:modelValue": (N) => e.value.children[F] = N,
            key: e.value.children[F].key
          }, H({ _: 2 }, [
            w(l.value, (N) => ({
              name: N,
              fn: f(() => [
                k(t.$slots, N)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : g("", !0)
      ], 2);
    };
  }
}), ve = { class: "lkt-menu" }, pe = { class: "lkt-menu-main" }, me = { class: "lkt-menu-entries" }, ke = /* @__PURE__ */ G({
  __name: "LktMenu",
  props: /* @__PURE__ */ ee({
    modelValue: {},
    http: {}
  }, te(le)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(r, { emit: V }) {
    var E;
    const a = r, p = V, e = Q(), i = W(a.modelValue), $ = (l) => {
      let n = {};
      typeof l == "object" && Object.keys(l).length > 0 && (n = JSON.parse(JSON.stringify(l)));
      for (let s in n)
        (Array.isArray(n[s]) || typeof n[s] == "object") && (n[s] = JSON.stringify(n[s]));
      return n;
    };
    let y = new oe({});
    y.increment($(((E = a.http) == null ? void 0 : E.data) ?? {}));
    const D = m(() => q([], i.value)), K = m(() => {
      let l = [];
      for (let n in e)
        n.startsWith("icon-") && D.value.includes(n.substring(5)) && l.push(n);
      return l;
    }), M = () => {
      var n, s;
      if (!((n = a.http) != null && n.resource)) return;
      let l = y.getData();
      p("loading"), ue((s = a.http) == null ? void 0 : s.resource, l).then((c) => {
        y.turnStoredIntoOriginal(), i.value = c.data, p("results", c.data), p("response", c);
      }).catch((c) => {
        p("error", c);
      });
    }, L = () => {
      p("click-outside");
    };
    return U(() => a.modelValue, (l) => {
      i.value = l;
    }, { deep: !0 }), U(i, (l) => {
      p("update:modelValue", l);
    }, { deep: !0 }), M(), (l, n) => (u(), d("div", ve, [
      _("div", pe, [
        v(e).before ? k(l.$slots, "before", { key: 0 }) : g("", !0),
        _("div", me, [
          (u(!0), d(X, null, w(i.value, (s, c) => (u(), h(de, {
            modelValue: i.value[c],
            "onUpdate:modelValue": (t) => i.value[c] = t,
            key: s.key,
            class: O(s.class)
          }, H({ _: 2 }, [
            w(K.value, (t) => ({
              name: t,
              fn: f(() => [
                k(l.$slots, t)
              ])
            })),
            v(e)[`tooltip-${s.key}`] ? {
              name: "tooltip",
              fn: f(() => [
                k(l.$slots, `tooltip-${s.key}`)
              ]),
              key: "0"
            } : void 0,
            v(e)[`split-${s.key}`] ? {
              name: "split",
              fn: f(() => [
                k(l.$slots, `split-${s.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class"]))), 128))
        ])
      ]),
      _("div", {
        class: "lkt-menu-outside",
        onClick: L
      })
    ]));
  }
}), Ve = {
  install: (r) => {
    r.component("lkt-menu") === void 0 && r.component("lkt-menu", ke);
  }
}, $e = (r) => (A.toggleSlot = r, !0);
export {
  Ve as default,
  $e as setMenuToggleSlot
};
