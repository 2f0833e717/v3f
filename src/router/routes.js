const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: (to, from, next) => {
      console.log('route(root):beforeEnter');
      next();
    },
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/loading", component: () => import("pages/Loading.vue") }
    ]
  },
  // {
  //   path: '/loading',
  //   component: () => import('pages/Loading.vue'),
  // },
  {
    path: "/about",
    component: () => import("pages/About.vue")
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
