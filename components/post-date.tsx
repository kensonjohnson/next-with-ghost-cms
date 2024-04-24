export default function PostDate({ dateString }: { dateString: string }) {
  const date = new Date(dateString);
  return <time dateTime={dateString}>{date.toLocaleString()}</time>;
}
