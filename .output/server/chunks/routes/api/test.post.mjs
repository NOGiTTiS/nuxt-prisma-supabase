import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const test_post = defineEventHandler((event) => {
  return {
    statusCode: 201,
    message: "Test POST Handler"
  };
});

export { test_post as default };
//# sourceMappingURL=test.post.mjs.map
