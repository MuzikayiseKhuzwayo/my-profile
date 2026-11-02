'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  TrendingUp,
  Bot,
  Workflow,
  Database,
  Sparkles,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Github,
} from 'lucide-react';
import { projectsList, ShowcaseProject, ProjectCategory } from '@/data/profileData';

const ICON_MAP = {
  Bot,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Database,
};

type CategoryFilter = 'all' | ProjectCategory;

interface ProjectsShowcaseProps {
  showHeroHeader?: boolean;
}

export default function ProjectsShowcase({ showHeroHeader = true }: ProjectsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const filteredProjects = projectsList.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const agentsCount = projectsList.filter((p) => p.category === 'agents').length;
  const quantCount = projectsList.filter((p) => p.category === 'quant').length;
  const toolingCount = projectsList.filter((p) => p.category === 'tooling').length;

  return (
    <section className="projectsShowcaseSection" id="projects">
      {showHeroHeader && (
        <div className="projectsHeroHeader">
          <div className="portfolioPill">
            <span className="pulseDot" />
            <span>Open Source &amp; Research Portfolio</span>
          </div>

          <h2 className="projectsHeroTitle">
            Standout Public Projects <span className="textGradient">&amp; Why They Matter</span>
          </h2>

          <p className="projectsHeroSubtitle">
            A strong intersection of{' '}
            <strong className="highlightInline">autonomous agent engineering</strong>,{' '}
            <strong className="highlightInline">quantitative market microstructure</strong>, and{' '}
            <strong className="highlightInline">agentic developer tooling</strong>. Below is a
            detailed breakdown of my key open-source repositories and experimental architectures.
          </p>
        </div>
      )}

      {/* Category Filter Tabs */}
      <div className="categoryFilterBar" role="tablist" aria-label="Project categories">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`categoryFilterBtn ${selectedCategory === 'all' ? 'active' : ''}`}
        >
          <span>All Projects</span>
          <span className="categoryCount">{projectsList.length}</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory('agents')}
          className={`categoryFilterBtn ${selectedCategory === 'agents' ? 'active' : ''}`}
        >
          <Bot size={15} />
          <span>Autonomous Agents &amp; LLMs</span>
          <span className="categoryCount">{agentsCount}</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory('quant')}
          className={`categoryFilterBtn ${selectedCategory === 'quant' ? 'active' : ''}`}
        >
          <TrendingUp size={15} />
          <span>Quantitative &amp; Prediction Markets</span>
          <span className="categoryCount">{quantCount}</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedCategory('tooling')}
          className={`categoryFilterBtn ${selectedCategory === 'tooling' ? 'active' : ''}`}
        >
          <Workflow size={15} />
          <span>Developer Tooling &amp; Infrastructure</span>
          <span className="categoryCount">{toolingCount}</span>
        </button>
      </div>

      {/* Projects Stack */}
      <div className="projectsStack">
        {filteredProjects.map((project: ShowcaseProject) => {
          const IconComponent = ICON_MAP[project.iconName] || Bot;
          const isExternalLink = project.link.startsWith('http');

          return (
            <article key={project.id} className="projectShowcaseCard">
              <div className="projectCardAmbientGlow" />

              {/* Top Bar: Number + Category + Action Links */}
              <div className="projectTopBar">
                <div className="projectMetaLeft">
                  <span className="projectNumBadge">{project.num}</span>
                  <span className="projectCategoryLabel">{project.categoryLabel}</span>
                </div>

                <div className="projectTopActions">
                  {project.hasShowcase && (
                    <a
                      href={project.link}
                      className="projectShowcaseBtn"
                      title={`Open ${project.name} Interactive Showcase`}
                    >
                      <span>Interactive Showcase</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectRepoBtn"
                    title={`View ${project.name} on GitHub`}
                  >
                    <Github size={14} />
                    <span>Explore Repository</span>
                    <ArrowUpRight size={14} className="btnArrowIcon" />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="projectTitleBlock">
                <div className="projectIconBox">
                  <IconComponent size={24} />
                </div>
                <div className="projectTitleContent">
                  <h3 className="projectHeading">
                    <a
                      href={project.link}
                      {...(isExternalLink
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="projectHeadingLink"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="projectTagline">{project.tagline}</p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="projectTechSection">
                <div className="projectSectionMicroHeader">
                  <Code2 size={14} className="microHeaderIcon" />
                  <span>Tech Stack</span>
                </div>
                <div className="techStackPills">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="techPill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* What It Does Section */}
              <div className="whatItDoesBox">
                <h4 className="projectSectionMicroHeader accent">
                  <Terminal size={15} className="microHeaderIcon" />
                  <span>What It Does</span>
                </h4>
                <p className="whatItDoesText">{project.whatItDoes}</p>
              </div>

              {/* Why It's Valuable Section */}
              <div className="whyItMattersSection">
                <h4 className="projectSectionMicroHeader accent">
                  <CheckCircle2 size={15} className="emeraldIcon" />
                  <span>Why It&rsquo;s Valuable for Developers &amp; AI Practitioners</span>
                </h4>
                <div className="whyItMattersGrid">
                  {project.whyItMatters.map((item, idx) => (
                    <div key={idx} className="whyItMattersCard">
                      <div className="whyTargetHeader">
                        <span className="whyTargetDot" />
                        <span>{item.target}</span>
                      </div>
                      <p className="whyTargetDetail">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="projectCardFooter">
                <span className="projectStatusText">
                  Status: Active Open-Source Architecture
                </span>
                <a
                  href={project.link}
                  {...(isExternalLink
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="projectFooterCta"
                >
                  <span>
                    {project.hasShowcase
                      ? 'Navigate to project landing page'
                      : 'Explore repository on GitHub'}
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
