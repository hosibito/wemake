import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/promote-page";
import { Form } from "react-router";
import { Select } from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import { Label } from "~/common/components/ui/label";
import { type DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";
export const meta: Route.MetaFunction = () => {
    return [
        { title: "Promote Product | ProductHunt Clone" },
        { name: "description", content: "Promote your product" },
    ];
};
export default function PromotePage() {
    // 프로모션 기간을 저장하는 상태
    // DateRange 타입: { from: Date, to: Date } 형태의 객체
    // 초기값은 undefined (아직 날짜가 선택되지 않음)
    const [promotionPeriod, setPromotionPeriod] = useState<
        DateRange | undefined
    >();
    // 선택된 날짜 범위로부터 총 일수 계산
    // 조건: 시작일(from)과 종료일(to)이 모두 선택되었을 때만 계산
    const totalDays =
        promotionPeriod?.from && promotionPeriod.to
            ? DateTime.fromJSDate(promotionPeriod.to).diff(  // Luxon: 종료일을 DateTime 객체로 변환
                DateTime.fromJSDate(promotionPeriod.from),  // Luxon: 시작일을 DateTime 객체로 변환
                "days"                                      // Luxon: 일 단위로 차이 계산
            ).days                                          // Luxon: 차이 결과를 숫자로 반환
            : 0;                                            // 날짜가 선택되지 않으면 0일
    return (
        <div>
            {/* 페이지 상단 헤더 섹션 */}
            <Hero
                title="Promote Your Product"
                subtitle="Boost your product's visibility."
            />
            {/* 프로모션 설정 폼 */}
            <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center">
                {/* 프로모션할 제품 선택 드롭다운 */}
                <SelectPair
                    label="Select a product"
                    description="Select the product you want to promote."
                    name="product"
                    placeholder="Select a product"
                    options={[
                        {
                            label: "AI Dark Mode Maker",
                            value: "ai-dark-mode-maker",
                        },
                        {
                            label: "AI Dark Mode Maker",
                            value: "ai-dark-mode-maker-1",
                        },
                        {
                            label: "AI Dark Mode Maker",
                            value: "ai-dark-mode-maker-2",
                        },
                    ]}
                />
                {/* 프로모션 기간 선택 섹션 */}
                <div className="flex flex-col gap-2 items-center w-full">
                    {/* 날짜 선택 안내 라벨 */}
                    <Label className="flex flex-col gap-1">
                        Select a range of dates for promotion{" "}
                        <small className="text-muted-foreground text-center ">
                            Minimum duration is 3 days.
                        </small>
                    </Label>
                    {/* 날짜 범위 선택 캘린더 컴포넌트 */}
                    <Calendar
                        mode="range"                    // 날짜 범위 선택 모드 (시작일-종료일)
                        selected={promotionPeriod}      // 현재 선택된 날짜 범위 상태
                        onSelect={setPromotionPeriod}   // 날짜 선택 시 상태 업데이트 함수
                        min={3}                         // 최소 3일 이상 선택해야 함
                        disabled={{ before: new Date() }} // 오늘 이전 날짜는 선택 불가
                    />
                </div>
                {/* 체크아웃 버튼 */}
                {/* 조건: 날짜가 선택되지 않으면(totalDays === 0) 버튼 비활성화 */}
                {/* 가격: 선택된 일수 × $20 (하루당 $20) */}
                <Button disabled={totalDays === 0}>
                    Go to checkout (${totalDays * 20})
                </Button>
            </Form>
        </div>
    );
}
