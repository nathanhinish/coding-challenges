import { OurProcess } from "../pages/our-process";
import type { Route } from "./+types/process";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Process - Handmade Children's Books" },
    {
      name: "description",
      content: "Welcome to Handmade Children's Books online store",
    },
  ];
}

export default function Home() {
  return <OurProcess />;
}
