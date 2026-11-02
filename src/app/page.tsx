import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import StatsCard from '@/components/StatsCard';
import MediaDispatches from '@/components/MediaDispatches';
import { venturesList, projectsList } from '@/data/profileData';

export default function Home() {
  const featuredVenture = venturesList.find((v) => v.featured) || venturesList[0];
  const secondaryVentures = venturesList.filter((v) => v.id !== featuredVenture.id);

  const agentsCount = projectsList.filter((p) => p.category === 'agents').length;
  const quantCount = projectsList.filter((p) => p.category === 'quant').length;
  const toolingCount = projectsList.filter((p) => p.category === 'tooling').length;

  return (
    <main className="appShell">
      <aside className="sidebarColumn">
        <ProfileCard />
      </aside>

      <div className="contentColumn">
        {/* Section 1: Ecosystem Ventures & Open-Source Systems Overview */}
        <section className="divisionsSection" id="ventures">
          <header className="heroBlock">
            <h2 className="heroHeadline">
              Causal market infrastructure, autonomous business systems, and open-source architectures
            </h2>
            <p className="heroSubhead">
              Production divisions and open-source research built in Cape Town across causal financial telemetry, multi-agent runtimes, and market intelligence.
            </p>
          </header>

          <div className="divisionsAsymmetricGrid">
            <div className="divisionsPrimaryCol">
              <StatsCard venture={featuredVenture} />
            </div>
            <div className="divisionsSecondaryCol">
              {secondaryVentures.map((venture) => (
                <StatsCard key={venture.id} venture={venture} />
              ))}
            </div>
          </div>

          {/* Compact Open-Source Portfolio Gateway Card -> /projects */}
          <div className="projectsGatewayCard">
            <div className="gatewayHeader">
              <div className="gatewayTitleGroup">
                <h3 className="divisionTitle">Open-source systems &amp; architectures</h3>
                <p className="divisionDescription">
                  Explore all {projectsList.length} public repositories and interactive showcases across autonomous browser simulation, 5-minute prediction market execution, semantic OS kernels, and developer tooling.
                </p>
              </div>
              <Link href="/projects" className="primaryActionBtn compact">
                <span>Explore {projectsList.length} projects</span>
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="gatewayMetricsBar">
              <div className="layerShareBar" role="img" aria-label="Repository distribution by engineering layer">
                <div
                  className="layerSegment agents"
                  style={{ width: `${(agentsCount / projectsList.length) * 100}%` }}
                />
                <div
                  className="layerSegment quant"
                  style={{ width: `${(quantCount / projectsList.length) * 100}%` }}
                />
                <div
                  className="layerSegment tooling"
                  style={{ width: `${(toolingCount / projectsList.length) * 100}%` }}
                />
              </div>

              <div className="matrixLegend">
                <span className="legendItem">
                  <span className="layerDot agents" />
                  <span>Autonomous agents &amp; LLMs</span>
                  <span className="legendCount tabularNum">{agentsCount}</span>
                </span>
                <span className="legendItem">
                  <span className="layerDot quant" />
                  <span>Quant &amp; prediction markets</span>
                  <span className="legendCount tabularNum">{quantCount}</span>
                </span>
                <span className="legendItem">
                  <span className="layerDot tooling" />
                  <span>Developer tooling</span>
                  <span className="legendCount tabularNum">{toolingCount}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Hyper-Intentionalism & Systems Engineering */}
        <MediaDispatches />
      </div>
    </main>
  );
}
