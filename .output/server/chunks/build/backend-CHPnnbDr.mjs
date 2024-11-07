import { _ as __nuxt_component_0 } from './nuxt-link-DzJn26-e.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, e as useRouter } from './server.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-T73W90RJ.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white w-64 min-h-screen p-4" }, _attrs))}><nav class="space-y-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/backend/dashboard",
        class: "block text-lg font-semibold hover:bg-gray-700 p-2 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dashboard`);
          } else {
            return [
              createTextVNode("Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/backend/posts",
        class: "block text-lg font-semibold hover:bg-gray-700 p-2 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Posts`);
          } else {
            return [
              createTextVNode("Posts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/backend/users",
        class: "block text-lg font-semibold hover:bg-gray-700 p-2 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Users`);
          } else {
            return [
              createTextVNode("Users")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="block w-full text-left text-lg font-semibold hover:bg-gray-700 p-2 rounded"> Logout </button></nav></aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-primary text-white p-4" }, _attrs))}><h1 class="text-2xl font-bold">NuxtPrisma Backend</h1></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Sidebar = _sfc_main$2;
  const _component_Header = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))} data-v-430db02d>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="flex-1 flex flex-col min-h-screen" data-v-430db02d>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="flex-1 p-4" data-v-430db02d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/backend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backend = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-430db02d"]]);

export { backend as default };
//# sourceMappingURL=backend-CHPnnbDr.mjs.map
