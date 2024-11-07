import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { e as useRouter } from "../server.mjs";
import "destr";
import "klona";
import "hookable";
import { u as useHead } from "./index-BabADJUJ.js";
import { u as useSupabaseClient } from "./useSupabaseClient-T73W90RJ.js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "@supabase/ssr";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "verify",
  __ssrInlineRender: true,
  setup(__props) {
    const otp = ref("");
    const message = ref("");
    const status = ref(false);
    useSupabaseClient();
    useRouter();
    useHead({
      title: "Verify OTP",
      meta: [
        {
          name: "keywords",
          content: "Verify OTP, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Verify OTP Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center" }, _attrs))}><div class="card bg-base-100 shadow-xl max-w-md w-full p-6"><h2 class="card-title text-2xl font-bold mb-6">Verify OTP</h2>`);
      if (unref(message)) {
        _push(`<p class="${ssrRenderClass([unref(status) ? "bg-success" : "bg-error", "p-3 rounded-lg text-white mb-4"])}">${ssrInterpolate(unref(message))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div class="form-control"><label class="label"><span class="label-text">Enter OTP</span></label><input${ssrRenderAttr("value", unref(otp))} type="text" class="input input-bordered w-full" placeholder="Enter OTP"></div><div class="form-control mt-6"><button type="submit" class="btn btn-primary w-full">Verify OTP</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=verify-C7Yq3EcP.js.map
