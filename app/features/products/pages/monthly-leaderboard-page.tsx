import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Monthly Leaderboard | wemake" },
    { name: "description", content: "Monthly product leaderboard" },
];

export default function MonthlyLeaderboardPage() {
    return <h1>Monthly Leaderboard Page</h1>;
} 