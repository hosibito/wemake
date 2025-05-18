import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product" },
];

export default function PromotePage() {
    return <h1>Promote Product Page</h1>;
} 