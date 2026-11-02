'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  FolderGit2,
  User,
  Layers,
  ArrowUpRight,
  Github,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react';
import { profileInfo, projectsList, venturesList } from '@/data/profileData';

export default function ProfileCard() {
  const pathname = usePathname();

  return (
    <div className="sidebarPanel">
      {/* Identity Header */}
      <div className="identityBlock">
        <div className="avatarFrame">
          <Image
            src={profileInfo.avatarUrl}
            alt={profileInfo.name}
            width={64}
            height={64}
            className="avatarImage"
            priority
          />
        </div>
        <div className="identityText">
          <h1 className="sidebarName">{profileInfo.name}</h1>
          <p className="sidebarRole">{profileInfo.role}</p>
        </div>
      </div>

      <p className="sidebarStatement">{profileInfo.bio}</p>

      {/* Meta Rows (Aligned 16px icon column + 8px gap) */}
      <div className="metaList">
        <div className="metaRow">
          <span className="iconCol">
            <MapPin size={16} strokeWidth={1.5} />
          </span>
          <span className="metaLabel">{profileInfo.location}</span>
        </div>
        <div className="metaRow">
          <span className="iconCol">
            <FolderGit2 size={16} strokeWidth={1.5} />
          </span>
          <span className="metaLabel">
            <span className="tabularNum">{projectsList.length}</span> public repositories
          </span>
        </div>
      </div>

      {/* Site Navigation (36px rows, 2px gap, 24px above / 8px below label) */}
      <div className="sidebarGroup">
        <span className="sidebarGroupLabel">Navigation</span>
        <nav className="sidebarNav" aria-label="Primary navigation">
          <Link
            href="/"
            className={`sidebarNavRow ${pathname === '/' ? 'active' : ''}`}
          >
            <span className="iconCol">
              <Layers size={16} strokeWidth={1.5} />
            </span>
            <span className="navRowText">Overview</span>
          </Link>
          <Link
            href="/projects"
            className={`sidebarNavRow ${pathname === '/projects' ? 'active' : ''}`}
          >
            <span className="iconCol">
              <FolderGit2 size={16} strokeWidth={1.5} />
            </span>
            <span className="navRowText">Projects &amp; systems</span>
            <span className="navRowCount tabularNum">{projectsList.length}</span>
          </Link>
          <Link
            href="/about"
            className={`sidebarNavRow ${pathname === '/about' ? 'active' : ''}`}
          >
            <span className="iconCol">
              <User size={16} strokeWidth={1.5} />
            </span>
            <span className="navRowText">About</span>
          </Link>
        </nav>
      </div>

      {/* Active Divisions */}
      <div className="sidebarGroup">
        <span className="sidebarGroupLabel">Ecosystem divisions</span>
        <div className="sidebarNav">
          {venturesList.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebarNavRow"
            >
              <span className="navRowText">{v.title}</span>
              <span className="navRowDomain">{v.displayUrl}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Block */}
      <div className="sidebarGroup">
        <span className="sidebarGroupLabel">Publication</span>
        <div className="newsletterPanel">
          <div className="newsletterHeader">
            <span className="newsletterTitle">{profileInfo.newsletter.title}</span>
            <span className="newsletterMeta tabularNum">{profileInfo.newsletter.readers}</span>
          </div>
          <p className="newsletterDesc">{profileInfo.newsletter.description}</p>
          <a
            href={profileInfo.newsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="primaryActionBtn"
          >
            <span>Subscribe on Substack</span>
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="sidebarFooterSocials">
        <a
          href={profileInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconBtn"
          title="GitHub"
          aria-label="GitHub"
        >
          <Github size={16} strokeWidth={1.5} />
        </a>
        <a
          href="https://x.com/3mk4y_"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconBtn"
          title="X / Twitter"
          aria-label="X / Twitter"
        >
          <Twitter size={16} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.youtube.com/@MuziKhuzwayoSystems"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconBtn"
          title="YouTube"
          aria-label="YouTube"
        >
          <Youtube size={16} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconBtn"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/3mk4y_/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialIconBtn"
          title="Instagram"
          aria-label="Instagram"
        >
          <Instagram size={16} strokeWidth={1.5} />
        </a>
        <a
          href={`mailto:${profileInfo.email}`}
          className="socialIconBtn"
          title="Email"
          aria-label="Email"
        >
          <Mail size={16} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
