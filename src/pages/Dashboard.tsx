import { Tab } from "@components/ui/tabs/Tab";
import { Tabs } from "@components/ui/tabs/Tabs";
import { DataTypes, fetchData } from "@services/api/api";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Dashboard() {
  const [date, setDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const data = fetchData(DataTypes.Dashboard);
    // console.log(data);
  }, []);
  return (
    <>
      <div>
        <ReactDatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          showMonthYearPicker
          dateFormat="MM/yyyy"
        />
      </div>

      <Tabs>
        <Tab tabName="Transactions">
          <>
            <p>Transaction Content</p>
          </>
        </Tab>
        <Tab tabName="Categories">
          <>
            <p>Categories Content</p>
            <button>yolo</button>
          </>
        </Tab>
        <Tab tabName="Accounts">
          <>
            <p>Accounts Content</p>
          </>
        </Tab>
      </Tabs>
    </>
  );
}
