import { ColumnChartCard } from "../components/ColumnChartCard";
import { ExpenseCard } from "../components/ExpenseCard";
import GeldCard from "../components/GeldCard";
import Header from "../components/Header";
import { IncomeCard } from "../components/IncomeCard";
import { LastRecordsCard } from "../components/LastRecordsCard";
import { PieChartCard } from "../components/PieChartCard";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header />
      <div className="flex flex-col items-center py-8 w-full h-cover bg-[var(--lightgray)]">
        <div className="w-[1440px] flex flex-col gap-6">
          <div className="h-[220px] flex grid-cols-3 gap-6">
            <div className="w-full">
              <GeldCard />
            </div>
            <div className=" w-full ">
              <IncomeCard />
            </div>
            <div className="w-full">
              <ExpenseCard />
            </div>
          </div>
          <div className="h-[284px] flex grid-cols-2 gap-6">
            <ColumnChartCard />
            <PieChartCard />
          </div>
          <div className="">
            <LastRecordsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
