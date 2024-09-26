import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly";

export function generateRecurringDates(
  startDate: Date | undefined,
  recurrenceType: RecurrenceType,
  interval: number,
  selectedDays: number[],
  nthDay: number
): Date[] {
  if (!startDate) return [];

  const previewDates: Date[] = [new Date(startDate)];
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 3);

  let currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + 1);

  while (currentDate <= endDate) {
    if (
      isRecurringDate(
        currentDate,
        startDate,
        recurrenceType,
        interval,
        selectedDays,
        nthDay
      )
    ) {
      previewDates.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return previewDates;
}

export function isRecurringDate(
  date: Date,
  startDate: Date,
  recurrenceType: RecurrenceType,
  interval: number,
  selectedDays: number[],
  nthDay: number
): boolean {
  const daysDiff = Math.floor(
    (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  switch (recurrenceType) {
    case "daily":
      return daysDiff % interval === 0;
    case "weekly":
      return (
        selectedDays.includes(date.getDay()) && daysDiff % (interval * 7) === 0
      );
    case "monthly":
      return (
        date.getDate() === nthDay &&
        (date.getMonth() -
          startDate.getMonth() +
          12 * (date.getFullYear() - startDate.getFullYear())) %
          interval ===
          0
      );
    case "yearly":
      return (
        date.getMonth() === startDate.getMonth() &&
        date.getDate() === startDate.getDate() &&
        (date.getFullYear() - startDate.getFullYear()) % interval === 0
      );
    default:
      return false;
  }
}
