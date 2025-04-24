import { defineComponent as G, ref as F, useSlots as H, computed as p, watch as R, onMounted as X, resolveComponent as K, createElementBlock as d, openBlock as s, normalizeClass as b, createElementVNode as V, createCommentVNode as g, createBlock as _, unref as m, normalizeProps as q, mergeProps as L, createSlots as P, withCtx as h, renderSlot as f, toDisplayString as Y, resolveDynamicComponent as Z, Fragment as Q, renderList as j, mergeDefaults as x } from "vue";
import { MenuEntryType as z, getDefaultValues as ee, Menu as te } from "lkt-vue-kernel";
import { useRouter as le } from "vue-router";
import { DataState as ne } from "lkt-data-state";
import { httpCall as oe } from "lkt-http-client";
const W = (r, $) => ($.forEach((a) => {
  a.key && !r.includes(a.key) && r.push(a.key), a.children && a.children.length > 0 && W(r, a.children);
}), r), T = class T {
};
T.toggleSlot = "", T.debugEnabled = !1;
let O = T;
const ue = { class: "lkt-menu-entry-main" }, se = { class: "lkt-entry-content" }, ae = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, re = {
  key: 1,
  class: "lkt-menu-entry-text"
}, ie = {
  key: 0,
  class: "lkt-menu-entry-children"
}, ce = /* @__PURE__ */ G({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => ({}) }
  },
  emits: [
    "update:modelValue"
  ],
  setup(r, { emit: $ }) {
    const a = $, v = r, e = F(v.modelValue), i = H(), C = le(), y = F(!1), A = () => {
      e.value.isOpened = !e.value.isOpened;
    }, U = () => {
      var t, o;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && A(), typeof ((o = e.value.events) == null ? void 0 : o.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, D = p(() => i["icon-" + e.value.key] || e.value.icon !== ""), w = p(() => {
      let t = [];
      return D.value && t.push("has-icon"), y.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), M = p(() => {
      var o;
      return W([], ((o = e.value) == null ? void 0 : o.children) ?? []);
    }), l = p(() => {
      let t = [];
      for (let o in i)
        o.startsWith("icon-") && M.value.includes(o.substring(5)) && t.push(o);
      return t;
    }), n = p(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), u = p(() => !!O.toggleSlot), c = p(() => O.toggleSlot);
    return R(() => v.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), R(e, (t) => {
      a("update:modelValue", t);
    }, { deep: !0 }), X(() => {
      var o, E, S;
      let t = C == null ? void 0 : C.currentRoute;
      if (t) {
        if (t.value.path === ((o = e.value.anchor) == null ? void 0 : o.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((E = e.value.children) == null ? void 0 : E.length) > 0) {
          let I = !1;
          (S = e.value.children) == null || S.forEach((B) => {
            var k;
            t.value.path === ((k = B.anchor) == null ? void 0 : k.to) && (I = !0);
          }), I && (e.value.isOpened = !0);
        }
      }
    }), (t, o) => {
      var B;
      const E = K("lkt-button"), S = K("lkt-anchor"), I = K("menu-item", !0);
      return s(), d("div", {
        class: b(["lkt-menu-entry", w.value])
      }, [
        V("div", ue, [
          e.value.type === m(z).Button ? (s(), _(E, q(L({ key: 0 }, e.value.button)), P({ _: 2 }, [
            m(i).tooltip ? {
              name: "tooltip",
              fn: h(() => [
                f(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            m(i).split ? {
              name: "split",
              fn: h(() => [
                f(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === m(z).Anchor ? (s(), _(S, q(L({ key: 1 }, e.value.anchor)), null, 16)) : (s(), _(S, L({ key: 2 }, e.value.anchor, {
            "on-click": U,
            "is-active": n.value,
            onActive: o[0] || (o[0] = (k) => y.value = k)
          }), {
            text: h(({ text: k }) => [
              V("div", se, [
                D.value ? (s(), d("div", ae, [
                  m(i)["icon-" + e.value.key] ? f(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (s(), d("i", {
                    key: 1,
                    class: b(e.value.icon)
                  }, null, 2)) : g("", !0)
                ])) : g("", !0),
                k !== "" ? (s(), d("div", re, Y(k), 1)) : g("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== m(z).Button && e.value.children && ((B = e.value.children) == null ? void 0 : B.length) > 0 ? (s(), d("div", {
            key: 3,
            class: "lkt-menu-entry-toggle",
            onClick: A
          }, [
            u.value ? (s(), _(Z(c.value), {
              key: 0,
              class: b(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (s(), d("div", {
              key: 1,
              class: b(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, o[1] || (o[1] = [
              V("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : g("", !0)
        ]),
        e.value.isOpened ? (s(), d("div", ie, [
          (s(!0), d(Q, null, j(e.value.children, (k, J) => (s(), _(I, {
            modelValue: e.value.children[J],
            "onUpdate:modelValue": (N) => e.value.children[J] = N,
            key: e.value.children[J].key
          }, P({ _: 2 }, [
            j(l.value, (N) => ({
              name: N,
              fn: h(() => [
                f(t.$slots, N)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : g("", !0)
      ], 2);
    };
  }
}), de = { class: "lkt-menu" }, ve = { class: "lkt-menu-main" }, pe = { class: "lkt-menu-entries" }, me = /* @__PURE__ */ G({
  __name: "LktMenu",
  props: /* @__PURE__ */ x({
    modelValue: {},
    http: {}
  }, ee(te)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(r, { emit: $ }) {
    var M;
    const a = r, v = $, e = H(), i = F(a.modelValue), C = (l) => {
      let n = {};
      typeof l == "object" && Object.keys(l).length > 0 && (n = JSON.parse(JSON.stringify(l)));
      for (let u in n)
        (Array.isArray(n[u]) || typeof n[u] == "object") && (n[u] = JSON.stringify(n[u]));
      return n;
    };
    let y = new ne({});
    y.increment(C(((M = a.http) == null ? void 0 : M.data) ?? {}));
    const A = p(() => W([], i.value)), U = p(() => {
      let l = [];
      for (let n in e)
        n.startsWith("icon-") && A.value.includes(n.substring(5)) && l.push(n);
      return l;
    }), D = () => {
      var n, u;
      if (!((n = a.http) != null && n.resource)) return;
      let l = y.getData();
      v("loading"), oe((u = a.http) == null ? void 0 : u.resource, l).then((c) => {
        y.turnStoredIntoOriginal(), i.value = c.data, v("results", c.data), v("response", c);
      }).catch((c) => {
        v("error", c);
      });
    }, w = () => {
      v("click-outside");
    };
    return R(() => a.modelValue, (l) => {
      i.value = l;
    }, { deep: !0 }), R(i, (l) => {
      v("update:modelValue", l);
    }, { deep: !0 }), D(), (l, n) => (s(), d("div", de, [
      V("div", ve, [
        m(e).before ? f(l.$slots, "before", { key: 0 }) : g("", !0),
        V("div", pe, [
          (s(!0), d(Q, null, j(i.value, (u, c) => (s(), _(ce, {
            modelValue: i.value[c],
            "onUpdate:modelValue": (t) => i.value[c] = t,
            key: u.key,
            class: b(u.class)
          }, P({ _: 2 }, [
            j(U.value, (t) => ({
              name: t,
              fn: h(() => [
                f(l.$slots, t)
              ])
            })),
            m(e)[`tooltip-${u.key}`] ? {
              name: "tooltip",
              fn: h(() => [
                f(l.$slots, `tooltip-${u.key}`)
              ]),
              key: "0"
            } : void 0,
            m(e)[`split-${u.key}`] ? {
              name: "split",
              fn: h(() => [
                f(l.$slots, `split-${u.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class"]))), 128))
        ])
      ]),
      V("div", {
        class: "lkt-menu-outside",
        onClick: w
      })
    ]));
  }
}), _e = {
  install: (r) => {
    r.component("lkt-menu") === void 0 && r.component("lkt-menu", me);
  }
}, Ve = (r) => (O.toggleSlot = r, !0);
export {
  _e as default,
  Ve as setMenuToggleSlot
};
