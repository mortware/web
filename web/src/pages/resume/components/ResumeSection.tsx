import { PropsWithChildren } from "react"

type ResumeSectionProps = { title: string } & PropsWithChildren;

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <div className="resume-section mb-4">
      <h2 className="font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}
