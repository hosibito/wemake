import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Leaderboard | wemake" },
    { name: "description", content: "Product leaderboard" },
];

export default function LeaderboardPage() {
    return <h1>Leaderboard Page</h1>;
} 