import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import VideoCard from '@/components/VideoCard';
import { projectsList, venturesList, profileInfo } from '@/data/profileData';
import { getAllYouTubeVideos, getSubstackPosts, pickHomeChannelHighlights } from '@/lib/feeds';

export const revalidate = 900;

export default async function HomePage() {
  const [allVideos, substackPosts] = await Promise.all([
    getAllYouTubeVideos(),
    getSubstackPosts(3),
  ]);

  const latestByChannel = pickHomeChannelHighlights(allVideos);
  const pinnedProjects = projectsList.filter((p) => p.pinned);

  return (
    <div className="pageStack">
      <header className="heroHeader" data-slot="hero">
        <h1 className="pageTitle">Hey, I&apos;m Muzi</h1>
        <p className="pageLead">
          I live in Cape Town and build AI systems, market data tools, and business automations.
          Here&apos;s what I&apos;m working on, shipping on GitHub, and posting across YouTube and Substack.
        </p>
        <div className="heroActions">
          <Link href="/projects" className="primaryActionBtn">
            <span>Explore live demos</span>
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <Link href="/watch" className="secondaryActionBtn">
            <span>Watch latest videos</span>
          </Link>
        </div>
      </header>

      <section className="pageSection" data-slot="home-videos">
        <div className="sectionHeaderBar">
          <div>
            <h2 className="sectionTitle">Fresh off YouTube</h2>
            <p className="sectionSub">
              Newest drop from each of my three channels — Systems, Business, and Unscripted
            </p>
          </div>
          <Link href="/watch" className="textLinkBtn">
            <span>All videos</span>
            <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="videoGrid threeUp">
          {latestByChannel.map((video) => (
            <VideoCard key={`${video.channelKey}-${video.id}`} video={video} />
          ))}
        </div>
      </section>

      <section className="pageSection" data-slot="home-ventures">
        <div className="sectionHeaderBar">
          <div>
            <h2 className="sectionTitle">What I&apos;m building</h2>
            <p className="sectionSub">The three businesses and products I run day to day</p>
          </div>
          <Link href="/ventures" className="textLinkBtn">
            <span>More on ventures</span>
            <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="ventureStripGrid">
          {venturesList.map((venture) => (
            <article key={venture.id} className="compactVentureCard" data-slot="venture-summary">
              <div className="compactVentureTop">
                <h3 className="compactVentureTitle">
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardStretchLink"
                  >
                    {venture.title}
                  </a>
                </h3>
                <kbd className="routeKeycap">{venture.displayUrl}</kbd>
              </div>
              <p className="compactVentureTagline">{venture.tagline}</p>
              <p className="compactVentureBody">{venture.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pageSection" data-slot="home-projects">
        <div className="sectionHeaderBar">
          <div>
            <h2 className="sectionTitle">Pinned code &amp; demos</h2>
            <p className="sectionSub">
              A few open-source builds you can try right in the browser
            </p>
          </div>
          <Link href="/projects" className="textLinkBtn">
            <span>All {projectsList.length} projects</span>
            <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="ventureStripGrid">
          {pinnedProjects.map((project) => (
            <article key={project.id} className="projectCard" data-slot="pinned-project">
              <div className="projectCardTop">
                <span className="projectCategoryBadge">
                  <span className={`layerDot ${project.category}`} aria-hidden="true" />
                  <span>{project.categoryLabel}</span>
                </span>
                <kbd className="routeKeycap">{project.routeKey}</kbd>
              </div>

              <div className="projectCardMain">
                <h3 className="projectCardTitle">{project.name}</h3>
                <p className="projectCardSummary">{project.summary}</p>
              </div>

              <div className="projectCardActions">
                <a
                  href={project.link}
                  aria-label={`Try ${project.name} live demo`}
                  className="primaryActionBtn compact"
                >
                  <span>Try demo</span>
                  <ExternalLink size={15} strokeWidth={1.5} aria-hidden="true" />
                </a>
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

      <section className="pageSection" data-slot="home-writing">
        <div className="sectionHeaderBar">
          <div>
            <h2 className="sectionTitle">Recent writing</h2>
            <p className="sectionSub">{profileInfo.newsletter.title} on Substack</p>
          </div>
          <a
            href={profileInfo.newsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="textLinkBtn"
          >
            <span>Read on Substack</span>
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        <div className="postList">
          {substackPosts.map((post) => (
            <article key={post.id} className="postRowCard" data-slot="post-row">
              <div className="postRowMain">
                <h3 className="postRowTitle">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardStretchLink"
                  >
                    {post.title}
                  </a>
                </h3>
                {post.subtitle && <p className="postRowSub">{post.subtitle}</p>}
              </div>
              <div className="postRowMeta">
                <span className="videoDateText tabularNum">{post.publishedLabel}</span>
                <ArrowUpRight size={15} strokeWidth={1.5} className="cardCornerIcon" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
