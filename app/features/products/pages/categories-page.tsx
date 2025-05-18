import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Categories | wemake" },
    { name: "description", content: "Product categories" },
];

export default function CategoriesPage() {
    return <h1>Categories Page</h1>;
} 