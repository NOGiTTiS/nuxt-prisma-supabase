import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const index_put = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  if (!id) {
    throw createError(
      {
        statusCode: 400,
        message: "Invalid id"
      }
    );
  } else {
    const post = await prisma.post.update({
      where: {
        id: Number(id)
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published
      }
    });
    return post;
  }
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
