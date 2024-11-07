import { d as defineEventHandler, s as setCookie, p as parseCookies } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const cookies = defineEventHandler((event) => {
  setCookie(event, "myCookie", "myCookieValue", {
    httpOnly: true,
    // ป้องกันการอ่านคุกกี้จาก JavaScript
    maxAge: 60 * 60 * 24,
    // คุกกี้มีอายุ 1 วัน
    secure: true
    // ใช้ https เฉพาะใน production
  });
  const cookies = parseCookies(event);
  console.log(cookies);
  return {
    message: "Cookies has been set",
    cookies
  };
});

export { cookies as default };
//# sourceMappingURL=cookies.mjs.map
