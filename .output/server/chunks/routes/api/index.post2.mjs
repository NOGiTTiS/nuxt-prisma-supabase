import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      author: {
        connectOrCreate: {
          where: {
            email: body.author.email
          },
          create: {
            name: body.author.name,
            email: body.author.email
          }
        }
      }
    }
  });
  return post;
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
