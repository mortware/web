import Icon from "@/components/Icon";
import { SocialLinks, PersonalDetails } from "@/data/resume-data";
import { cn } from "@/lib/utils/css";

export default function ResumeHeader() {
  const links = SocialLinks.map((link, i) => (
    <li className="mb-1 lg:mb-2 print:mb-1" key={i}>
      <a
        href={link.url}
        className={cn([
          "flex flex-row items-center flex-end lg:flex-row-reverse",
          " text-sm whitespace-no-wrap truncate",
          "print:flex-row-reverse ",
          "lg:text-base lg:text-gray-300",
        ])}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={link.icon} className="mx-1 lg:mx-2" />
        <span className="inline-block print:inline-block">{link.display}</span>
      </a>
    </li>
  ));

  return (
    <header className="">
      <div className="text-gray-800 lg:text-white lg:bg-resume print:bg-white print:text-black">
        <div className="flex flex-col items-center lg:items-start print:items-start lg:flex-row print:flex-row">
          {/* Profile Image */}
          <div className="relative w-full lg:w-auto print:hidden">
            <img
              src="dp_profile.png"
              className="w-1/2 border-8 border-white lg:border-0 z-10 my-6 mx-auto rounded-full lg:rounded-none lg:m-0 lg:w-auto lg:h-auto relative"
              alt="Profile"
            />
            <div className="z-0 inset-0 absolute bg-resume h-1/2 w-full "></div>
          </div>

          <div className="text-center lg:text-left print:text-left flex-1 p-2 lg:p-6 print:p-0">
            {/* Name & Title */}
            <div className="lg:uppercase whitespace-no-wrap truncate text-4xl lg:text-4xl lg:tracking-widest font-black print:text-3xl">
              {PersonalDetails.name}
            </div>
            <div className="text-2xl whitespace-no-wrap truncate mb-4 lg:mb-1">
              {PersonalDetails.title}
            </div>
          </div>

          {/* Link */}
          <div className="p-2 print:p-0 w-full lg:w-auto">
            <ul className="list-unstyled">{links}</ul>
          </div>
        </div>
      </div>
    </header>
  );
}
