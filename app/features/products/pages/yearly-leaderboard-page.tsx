import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Yearly Leaderboard | wemake" },
    { name: "description", content: "Yearly product leaderboard" },
];

export default function YearlyLeaderboardPage() {
    return <h1>Yearly Leaderboard Page</h1>;
} 