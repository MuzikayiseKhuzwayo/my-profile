import ProfileCard from '@/components/ProfileCard';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import StatsCard from '@/components/StatsCard';
import MediaDispatches from '@/components/MediaDispatches';
import { venturesList } from '@/data/profileData';

export default function Home() {
  return (
    <main className="dashboardContainer">
      <aside className="sidebarWrapper">
        <ProfileCard />
      </aside>

      <div className="mainContent">
        {/* Section 1: Standout Public Projects & Open-Source Architectures */}
        <ProjectsShowcase showHeroHeader={true} />

        {/* Section 2: Ecosystem Ventures & Live Divisions */}
        <section className="venturesSection" id="ventures">
          <div className="sectionHeader">
            <div>
              <h2 className="sectionTitle">Ecosystem Ventures &amp; Divisions</h2>
              <p className="sectionSubtitle">
                Modular divisions working in synergy across causal financial intelligence, AI business automation, and market analytics.
              </p>
            </div>
          </div>

          <div className="dashboardGrid">
            {venturesList.map((venture) => (
              <StatsCard key={venture.id} venture={venture} />
            ))}
          </div>
        </section>

        {/* Section 3: Hyper-Intentionalism & Systems Engineering */}
        <MediaDispatches />
      </div>
    </main>
  );
}
