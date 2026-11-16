import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import WatchFeedClient from '@/components/WatchFeedClient';
import { YOUTUBE_CHANNELS, SUBSTACK_PUBLICATION_URL } from '@/data/channels';
import { profileInfo } from '@/data/profileData';
import { getAllYouTubeVideos, getSubstackPosts } from '@/lib/feeds';

export const revalidate = 900;

export const metadata: Metadata = {
  title: 'Watch & Read | Muzi Khuzwayo',
  description:
    'Latest videos automatically synced from Muzi Khuzwayo Systems, Business, and Unscripted on YouTube, plus Hyper-Intentionalism essays on Substack.',
};

export default async function WatchPage() {
  const [videos, posts] = await Promise.all([
    getAllYouTubeVideos(),
    getSubstackPosts(8),
  ]);

  return (
    <div className="pageStack">
      <header className="heroHeader">
        <h1 className="pageTitle">Watch &amp; Read</h1>
        <p className="pageLead">
          New videos pull in automatically whenever I post across my three YouTube channels —
          technical walkthroughs, business stories, and unscripted logs — alongside essays from my
          Substack
        </p>
      </header>

      <WatchFeedClient videos={videos} channels={YOUTUBE_CHANNELS} />

      <section className="pageSection" id="substack" data-slot="substack-section">
        <div className="sectionHeaderBar">
          <div>
            <h2 className="sectionTitle">{profileInfo.newsletter.title}</h2>
            <p className="sectionSub">{profileInfo.newsletter.description}</p>
          </div>
          <a
            href={SUBSTACK_PUBLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="primaryActionBtn compact"
          >
            <span>Subscribe on Substack</span>
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        <div className="postList">
          {posts.map((post) => (
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
