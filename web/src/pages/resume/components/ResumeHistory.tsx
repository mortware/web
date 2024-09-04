import Tags from "@/components/Tags";

type ResumeHistoryProps = {
  title: string;
  employer: string;
  description: string;
  from: string;
  to: string;
  notes: string[];
  tags: string[];
};

export default function ResumeHistory({
  title,
  employer,
  description,
  from,
  to,
  notes,
  tags,
}: ResumeHistoryProps) {
  return (
    <article className="resume-timeline-item mb-4 lg:mb-8 last:mb-0 relative">
      <header className="mb-1 lg:mb-2">
        <div className="flex justify-between ">
          <h3 className="font-bold whitespace-no-wrap truncate">{title}</h3>
          <div className="text-sm font-medium whitespace-no-wrap truncate">
            {employer}
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {from} - {to}
        </div>
      </header>

      <p className="mb-1 lg:mb-4">{description}</p>

      <div className="mb-4">
        <ul className="list-disc list-outside pl-0 print:text-sm">
          {notes.map((note, i) => (
            <li className="ml-5" key={i}>
              {note}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Tags tags={tags} />
      </div>
    </article>
  );
}
