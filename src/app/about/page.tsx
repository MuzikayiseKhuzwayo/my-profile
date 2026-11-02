import { Metadata } from 'next';
import Image from 'next/image';
import ProfileCard from '@/components/ProfileCard';

export const metadata: Metadata = {
  title: 'About | Muzikayise Khuzwayo',
  description:
    'The background, story, and personal philosophy of Muzikayise Khuzwayo — Systems Architect and AI Automation Engineer.',
};

export default function AboutPage() {
  return (
    <main className="appShell">
      <aside className="sidebarColumn">
        <ProfileCard />
      </aside>

      <div className="contentColumn">
        <div className="founderSplitLayout">
          {/* Left Column - Portrait */}
          <div className="founderMediaCol">
            <div className="founderPortraitFrame">
              <Image
                src="/ceo_profile_2.jpg"
                alt="Muzikayise Khuzwayo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="founderPortraitImage"
                priority
              />
              <div className="founderPortraitMask" />
            </div>
          </div>

          {/* Right Column - Biography & Philosophy */}
          <div className="founderNarrativeCol">
            <span className="founderRoleMeta">About</span>
            <h1 className="founderHeadline">Muzikayise Khuzwayo</h1>

            <div className="founderProse">
              <h2 className="founderSectionHeading">My story</h2>
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
            </div>

            <div className="founderPrincipleCard">
              <h2 className="founderPrincipleTitle">Personal philosophy</h2>
              <p className="founderPrincipleText">
                The true value of artificial intelligence and automation lies in human liberation. When we strip away the necessity of constant labor, we allow humanity to transcend survival mode. We enable individuals to realize their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
