import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const index_post = defineEventHandler((event) => {
  return {
    statusCode: 201,
    message: "POST request to /api/cart"
  };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
