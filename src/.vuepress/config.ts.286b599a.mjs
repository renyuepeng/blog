// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  { text: "\u9996\u9875", icon: "home-fill", link: "/" },
  {
    text: "Java",
    icon: "java",
    link: "/java/java-overview.md"
  },
  {
    text: "Docker",
    icon: "docker",
    link: "/docker/docker-overview.md"
  },
  {
    text: "Kubernetes",
    icon: "kubernetes",
    link: "/k8s/k8s-overview.md"
  },
  {
    text: "MySQL",
    icon: "mysql",
    link: "/mysql/mysql-overview.md"
  },
  {
    text: "Redis",
    icon: "redis",
    link: "/redis/redis-overview.md"
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/java/": [
    {
      text: "\u6982\u8FF0",
      link: "java-overview.md"
    },
    {
      text: "1. JAVA \u57FA\u7840",
      prefix: "1.basic/",
      children: [
        "1.datatype.md",
        "2.keyword.md",
        "3.oop.md",
        "4.collection.md"
      ]
    },
    {
      text: "2. JAVA \u5E76\u53D1",
      prefix: "2.JUC/",
      children: [
        "1.basic.md",
        "2.thread.md",
        "3.lock.md",
        "4.threadPool.md"
      ]
    },
    {
      text: "3. JAVA \u865A\u62DF\u673A",
      prefix: "3.JVM/",
      children: [
        "1.JMM.md",
        "2.GC.md",
        "3.classLoader.md"
      ]
    },
    {
      text: "4. Spring",
      prefix: "4.spring/",
      children: [
        "1.springFramework.md",
        "2.springBoot.md"
      ]
    }
  ],
  "/k8s/": [
    {
      text: "Kubernetes\u6982\u8FF0",
      link: "k8s-overview.md"
    }
  ],
  "/mysql/": [
    {
      text: "\u6982\u8FF0",
      link: "mysql-overview.md"
    },
    {
      text: "1. MySQL \u57FA\u7840",
      link: "1.basic.md"
    },
    {
      text: "2. MySQL \u7D22\u5F15",
      link: "2.index.md"
    },
    {
      text: "3. MySQL \u4E8B\u52A1",
      link: "3.transaction.md"
    }
  ],
  "/redis/": [
    {
      text: "\u6982\u8FF0",
      link: "redis-overview.md"
    },
    {
      text: "1. Redis \u57FA\u7840",
      link: "1.basic.md"
    },
    {
      text: "2. Redis \u7F13\u5B58",
      link: "2.cache.md"
    },
    {
      text: "3. Redis \u5206\u5E03\u5F0F\u9501",
      link: "3.lock.md"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://www.summitzheng.cn",
  //全局默认作者
  author: {
    name: "Wang Zheng",
    url: "https://github.com/miracle-zheng"
  },
  //icon，用的iconfont的cdn
  iconAssets: "//at.alicdn.com/t/c/font_3509301_hwfq4ob42mn.css",
  //导航栏图标
  logo: "/wz.jpg",
  //仓库链接
  repo: "https://github.com/miracle-zheng/blog",
  //文档目录
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  //页脚
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">\u4EACICP\u59072022012853\u53F7-1</a>',
  displayFooter: true,
  //文章展示信息
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    description: "\u4E00\u4E2AJava\u5F00\u53D1\u8005",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/840187?spm_id_from=333.1007.0.0",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "zhengsummit@163.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/miracle-zheng"
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // MrHope: ["https://mrhope.site", MR_HOPE_AVATAR],
    }
  },
  // page meta
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
  },
  plugins: {
    blog: true,
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press"
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "\u540E\u7AEF\u6280\u672F\u5206\u4EAB",
  description: "wangzheng's blog",
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9naXRodWJfd3ovbXktZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxnaXRodWJfd3pcXFxcbXktZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZ2l0aHViX3d6L215LWRvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL1wiLFxuXG4gIGxhbmc6IFwiemgtQ05cIixcbiAgdGl0bGU6IFwiXHU1NDBFXHU3QUVGXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXCIsXG4gIGRlc2NyaXB0aW9uOiBcIndhbmd6aGVuZydzIGJsb2dcIixcblxuICB0aGVtZSxcblxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2dpdGh1Yl93ei9teS1kb2NzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGdpdGh1Yl93elxcXFxteS1kb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdGh1Yl93ei9teS1kb2NzL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuY29uc3QgTVJfSE9QRV9BVkFUQVIgPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjI0NzggLjc4MTMzIC0yLjU0Nzk3IC42MzYyMiA5MTAuMzUgMjgxLjU4KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGlkPVwiYVwiIHgxPVwiMzcuODI3XCIgeDI9XCIxNTkuOTg4XCIgeTE9XCIyNzIuOTE2XCIgeTI9XCIyNzQuNjNcIj48c3RvcCBvZmZzZXQ9XCIuNzVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIuOTk4XCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjEzODE0IC44MDc5NyAyLjU1NTk5IC0uNjAzMiAzNC4wODcgNDk0LjM2OSlcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImJcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjgxNVwiIHN0b3AtY29sb3I9XCIjZTMzOTM5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZmZlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPVwiTTEzNS42MzcgNTg4LjA2N2MtNDguODkxLTIwMS4zMzQgNzQuNjA1LTQwNC4xNjIgMjc1LjgzNy00NTMuMDI4IDIwMS4yMzMtNDguODY2IDQwMy45OTggNzQuNzM0IDQ1Mi44ODkgMjc2LjA2OCA0OC44OTIgMjAxLjMzNS03NC42MDYgNDA0LjE2Mi0yNzUuODM4IDQ1My4wMjktMjAxLjIzMyA0OC44NjYtNDAzLjk5Ny03NC43MzQtNDUyLjg4OC0yNzYuMDY5WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48cGF0aCBkPVwiTTU5Ni4wNzYgMTk3LjA0NGMtMy4zNDItNTYuMDkgNTYuODk3LTc3LjgzMSA4OS4wMTctNTEuMzYxbS00MTAuNjUgMTI4LjgxOWMtMjIuNzUzLTUxLjM3Ny04Ni4yNTYtNDMuMDctMTAyLjY1OS00LjgxNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjExXCIvPjxwYXRoIGQ9XCJNODMzLjU2OCAyODguMDJjLjA1IDE4LjA0Ni0xMi41ODQgMzAuNjk5LTIxLjM0NiAzMi4yMTEtOC43NjIgMS41MTItMTcuMDMxLTEuMDk5LTE4LjU4NC0xLjM0MSAwIDAtNjEuMzYzLTYuMTAzLTEwNS42MjcgNi45MjEtNDQuMjY1IDEzLjAyNi04Ny4wNCA0Ny4zODctOTQuNjM3IDUxLjg5Mi02LjYyNyAzLjkyOC0yOS4xMTIgNy42OTctNDQuNDYyLTEyLjkzOC0xNS4zNTEtMjAuNjM2LjAyNC00MS41MjYuMDI0LTQxLjUyNnMxMi42ODUtMTguMjc5IDQwLjc3MS0zNS4xMjNjMjguMDg4LTE2Ljg0NCAyNC42MjQtMTMuMjI2IDUyLjMyNi0yNS42OTYgMTUuMjQ3LTYuODY1IDQzLjMxOS0xNC4xODYgNjcuNDI5LTE3LjA2OSAyNS4xOTMtMy4wMTEgNDYuMzQ4LTEuMzg0IDU3LjY3My43NjkgMjIuMTY1IDQuMjEyIDI4LjYzMiA1LjkzIDM5LjE2OSA5LjIyOSAxMi40NTEgMy44OTggMjcuMjE0IDE0LjUxNiAyNy4yNjQgMzIuNjcxWlwiIGZpbGw9XCIjZmZmXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI4XCIvPjxwYXRoIGQ9XCJNNTU4LjM1MSAzNDUuNjMyYy0zLjQ1OC0xNC4yMzcgNS4yMTQtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTU0LTMuNDM3IDI4LjQzIDUuMzIgMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTIgMjguNTY3LTE5LjM2NyAzMi4wMDQtMTQuMTUyIDMuNDM3LTI4LjQzLTUuMzE5LTMxLjg4Ny0xOS41NThaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNMjIwLjI0OSA0ODMuNDE2YzQ2LjgxLTExLjY4OSA5MS4zMjMtLjQ2NyA5OS40MiAyNS4wNjQgOC4wOTggMjUuNTMyLTIzLjI4NiA1NS43MDYtNzAuMDk3IDY3LjM5My00Ni44MTEgMTEuNjg5LTkxLjMyMy40NjctOTkuNDItMjUuMDY0LTguMDk3LTI1LjUzMiAyMy4yODYtNTUuNzA2IDcwLjA5Ny02Ny4zOTNaXCIgZmlsbD1cInVybCgjYSlcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk03MzkuOSAzNTcuMjI2Yy00Ni45NTkgMTEuMDgyLTgxLjM2NyA0MS40NjktNzYuODUzIDY3Ljg3MSA0LjUxNCAyNi40MDIgNDYuMjQxIDM4LjgyMSA5My4xOTggMjcuNzM4IDQ2Ljk1OC0xMS4wODEgODEuMzY2LTQxLjQ2NyA3Ni44NTMtNjcuODY5LTQuNTE0LTI2LjQwMy00Ni4yNDEtMzguODIxLTkzLjE5OC0yNy43NFpcIiBmaWxsPVwidXJsKCNiKVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBvcGFjaXR5PVwiLjI2MVwiLz48cGF0aCBkPVwiTTQwMC45MzQgMzk4LjkxN2MtLjU5OSAxOC4wMzQtMTMuNjgxIDMwLjIxOC0yMi40OTQgMzEuNDA5LTguODEyIDEuMTkyLTE2Ljk4Mi0xLjcxNi0xOC41MjYtMi4wMTQgMCAwLTYxLjEwOS04LjMzNC0xMDUuODE5IDMuMDctNDQuNzA5IDExLjQwNC04OC42OTYgNDQuMTgxLTk2LjQ1MiA0OC40MDYtNi43NjMgMy42ODMtMjkuMzcyIDYuNjMyLTQzLjk3Mi0xNC41NDYtMTQuNi0yMS4xOCAxLjUxOS00MS40OTQgMS41MTktNDEuNDk0czEzLjMzNS0xNy44MDMgNDIuMDEzLTMzLjYxMmMyOC42NzctMTUuODA5IDI1LjA4NS0xMi4zMTkgNTMuMjIyLTIzLjc3MiAxNS40ODQtNi4zMDQgNDMuODAzLTEyLjU5OCA2OC4wMDUtMTQuNiAyNS4yODgtMi4wOTMgNDYuMzczLjMwNSA1Ny42MTYgMi44NjcgMjIgNS4wMTYgMjguNDAxIDYuOTY4IDM4LjgxMyAxMC42NDkgMTIuMzA0IDQuMzQ4IDI2LjY3NyAxNS40OTYgMjYuMDc1IDMzLjYzN1pcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTEyOS4wNSA0NDUuNTQ2Yy0zLjQ1OC0xNC4yMzkgNS4yMTMtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTUzLTMuNDM3IDI4LjQyOSA1LjMxOCAzMS44ODcgMTkuNTU3IDMuNDU4IDE0LjIzOC01LjIxMyAyOC41NjYtMTkuMzY3IDMyLjAwMy0xNC4xNTMgMy40MzctMjguNDMtNS4zMTgtMzEuODg3LTE5LjU1N1pcIiBmaWxsPVwiIzZkNWU1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjNmQ1ZTU2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNi4yNjhcIi8+PHBhdGggZD1cIk00MjQuMzgxIDY5Ni4zODZzNjQuNDI3IDEzLjY0NiAxMDEuOTk2IDUuNzU3QzY0MC42NTMgNjc4LjE0NiA2OTAuOCA1MjEuODk0IDY5MC44IDUyMS44OTRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTc5Ni4wNCA2NjYuNzc0cy0xMC43MzQtNDQuMTY1LTQxLjQwNS0xMS4zNDhjLTkuNjgxIDEwLjM1OS0xMC40MzggNDAuNjA0LTI4LjIxNyA4MS44OS0xNS45NDIgMzcuMDItMzkuNTY0IDYwLjcyOC00Mi45MzggNzYuMDYzLTMuMzc0IDE1LjMzNS40NTEgMzUuOTkyIDI2LjM1MiA0MS41MzcgMjUuOTAyIDUuNTQ1IDQxLjk2Ny0yMy4zODEgNDEuOTY3LTIzLjM4MWw0NC4yNDEtMTY0Ljc2MVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk03OTMuMzM3IDY2NC43MzRjLTM3LjA3NSAxNjAuMDQ1LTUxLjczIDE2My4xNDUtNDAuMzQzIDE4NC44NDUgMTEuMzg3IDIxLjcwMSA1MS40MTcgMzMuNzE2IDcxLjg3Ni03LjMxMyA2LjczNC0xMy41MDUtMS4zMS00My4zMTctMS41MTEtNzguMDc3LS4zMDctNTMuMDYgMTYuODY1LTg2LjExMSAxMC40MDMtOTguMS0xNS4zMzItMjguNDUyLTM5LjM3Ny01Ljg3NS00MC40MjUtMS4zNTVaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjwvc3ZnPic7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vd3d3LnN1bW1pdHpoZW5nLmNuXCIsXG5cbiAgLy9cdTUxNjhcdTVDNDBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJXYW5nIFpoZW5nXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taXJhY2xlLXpoZW5nXCIsXG4gIH0sXG5cbiAgLy9pY29uXHVGRjBDXHU3NTI4XHU3Njg0aWNvbmZvbnRcdTc2ODRjZG5cbiAgaWNvbkFzc2V0czogXCIvL2F0LmFsaWNkbi5jb20vdC9jL2ZvbnRfMzUwOTMwMV9od2ZxNG9iNDJtbi5jc3NcIixcblxuICAvL1x1NUJGQ1x1ODIyQVx1NjgwRlx1NTZGRVx1NjgwN1xuICBsb2dvOiBcIi93ei5qcGdcIixcblxuICAvL1x1NEVEM1x1NUU5M1x1OTRGRVx1NjNBNVxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taXJhY2xlLXpoZW5nL2Jsb2dcIixcblxuICAvL1x1NjU4N1x1Njg2M1x1NzZFRVx1NUY1NVxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIC8vIG5hdmJhclxuICBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICBzaWRlYmFyLFxuXG4gIC8vXHU5ODc1XHU4MTFBXG4gIGZvb3RlcjogJzxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1NEVBQ0lDUFx1NTkwNzIwMjIwMTI4NTNcdTUzRjctMTwvYT4nLFxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIC8vXHU2NTg3XHU3QUUwXHU1QzU1XHU3OTNBXHU0RkUxXHU2MDZGXG4gIHBhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJPcmlnaW5hbFwiLCBcIkRhdGVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIlJlYWRpbmdUaW1lXCJdLFxuXG4gIGJsb2c6IHtcbiAgICBkZXNjcmlwdGlvbjogXCJcdTRFMDBcdTRFMkFKYXZhXHU1RjAwXHU1M0QxXHU4MDA1XCIsXG4gICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcbiAgICBtZWRpYXM6IHtcbiAgICAgIC8vIEJhaWR1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEJpbGlCaWxpOiBcImh0dHBzOi8vc3BhY2UuYmlsaWJpbGkuY29tLzg0MDE4Nz9zcG1faWRfZnJvbT0zMzMuMTAwNy4wLjBcIixcbiAgICAgIC8vIEJpdGJ1Y2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBEaW5nZGluZzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBEaXNjb3JkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIERyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEVtYWlsOiBcInpoZW5nc3VtbWl0QDE2My5jb21cIixcbiAgICAgIC8vIEV2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIEZsaXBib2FyZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBHaXRlZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL21pcmFjbGUtemhlbmdcIixcbiAgICAgIC8vIEdpdGxhYjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBHbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxuICAgICAgLy8gSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExhcms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGluZXM6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFBvY2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBSZWRkaXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUnNzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTXJIb3BlOiBbXCJodHRwczovL21yaG9wZS5zaXRlXCIsIE1SX0hPUEVfQVZBVEFSXSxcbiAgICB9LFxuICB9LFxuXG5cbiAgLy8gcGFnZSBtZXRhXG4gIG1ldGFMb2NhbGVzOiB7XG4gICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgYmxvZzogdHJ1ZSxcblxuICAgIGNvbW1lbnQ6IHtcbiAgICAgIC8vIFlvdSBzaG91bGQgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2VcbiAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAgICAgc2VydmVyVVJMOiBcImh0dHBzOi8vd2FsaW5lLWNvbW1lbnQudnVlanMucHJlc3NcIixcbiAgICB9LFxuXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIHBsYXlncm91bmQ6IHtcbiAgICAgICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgICB9LFxuICAgICAgcHJlc2VudGF0aW9uOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcbiAgICAgIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG4gICAgfSxcblxuICAgIC8vIHVuY29tbWVudCB0aGVzZSBpZiB5b3Ugd2FudCBhIFBXQVxuICAgIC8vIHB3YToge1xuICAgIC8vICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAvLyAgIGNhY2hlSFRNTDogdHJ1ZSxcbiAgICAvLyAgIGNhY2hlUGljOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGxlOiB7XG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1zVGlsZToge1xuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgLy8gICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYW5pZmVzdDoge1xuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIHNob3J0Y3V0czogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgc2hvcnRfbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgLy8gICAgICAgICBpY29uczogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovZ2l0aHViX3d6L215LWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0aHViX3d6XFxcXG15LWRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdGh1Yl93ei9teS1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcblxuICB7IHRleHQ6IFwiXHU5OTk2XHU5ODc1XCIsIGljb246IFwiaG9tZS1maWxsXCIsIGxpbms6IFwiL1wiIH0sXG5cbiAgeyB0ZXh0OiBcIkphdmFcIixcbiAgaWNvbjogXCJqYXZhXCIsXG4gIGxpbms6IFwiL2phdmEvamF2YS1vdmVydmlldy5tZFwiXG4gIH0sXG5cbiAgeyB0ZXh0OiBcIkRvY2tlclwiLFxuICAgIGljb246IFwiZG9ja2VyXCIsXG4gICAgbGluazogXCIvZG9ja2VyL2RvY2tlci1vdmVydmlldy5tZFwiXG4gIH0sXG5cbiAgeyB0ZXh0OiBcIkt1YmVybmV0ZXNcIixcbiAgICBpY29uOiBcImt1YmVybmV0ZXNcIixcbiAgICBsaW5rOiBcIi9rOHMvazhzLW92ZXJ2aWV3Lm1kXCJcbiAgfSxcblxuICB7ICAgICAgICAgXG4gICAgdGV4dDogXCJNeVNRTFwiLFxuICAgIGljb246IFwibXlzcWxcIixcbiAgICBsaW5rOiBcIi9teXNxbC9teXNxbC1vdmVydmlldy5tZFwiXG4gIH0sXG5cbiAgeyAgICAgICAgIFxuICAgIHRleHQ6IFwiUmVkaXNcIixcbiAgICBpY29uOiBcInJlZGlzXCIsXG4gICAgbGluazogXCIvcmVkaXMvcmVkaXMtb3ZlcnZpZXcubWRcIlxuICB9LCBcblxuXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovZ2l0aHViX3d6L215LWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0aHViX3d6XFxcXG15LWRvY3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9naXRodWJfd3ovbXktZG9jcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gIFwiL2phdmEvXCI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1Njk4Mlx1OEZGMFwiLFxuICAgICAgbGluazogXCJqYXZhLW92ZXJ2aWV3Lm1kXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiMS4gSkFWQSBcdTU3RkFcdTc4NDBcIixcbiAgICAgIHByZWZpeDogXCIxLmJhc2ljL1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgXCIxLmRhdGF0eXBlLm1kXCIsXG4gICAgICAgIFwiMi5rZXl3b3JkLm1kXCIsXG4gICAgICAgIFwiMy5vb3AubWRcIixcbiAgICAgICAgXCI0LmNvbGxlY3Rpb24ubWRcIlxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiMi4gSkFWQSBcdTVFNzZcdTUzRDFcIixcbiAgICAgIHByZWZpeDogXCIyLkpVQy9cIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIFwiMS5iYXNpYy5tZFwiLFxuICAgICAgICBcIjIudGhyZWFkLm1kXCIsXG4gICAgICAgIFwiMy5sb2NrLm1kXCIsXG4gICAgICAgIFwiNC50aHJlYWRQb29sLm1kXCJcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIjMuIEpBVkEgXHU4NjVBXHU2MkRGXHU2NzNBXCIsXG4gICAgICBwcmVmaXg6IFwiMy5KVk0vXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBcIjEuSk1NLm1kXCIsXG4gICAgICAgIFwiMi5HQy5tZFwiLFxuICAgICAgICBcIjMuY2xhc3NMb2FkZXIubWRcIlxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiNC4gU3ByaW5nXCIsXG4gICAgICBwcmVmaXg6IFwiNC5zcHJpbmcvXCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBcIjEuc3ByaW5nRnJhbWV3b3JrLm1kXCIsXG4gICAgICAgIFwiMi5zcHJpbmdCb290Lm1kXCJcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcblxuXG5cblxuICBcIi9rOHMvXCIgOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJLdWJlcm5ldGVzXHU2OTgyXHU4RkYwXCIsXG4gICAgICBsaW5rOiBcIms4cy1vdmVydmlldy5tZFwiXG4gICAgfSxcblxuICBdLFxuXG5cblxuXG5cblxuICBcIi9teXNxbC9cIjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2OTgyXHU4RkYwXCIsXG4gICAgICBsaW5rOiBcIm15c3FsLW92ZXJ2aWV3Lm1kXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiMS4gTXlTUUwgXHU1N0ZBXHU3ODQwXCIsXG4gICAgICBsaW5rOiBcIjEuYmFzaWMubWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCIyLiBNeVNRTCBcdTdEMjJcdTVGMTVcIixcbiAgICAgIGxpbms6IFwiMi5pbmRleC5tZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIjMuIE15U1FMIFx1NEU4Qlx1NTJBMVwiLFxuICAgICAgbGluazogXCIzLnRyYW5zYWN0aW9uLm1kXCJcbiAgICB9LFxuICBcbiAgXSxcblxuXG4gIFwiL3JlZGlzL1wiOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJcdTY5ODJcdThGRjBcIixcbiAgICAgIGxpbms6IFwicmVkaXMtb3ZlcnZpZXcubWRcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCIxLiBSZWRpcyBcdTU3RkFcdTc4NDBcIixcbiAgICAgIGxpbms6IFwiMS5iYXNpYy5tZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIjIuIFJlZGlzIFx1N0YxM1x1NUI1OFwiLFxuICAgICAgbGluazogXCIyLmNhY2hlLm1kXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiMy4gUmVkaXMgXHU1MjA2XHU1RTAzXHU1RjBGXHU5NTAxXCIsXG4gICAgICBsaW5rOiBcIjMubG9jay5tZFwiXG4gICAgfSxcbiAgXG4gIF0sXG5cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUixTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRTNTLElB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
