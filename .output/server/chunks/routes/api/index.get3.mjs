import { d as defineEventHandler, a as getQuery } from '../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const title = query.title;
  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: title,
        // ใช้ "contains" เพื่อค้นหาที่มีคำใน title
        mode: "insensitive"
        // ไม่สนใจตัวพิมพ์เล็กหรือใหญ่
      }
    },
    select: {
      id: true,
      title: true,
      content: true,
      published: true
    },
    orderBy: {
      id: "desc"
      // เรียงลำดับจากมากไปน้อย
    }
  });
  return posts;
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
