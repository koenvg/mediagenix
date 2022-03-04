import { Datatype } from "@faker-js/faker/datatype";
import { Button } from "antd";
import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { fetchEvents } from "../../api/eventApi";
import { CreateEventDialog } from "./CreateEventDialog";
import { EventTable } from "./EventTable";

export interface Props {}

export const EventPage: FunctionComponent<Props> = () => {
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setIsCreatingEvent(true)}>
        New event
      </Button>
      <EventTable />
      <CreateEventDialog
        open={isCreatingEvent}
        onClose={() => setIsCreatingEvent(false)}
      ></CreateEventDialog>
    </div>
  );
};

EventPage.displayName = "EventPage";
