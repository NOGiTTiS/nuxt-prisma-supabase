import { d as defineEventHandler, g as getRouterParam, a as getQuery } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const _id_ = defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  const query = getQuery(event);
  return {
    id,
    query: { a: query.type, b: query.page },
    name: "User API from server/routes/users/[id].ts"
  };
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
