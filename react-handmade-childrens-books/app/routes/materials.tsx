import { OurMaterials } from "../pages/our-materials";
import type { Route } from "./+types/materials";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Materials - Handmade Children's Books" },
    {
      name: "description",
      content: "Welcome to Handmade Children's Books online store",
    },
  ];
}

export default function Home() {
  return <OurMaterials />;
}
