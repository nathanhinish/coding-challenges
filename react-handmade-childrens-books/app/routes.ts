import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "materials",
    file: "routes/materials.tsx",
  },
  {
    path: "process",
    file: "routes/process.tsx",
  },
] satisfies RouteConfig;
