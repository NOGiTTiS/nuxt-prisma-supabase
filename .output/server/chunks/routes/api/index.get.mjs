import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const index_get = defineEventHandler((event) => {
  return {
    statusCode: 200,
    message: "GET request to /api/cart"
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
