export function formatDateTimeString(
  dateTimeString?: string | null,
): string | null {
  if (!dateTimeString) return null;

  const date = new Date(dateTimeString);

  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDate(date: string | Date | undefined): string {
  if (!date) return "Invalid Date";

  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "Invalid Date";

  return d.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

