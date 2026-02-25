import Tags from './Tags'

type ResumeHistoryProps = {
  title: string
  employer: string
  description: string
  from: string
  to: string
  notes: string[]
  tags: string[]
}

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
    <article className="resume-timeline-item">
      <header className="mb-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
          <div className="text-sm font-medium text-slate-500 dark:text-slate-300">{employer}</div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
          {from} - {to}
        </div>
      </header>

      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{description}</p>

      {notes.length ? (
        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
          {notes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-4">
        <Tags tags={tags} />
      </div>
    </article>
  )
}
