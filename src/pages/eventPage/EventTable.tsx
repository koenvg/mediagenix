import React, { FunctionComponent } from "react";
import { fetchEvents } from "../../api/eventApi";
import { useQuery } from "react-query";
import { Table, Tag } from "antd";
import { renderDate } from "../../components/renderDate";
import { EventType } from "../../api/eventApi";

const { Column } = Table;

export interface Props {}

export const useEvents = () => useQuery("events", fetchEvents);

const renderType = (type: EventType) => {
  switch (type) {
    case "generic":
      return <Tag color="red">Generic</Tag>;
    case "holiday":
      return <Tag color="blue">Holiday</Tag>;
  }
};
export const EventTable: FunctionComponent<Props> = () => {
  const { data, isFetching } = useEvents();

  return (
    <Table dataSource={data} loading={isFetching} rowKey="id">
      <Column title="Title" dataIndex="title"></Column>
      <Column title="Type" dataIndex="type" render={renderType}></Column>
      <Column
        title="Start Date"
        dataIndex="startDate"
        render={renderDate}
      ></Column>
      <Column title="End Date" dataIndex="endDate" render={renderDate}></Column>
    </Table>
  );
};

EventTable.displayName = "EventTable";
