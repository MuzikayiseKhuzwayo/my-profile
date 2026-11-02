import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectsShowcase from '@/components/ProjectsShowcase';

export const metadata: Metadata = {
  title: 'Projects & Open Source Repositories | Muzi Khuzwayo',
  description:
    'Standout public repositories and architectures across autonomous agent engineering, quantitative market microstructure, and agentic developer tooling.',
};

export default function ProjectsPage() {
  return (
    <main className="standaloneProjectsContainer">
      <div className="standaloneBreadcrumb">
        <Link href="/" className="breadcrumbBackLink">
          <ArrowLeft size={14} />
          <span>Muzi Khuzwayo</span>
        </Link>
        <span className="breadcrumbSep">/</span>
        <span className="breadcrumbCurrent">Open Source &amp; Research Portfolio</span>
      </div>

      <ProjectsShowcase showHeroHeader={true} />
    </main>
  );
}
