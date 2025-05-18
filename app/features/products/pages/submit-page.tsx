import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit a new product" },
];

export default function SubmitPage() {
    return <h1>Submit Product Page</h1>;
} 