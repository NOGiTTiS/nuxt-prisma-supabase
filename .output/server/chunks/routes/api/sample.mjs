import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const sample = defineEventHandler((event) => {
  return {
    name: "Sample API from server/api/sample.ts"
  };
});

export { sample as default };
//# sourceMappingURL=sample.mjs.map
