import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button/Button";
import HomeCardSection from "@/components/HomePage/HomeCardSection";
import HomeFooter from "@/components/HomePage/HomeFooter";

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="mb-24">
        <div className="flex w-full items-end justify-center bg-[#CFE5FF] lg:h-[540px]">
          <div className="flex w-full flex-col items-center justify-center gap-20 overflow-x-hidden lg:flex-row lg:gap-0 lg:pl-2">
            <div className="mt-12 flex w-full shrink-0 flex-col items-center gap-6 lg:w-[357px] lg:items-start">
              <h1 className="text-bold32 text-gray700 md:text-bold40 text-center lg:text-left">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h1>
              <Link href="/items">
                <Button paddingX={110} paddingY={16}>
                  <p className="text-semi18 sm:text-semi20 shrink-0">
                    구경하러가기
                  </p>
                </Button>
              </Link>
            </div>
            <Image
              src="/icons/hiPanda.svg"
              alt="hi-panda"
              width={730}
              height={340}
              className="h-auto w-full max-w-[730px] min-w-[448px]"
            />
          </div>
        </div>

        <HomeCardSection />
      </div>

      <div className="flex items-end justify-center bg-[#CFE5FF] lg:h-[540px]">
        <div className="mt-28 flex w-full max-w-300 flex-col items-center justify-between gap-40 px-5 lg:flex-row lg:gap-0">
          <p className="text-gray700 text-bold32 sm:text-bold40 shrink-0 text-center lg:text-left">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
          <Image
            src="/icons/twoPandas.svg"
            alt="two-pandas"
            width={746}
            height={397}
            className="h-auto w-full max-w-[746px] min-w-[375px]"
          />
        </div>
      </div>

      <HomeFooter />
    </div>
  );
}
