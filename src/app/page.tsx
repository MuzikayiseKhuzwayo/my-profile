import ProfileCard from '@/components/ProfileCard';
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
        {/* Section 1: Ventures & Live Projects */}
        <section className="venturesSection">
          <div className="sectionHeader">
            <div>
              <h2 className="sectionTitle">Ventures & Live Projects</h2>
              <p className="sectionSubtitle">
                Real-time portfolio tracking verified earnings and growth across online businesses.
              </p>
            </div>
          </div>

          <div className="dashboardGrid">
            {venturesList.map((venture) => (
              <StatsCard key={venture.id} venture={venture} />
            ))}
          </div>
        </section>

        {/* Section 2: Hyper-Intentionalism & Systems Engineering */}
        <MediaDispatches />
      </div>
    </main>
  );
}
