import { defineComponent as G, ref as F, useSlots as H, computed as p, watch as R, onMounted as X, resolveComponent as K, createElementBlock as d, openBlock as a, normalizeClass as $, createElementVNode as b, createCommentVNode as S, createBlock as g, unref as k, normalizeProps as q, mergeProps as L, createSlots as P, withCtx as f, renderSlot as h, toDisplayString as Y, resolveDynamicComponent as Z, Fragment as Q, renderList as j, mergeDefaults as x } from "vue";
import { MenuEntryType as z, getDefaultValues as ee, Menu as te } from "lkt-vue-kernel";
import { useRouter as le } from "vue-router";
import { DataState as ne } from "lkt-data-state";
import { httpCall as oe } from "lkt-http-client";
const W = (r, _) => (_.forEach((s) => {
  s.key && !r.includes(s.key) && r.push(s.key), s.children && s.children.length > 0 && W(r, s.children);
}), r), T = class T {
};
T.toggleSlot = "", T.debugEnabled = !1;
let O = T;
const ue = { class: "lkt-menu-entry-main" }, ae = { class: "lkt-entry-content" }, se = {
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
  setup(r, { emit: _ }) {
    const s = _, v = r, e = F(v.modelValue), i = H(), V = le(), y = F(!1), A = () => {
      e.value.isOpened = !e.value.isOpened;
    }, U = () => {
      var t, o;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && A(), typeof ((o = e.value.events) == null ? void 0 : o.click) == "function" ? (e.value.events.click({
        entry: e.value
      }), 1) : (typeof e.value.onClick == "function" && e.value.onClick({
        entry: e.value
      }), 1);
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
      s("update:modelValue", t);
    }, { deep: !0 }), X(() => {
      var o, E, C;
      let t = V == null ? void 0 : V.currentRoute;
      if (t) {
        if (t.value.path === ((o = e.value.anchor) == null ? void 0 : o.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((E = e.value.children) == null ? void 0 : E.length) > 0) {
          let I = !1;
          (C = e.value.children) == null || C.forEach((B) => {
            var m;
            t.value.path === ((m = B.anchor) == null ? void 0 : m.to) && (I = !0);
          }), I && (e.value.isOpened = !0);
        }
      }
    }), (t, o) => {
      var B;
      const E = K("lkt-button"), C = K("lkt-anchor"), I = K("menu-item", !0);
      return a(), d("div", {
        class: $(["lkt-menu-entry", w.value])
      }, [
        b("div", ue, [
          e.value.type === k(z).Button ? (a(), g(E, q(L({ key: 0 }, e.value.button)), P({ _: 2 }, [
            k(i).tooltip ? {
              name: "tooltip",
              fn: f(() => [
                h(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            k(i).split ? {
              name: "split",
              fn: f(() => [
                h(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === k(z).Anchor ? (a(), g(C, q(L({ key: 1 }, e.value.anchor)), null, 16)) : (a(), g(C, L({ key: 2 }, e.value.anchor, {
            "on-click": U,
            "is-active": n.value,
            onActive: o[0] || (o[0] = (m) => y.value = m)
          }), {
            text: f(({ text: m }) => [
              b("div", ae, [
                D.value ? (a(), d("div", se, [
                  k(i)["icon-" + e.value.key] ? h(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (a(), d("i", {
                    key: 1,
                    class: $(e.value.icon)
                  }, null, 2)) : S("", !0)
                ])) : S("", !0),
                m !== "" ? (a(), d("div", re, Y(m), 1)) : S("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== k(z).Button && e.value.children && ((B = e.value.children) == null ? void 0 : B.length) > 0 ? (a(), d("div", {
            key: 3,
            class: "lkt-menu-entry-toggle",
            onClick: A
          }, [
            u.value ? (a(), g(Z(c.value), {
              key: 0,
              class: $(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (a(), d("div", {
              key: 1,
              class: $(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, o[1] || (o[1] = [
              b("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : S("", !0)
        ]),
        e.value.isOpened ? (a(), d("div", ie, [
          (a(!0), d(Q, null, j(e.value.children, (m, J) => (a(), g(I, {
            modelValue: e.value.children[J],
            "onUpdate:modelValue": (N) => e.value.children[J] = N,
            key: e.value.children[J].key
          }, P({ _: 2 }, [
            j(l.value, (N) => ({
              name: N,
              fn: f(() => [
                h(t.$slots, N)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : S("", !0)
      ], 2);
    };
  }
}), de = { class: "lkt-menu-container" }, ve = { class: "lkt-menu" }, pe = /* @__PURE__ */ G({
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
  setup(r, { emit: _ }) {
    var M;
    const s = r, v = _, e = H(), i = F(s.modelValue), V = (l) => {
      let n = {};
      typeof l == "object" && Object.keys(l).length > 0 && (n = JSON.parse(JSON.stringify(l)));
      for (let u in n)
        (Array.isArray(n[u]) || typeof n[u] == "object") && (n[u] = JSON.stringify(n[u]));
      return n;
    };
    let y = new ne({});
    y.increment(V(((M = s.http) == null ? void 0 : M.data) ?? {}));
    const A = p(() => W([], i.value)), U = p(() => {
      let l = [];
      for (let n in e)
        n.startsWith("icon-") && A.value.includes(n.substring(5)) && l.push(n);
      return l;
    }), D = () => {
      var n, u;
      if (!((n = s.http) != null && n.resource)) return;
      let l = y.getData();
      v("loading"), oe((u = s.http) == null ? void 0 : u.resource, l).then((c) => {
        y.turnStoredIntoOriginal(), i.value = c.data, v("results", c.data), v("response", c);
      }).catch((c) => {
        v("error", c);
      });
    }, w = () => {
      v("click-outside");
    };
    return R(() => s.modelValue, (l) => {
      i.value = l;
    }, { deep: !0 }), R(i, (l) => {
      v("update:modelValue", l);
    }, { deep: !0 }), D(), (l, n) => (a(), d("div", de, [
      b("div", ve, [
        (a(!0), d(Q, null, j(i.value, (u, c) => (a(), g(ce, {
          modelValue: i.value[c],
          "onUpdate:modelValue": (t) => i.value[c] = t,
          key: u.key,
          class: $(u.class)
        }, P({ _: 2 }, [
          j(U.value, (t) => ({
            name: t,
            fn: f(() => [
              h(l.$slots, t)
            ])
          })),
          k(e)[`tooltip-${u.key}`] ? {
            name: "tooltip",
            fn: f(() => [
              h(l.$slots, `tooltip-${u.key}`)
            ]),
            key: "0"
          } : void 0,
          k(e)[`split-${u.key}`] ? {
            name: "split",
            fn: f(() => [
              h(l.$slots, `split-${u.key}`)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["modelValue", "onUpdate:modelValue", "class"]))), 128))
      ]),
      b("div", {
        class: "lkt-menu-outside",
        onClick: w
      })
    ]));
  }
}), ge = {
  install: (r) => {
    r.component("lkt-menu") === void 0 && r.component("lkt-menu", pe);
  }
}, _e = (r) => (O.toggleSlot = r, !0);
export {
  ge as default,
  _e as setMenuToggleSlot
};
