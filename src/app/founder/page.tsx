import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, Youtube } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Founder & My Story | Muzikayise Khuzwayo',
  description:
    'The story and personal philosophy of Muzikayise Khuzwayo — Systems Architect, AI Automation Specialist, and Founder of Dubstrata & TechFusion Automata.',
};

export default function FounderPage() {
  return (
    <main className="founderPageContainer">
      <div className="standaloneBreadcrumb">
        <Link href="/" className="breadcrumbBackLink">
          <ArrowLeft size={14} />
          <span>Back to Portfolio &amp; Profile</span>
        </Link>
        <span className="breadcrumbSep">/</span>
        <span className="breadcrumbCurrent">Founder &amp; Story</span>
      </div>

      <div className="founderGrid">
        {/* Left Column - Portrait & Links */}
        <div className="founderLeftCol">
          <div className="founderPortraitWrapper">
            <Image
              src="/ceo_profile_2.jpg"
              alt="Muzikayise Khuzwayo - Founder"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="founderPortraitImg"
              priority
            />
            <div className="founderPortraitGradient" />
          </div>

          <div className="founderSocialRow">
            <a
              href="https://github.com/MuzikayiseKhuzwayo"
              target="_blank"
              rel="noopener noreferrer"
              className="founderSocialBtn"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/3mk4y_"
              target="_blank"
              rel="noopener noreferrer"
              className="founderSocialBtn"
              title="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/"
              target="_blank"
              rel="noopener noreferrer"
              className="founderSocialBtn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/3mk4y_/"
              target="_blank"
              rel="noopener noreferrer"
              className="founderSocialBtn"
              title="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="19"
                height="19"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@MuziKhuzwayoSystems"
              target="_blank"
              rel="noopener noreferrer"
              className="founderSocialBtn"
              title="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.muzikhuzwayo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="founderSocialBtn"
              title="Personal Website"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="19"
                height="19"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
            <a
              href="mailto:muzikhuzwayo@techfusion-ventures.xyz"
              className="founderSocialBtn"
              title="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="19"
                height="19"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Biography & Philosophy */}
        <div className="founderRightCol">
          <div className="founderLabelRow">
            <span className="founderLabel">Founder</span>
          </div>
          <h1 className="founderNameHeading">Muzikayise Khuzwayo</h1>

          <div className="founderContentBody">
            <section className="founderStorySection">
              <h2 className="founderStoryTitle">My Story</h2>
              <p>
                I grew up in Soweto, South Africa from a previously disadvantaged background. But I was lucky. Born after apartheid, I had the opportunity to change everything for myself handed to me. In school I worked hard enough to get a scholarship into a private school my family could never have been able to afford. I even landed up in the University of Cape Town, the greatest university in Africa, only to lose it all and start over from the bottom after dropping out from an Electrical and Computer Engineering degree.
              </p>
              <p>
                I soon realised something while living at home: I had the power to change everything. I always have and always will. So I took strides towards transforming myself. I grabbed at every opportunity that came to me, whether it was an online course on Software engineering, or an opportunity to become a paid writer, using the money to fund my foray into AI Automation.
              </p>
              <p>
                I soon became a freelance AI Automation specialist working with all sorts of businesses and driving real change and growth for them. But even while I was doing that, I realised that these same models I was playing around with were flawed. So I studied even more, going into data science and then ML with the main objective being to completely demystify what an AI model is from the ground up. And I managed to do that just fine, even discovering new ways to pull together algorithms and get them to work.
              </p>
              <p>
                Ever since then, I&apos;ve started working on Dubstrata, an Alt Data layer for the next generation of internet dwellers who need financially causal data, using everything I&apos;ve learned in AI and Automation to bring about real change in the fastest growing sector of the entire global economy: finance.
              </p>
              <p>
                Using this, I am looking to make further investments and become an even greater changemaker in the place I grew up in, because I know what it takes. I had to leave to get better opportunities because there genuinely were none for what I was interested in. It doesn&apos;t have to be this way. Digital transformation can happen and it will happen.
              </p>
            </section>

            <section className="founderPhilosophyBox">
              <div className="founderQuoteWatermark">
                <span>&ldquo;</span>
              </div>
              <h2 className="founderPhilosophyTitle">Personal Philosophy</h2>
              <p className="founderPhilosophyQuote">
                &ldquo;The true value of artificial intelligence and automation lies in human liberation. When we strip away the necessity of constant labor, we allow humanity to transcend survival mode. We enable individuals to realize their full potential.&rdquo;
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
