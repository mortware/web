import { Education, ResumeSummary, Skills, WorkHistory } from "../../data/resume-data";
import ResumeHeader from "./components/ResumeHeader";
import ResumeSection from "./components/ResumeSection";
import ResumeHistory from "./components/ResumeHistory";
import { format } from "date-fns";
import { cn } from "@lib/utils/css";
import Icon from "@components/Icon";

export default function ResumePage() {
  return (
    <div className="container">

      <div className="flex gap-2 justify-end print:hidden">
        <a href="#"
          className="flex gap-2 text-md items-center py-2"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}>
          <Icon icon="printer" className="w-6 h-6" />
          Print this page</a>
      </div>

      <article className={cn([
        "flex flex-col",
        "resume text-left bg-white text-sm",
        "lg:shadow-lg lg:text-base"])}>

        <ResumeHeader />

        <section className="p-4 lg:p-12 print:p-0 print:pt-2">

          <ResumeSection title="Career Summary">
            <p className="mb-0">
              {ResumeSummary.map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </p>
          </ResumeSection>

          <ResumeSection title="Skills & Tools">
            {Skills.map((category, i) =>
              <p key={i}>
                <strong>{category.name}: </strong>
                {category.skills.sort((a, b) => a > b ? 1 : -1).join(", ")}
              </p>
            )}
          </ResumeSection>

          <ResumeSection title="Work Experience">
            <div className="resume-timeline pl-8">
              {WorkHistory
                .sort((a, b) => a.from < b.from ? 1 : -1)
                .slice(0, 5)
                .map((item, i) => {
                  const fromDate = format(new Date(item.from), 'yyyy');
                  const toDate = !item.to ? "Present" : format(new Date(item.to), 'yyyy');
                  return <ResumeHistory
                    key={i}
                    title={item.title}
                    employer={item.employer}
                    description={item.description}
                    from={fromDate}
                    to={toDate}
                    notes={item.keyNotes}
                    tags={item.tags}
                  />
                })}
              {WorkHistory
                .sort((a, b) => a.from < b.from ? 1 : -1)
                .slice(5)
                .map((item, i) => {
                  const fromDate = format(new Date(item.from), 'yyyy');
                  const toDate = !item.to ? "Present" : format(new Date(item.to), 'yyyy');
                  return <ResumeHistory
                    key={i}
                    title={item.title}
                    employer={item.employer}
                    description={item.description}
                    from={fromDate}
                    to={toDate}
                    notes={[]}
                    tags={item.tags}
                  />
                })}
            </div>
          </ResumeSection>

          <ResumeSection title="Education">
            <div className="grid grid-cols-1 lg:grid-cols-3 print:grid-cols-3 gap-2">
              {Education.map((item, i) =>
                <div key={i} className="mb-2 flex flex-no-wrap space-x-1 lg:flex-col lg:space-x-0 print:flex-col print:space-x-0">
                  <div className="font-bold whitespace-no-wrap truncate">{item.name}</div>
                  <div className="font-light whitespace-no-wrap truncate text-sm print:text-xs">{item.provider}</div>
                  <div className="font-light whitespace-no-wrap truncate text-sm print:text-xs">{item.completed}</div>
                </div>
              )}
            </div>
          </ResumeSection>

        </section>
      </article >
    </div>
  )
}
