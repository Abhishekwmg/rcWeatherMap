import { z } from "zod";

export const AirPollution = z
  .object({
    coord: z.object({
      lat: z.number(),
      lon: z.number(),
    }),
    list: z.array(
      z.object({
        dt: z.number().transform((val) => new Date(val * 1000)), // Unix → Date
        main: z.object({
          aqi: z.union([
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(5),
          ]),
        }),
        components: z.object({
          co: z.number(),
          no: z.number(),
          no2: z.number(),
          o3: z.number(),
          so2: z.number(),
          pm2_5: z.number(),
          pm10: z.number(),
          nh3: z.number(),
        }),
      }),
    ),
  })
  .transform((data) => ({
    ...data,
    list: data.list.map((item) => ({
      ...item,
      aqiLabel:
        item.main.aqi === 1
          ? "Good"
          : item.main.aqi === 2
            ? "Fair"
            : item.main.aqi === 3
              ? "Moderate"
              : item.main.aqi === 4
                ? "Poor"
                : "Very Poor",
    })),
  }));

export type AirPollutionSchema = z.infer<typeof AirPollution>;
