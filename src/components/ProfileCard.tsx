'use client';

import { MapPin, Wallet, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileAvatarWrapper">
        <Image
          src="https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/muzikhuzwayo/Screenshot_20200404_131831.jpg"
          alt="Profile"
          width={120}
          height={120}
          className="profileAvatar"
          priority
        />
      </div>

      <h1 className="profileName">Muzi Khuzwayo</h1>

      <div className="profileMeta">
        <div className="profileLocation">
          <MapPin size={16} />
          <span>Cape Town</span>
        </div>
        <div className="profileIncome">
          <Wallet size={16} />
          <span>$0k/month</span>
        </div>
      </div>

      <p className="profileBio">
        Be Hyper Intentional In Every Assumption.
      </p>

      <div className="profileNewsletter">
        <strong>24 Magicians read</strong>
        <a href="https://substack.com/@3mk4y" className="profileLink">Hyper-Intentionalism</a>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          I share my journey as I automate my life through my assumptions.
        </p>
      </div>

      <div className="profileSocials">
        <a href="https://x.com/3mk4y_" target="_blank"><Twitter className="socialIcon" size={20} /></a>
        <a href="https://www.youtube.com/@MuziKhuzwayoSystems" target="_blank"><Youtube className="socialIcon" size={20} /></a>
        <a href="https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/" target="_blank"><Linkedin className="socialIcon" size={20} /></a>
        <a href="https://www.instagram.com/3mk4y/" target="_blank"><Instagram className="socialIcon" size={20} /></a>
      </div>

      <button className="ctaButton">
        <a href="https://substack.com/@3mk4y" target="_blank"><span>Start Your Journey</span></a>
      </button>
    </div>
  );
};

export default ProfileCard;
