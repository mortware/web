import Button from "../components/Button";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

export default function HomePage() {
  return (
    <article>
      <Hero imageUrl="./img/ph_code.jpg" title="Welcome" subtitle="Hello">

      </Hero>

      <PageSection title="Projects" subtitle="Applications developed for business">
        <div className="flex flex-col lg:flex-row space-x-4">
          <Feature
            title="RBS Marine"
            imageUrl="./img/rbs-marine.svg"
            description="Sales/brochure website with inventory management and external feeds. Using Umbraco CMS.">
            <Button url="https://www.rbsmarine.com" label="Visit" icon="globe" cta={true} />
          </Feature>

          <Feature
            title="The Arts College"
            imageUrl="./img/the-arts-college.jpg"
            description="Based on Umbraco CMS, this application manages memberships, courses and course access.">
            <Button url="http://www.theartscollege.com/" label="Visit" icon="globe" cta={true} />
          </Feature>
        </div>
      </PageSection>

      <PageSection title="Other things" subtitle="Side-projects used to learn new technologies" className="bg-gray-200">
        <div className="flex flex-col lg:items-stretch lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <Feature
            title="Tetris"
            imageUrl="./img/tetris.png"
            description="A personal challenge; Create a playable Tetris-clone using only React and some supporting libraries.">
            <Button url="https://github.com/mortware/tetris" label="Source" icon="github" />
            <Button url="https://mortware-tetris.netlify.app" label="Play" icon="play" cta={true} />
          </Feature>
          <Feature
            title="Planning Poker"
            imageUrl="./img/planning-poker.png"
            description="A nodejs-based application that provides story point estimate, chat and observer features.">
            <Button url="https://github.com/mortware/planning-poker" label="Source" icon="github" />
          </Feature>
          <Feature
            title="Minesweeper"
            imageUrl="./img/minesweeper.png"
            description="An attempt at creating a simple Minesweeper-clone using only JavaScript." >
            <Button url="https://github.com/mortware/minesweeper" label="Source" icon="github" />
            <Button url="https://mortware-minesweeper.netlify.app/" label="Play" icon="play" cta={true} />
          </Feature>
        </div>
      </PageSection>


    </article>
  )
}
