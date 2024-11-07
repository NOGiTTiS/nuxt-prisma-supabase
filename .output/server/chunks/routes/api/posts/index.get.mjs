import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const index_get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError(
      {
        statusCode: 400,
        message: "Invalid id"
      }
    );
  } else {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    return post;
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
