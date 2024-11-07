import { d as defineEventHandler, c as createError } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const sample = defineEventHandler((event) => {
  if (event.context.auth.role !== "admin") {
    throw createError(
      {
        statusCode: 403,
        message: "Unauthorized"
      }
    );
  }
  return {
    message: `Welcome user ${event.context.auth.user}, Your have permission to ${event.context.auth.permissions}`
  };
});

export { sample as default };
//# sourceMappingURL=sample.mjs.map
