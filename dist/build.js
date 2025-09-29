import { defineComponent as X, ref as T, useSlots as Y, computed as r, watch as S, onMounted as Z, resolveComponent as E, createElementBlock as d, openBlock as u, normalizeClass as g, createElementVNode as _, createCommentVNode as f, createBlock as y, unref as p, normalizeProps as H, mergeProps as I, createSlots as q, withCtx as h, renderSlot as k, toDisplayString as ee, resolveDynamicComponent as te, Fragment as x, renderList as j, mergeDefaults as le } from "vue";
import { MenuEntryType as R, MenuController as W, MenuType as Q, getDefaultValues as ne, Menu as oe } from "lkt-vue-kernel";
import { useRouter as ue } from "vue-router";
import { DataState as se } from "lkt-data-state";
import { httpCall as ie } from "lkt-http-client";
const G = (s, V) => (V.forEach((o) => {
  o.key && !s.includes(o.key) && s.push(o.key), o.children && o.children.length > 0 && G(s, o.children);
}), s), L = class L {
};
L.toggleSlot = "", L.debugEnabled = !1;
let M = L;
const ae = ["id"], re = { class: "lkt-menu-entry-main" }, ce = { class: "lkt-entry-content" }, de = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, pe = {
  key: 1,
  class: "lkt-menu-entry-text"
}, ve = {
  key: 0,
  class: "lkt-menu-entry-children"
}, me = /* @__PURE__ */ X({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => ({}) }
  },
  emits: [
    "update:modelValue"
  ],
  setup(s, { emit: V }) {
    const o = V, v = s, e = T(v.modelValue), c = Y(), a = ue(), A = T(!1), K = () => {
      e.value.isOpened = !e.value.isOpened;
    }, b = () => {
      var t, l;
      return typeof e.value.children < "u" && ((t = e.value.children) == null ? void 0 : t.length) > 0 && !e.value.keepOpenOnChildClick && K(), typeof ((l = e.value.events) == null ? void 0 : l.click) == "function" && e.value.events.click({
        entry: e.value
      }), 1;
    }, D = r(() => c["icon-" + e.value.key] || e.value.icon !== ""), P = r(() => {
      let t = [];
      return D.value && t.push("has-icon"), A.value && t.push("is-active"), e.value.type && t.push(`is-${e.value.type}`), t.join(" ");
    }), U = r(() => {
      var l;
      return G([], ((l = e.value) == null ? void 0 : l.children) ?? []);
    }), w = r(() => {
      let t = [];
      for (let l in c)
        l.startsWith("icon-") && U.value.includes(l.substring(5)) && t.push(l);
      return t;
    }), F = r(() => e.value.isActive ? !0 : typeof e.value.isActiveChecker == "function" ? !!e.value.isActiveChecker({
      entry: e.value
    }) : !1), N = r(() => !!M.toggleSlot), n = r(() => M.toggleSlot);
    return S(() => v.modelValue, (t) => {
      e.value = t;
    }, { deep: !0 }), S(e, (t) => {
      o("update:modelValue", t);
    }, { deep: !0 }), Z(() => {
      var l, i, m;
      let t = a == null ? void 0 : a.currentRoute;
      if (t) {
        if (t.value.path === ((l = e.value.anchor) == null ? void 0 : l.to))
          e.value.isOpened = !0;
        else if (typeof e.value.children < "u" && ((i = e.value.children) == null ? void 0 : i.length) > 0) {
          let C = !1;
          (m = e.value.children) == null || m.forEach((J) => {
            var $;
            t.value.path === (($ = J.anchor) == null ? void 0 : $.to) && (C = !0);
          }), C && (e.value.isOpened = !0);
        }
      }
    }), (t, l) => {
      var $;
      const i = E("lkt-button"), m = E("lkt-header"), C = E("lkt-anchor"), J = E("menu-item", !0);
      return u(), d("div", {
        class: g(["lkt-menu-entry", P.value]),
        id: `entry-${e.value.key}`
      }, [
        _("div", re, [
          e.value.type === p(R).Button ? (u(), y(i, H(I({ key: 0 }, e.value.button)), q({ _: 2 }, [
            p(c).tooltip ? {
              name: "tooltip",
              fn: h(() => [
                k(t.$slots, "tooltip")
              ]),
              key: "0"
            } : void 0,
            p(c).split ? {
              name: "split",
              fn: h(() => [
                k(t.$slots, "split")
              ]),
              key: "1"
            } : void 0
          ]), 1040)) : e.value.type === p(R).Header ? (u(), y(m, H(I({ key: 1 }, e.value.header)), null, 16)) : e.value.type === p(R).Anchor ? (u(), y(C, H(I({ key: 2 }, e.value.anchor)), null, 16)) : (u(), y(C, I({ key: 3 }, e.value.anchor, {
            "on-click": b,
            "is-active": F.value,
            onActive: l[0] || (l[0] = (O) => A.value = O)
          }), {
            text: h(({ text: O }) => [
              _("div", ce, [
                D.value ? (u(), d("div", de, [
                  p(c)["icon-" + e.value.key] ? k(t.$slots, "icon-" + e.value.key, {
                    key: e.value.key,
                    entry: e.value
                  }) : e.value.icon !== "" ? (u(), d("i", {
                    key: 1,
                    class: g(e.value.icon)
                  }, null, 2)) : f("", !0)
                ])) : f("", !0),
                O !== "" ? (u(), d("div", pe, ee(O), 1)) : f("", !0)
              ])
            ]),
            _: 3
          }, 16, ["is-active"])),
          e.value.type !== p(R).Button && e.value.children && (($ = e.value.children) == null ? void 0 : $.length) > 0 ? (u(), d("div", {
            key: 4,
            class: "lkt-menu-entry-toggle",
            onClick: K
          }, [
            N.value ? (u(), y(te(n.value), {
              key: 0,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), d("div", {
              key: 1,
              class: g(["lkt-menu-entry-toggle-inner", e.value.isOpened ? "is-opened" : ""])
            }, l[1] || (l[1] = [
              _("i", { class: "lkt-icn-angle-bottom" }, null, -1)
            ]), 2))
          ])) : f("", !0)
        ]),
        e.value.isOpened ? (u(), d("div", ve, [
          (u(!0), d(x, null, j(e.value.children, (O, z) => (u(), y(J, {
            modelValue: e.value.children[z],
            "onUpdate:modelValue": (B) => e.value.children[z] = B,
            key: e.value.children[z].key
          }, q({ _: 2 }, [
            j(w.value, (B) => ({
              name: B,
              fn: h(() => [
                k(t.$slots, B)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : f("", !0)
      ], 10, ae);
    };
  }
}), ke = ["role"], ye = { class: "lkt-menu-main" }, he = { class: "lkt-menu-entries" }, fe = /* @__PURE__ */ X({
  __name: "LktMenu",
  props: /* @__PURE__ */ le({
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
  setup(s, { emit: V }) {
    var N;
    const o = s, v = V, e = T(!1), c = Y(), a = T(o.modelValue), A = (n) => {
      let t = {};
      typeof n == "object" && Object.keys(n).length > 0 && (t = JSON.parse(JSON.stringify(n)));
      for (let l in t)
        (Array.isArray(t[l]) || typeof t[l] == "object") && (t[l] = JSON.stringify(t[l]));
      return t;
    };
    S(() => W.config.value, (n) => {
    }, { deep: !0 });
    const K = r(() => {
      let n = [
        `type-${o.type}`
      ];
      return o.menuKey && n.push(o.menuKey), e.value && n.push("is-visible"), o.type === Q.Hidden && n.push(`${o.hiddenPosition}-hidden`), n.join(" ");
    });
    let b = new se({});
    b.increment(A(((N = o.http) == null ? void 0 : N.data) ?? {}));
    const D = r(() => G([], a.value)), P = r(() => {
      let n = [];
      for (let t in c)
        t.startsWith("icon-") && D.value.includes(t.substring(5)) && n.push(t);
      return n;
    }), U = () => {
      var t, l;
      if (!((t = o.http) != null && t.resource)) return;
      let n = b.getData();
      v("loading"), ie((l = o.http) == null ? void 0 : l.resource, n).then((i) => {
        b.turnStoredIntoOriginal(), a.value = i.data, v("results", i.data), v("response", i);
      }).catch((i) => {
        v("error", i);
      });
    }, w = () => {
      o.closeOnClickOutside && W.closeMenu(o.menuKey), v("click-outside");
    };
    S(() => o.modelValue, (n) => {
      a.value = n;
    }, { deep: !0 }), S(a, (n) => {
      v("update:modelValue", n);
    }, { deep: !0 }), Z(() => {
      W.addMenu(o.menuKey, e), U();
    });
    const F = r(() => {
      if (o.type === Q.TabList) return "tablist";
    });
    return (n, t) => (u(), d("div", {
      class: g(["lkt-menu", K.value]),
      role: F.value
    }, [
      _("div", ye, [
        p(c).before ? k(n.$slots, "before", { key: 0 }) : f("", !0),
        _("div", he, [
          (u(!0), d(x, null, j(a.value, (l, i) => (u(), y(me, {
            modelValue: a.value[i],
            "onUpdate:modelValue": (m) => a.value[i] = m,
            class: g(l.class)
          }, q({ _: 2 }, [
            j(P.value, (m) => ({
              name: m,
              fn: h(() => [
                k(n.$slots, m)
              ])
            })),
            p(c)[`tooltip-${l.key}`] ? {
              name: "tooltip",
              fn: h(() => [
                k(n.$slots, `tooltip-${l.key}`)
              ]),
              key: "0"
            } : void 0,
            p(c)[`split-${l.key}`] ? {
              name: "split",
              fn: h(() => [
                k(n.$slots, `split-${l.key}`)
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "class"]))), 256))
        ])
      ]),
      _("div", {
        class: "lkt-menu-outside",
        onClick: w
      })
    ], 10, ke));
  }
}), $e = {
  install: (s) => {
    s.component("lkt-menu") === void 0 && s.component("lkt-menu", fe);
  }
}, Oe = (s) => (M.toggleSlot = s, !0);
export {
  $e as default,
  Oe as setMenuToggleSlot
};
