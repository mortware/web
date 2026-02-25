import type { PropsWithChildren } from 'react'

type ResumeSectionProps = { title: string } & PropsWithChildren

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}
