

type EntryHeaderProps = {
  title: string;
  date?: Date | string;
  author?: string;
};

export default function EntryHeader({ title, date, author }: EntryHeaderProps) {
  return (
    <div className="">
      {title && <h1>{title}</h1>}

      {date && author && (
        <div className="">
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}
    </div>
  );
}
