import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './index-BabADJUJ.mjs';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "posts",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([
      { id: 1, title: "First Post", published: true, author: "John Doe", createdAt: "2024-01-01" },
      { id: 2, title: "Second Post", published: false, author: "Jane Smith", createdAt: "2024-01-02" }
      // เพิ่มข้อมูลตัวอย่างเพิ่มเติมได้
    ]);
    useHead({
      title: "Posts",
      meta: [
        {
          name: "keywords",
          content: "Posts, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Posts Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold mb-6">Posts</h2><div class="overflow-x-auto"><table class="table w-full"><thead><tr><th>ID</th><th>Title</th><th>Published</th><th>Author</th><th>Created At</th><th>Manage</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<tr><td>${ssrInterpolate(post.id)}</td><td>${ssrInterpolate(post.title)}</td><td>${ssrInterpolate(post.published ? "Yes" : "No")}</td><td>${ssrInterpolate(post.author)}</td><td>${ssrInterpolate(post.createdAt)}</td><td class="space-x-2"><button class="btn btn-sm btn-primary">View</button><button class="btn btn-sm btn-warning">Edit</button><button class="btn btn-sm btn-error">Delete</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/backend/posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=posts-CvDs1Hyk.mjs.map
