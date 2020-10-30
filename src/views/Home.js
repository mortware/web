import React from 'react';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';

const Home = () => {

    return (
        <div>
            <article>
                <Hero imageUrl="./img/ph_code.jpg" title="Welcome" subtitle="Hello">

                </Hero>

                <PageSection title="Projects" subtitle="Applications developed for business">
                    <div className="flex flex-col md:flex-row space-x-4">
                        <Feature
                            title="RBS Marine"
                            imageUrl="./img/rbs-marine.svg"
                            description="Sales/brochure website with inventory management and external feeds. Using Umbraco CMS." />
                        <Feature
                            title="Planning Poker"
                            imageUrl="./img/planning-poker.png"
                            description="A nodejs-based application that provides story point estimate, chat and observer features." />
                        <Feature
                            title="The Arts College"
                            imageUrl="./img/the-arts-college.jpg"
                            description="Based on Umbraco CMS, this application manages memberships, courses and course access." />
                    </div>
                </PageSection>

                <PageSection title="Other things" subtitle="Side-projects used to learn new technologies" theme="dark">
                    <div className="flex flex-col md:flex-row space-x-4">
                        <Feature
                            title="Tetris"
                            description="A personal challenge; Create a playable Tetris-clone using only React and some supporting libraries." />
                        <Feature
                            title="Minesweeper"
                            description="An attempt at creating a simple Minesweeper-clone using only JavaScript." />
                    </div>
                </PageSection>


            </article>
        </div>
    );
}

export default Home;