import type { Metadata } from 'next';
import { ArrowUpRight, Mail } from 'lucide-react';
import { venturesList, profileInfo } from '@/data/profileData';

export const metadata: Metadata = {
  title: 'Ventures | Muzi Khuzwayo',
  description:
    'Dubstrata, TechFusion Alchemy, and Quantix — the three businesses and products built by Muzi Khuzwayo.',
};

export default function VenturesPage() {
  return (
    <div className="pageStack">
      <header className="heroHeader">
        <h1 className="pageTitle">Ventures</h1>
        <p className="pageLead">
          The three businesses I spend my days building — spanning market data infrastructure,
          hands-on business automation, and plain-English investing tools
        </p>
      </header>

      <div className="ventureDetailList">
        {venturesList.map((venture) => (
          <article key={venture.id} className="ventureDetailCard" data-slot="venture-card">
            <div className="ventureDetailHeader">
              <div>
                <h2 className="ventureDetailTitle">{venture.title}</h2>
                <p className="ventureDetailTagline">{venture.tagline}</p>
              </div>

              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${venture.title} at ${venture.displayUrl}`}
                className="secondaryActionBtn compact"
              >
                <span>{venture.displayUrl}</span>
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>

            <p className="ventureDetailBody">{venture.summary}</p>

            <ul className="cleanBulletList">
              {venture.highlights.map((item) => (
                <li key={item} className="cleanBulletRow">
                  <span className="bulletDot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {venture.modules && venture.modules.length > 0 && (
              <div className="ventureModulesBox">
                <span className="smallMutedLabel">Related open-source code &amp; demos</span>
                <div className="ventureModulesGrid">
                  {venture.modules.map((mod) => {
                    const isExternal = mod.href.startsWith('http');
                    return (
                      <a
                        key={mod.routeKey}
                        href={mod.href}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="moduleRowLink"
                      >
                        <span className={`layerDot ${mod.category}`} aria-hidden="true" />
                        <span className="moduleRowName">{mod.name}</span>
                        <kbd className="routeKeycap">{mod.routeKey}</kbd>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <section className="calloutCard" data-slot="contact-callout">
        <div>
          <h2 className="calloutTitle">Want to work together or automate a bottleneck?</h2>
          <p className="calloutBody">
            Reach out directly if you&apos;re exploring causal market feeds with Dubstrata or want
            custom AI workflows built through TechFusion Alchemy.
          </p>
        </div>
        <a href={`mailto:${profileInfo.email}`} className="primaryActionBtn">
          <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
          <span>Send me an email</span>
        </a>
      </section>
    </div>
  );
}
