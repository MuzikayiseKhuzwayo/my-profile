'use client';

import Image from 'next/image';
import { MapPin, Wallet, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import { profileInfo, venturesList } from '@/data/profileData';

export default function ProfileCard() {
  const totalRevenue = venturesList.reduce((sum, v) => sum + v.revenueNumeric, 0);
  const formattedRevenue = `$${(totalRevenue / 1000).toFixed(1)}k/month`;

  return (
    <div className="profileCard">
      <div className="profileAvatarWrapper">
        <Image
          src={profileInfo.avatarUrl}
          alt={profileInfo.name}
          width={105}
          height={105}
          className="profileAvatar"
          priority
        />
      </div>

      <h1 className="profileName">{profileInfo.name}</h1>

      <div className="profileMeta">
        <div className="profileLocation">
          <MapPin size={16} />
          <span>{profileInfo.location.split(',')[0]}</span>
        </div>
        <div className="profileIncome">
          <Wallet size={16} />
          <span>{formattedRevenue}</span>
        </div>
      </div>

      <p className="profileBio">
        &ldquo;{profileInfo.bio}&rdquo;
      </p>

      <div className="profileNewsletter">
        <strong>{profileInfo.newsletter.readers}</strong>
        <a
          href={profileInfo.newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="profileLink"
        >
          {profileInfo.newsletter.title}
        </a>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          {profileInfo.newsletter.description}
        </p>
      </div>

      <div className="profileSocials">
        <a
          href="https://x.com/3mk4y_"
          target="_blank"
          rel="noopener noreferrer"
          title="X / Twitter"
        >
          <Twitter className="socialIcon" size={20} />
        </a>
        <a
          href="https://www.youtube.com/@MuziKhuzwayoSystems"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
        >
          <Youtube className="socialIcon" size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin className="socialIcon" size={20} />
        </a>
        <a
          href="https://www.instagram.com/3mk4y/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram className="socialIcon" size={20} />
        </a>
      </div>

      <a
        href={profileInfo.newsletter.url}
        target="_blank"
        rel="noopener noreferrer"
        className="ctaButton"
      >
        <span>Subscribe to Hyper-Intentionalism</span>
      </a>
    </div>
  );
}
