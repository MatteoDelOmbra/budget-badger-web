import { Children, PropsWithChildren, isValidElement, useState } from "react";
import styled from "styled-components";

const StyledTabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTab = styled.div`
  &.active {
    background-color: ${(props) => props.theme.secondary};
  }
`;

const StyledTabContent = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export function Tabs({ children }: PropsWithChildren) {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return child;
    }
  });

  const [tab, setTab] = useState<Number>(0);
  return (
    childrenWithProps && (
      <>
        <StyledTabs>
          {childrenWithProps.map((child, index) => {
            return (
              <StyledTab
                key={index}
                className={tab === index ? "active" : ""}
                onClick={() => setTab(index)}
              >
                {child.props.tabName}
              </StyledTab>
            );
          })}
        </StyledTabs>

        <div className="contents">
          {childrenWithProps.map((child, index) => {
            return (
              <StyledTabContent
                key={index}
                className={tab === index ? "active" : ""}
              >
                {child.props.children}
              </StyledTabContent>
            );
          })}
        </div>
      </>
    )
  );
}
