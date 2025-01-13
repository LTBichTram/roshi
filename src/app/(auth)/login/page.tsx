"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { convertVND } from "@/utils/common";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const DEFAULT_LOAN = 5000000;
const DEFAULT_LOAN_MAX = 200000000;
const DEFAULT_TIME = 3;
const DEFAULT_TIME_MAX = 72;
const DEFAULT_PERCENT = 2.85;
const REGREX = /^\d*\.?\d*$/;

const Page = () => {
  const [loan, setLoan] = useState<number>(DEFAULT_LOAN);
  const [time, setTime] = useState<number>(DEFAULT_TIME);
  const [interest, setInterest] = useState<number>(0);
  const [percent, setPercent] = useState<number>(DEFAULT_PERCENT);

  useEffect(() => {
    setInterest(((loan * percent) / 100) * time);
    console.log(loan);
  }, [loan, time, percent]);

  return (
    <div className="w-[500px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center text-center">
          <span className="text-primary font-semibold text-xl">
            Ước tính khoản vay
          </span>
          <span>Tính nhanh khoản vay của bạn</span>
        </div>
        <div className="bg-white rounded-md shadow-md p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Số tiền cần vay</span>
              <span className="py-1 px-2 bg-white rounded-md">
                {convertVND(loan)}
              </span>
            </div>
            <Slider
              defaultValue={[5000000]}
              max={200000000}
              step={10000000}
              onValueChange={(e: number[]) => {
                setLoan(e[0]);
              }}
            />
            <div className="flex justify-between items-center text-gray-600">
              <span>{convertVND(DEFAULT_LOAN)}</span>
              <span>{convertVND(DEFAULT_LOAN_MAX)}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Kì hạn vay</span>
              <span className="py-1 px-2 bg-white rounded-md">
                {time + " tháng"}
              </span>
            </div>
            <Slider
              defaultValue={[DEFAULT_TIME]}
              max={DEFAULT_TIME_MAX}
              step={3}
              onValueChange={(e: number[]) => {
                setTime(e[0]);
              }}
            />
            <div className="flex justify-between items-center text-gray-600">
              <span>{DEFAULT_TIME + " tháng"}</span>
              <span>{DEFAULT_TIME_MAX + " tháng"}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Lãi hàng tháng</span>
            <div className="flex gap-2 items-center">
              <Input
                className="w-48"
                value={percent}
                onChange={(e) => {
                  if (REGREX.test(e.target.value)) setPercent(+e.target.value);
                }}
                placeholder="Ví dụ: 2.85"
                onBlur={() => {
                  if (percent < 1.01 || percent >= 100)
                    setPercent(DEFAULT_PERCENT);
                }}
              />
              %
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between items-center cursor-default">
            <div className="flex flex-col gap-2">
              <span className="text-gray-600">Số tiền thanh toán</span>
              <span className="font-semibold text-xl">
                {convertVND(interest + loan)}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600">Số tiền lãi</span>
              <span className="font-semibold text-xl cursor-default">
                {convertVND(interest)}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-600">
              Tổng số tiền thanh toán hàng tháng
            </span>
            <span className="text-3xl text-primary font-semibold cursor-default">
              {convertVND((interest + loan) / time)}
            </span>
          </div>
          <Link href={"/register"} className="w-full">
            <Button className="flex items-center gap-2 w-full">
              Đăng kí ngay
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
