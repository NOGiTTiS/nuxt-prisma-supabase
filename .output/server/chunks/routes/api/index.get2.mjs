import { d as defineEventHandler, u as useRuntimeConfig } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const index_get = defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const data = {
    githubToken: config.githubToken,
    githubUsername: config.githubUsername,
    githubRepo: config.githubRepo
  };
  return data;
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
