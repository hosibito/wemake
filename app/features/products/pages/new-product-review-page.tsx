import type { Route } from "./+types/new-product-review-page";

export function meta({ params }: Route.MetaArgs) {
    return [
        { title: "새 리뷰 작성" },
        { name: "description", content: "제품에 대한 새로운 리뷰를 작성할 수 있습니다." },
    ];
}

export function loader({ params }: Route.LoaderArgs) {
    return {
        productId: params.productId,
    };
}

export function action({ params, request }: Route.ActionArgs) {
    // 리뷰 작성 로직이 여기에 구현됩니다
    return {
        success: true,
        message: "리뷰가 성공적으로 작성되었습니다.",
    };
}

export default function NewProductReviewPage({ loaderData }: Route.ComponentProps) {
    return (
        <div className="space-y-6">
            NewProductReviewPage
        </div>
    );
}
