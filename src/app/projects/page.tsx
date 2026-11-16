import type { Metadata } from 'next';
import ProjectsShowcase from '@/components/ProjectsShowcase';

export const metadata: Metadata = {
  title: 'Projects & Demos | Muzi Khuzwayo',
  description:
    'Open-source AI agent tools, prediction market harnesses, and developer projects by Muzi Khuzwayo.',
};

export default function ProjectsPage() {
  return (
    <div className="pageStack">
      <header className="heroHeader">
        <h1 className="pageTitle">Projects &amp; live demos</h1>
        <p className="pageLead">
          Open-source things I&apos;ve built and shared on GitHub — AI browser testers, 5-minute
          prediction market engines, local OS experiments, and workflow tools. Most have an
          interactive demo you can click around in right now
        </p>
      </header>

      <ProjectsShowcase />
    </div>
  );
}
