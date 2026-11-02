import { Metadata } from 'next';
import ProfileCard from '@/components/ProfileCard';
import ProjectsShowcase from '@/components/ProjectsShowcase';

export const metadata: Metadata = {
  title: 'Projects & Open Source Repositories | Muzi Khuzwayo',
  description:
    'Standout public repositories and architectures across autonomous agent engineering, quantitative market microstructure, and agentic developer tooling.',
};

export default function ProjectsPage() {
  return (
    <main className="appShell">
      <aside className="sidebarColumn">
        <ProfileCard />
      </aside>

      <div className="contentColumn">
        <ProjectsShowcase showHeroHeader={true} />
      </div>
    </main>
  );
}
