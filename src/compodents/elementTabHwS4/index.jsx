import React, { useState } from "react";

import "./elementTab.css";

const contentDefault = {
  HISTORY:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  APPROACH:
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  CULTURE:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
  METHOD:
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
};

const TAB = {
  HISTORY: 1,
  APPROACH: 2,
  CULTURE: 3,
  METHOD: 4,
};

function Index(props) {
  const [activeTab, setActiveTab] = useState(TAB.HISTORY);

  const onClickTab = (value) => {
    setActiveTab(value);
  };
  return (
    <div className="container tab-element d-flex gap-1">
      <TabItem
        title="HISTORY"
        content={contentDefault.HISTORY}
        value={TAB.HISTORY}
        activeTab={activeTab}
        onClick={onClickTab}
      />

      <TabItem
        title="APPROACH"
        content={contentDefault.APPROACH}
        value={TAB.APPROACH}
        activeTab={activeTab}
        onClick={onClickTab}
        // isActive={activeTab === "PENDING"}
        // onClick={() => onClickTab("PENDING")}
      />

      <TabItem
        title="CULTURE"
        content={contentDefault.CULTURE}
        value={TAB.CULTURE}
        activeTab={activeTab}
        onClick={onClickTab}
        // isActive={activeTab === "WAITING"}
        // onClick={() => onClickTab("WAITING")}
      />

      <TabItem
        title="METHOD"
        content={contentDefault.METHOD}
        value={TAB.METHOD}
        activeTab={activeTab}
        onClick={onClickTab}
        // isActive={activeTab === "WAITING"}
        // onClick={() => onClickTab("WAITING")}
      />
    </div>
  );
}

export default Index;

const TabItem = ({ title, content, value, activeTab, onClick }) => {
  return (
    <div className="-element">
      <div className="tab-element__item " onClick={() => onClick(value)}>
        <div
          className={`tab-element__title ${
            value === activeTab ? "tab-element__title--active" : ""
          }`}
        >
          {title}
        </div>
      </div>
      {value === activeTab && <div className="tab-element__content">{content}</div>}
    </div>
  );
};
