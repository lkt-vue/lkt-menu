var Y = Object.defineProperty;
var Z = (e, t, l) => t in e ? Y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var n = (e, t, l) => Z(e, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as J, ref as B, useSlots as W, computed as m, watch as M, onMounted as ee, resolveComponent as K, createElementBlock as h, openBlock as u, normalizeClass as D, createElementVNode as E, createCommentVNode as g, createVNode as te, withCtx as U, renderSlot as z, unref as re, toDisplayString as le, createBlock as j, resolveDynamicComponent as ae, Fragment as q, renderList as I, createSlots as G, mergeDefaults as ne, reactive as oe } from "vue";
import "lkt-string-tools";
import { __ as se } from "lkt-i18n";
import { useRouter as ie } from "vue-router";
import { DataState as ue } from "lkt-data-state";
import { httpCall as ce } from "lkt-http-client";
var de = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e))(de || {}), ve = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(ve || {}), me = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], d, Q = (d = class {
  constructor(t) {
  }
  feed(t = {}, l = this) {
    if (typeof t == "object") for (let [s, r] of Object.entries(t)) l.assignProp(s, r);
  }
  assignProp(t, l) {
    if (!(me.includes(t) || d.lktExcludedProps.includes(t))) {
      if (d.lktDateProps.includes(t)) {
        this[t] = new Date(l);
        return;
      }
      this[t] = l;
    }
  }
}, n(d, "lktAllowUndefinedProps", []), n(d, "lktExcludedProps", []), n(d, "lktDateProps", []), n(d, "lktStrictItem", !1), n(d, "lktDefaultValues", []), d), he = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(he || {}), pe = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(pe || {}), fe = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(fe || {}), ke = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(ke || {}), ye = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(ye || {}), ge = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(ge || {}), Ce = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Ce || {}), be = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(be || {}), xe = ((e) => (e.NotDefined = "", e.Button = "button", e))(xe || {}), Ae = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Ae || {}), Se = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Se || {}), we = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(we || {}), Ve = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Ve || {}), _e = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(_e || {}), De = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(De || {}), R, F = (R = class extends Q {
  constructor(t = {}) {
    super();
    n(this, "key", "");
    n(this, "href", "");
    n(this, "label", "");
    n(this, "icon", "");
    n(this, "isActiveChecker");
    n(this, "isOpened", !1);
    n(this, "isActive", !1);
    n(this, "parent");
    n(this, "children");
    n(this, "events", {});
    n(this, "onClick");
    this.feed(t);
  }
  setChildren(t) {
    return t.forEach((l) => l.parent = this), this.children = t, this;
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
}, n(R, "lktDefaultValues", ["key", "href", "label", "icon", "isActiveChecker", "isOpened", "isActive", "parent", "children", "events", "onClick"]), R), T, Me = (T = class extends Q {
  constructor(t = {}) {
    var l;
    super();
    n(this, "modelValue", []);
    n(this, "resource", "");
    n(this, "resourceData", {});
    this.feed(t), this.modelValue = ((l = this.modelValue) == null ? void 0 : l.map((s) => new F(s))) || [];
  }
}, n(T, "lktDefaultValues", ["modelValue", "resource", "resourceData"]), T), Ee = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Ee || {}), Ie = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ie || {}), Oe = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Oe || {}), Le = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e))(Le || {}), Ne = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Ne || {}), Pe = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Pe || {}), Re = ((e) => (e.Message = "message", e.Button = "button", e))(Re || {}), Te = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Te || {}), Be = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Be || {}), Ue = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ue || {}), ze = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(ze || {}), je = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(je || {}), Fe = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Fe || {}), $e = ((e) => (e.Asc = "asc", e.Desc = "desc", e))($e || {}), He = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(He || {}), Ke = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Ke || {}), Je = (e) => {
  let t = String(e);
  return t.startsWith("__:") ? se(t.substring(3)) : t;
};
function We(e) {
  let t = new e(), l = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let s of e.lktDefaultValues) s in t && (l[s] = t[s]);
  return l;
}
const $ = (e, t) => (t.forEach((l) => {
  e.includes(l.key) || e.push(l.key), l.children.length > 0 && $(e, l.children);
}), e), O = class O {
};
O.toggleSlot = "", O.debugEnabled = !1;
let C = O;
const qe = { class: "lkt-menu-entry-main" }, Ge = { class: "lkt-entry-content" }, Qe = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, Xe = {
  key: 1,
  class: "lkt-menu-entry-text"
}, Ye = {
  key: 0,
  class: "lkt-menu-entry-children"
}, Ze = /* @__PURE__ */ J({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new F() }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, s = e, r = B(s.modelValue), v = W(), y = ie(), f = B(!1), b = () => {
      r.value.isOpened = !r.value.isOpened;
    }, L = () => {
      var a, c;
      return ((a = r.value.children) == null ? void 0 : a.length) > 0 && b(), typeof ((c = r.value.events) == null ? void 0 : c.click) == "function" ? (r.value.events.click({
        entry: r.value
      }), 1) : (typeof r.value.onClick == "function" && r.value.onClick({
        entry: r.value
      }), 1);
    }, x = m(() => v["icon-" + r.value.key] || r.value.icon !== ""), N = m(() => {
      let a = [];
      return x.value && a.push("has-icon"), f.value && a.push("is-active"), a.join(" ");
    }), i = m(() => $([], r.value.children)), o = m(() => {
      let a = [];
      for (let c in v)
        c.startsWith("icon-") && i.value.includes(c.substring(5)) && a.push(c);
      return a;
    }), p = m(() => Je(r.value.label)), A = m(() => r.value.isActive ? !0 : typeof r.value.isActiveChecker == "function" ? !!r.value.isActiveChecker({
      entry: r.value
    }) : !1), k = m(() => !!C.toggleSlot), X = m(() => C.toggleSlot);
    return M(() => s.modelValue, (a) => {
      r.value = a;
    }, { deep: !0 }), M(r, (a) => {
      l("update:modelValue", a);
    }, { deep: !0 }), ee(() => {
      var c, S;
      let a = y == null ? void 0 : y.currentRoute;
      if (a) {
        if (a.value.path === r.value.href)
          r.value.isOpened = !0;
        else if (((c = r.value.children) == null ? void 0 : c.length) > 0) {
          let w = !1;
          (S = r.value.children) == null || S.forEach((V) => {
            a.value.path === V.href && (w = !0);
          }), w && (r.value.isOpened = !0);
        }
      }
    }), (a, c) => {
      var V;
      const S = K("lkt-anchor"), w = K("menu-item", !0);
      return u(), h("div", {
        class: D(["lkt-menu-entry", N.value])
      }, [
        E("div", qe, [
          te(S, {
            to: r.value.href,
            "on-click": L,
            "is-active": A.value,
            onActive: c[0] || (c[0] = (H) => f.value = H)
          }, {
            default: U(() => [
              E("div", Ge, [
                x.value ? (u(), h("div", Qe, [
                  re(v)["icon-" + r.value.key] ? z(a.$slots, "icon-" + r.value.key, {
                    key: r.value.key,
                    entry: r.value
                  }) : r.value.icon !== "" ? (u(), h("i", {
                    key: 1,
                    class: D(r.value.icon)
                  }, null, 2)) : g("", !0)
                ])) : g("", !0),
                r.value.label !== "" ? (u(), h("div", Xe, le(p.value), 1)) : g("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          ((V = r.value.children) == null ? void 0 : V.length) > 0 ? (u(), h("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: b
          }, [
            k.value ? (u(), j(ae(X.value), {
              key: 0,
              class: D(["lkt-menu-entry-toggle-inner", r.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (u(), h("div", {
              key: 1,
              class: D(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", r.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : g("", !0)
        ]),
        r.value.isOpened ? (u(), h("div", Ye, [
          (u(!0), h(q, null, I(r.value.children, (H, P) => (u(), j(w, {
            modelValue: r.value.children[P],
            "onUpdate:modelValue": (_) => r.value.children[P] = _,
            key: r.value.children[P].key
          }, G({ _: 2 }, [
            I(o.value, (_) => ({
              name: _,
              fn: U(() => [
                z(a.$slots, _)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : g("", !0)
      ], 2);
    };
  }
}), et = { class: "lkt-menu-container" }, tt = { class: "lkt-menu" }, rt = /* @__PURE__ */ J({
  __name: "LktMenu",
  props: /* @__PURE__ */ ne({
    modelValue: {},
    resource: {},
    resourceData: {}
  }, We(Me)),
  emits: [
    "update:modelValue",
    "click-outside",
    "loading",
    "results",
    "response",
    "error"
  ],
  setup(e, { emit: t }) {
    const l = e, s = t, r = W(), v = B(l.modelValue), y = (i) => {
      let o = {};
      typeof i == "object" && Object.keys(i).length > 0 && (o = JSON.parse(JSON.stringify(i)));
      for (let p in o)
        (Array.isArray(o[p]) || typeof o[p] == "object") && (o[p] = JSON.stringify(o[p]));
      return o;
    };
    let f = new ue({});
    f.increment(y(l.resourceData));
    const b = m(() => $([], v.value)), L = m(() => {
      let i = [];
      for (let o in r)
        o.startsWith("icon-") && b.value.includes(o.substring(5)) && i.push(o);
      return i;
    }), x = () => {
      if (!l.resource) return;
      let i = f.getData();
      s("loading"), ce(l.resource, i).then((o) => {
        f.turnStoredIntoOriginal(), v.value = o.data, s("results", o.data), s("response", o);
      }).catch((o) => {
        s("error", o);
      });
    }, N = () => {
      s("click-outside");
    };
    return M(() => l.modelValue, (i) => {
      v.value = i;
    }, { deep: !0 }), M(v, (i) => {
      s("update:modelValue", i);
    }, { deep: !0 }), x(), (i, o) => (u(), h("div", et, [
      E("div", tt, [
        (u(!0), h(q, null, I(v.value, (p, A) => (u(), j(Ze, {
          modelValue: v.value[A],
          "onUpdate:modelValue": (k) => v.value[A] = k,
          key: p.key
        }, G({ _: 2 }, [
          I(L.value, (k) => ({
            name: k,
            fn: U(() => [
              z(i.$slots, k)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      E("div", {
        class: "lkt-menu-outside",
        onClick: N
      })
    ]));
  }
}), ct = {
  install: (e) => {
    e.component("lkt-menu") === void 0 && e.component("lkt-menu", rt);
  }
}, dt = (e, t, l) => oe(new F({
  key: e,
  href: t,
  label: l
})), vt = (e) => (C.toggleSlot = e, !0);
export {
  F as MenuEntry,
  dt as createMenuEntry,
  ct as default,
  vt as setMenuToggleSlot
};
