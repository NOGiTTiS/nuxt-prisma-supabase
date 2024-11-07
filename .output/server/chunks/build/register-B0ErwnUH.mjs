import { _ as __nuxt_component_0 } from './nuxt-link-DzJn26-e.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { e as useRouter } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const email = ref("");
    const password = ref("");
    const message = ref("");
    const status = ref(false);
    useSupabaseClient();
    useHead({
      title: "Register",
      meta: [
        {
          name: "keywords",
          content: "Register, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Register Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center" }, _attrs))}><div class="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full"><figure class="lg:w-1/2"><img src="https://www.apla.world/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_background.d376e1cc.png&amp;w=3840&amp;q=75" alt="Random image" class="object-cover w-full h-full"></figure><div class="card-body lg:w-1/2"><h2 class="card-title text-2xl font-bold mb-6">Register</h2>`);
      if (unref(message)) {
        _push(`<p class="${ssrRenderClass([unref(status) ? "bg-success" : "bg-error", "p-3 rounded-lg text-white"])}">${ssrInterpolate(unref(message))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="form-control"><label class="label"><span class="label-text">Email</span></label><label class="input input-bordered flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg><input${ssrRenderAttr("value", unref(email))} type="email" class="grow" placeholder="email@example.com"></label></div><div class="form-control mt-4"><label class="label"><span class="label-text">Password</span></label><label class="input input-bordered flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path></svg><input${ssrRenderAttr("value", unref(password))} type="password" class="grow" placeholder="Enter password"></label></div><div class="form-control mt-6"><button type="submit" class="btn btn-primary">Register</button></div></form><div class="divider">OR</div><div class="text-center"><p>Already have an account?</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "link link-primary"
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
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-B0ErwnUH.mjs.map
