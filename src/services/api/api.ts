export enum DataTypes {
  Dashboard = 1,
  User = 2,
  Debts = 3,
}

export const fetchData = (dataType: DataTypes) => {
  switch (dataType) {
    case DataTypes.Dashboard: {
      return "foo";
    }
    default: {
      return "dataType not supported";
    }
  }
};
