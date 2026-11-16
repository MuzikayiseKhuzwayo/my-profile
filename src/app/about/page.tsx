import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profileInfo } from '@/data/profileData';

export const metadata: Metadata = {
  title: 'About | Muzi Khuzwayo',
  description:
    'My story from Soweto to Cape Town, learning ML and AI from the ground up, and building Dubstrata.',
};

export default function AboutPage() {
  return (
    <div className="pageStack">
      <div className="aboutLayout" data-slot="about-layout">
        <div className="aboutPhotoCol">
          <div className="portraitCard">
            <Image
              src="/ceo_profile_2.jpg"
              alt="Muzikayise Khuzwayo"
              fill
              sizes="(max-width: 900px) 100vw, 340px"
              className="portraitImg"
              priority
            />
          </div>

          <dl className="quickFactsCard">
            <div className="factRow">
              <dt className="factTerm">Based in</dt>
              <dd className="factVal">Cape Town, South Africa</dd>
            </div>
            <div className="factRow">
              <dt className="factTerm">Grew up in</dt>
              <dd className="factVal">Soweto, South Africa</dd>
            </div>
            <div className="factRow">
              <dt className="factTerm">Building</dt>
              <dd className="factVal">Dubstrata · TechFusion · Quantix</dd>
            </div>
            <div className="factRow">
              <dt className="factTerm">Writing</dt>
              <dd className="factVal">Hyper-Intentionalism</dd>
            </div>
          </dl>
        </div>

        <div className="aboutStoryCol">
          <header className="aboutHeader">
            <h1 className="pageTitle">{profileInfo.fullName}</h1>
            <p className="pageLead">
              How I went from starting over after university to building AI automation systems and
              causal market tools in Cape Town
            </p>
          </header>

          <div className="storyProse">
            <h2 className="storyHeading">My story</h2>
            <p>
              I grew up in Soweto, South Africa. Born after apartheid, I was lucky enough to have a
              real shot at changing my trajectory if I worked for it. In school I pushed hard enough
              to earn a scholarship to a private school my family could never have afforded on our
              own, and eventually made it into Electrical and Computer Engineering at the University
              of Cape Town — only to lose momentum, drop out, and start over from zero back at home.
            </p>
            <p>
              Sitting at home forced an honest realization: nobody was coming to save me, which also
              meant I still had the power to change everything myself. I took every shot I could
              find — online software engineering courses, paid writing gigs — and poured whatever I
              earned straight into learning AI and workflow automation.
            </p>
            <p>
              Before long I was freelancing as an AI automation builder, helping businesses strip
              out repetitive manual work and grow faster. Along the way, though, I noticed how
              fragile black-box AI setups could be when you didn&apos;t understand the math underneath.
              So I went deeper into data science and machine learning with one goal: demystify how
              models actually work from the ground up.
            </p>
            <p>
              That path led directly to <strong>Dubstrata</strong> — an alt-data layer built for
              traders, researchers, and AI agents that need financially causal data rather than noisy
              headlines — alongside <strong>TechFusion Alchemy</strong> and <strong>Quantix</strong>.
            </p>
            <p>
              Long term, I want to take what I&apos;m building and invest back into places like the one I
              grew up in. Having to leave home just to find technical opportunity shouldn&apos;t be the
              default. Digital leverage can change that, and I intend to help make it happen.
            </p>
          </div>

          <div className="beliefCard">
            <h2 className="beliefTitle">Why I care about automation</h2>
            <p className="beliefBody">
              The real point of AI and automation isn&apos;t replacing people — it&apos;s freeing human time.
              When software handles repetitive survival-mode busywork, people finally get the
              headspace to think clearly, create, and reach their actual potential.
            </p>
          </div>

          <div className="aboutFooterActions">
            <a href={`mailto:${profileInfo.email}`} className="primaryActionBtn">
              <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
              <span>Email me</span>
            </a>
            <a
              href={profileInfo.newsletter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="secondaryActionBtn"
            >
              <span>Read Hyper-Intentionalism</span>
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
