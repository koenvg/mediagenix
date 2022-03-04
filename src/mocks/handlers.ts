import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { Random } from "@faker-js/faker/random";

const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const pickRandom = <T>(list: T[]): T => {
  if (list.length === 0) throw Error("Empty list is not allowed");
  const index = randomBetween(0, list.length - 1);
  return list[index];
};

let events = Array(10)
  .fill(0)
  .map((_, i) => {
    const [startDate, endDate] = faker.date.betweens(
      new Date().toString(),
      faker.date.future().toString(),
      2
    );
    return {
      id: i.toString(),
      title: faker.lorem.words(),
      type: pickRandom(["generic", "holiday"]),
      startDate,
      endDate,
      description: faker.lorem.paragraph(),
    };
  });

export const handlers = [
  rest.get("/events", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(events)),
      ctx.delay(1200)
    );
  }),

  rest.post("/events", (req, res, ctx) => {
    const event = { id: events.length, ...(req.body as any) };
    events = [event, ...events];

    return res(
      ctx.status(200),
      ctx.body(JSON.stringify(event)),
      ctx.delay(1200)
    );
  }),
];
