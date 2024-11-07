import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const index_put = defineEventHandler((event) => {
  return {
    statusCode: 202,
    message: "PUT request to /api/cart"
  };
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
