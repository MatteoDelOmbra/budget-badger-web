import { PropsWithChildren } from "react";

type TabProps = PropsWithChildren & {
  tabName: String;
};

export function Tab(props: TabProps) {
  return <div>{props.tabName}</div>;
}
