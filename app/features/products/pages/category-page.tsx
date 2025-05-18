import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Category | wemake" },
    { name: "description", content: "Product category" },
];

export default function CategoryPage() {
    return <h1>Category Page</h1>;
} 