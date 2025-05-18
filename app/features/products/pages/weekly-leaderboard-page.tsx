import type { MetaFunction } from "react-router";

export function loader() { return {}; }
export function action() { return {}; }
export const meta: MetaFunction = () => [
    { title: "Weekly Leaderboard | wemake" },
    { name: "description", content: "Weekly product leaderboard" },
];

export default function WeeklyLeaderboardPage() {
    return <h1>Weekly Leaderboard Page</h1>;
} 