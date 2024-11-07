import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const index_delete = defineEventHandler((event) => {
  return {
    statusCode: 203,
    message: "DELETE request to /api/cart"
  };
});

export { index_delete as default };
//# sourceMappingURL=index.delete.mjs.map
