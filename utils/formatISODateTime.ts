export default function formatISODateTime(isoString: string): string {
  if (!isoString) return "";

  const date = isoString.split("T")[0];
  return date.replace(/-/g, ".");
}
