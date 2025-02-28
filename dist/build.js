import { defineComponent as B, ref as O, useSlots as U, computed as c, watch as x, onMounted as J, resolveComponent as z, createElementBlock as d, openBlock as i, normalizeClass as S, createElementVNode as A, createCommentVNode as k, createVNode as W, withCtx as V, renderSlot as D, unref as q, toDisplayString as G, createBlock as R, resolveDynamicComponent as Q, Fragment as F, renderList as M, createSlots as $, reactive as X } from "vue";
import { useRouter as Y } from "vue-router";
import "lkt-string-tools";
import { __ as Z } from "lkt-i18n";
import { DataState as ee } from "lkt-data-state";
import { httpCall as te } from "lkt-http-client";
class H {
  constructor(r, a, s) {
    this.key = "", this.href = "", this.label = "", this.icon = "", this.onClick = void 0, this.isActiveChecker = void 0, this.isOpened = !1, this.isActive = !1, this.parent = void 0, this.children = [], this.key = r, this.href = a, this.label = s;
  }
  setChildren(r) {
    return r.forEach((a) => a.parent = this), this.children = r, this;
  }
  setOnClick(r) {
    return this.onClick = r, this;
  }
  setIsActiveChecker(r) {
    return this.isActiveChecker = r, this;
  }
  setIsActive(r = !0) {
    return this.isActive = r, this;
  }
  setLabel(r) {
    return this.label = r, this;
  }
  setIcon(r) {
    return this.icon = r, this;
  }
  doClose() {
    this.isOpened = !1;
  }
}
const T = (e, r) => (r.forEach((a) => {
  e.includes(a.key) || e.push(a.key), a.children.length > 0 && T(e, a.children);
}), e), w = class w {
};
w.toggleSlot = "", w.debugEnabled = !1;
let y = w;
var re = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e))(re || {}), ne = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(ne || {}), le = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(le || {}), ae = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(ae || {}), oe = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(oe || {}), ie = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(ie || {}), se = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(se || {}), ue = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(ue || {}), ce = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ce || {}), de = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(de || {}), ve = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(ve || {}), me = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(me || {}), he = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(he || {}), pe = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(pe || {}), fe = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(fe || {}), ke = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(ke || {}), ye = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(ye || {}), ge = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e))(ge || {}), Ce = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Ce || {}), be = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(be || {}), _e = ((e) => (e.Message = "message", e.Button = "button", e))(_e || {}), Se = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Se || {}), xe = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(xe || {}), Ae = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Ae || {}), Me = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Me || {}), we = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(we || {}), Ie = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ie || {}), Ee = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ee || {}), Le = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Le || {}), Ne = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Ne || {}), Oe = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Oe || {}), Ve = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Ve || {}), De = (e) => {
  let r = String(e);
  return r.startsWith("__:") ? Z(r.substring(3)) : r;
};
const Re = { class: "lkt-menu-entry-main" }, Te = { class: "lkt-entry-content" }, Pe = {
  key: 0,
  class: "lkt-menu-entry-icon"
}, ze = {
  key: 1,
  class: "lkt-menu-entry-text"
}, Be = {
  key: 0,
  class: "lkt-menu-entry-children"
}, Ue = /* @__PURE__ */ B({
  __name: "MenuItem",
  props: {
    modelValue: { default: () => new H("", "", "") }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const a = r, s = e, t = O(s.modelValue), u = U(), f = Y(), h = O(!1), g = () => {
      t.value.isOpened = !t.value.isOpened;
    }, I = () => (t.value.children.length > 0 && g(), typeof t.value.onClick == "function" && t.value.onClick({
      entry: t.value
    }), 1), C = c(() => u["icon-" + t.value.key] || t.value.icon !== ""), E = c(() => {
      let l = [];
      return C.value && l.push("has-icon"), h.value && l.push("is-active"), l.join(" ");
    }), o = c(() => T([], t.value.children)), n = c(() => {
      let l = [];
      for (let v in u)
        v.startsWith("icon-") && o.value.includes(v.substring(5)) && l.push(v);
      return l;
    }), m = c(() => De(t.value.label)), b = c(() => t.value.isActive ? !0 : typeof t.value.isActiveChecker == "function" ? !!t.value.isActiveChecker({
      entry: t.value
    }) : !1), p = c(() => !!y.toggleSlot), j = c(() => y.toggleSlot);
    return x(() => s.modelValue, (l) => {
      t.value = l;
    }, { deep: !0 }), x(t, (l) => {
      a("update:modelValue", l);
    }, { deep: !0 }), J(() => {
      let l = f == null ? void 0 : f.currentRoute;
      if (l) {
        if (l.value.path === t.value.href)
          t.value.isOpened = !0;
        else if (t.value.children.length > 0) {
          let v = !1;
          t.value.children.forEach((L) => {
            l.value.path === L.href && (v = !0);
          }), v && (t.value.isOpened = !0);
        }
      }
    }), (l, v) => {
      const L = z("lkt-anchor"), K = z("menu-item", !0);
      return i(), d("div", {
        class: S(["lkt-menu-entry", E.value])
      }, [
        A("div", Re, [
          W(L, {
            to: t.value.href,
            "on-click": I,
            "is-active": b.value,
            onActive: v[0] || (v[0] = (P) => h.value = P)
          }, {
            default: V(() => [
              A("div", Te, [
                C.value ? (i(), d("div", Pe, [
                  q(u)["icon-" + t.value.key] ? D(l.$slots, "icon-" + t.value.key, {
                    key: t.value.key,
                    entry: t.value
                  }) : t.value.icon !== "" ? (i(), d("i", {
                    key: 1,
                    class: S(t.value.icon)
                  }, null, 2)) : k("", !0)
                ])) : k("", !0),
                t.value.label !== "" ? (i(), d("div", ze, G(m.value), 1)) : k("", !0)
              ])
            ]),
            _: 3
          }, 8, ["to", "is-active"]),
          t.value.children.length > 0 ? (i(), d("div", {
            key: 0,
            class: "lkt-menu-entry-toggle",
            onClick: g
          }, [
            p.value ? (i(), R(Q(j.value), {
              key: 0,
              class: S(["lkt-menu-entry-toggle-inner", t.value.isOpened ? "is-opened" : ""])
            }, null, 8, ["class"])) : (i(), d("div", {
              key: 1,
              class: S(["lkt-menu-entry-toggle-inner lkt-menu-entry-toggle-triangle", t.value.isOpened ? "is-opened" : ""])
            }, null, 2))
          ])) : k("", !0)
        ]),
        t.value.isOpened ? (i(), d("div", Be, [
          (i(!0), d(F, null, M(t.value.children, (P, N) => (i(), R(K, {
            modelValue: t.value.children[N],
            "onUpdate:modelValue": (_) => t.value.children[N] = _,
            key: t.value.children[N].key
          }, $({ _: 2 }, [
            M(n.value, (_) => ({
              name: _,
              fn: V(() => [
                D(l.$slots, _)
              ])
            }))
          ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
        ])) : k("", !0)
      ], 2);
    };
  }
}), Fe = { class: "lkt-menu-container" }, $e = { class: "lkt-menu" }, He = /* @__PURE__ */ B({
  __name: "LktMenu",
  props: {
    modelValue: { default: () => [] },
    resource: { default: "" },
    resourceData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "click-outside", "loading", "results", "response", "error"],
  setup(e, { emit: r }) {
    const a = e, s = r, t = U(), u = O(a.modelValue), f = (o) => {
      let n = {};
      typeof o == "object" && Object.keys(o).length > 0 && (n = JSON.parse(JSON.stringify(o)));
      for (let m in n)
        (Array.isArray(n[m]) || typeof n[m] == "object") && (n[m] = JSON.stringify(n[m]));
      return n;
    };
    let h = new ee({});
    h.increment(f(a.resourceData));
    const g = c(() => T([], u.value)), I = c(() => {
      let o = [];
      for (let n in t)
        n.startsWith("icon-") && g.value.includes(n.substring(5)) && o.push(n);
      return o;
    }), C = () => {
      if (!a.resource) return;
      let o = h.getData();
      s("loading"), te(a.resource, o).then((n) => {
        h.turnStoredIntoOriginal(), u.value = n.data, s("results", n.data), s("response", n);
      }).catch((n) => {
        s("error", n);
      });
    }, E = () => {
      s("click-outside");
    };
    return x(() => a.modelValue, (o) => {
      u.value = o;
    }, { deep: !0 }), x(u, (o) => {
      s("update:modelValue", o);
    }, { deep: !0 }), C(), (o, n) => (i(), d("div", Fe, [
      A("div", $e, [
        (i(!0), d(F, null, M(u.value, (m, b) => (i(), R(Ue, {
          modelValue: u.value[b],
          "onUpdate:modelValue": (p) => u.value[b] = p,
          key: m.key
        }, $({ _: 2 }, [
          M(I.value, (p) => ({
            name: p,
            fn: V(() => [
              D(o.$slots, p)
            ])
          }))
        ]), 1032, ["modelValue", "onUpdate:modelValue"]))), 128))
      ]),
      A("div", {
        class: "lkt-menu-outside",
        onClick: E
      })
    ]));
  }
}), Qe = {
  install: (e) => {
    e.component("lkt-menu") === void 0 && e.component("lkt-menu", He);
  }
}, Xe = (e, r, a) => X(new H(e, r, a)), Ye = (e) => (y.toggleSlot = e, !0);
export {
  H as MenuEntry,
  Xe as createMenuEntry,
  Qe as default,
  Ye as setMenuToggleSlot
};
