import { h as defineNuxtRouteMiddleware, n as navigateTo, j as executeAsync, u as useNuxtApp, g as useRequestEvent } from './server.mjs';
import { ref } from 'vue';
import { G as klona, H as parse, I as getRequestHeader, J as destr, K as isEqual, s as setCookie, L as getCookie, M as deleteCookie } from '../runtime.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-T73W90RJ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2, _b;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  (_a2 = opts.filter) != null ? _a2 : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const auth = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const token = useCookie("auth_tokens").value;
  if (!token) {
    return navigateTo("/login");
  }
  const supabase = useSupabaseClient();
  const { data: user, error } = ([__temp, __restore] = executeAsync(() => supabase.auth.getUser(token)), __temp = await __temp, __restore(), __temp);
  if (error || !user) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-ClG7J8mX.mjs.map
