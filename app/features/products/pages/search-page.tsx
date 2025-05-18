import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
];

export default function SearchPage() {
    return <h1>Search Page</h1>;
} 