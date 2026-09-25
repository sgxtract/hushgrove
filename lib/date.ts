const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function parseYearMonth(value: string) {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

/** "2024-08" → "Aug 2024" */
export function formatYearMonth(value: string) {
  const { year, month } = parseYearMonth(value);
  return monthFormatter.format(new Date(Date.UTC(year, month - 1)));
}

/** Counts months inclusively, like LinkedIn: Aug–Nov = 4 months */
export function monthsBetween(
  start: string,
  end: string | null,
  now = new Date(),
) {
  const from = parseYearMonth(start);
  const to = end
    ? parseYearMonth(end)
    : { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1 };

  return (to.year - from.year) * 12 + (to.month - from.month) + 1;
}

/** 26 → "2 yrs 2 mos", 4 → "4 mos", 12 → "1 yr" */
export function formatDuration(totalMonths: number) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);

  return parts.join(" ");
}
