'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projectsList, type ProjectCategory } from '@/data/profileData';

type CategoryFilter = 'all' | ProjectCategory;

const agentsCount = projectsList.filter((p) => p.category === 'agents').length;
const quantCount = projectsList.filter((p) => p.category === 'quant').length;
const toolingCount = projectsList.filter((p) => p.category === 'tooling').length;

const CATEGORY_TABS: {
  id: CategoryFilter;
  label: string;
  count: number;
  dot?: ProjectCategory;
}[] = [
  { id: 'all', label: 'All', count: projectsList.length },
  { id: 'agents', label: 'AI Agents', count: agentsCount, dot: 'agents' },
  { id: 'quant', label: 'Markets & Quant', count: quantCount, dot: 'quant' },
  { id: 'tooling', label: 'Tools', count: toolingCount, dot: 'tooling' },
];

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredProjects = projectsList.filter((proj) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const isRtl = getComputedStyle(event.currentTarget).direction === 'rtl';
    const nextKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
    let nextIndex: number | null = null;

    if (event.key === nextKey) {
      nextIndex = (index + 1) % CATEGORY_TABS.length;
    } else if (event.key === prevKey) {
      nextIndex = (index - 1 + CATEGORY_TABS.length) % CATEGORY_TABS.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = CATEGORY_TABS.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setSelectedCategory(CATEGORY_TABS[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section className="pageSection" data-slot="projects-showcase">
      <div className="controlsToolbar" data-slot="controls">
        <div className="filterTabs" role="tablist" aria-label="Filter projects by topic">
          {CATEGORY_TABS.map((tab, index) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`proj-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="proj-grid-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedCategory(tab.id)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                className="filterTabBtn"
              >
                {tab.dot && <span className={`layerDot ${tab.dot}`} aria-hidden="true" />}
                <span>{tab.label}</span>
                <span className="filterTabCount tabularNum">{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="proj-grid-panel"
        role="tabpanel"
        aria-labelledby={`proj-tab-${selectedCategory}`}
        className="projectGrid"
        data-slot="project-grid"
      >
        {filteredProjects.map((project) => (
          <article key={project.id} className="projectCard" data-slot="project-card">
            <div className="projectCardTop">
              <span className="projectCategoryBadge">
                <span className={`layerDot ${project.category}`} aria-hidden="true" />
                <span>{project.categoryLabel}</span>
              </span>
              <kbd className="routeKeycap">{project.routeKey}</kbd>
            </div>

            <div className="projectCardMain">
              <h2 className="projectCardTitle">{project.name}</h2>
              <p className="projectCardTagline">{project.tagline}</p>
              <p className="projectCardSummary">{project.summary}</p>
            </div>

            <div className="tagRow">
              {project.techStack.map((tech) => (
                <span key={tech} className="stackTag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="projectCardActions">
              {project.hasShowcase && (
                <a
                  href={project.link}
                  aria-label={`Try ${project.name} live demo`}
                  className="primaryActionBtn compact"
                >
                  <span>Try live demo</span>
                  <ExternalLink size={15} strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source on GitHub`}
                className="secondaryActionBtn compact"
              >
                <span>GitHub</span>
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
