import { defineComponent, ref, resolveComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const barChartOptions = ref({
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yaxis: {
        title: {
          text: "Sales (in thousands)"
        }
      },
      fill: {
        opacity: 1
      }
    });
    const barSeries = ref([
      {
        name: "Sales",
        data: [10, 20, 15, 30, 25, 35, 40, 45, 30, 50, 55, 60]
      }
    ]);
    const pieChartOptions = ref({
      chart: {
        type: "pie",
        height: 350
      },
      labels: ["Product A", "Product B", "Product C", "Product D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    });
    const pieSeries = ref([44, 33, 54, 45]);
    const lineChartOptions = ref({
      chart: {
        type: "line",
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yaxis: {
        title: {
          text: "Revenue (in thousands)"
        }
      }
    });
    const lineSeries = ref([
      {
        name: "Revenue",
        data: [20, 30, 25, 35, 50, 40, 60, 70, 55, 80, 65, 85]
      }
    ]);
    useHead({
      title: "Dashboard",
      meta: [
        {
          name: "keywords",
          content: "Dashboard, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Dashboard Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_apexchart = resolveComponent("apexchart");
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="text-2xl font-bold mb-6">Dashboard</h2><div class="bg-white p-6 rounded-lg shadow-md mb-6">`);
      _push(ssrRenderComponent(_component_apexchart, {
        type: "bar",
        height: "350",
        options: unref(barChartOptions),
        series: unref(barSeries)
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white p-6 rounded-lg shadow-md">`);
      _push(ssrRenderComponent(_component_apexchart, {
        type: "pie",
        height: "350",
        options: unref(pieChartOptions),
        series: unref(pieSeries)
      }, null, _parent));
      _push(`</div><div class="bg-white p-6 rounded-lg shadow-md">`);
      _push(ssrRenderComponent(_component_apexchart, {
        type: "line",
        height: "350",
        options: unref(lineChartOptions),
        series: unref(lineSeries)
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/backend/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-vDoUNXfV.mjs.map
