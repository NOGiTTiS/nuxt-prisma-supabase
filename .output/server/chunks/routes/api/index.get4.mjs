import { d as defineEventHandler } from '../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const index_get = defineEventHandler(async (event) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true
      // รวมข้อมูล posts ที่ผู้ใช้เขียนด้วย
    }
  });
  return users;
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
