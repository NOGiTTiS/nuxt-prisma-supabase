import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead } from './index-BabADJUJ.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './server.mjs';
import 'vue-router';
import '@supabase/ssr';

const _imports_0 = "" + buildAssetsURL("mockup.a7CKyE_K.jfif");
const _imports_1 = "" + buildAssetsURL("feature1.CD5CKElN.jfif");
const _imports_2 = "" + buildAssetsURL("feature2.DLrZF0gY.jfif");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      meta: [
        {
          name: "keywords",
          content: "Home, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Home Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-base-200 py-24 flex flex-col items-center text-center space-y-8"><h1 class="text-4xl font-bold">Engage with your <br> customers on a new level</h1><p class="text-lg max-w-md"> World among the stalks, and grow familiar with the countless indescribable forms of the insects and flies </p><div class="flex space-x-4"><button class="btn btn-primary">Try NuxtPrisma for free</button><button class="btn btn-outline">View demo</button></div><img${ssrRenderAttr("src", _imports_0)} alt="Mockup" class="rounded-lg shadow-lg max-w-2xl"></section><section class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-6"><img${ssrRenderAttr("src", _imports_1)} alt="Image 1" class="rounded-lg shadow-lg"><div><h2 class="text-2xl font-bold mb-4"> So if on advanced addition absolute received replying </h2><p class="text-gray-600"> When, while the lovely valley teems with vapour around me, and the meridian sun strikes the waiting be females upper surface of the impenetrable foliage of my trees </p></div></section><section class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-6"><div class="order-2 md:order-1"><h2 class="text-2xl font-bold mb-4"> So if on advanced addition absolute received replying </h2><p class="text-gray-600"> When, while the lovely valley teems with vapour around me, and the meridian sun strikes the waiting be females upper surface of the impenetrable foliage of my trees </p></div><img${ssrRenderAttr("src", _imports_2)} alt="Image 2" class="rounded-lg shadow-lg order-1 md:order-2"></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3Xh-fU0p.mjs.map
