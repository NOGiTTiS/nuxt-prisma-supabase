import { _ as __nuxt_component_0 } from "./nuxt-link-DzJn26-e.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@supabase/ssr";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar bg-base-100 shadow-lg px-4 fixed top-0 left-0 w-full z-50" }, _attrs))}><div class="container mx-auto flex justify-between items-center"><div class="flex-1"><a class="text-xl font-bold">NuxtPrisma</a></div><div class="md:hidden"><button class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div><div class="hidden md:flex flex-none"><ul class="menu menu-horizontal p-0 space-x-4"><li><a href="#">Home</a></li><li><a href="#">Services</a></li><li><a href="#">Pricing</a></li><li><a href="#">Blog</a></li><li><a href="#">Contact</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div>`);
      if (unref(isMenuOpen)) {
        _push(`<div class="fixed inset-0 bg-base-100 bg-opacity-95 z-40 md:hidden flex flex-col items-center justify-center"><button class="btn btn-ghost btn-circle absolute top-4 right-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><ul class="menu menu-vertical space-y-4 text-lg"><li><a href="#">Home</a></li><li><a href="#">Services</a></li><li><a href="#">Pricing</a></li><li><a href="#">Blog</a></li><li><a href="#">Contact</a></li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "font-semibold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign in`);
            } else {
              return [
                createTextVNode("Sign in")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-neutral text-neutral-content py-12" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="md:col-span-2 space-y-4"><a class="text-2xl font-bold">NUXT PRISMA</a><p class="text-sm"> Promise your reader something valuable. Will you teach her how to learn a new skill? Will you persuade her to do something she’s never done before? </p><div class="flex space-x-4 text-lg"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-twitter"></i></a></div></div><div class="grid grid-cols-2 gap-8 md:col-span-2"><div><h2 class="font-semibold">Product</h2><ul class="space-y-1 text-sm"><li><a href="#">Landingpages</a></li><li><a href="#">Features</a></li><li><a href="#">Documentation</a></li></ul></div><div><h2 class="font-semibold">Industries</h2><ul class="space-y-1 text-sm"><li><a href="#">Employment</a></li><li><a href="#">Childcare</a></li><li><a href="#">Education</a></li></ul></div><div><h2 class="font-semibold">About us</h2><ul class="space-y-1 text-sm"><li><a href="#">Company</a></li><li><a href="#">Download brochure</a></li><li><a href="#">Media Kit</a></li></ul></div><div><h2 class="font-semibold">Legal</h2><ul class="space-y-1 text-sm"><li><a href="#">Terms and conditions</a></li><li><a href="#">Security</a></li><li><a href="#">Privacy and Cookie Statement</a></li></ul></div></div></div><p class="text-center text-xs mt-8"> ©2024 Company. All rights reserved. </p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = _sfc_main$2;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-Cad147gG.js.map
