import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Handmade Children's Books" },
    { name: "description", content: "Welcome to Handmade Children's Books online store" },
  ];
}

export default function Home() {
  return <Welcome />;
}
