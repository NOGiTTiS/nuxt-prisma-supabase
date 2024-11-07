import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const index_delete = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError(
      {
        statusCode: 400,
        message: "Invalid id"
      }
    );
  } else {
    const post = await prisma.post.delete({
      where: {
        id: Number(id)
      }
    });
    return {
      statusCode: 200,
      body: post
    };
  }
});

export { index_delete as default };
//# sourceMappingURL=index.delete.mjs.map
