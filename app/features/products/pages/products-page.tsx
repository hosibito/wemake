import type { Route } from "./+types/products-page";
import { Card, CardHeader, CardTitle, CardContent } from "~/common/components/ui/card";

export function loader({ request }: Route.LoaderArgs) {
    return {};
}

export function action({ request }: Route.ActionArgs) {
    return {};
}

export function meta(): ReturnType<Route.MetaFunction> {
    return [
        { title: "Products | wemake" },
        { name: "description", content: "All products" },
    ];
}

export default function ProductsPage() {
    return (
        <div className="p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>제품 목록 페이지입니다.</p>
                </CardContent>
            </Card>
        </div>
    );
} 