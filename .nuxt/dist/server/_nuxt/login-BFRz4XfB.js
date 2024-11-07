import { _ as __nuxt_component_0 } from "./nuxt-link-DzJn26-e.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { e as useRouter } from "../server.mjs";
import "destr";
import "klona";
import "hookable";
import { u as useHead } from "./index-BabADJUJ.js";
import { u as useSupabaseClient } from "./useSupabaseClient-T73W90RJ.js";
import "ufo";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const email = ref("");
    const password = ref("");
    const phone = ref("+66");
    const message = ref("");
    const status = ref(false);
    useSupabaseClient();
    useHead({
      title: "Login",
      meta: [
        {
          name: "keywords",
          content: "Login, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Login Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center" }, _attrs))}><div class="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full"><figure class="lg:w-1/2"><img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="Random image" class="object-cover w-full h-full"></figure><div class="card-body lg:w-1/2"><h2 class="card-title text-2xl font-bold mb-6">Login</h2><form>`);
      if (unref(message)) {
        _push(`<p class="${ssrRenderClass([unref(status) ? "bg-success" : "bg-error", "p-3 rounded-lg text-white"])}">${ssrInterpolate(unref(message))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-control"><label class="label"><span class="label-text">Email</span></label><label class="input input-bordered flex items-center gap-2"><input${ssrRenderAttr("value", unref(email))} type="email" class="grow" placeholder="email@example.com"></label></div><div class="form-control mt-4"><label class="label"><span class="label-text">Password</span></label><label class="input input-bordered flex items-center gap-2"><input${ssrRenderAttr("value", unref(password))} type="password" class="grow" placeholder="Enter password"></label></div><div class="form-control mt-6"><button type="submit" class="btn btn-primary w-full">Login with Email</button></div></form><div class="divider">OR</div><form><div class="form-control"><label class="label"><span class="label-text">Phone Number</span></label><label class="input input-bordered flex items-center gap-2"><input${ssrRenderAttr("value", unref(phone))} type="tel" class="grow" placeholder="+1234567890"></label></div><div class="form-control mt-6"><button type="submit" class="btn btn-primary w-full">Login with Phone</button></div></form><div class="text-center mt-4"><p>Don&#39;t have an account?</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "link link-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign up now`);
          } else {
            return [
              createTextVNode("Sign up now")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-BFRz4XfB.js.map
