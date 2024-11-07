import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const submit_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { body };
});

export { submit_post as default };
//# sourceMappingURL=submit.post.mjs.map
