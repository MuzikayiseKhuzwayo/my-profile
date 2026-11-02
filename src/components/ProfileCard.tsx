'use client';

import Image from 'next/image';
import {
  MapPin,
  Code2,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Github,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { profileInfo, projectsList, venturesList } from '@/data/profileData';

export default function ProfileCard() {
  return (
    <div className="profileCard">
      <div className="profileTopRow">
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
        <span className="profileRolePill">{profileInfo.role}</span>
      </div>

      <div>
        <h1 className="profileName">{profileInfo.name}</h1>
        <span className="profileHandle">{profileInfo.handle}</span>
      </div>

      <div className="profileMeta">
        <div className="profileLocation">
          <MapPin size={15} />
          <span>{profileInfo.location}</span>
        </div>
        <div className="profileIncome">
          <Code2 size={15} />
          <span>{projectsList.length} Public Systems</span>
        </div>
      </div>

      <p className="profileBio">&ldquo;{profileInfo.bio}&rdquo;</p>

      {/* Active Divisions Quick-Links */}
      <div className="sidebarVenturesBox">
        <span className="sidebarBoxLabel">Ecosystem Divisions</span>
        <div className="sidebarVenturesList">
          {venturesList.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebarVentureItem"
            >
              <div className="sidebarVentureLeft">
                <span
                  className="sidebarVentureDot"
                  style={{ backgroundColor: v.accentColor }}
                />
                <span className="sidebarVentureName">{v.title}</span>
              </div>
              <span className="sidebarVentureUrl">
                {v.displayUrl}
                <ArrowUpRight size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>

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
        <p style={{ marginTop: '0.45rem', color: 'var(--text-secondary)' }}>
          {profileInfo.newsletter.description}
        </p>
      </div>

      <div className="profileSocials">
        <a
          href={profileInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub (@MuzikayiseKhuzwayo)"
        >
          <Github className="socialIcon" size={20} />
        </a>
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
          href="https://www.instagram.com/3mk4y_/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram className="socialIcon" size={20} />
        </a>
        <a
          href={`mailto:${profileInfo.email}`}
          title="Email Muzi Khuzwayo"
        >
          <Mail className="socialIcon" size={20} />
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
