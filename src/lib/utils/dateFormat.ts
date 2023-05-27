import { formatInTimeZone } from "date-fns-tz";

export const dateFormat = (date: any, format: any, region: any) => {
  return formatInTimeZone(
    date,
    region ? region : "America/New_York",
    format ? format : "dd MMM yyyy"
  );
};
