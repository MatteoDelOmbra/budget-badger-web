import { DataTypes, fetchData } from "@services/api/api";
import { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Dashboard() {
  useEffect(() => {
    const data = fetchData(DataTypes.Dashboard);
    console.log(data);
  }, []);
  return (
    <>
      <div>
        Data
        <ReactDatePicker
          onChange={(date) => console.log(date + "selected")}
          showMonthYearPicker
        />
      </div>
      <div>Categories</div>
      <div>Accounts</div>
    </>
  );
}
