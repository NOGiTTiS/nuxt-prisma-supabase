import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const test_get = defineEventHandler((event) => {
  return {
    statusCode: 200,
    message: "Test GET Handler"
  };
});

export { test_get as default };
//# sourceMappingURL=test.get.mjs.map
