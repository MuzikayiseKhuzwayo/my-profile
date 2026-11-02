'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projectsList, ShowcaseProject, ProjectCategory } from '@/data/profileData';

type CategoryFilter = 'all' | ProjectCategory;

interface ProjectsShowcaseProps {
  showHeroHeader?: boolean;
}

export default function ProjectsShowcase({ showHeroHeader = true }: ProjectsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [activeSystemId, setActiveSystemId] = useState<string>(projectsList[0].id);

  const filteredProjects = projectsList.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const activeSystem =
    projectsList.find((p) => p.id === activeSystemId) || projectsList[0];

  const agentsCount = projectsList.filter((p) => p.category === 'agents').length;
  const quantCount = projectsList.filter((p) => p.category === 'quant').length;
  const toolingCount = projectsList.filter((p) => p.category === 'tooling').length;
  const totalCount = projectsList.length;

  return (
    <section className="systemsSection" id="projects">
      {showHeroHeader && (
        <header className="heroBlock">
          <h2 className="heroHeadline">
            Autonomous agent runtimes, prediction market harnesses, and developer infrastructure
          </h2>
          <p className="heroSubhead">
            Eleven public architectures built in Cape Town across multi-agent browser simulation,
            5-minute orderbook execution, causal knowledge graphs, and local LLM kernels.
          </p>
        </header>
      )}

      {/* THE MOMENT: Interactive Systems Architecture Matrix & Inspector */}
      <div className="architectureMatrixPanel">
        <div className="matrixTopHeader">
          <div className="matrixTitleGroup">
            <span className="matrixTitle">Systems architecture index</span>
            <span className="matrixSubtitle">
              Select a node to inspect runtime specification and launch its environment
            </span>
          </div>

          <div className="matrixLegend">
            <span className="legendItem">
              <span className="layerDot agents" />
              <span>Agent runtimes</span>
              <span className="legendCount tabularNum">{agentsCount}</span>
            </span>
            <span className="legendItem">
              <span className="layerDot quant" />
              <span>Quant &amp; markets</span>
              <span className="legendCount tabularNum">{quantCount}</span>
            </span>
            <span className="legendItem">
              <span className="layerDot tooling" />
              <span>Developer tooling</span>
              <span className="legendCount tabularNum">{toolingCount}</span>
            </span>
          </div>
        </div>

        {/* Proportional Layer Share Bar */}
        <div className="layerShareBar" role="img" aria-label="Repository distribution by engineering layer">
          <div
            className="layerSegment agents"
            style={{ width: `${(agentsCount / totalCount) * 100}%` }}
          />
          <div
            className="layerSegment quant"
            style={{ width: `${(quantCount / totalCount) * 100}%` }}
          />
          <div
            className="layerSegment tooling"
            style={{ width: `${(toolingCount / totalCount) * 100}%` }}
          />
        </div>

        {/* Split Matrix: 11-Node Index Left + Live Readout Right */}
        <div className="matrixSplitBody">
          <div className="matrixNodeList" role="listbox" aria-label="Systems list">
            {projectsList.map((proj) => {
              const isSelected = proj.id === activeSystem.id;
              return (
                <button
                  key={proj.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => setActiveSystemId(proj.id)}
                  className={`matrixNodeRow ${isSelected ? 'selected' : ''}`}
                >
                  <span className={`layerDot ${proj.category}`} />
                  <span className="nodeCoord tabularNum">{proj.num}</span>
                  <span className="nodeName">{proj.name}</span>
                  <kbd className="routeKeycap">{proj.routeKey}</kbd>
                </button>
              );
            })}
          </div>

          {/* Live Specification Readout Pane */}
          <div className="matrixInspectorPane">
            <div className="inspectorTopRow">
              <div className="inspectorCoordGroup">
                <span className={`layerDot ${activeSystem.category}`} />
                <span className="inspectorCoord tabularNum">Node {activeSystem.num}</span>
                <span className="inspectorSep">·</span>
                <span className="inspectorLayerName">{activeSystem.categoryLabel}</span>
              </div>
              <kbd className="routeKeycap">{activeSystem.routeKey}</kbd>
            </div>

            <div className="inspectorTitleGroup">
              <h3 className="inspectorTitle">{activeSystem.name}</h3>
              <p className="inspectorTagline">{activeSystem.tagline}</p>
            </div>

            <p className="inspectorBody">{activeSystem.whatItDoes}</p>

            <div className="inspectorStackRow">
              {activeSystem.techStack.map((tech) => (
                <span key={tech} className="stackTag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="inspectorValueList">
              {activeSystem.whyItMatters.map((v, i) => (
                <div key={i} className="inspectorValueItem">
                  <span className="inspectorValueTarget">{v.target}</span>
                  <p className="inspectorValueDetail">{v.detail}</p>
                </div>
              ))}
            </div>

            <div className="inspectorFooterActions">
              {activeSystem.hasShowcase && (
                <a href={activeSystem.link} className="primaryActionBtn compact">
                  <span>Open interactive showcase</span>
                  <ExternalLink size={16} strokeWidth={1.5} />
                </a>
              )}
              <a
                href={activeSystem.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="secondaryActionBtn compact"
              >
                <span>{activeSystem.repoSlug}</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar for Complete Specification Log */}
      <div className="specLogHeader">
        <div className="specLogTitleGroup">
          <h3 className="sectionHeading">Complete specification log</h3>
          <span className="sectionCountMeta tabularNum">
            Showing {filteredProjects.length} of {totalCount} architectures
          </span>
        </div>

        <div className="filterTabs" role="tablist" aria-label="Filter architectures by category">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`filterTabBtn ${selectedCategory === 'all' ? 'active' : ''}`}
          >
            <span>All systems</span>
            <span className="filterTabCount tabularNum">{totalCount}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'agents'}
            onClick={() => setSelectedCategory('agents')}
            className={`filterTabBtn ${selectedCategory === 'agents' ? 'active' : ''}`}
          >
            <span className="layerDot agents" />
            <span>Autonomous agents</span>
            <span className="filterTabCount tabularNum">{agentsCount}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'quant'}
            onClick={() => setSelectedCategory('quant')}
            className={`filterTabBtn ${selectedCategory === 'quant' ? 'active' : ''}`}
          >
            <span className="layerDot quant" />
            <span>Quant &amp; markets</span>
            <span className="filterTabCount tabularNum">{quantCount}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'tooling'}
            onClick={() => setSelectedCategory('tooling')}
            className={`filterTabBtn ${selectedCategory === 'tooling' ? 'active' : ''}`}
          >
            <span className="layerDot tooling" />
            <span>Developer tooling</span>
            <span className="filterTabCount tabularNum">{toolingCount}</span>
          </button>
        </div>
      </div>

      {/* Specification List */}
      <div className="specList">
        {filteredProjects.map((project: ShowcaseProject) => {
          const isExternalLink = project.link.startsWith('http');

          return (
            <article key={project.id} className="specCard">
              {/* Top Meta & Actions */}
              <div className="specCardHeader">
                <div className="specCardMeta">
                  <span className="specCoord tabularNum">{project.num}</span>
                  <span className="specCategory">{project.categoryLabel}</span>
                  <a
                    href={project.link}
                    {...(isExternalLink
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="routeKeycapLink"
                    title={
                      project.hasShowcase
                        ? `Launch ${project.routeKey} showcase`
                        : `Open ${project.repoSlug}`
                    }
                  >
                    <kbd className="routeKeycap">{project.routeKey}</kbd>
                  </a>
                </div>

                <div className="specCardActions">
                  {project.hasShowcase && (
                    <a href={project.link} className="specLinkBtn primary">
                      <span>Interactive showcase</span>
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </a>
                  )}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="specLinkBtn"
                  >
                    <span>Repository</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="specTitleBlock">
                <h4 className="specTitle">
                  <a
                    href={project.link}
                    {...(isExternalLink
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="specTitleLink"
                  >
                    {project.name}
                  </a>
                </h4>
                <p className="specTagline">{project.tagline}</p>
              </div>

              {/* Two-Column Spec Body: System Mechanics Left + Engineering Value Right */}
              <div className="specColumns">
                <div className="specColLeft">
                  <span className="specColLabel">System mechanics</span>
                  <p className="specBodyText">{project.whatItDoes}</p>

                  <div className="specStackGroup">
                    <span className="specColLabel">Runtime &amp; stack</span>
                    <div className="specStackTags">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="stackTag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="specColRight">
                  <span className="specColLabel">Engineering value</span>
                  <div className="specValueItems">
                    {project.whyItMatters.map((item, idx) => (
                      <div key={idx} className="specValueRow">
                        <span className="specValueTarget">{item.target}</span>
                        <p className="specValueDetail">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
