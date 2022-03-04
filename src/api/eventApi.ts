const fetchJson = <T extends {}>(
  ...args: Parameters<typeof fetch>
): Promise<T> => fetch(...args).then((res) => res.json());

export type EventType = "generic" | "holiday";
interface EventResponse {
  id: string;
  title: string;
  type: EventType;
  startDate: string;
  endDate: string;
  description?: string;
}

type Event = Omit<EventResponse, "startDate" | "endDate"> & {
  startDate: Date;
  endDate: Date;
};

const mapEventResponseToEvent = (e: EventResponse): Event => ({
  ...e,
  startDate: new Date(e.startDate),
  endDate: new Date(e.endDate),
});

export const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetchJson<EventResponse[]>("/events");
  return res.map(mapEventResponseToEvent);
};

export const createEvent = async (event: Omit<Event, "id">) => {
  const res = await fetchJson<EventResponse>("/events", {
    method: "POST",
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return mapEventResponseToEvent(res);
};
