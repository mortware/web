import ResumeHeader from './components/ResumeHeader'
import ResumeSection from './components/ResumeSection'
import ResumeHistory from './components/ResumeHistory'
import Icon from '../components/Icon'
import { Education, ResumeSummary, Skills, WorkHistory } from './resume-data'

const formatYear = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return `${date.getFullYear()}`
}

export default function ResumePage() {
  const sortedWork = [...WorkHistory].sort((a, b) => (a.from < b.from ? 1 : -1))
  const recentWork = sortedWork.slice(0, 5)
  const earlyWork = sortedWork.slice(5)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end print:hidden">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-900"
          onClick={() => window.print()}
        >
          <Icon icon="printer" className="h-4 w-4" />
          Print this page
        </button>
      </div>

      <article className="resume">
        <ResumeHeader />

        <section className="resume-body">
          <div className="resume-grid">
            <div className="space-y-8">
              <ResumeSection title="Career Summary">
                {ResumeSummary.map((line) => (
                  <p key={line} className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {line}
                  </p>
                ))}
              </ResumeSection>

              <ResumeSection title="Work Experience">
                <div className="resume-timeline">
                  {recentWork.map((item) => (
                    <ResumeHistory
                      key={`${item.employer}-${item.title}`}
                      title={item.title}
                      employer={item.employer}
                      description={item.description}
                      from={formatYear(item.from)}
                      to={item.to ? formatYear(item.to) : 'Present'}
                      notes={item.keyNotes}
                      tags={item.tags}
                    />
                  ))}
                  {earlyWork.map((item) => (
                    <ResumeHistory
                      key={`${item.employer}-${item.title}`}
                      title={item.title}
                      employer={item.employer}
                      description={item.description}
                      from={formatYear(item.from)}
                      to={item.to ? formatYear(item.to) : 'Present'}
                      notes={[]}
                      tags={item.tags}
                    />
                  ))}
                </div>
              </ResumeSection>
            </div>

            <div className="space-y-8">
              <ResumeSection title="Skills & Tools">
                <div className="space-y-4">
                  {Skills.map((category) => (
                    <div key={category.name}>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {category.name}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-200">
                        {[...category.skills].sort((a, b) => (a > b ? 1 : -1)).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Education">
                <div className="space-y-3">
                  {Education.map((item) => (
                    <div key={`${item.provider}-${item.name}`} className="resume-education">
                      <div className="font-medium text-slate-800 dark:text-slate-100">{item.name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-300">{item.provider}</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-400">
                        {item.completed}
                      </div>
                    </div>
                  ))}
                </div>
              </ResumeSection>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
