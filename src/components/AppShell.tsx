'use client';

import { useRef, useState, useSyncExternalStore, type KeyboardEvent, type MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  FolderGit2,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Play,
  Sun,
  Twitter,
  User,
  X,
  Youtube,
} from 'lucide-react';
import { profileInfo, projectsList } from '@/data/profileData';

type ColorScheme = 'light' | 'dark' | 'system';

const THEME_CHANGE_EVENT = 'ui-color-scheme-change';
const SIDEBAR_CHANGE_EVENT = 'ui-sidebar-change';

const THEME_OPTIONS: { value: ColorScheme; label: string; Icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'Auto', Icon: Monitor },
];

const NAV_ITEMS = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/ventures', label: 'Ventures', Icon: Briefcase },
  { href: '/projects', label: 'Projects', Icon: FolderGit2, count: projectsList.length },
  { href: '/watch', label: 'Watch & Read', Icon: Play },
  { href: '/about', label: 'About', Icon: User },
];

const SOCIAL_LINKS = [
  { href: profileInfo.githubUrl, label: 'GitHub profile', Icon: Github, external: true },
  { href: 'https://x.com/3mk4y_', label: 'X (Twitter) profile', Icon: Twitter, external: true },
  {
    href: 'https://www.youtube.com/@MuziKhuzwayoSystems',
    label: 'YouTube channel',
    Icon: Youtube,
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/',
    label: 'LinkedIn profile',
    Icon: Linkedin,
    external: true,
  },
  {
    href: 'https://www.instagram.com/3mk4y_/',
    label: 'Instagram profile',
    Icon: Instagram,
    external: true,
  },
  { href: `mailto:${profileInfo.email}`, label: 'Send email', Icon: Mail, external: false },
];

function subscribeColorScheme(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function getClientColorScheme(): ColorScheme {
  try {
    const saved = localStorage.getItem('color-scheme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  return 'system';
}

function getServerColorScheme(): ColorScheme {
  return 'system';
}

function applyColorScheme(next: ColorScheme) {
  try {
    if (next === 'system') {
      localStorage.removeItem('color-scheme');
      document.documentElement.removeAttribute('data-color-scheme');
    } else {
      localStorage.setItem('color-scheme', next);
      document.documentElement.setAttribute('data-color-scheme', next);
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  } catch {}
}

function subscribeSidebar(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(SIDEBAR_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(SIDEBAR_CHANGE_EVENT, onStoreChange);
  };
}

function getClientSidebarCollapsed(): boolean {
  try {
    return localStorage.getItem('sidebar-collapsed') === 'true';
  } catch {
    return false;
  }
}

function getServerSidebarCollapsed(): boolean {
  return false;
}

function applySidebarCollapsed(collapsed: boolean) {
  try {
    if (collapsed) {
      localStorage.setItem('sidebar-collapsed', 'true');
      document.documentElement.setAttribute('data-sidebar', 'collapsed');
    } else {
      localStorage.removeItem('sidebar-collapsed');
      document.documentElement.removeAttribute('data-sidebar');
    }
    window.dispatchEvent(new Event(SIDEBAR_CHANGE_EVENT));
  } catch {}
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const colorScheme = useSyncExternalStore(
    subscribeColorScheme,
    getClientColorScheme,
    getServerColorScheme,
  );
  const isCollapsed = useSyncExternalStore(
    subscribeSidebar,
    getClientSidebarCollapsed,
    getServerSidebarCollapsed,
  );

  const [drawerOpen, setDrawerOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const desktopThemeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileThemeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function openDrawer() {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      setDrawerOpen(true);
    }
  }

  function closeDrawer() {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setDrawerOpen(false);
  }

  function handleDialogBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeDrawer();
    }
  }

  function cycleTheme() {
    const order: ColorScheme[] = ['light', 'dark', 'system'];
    const next = order[(order.indexOf(colorScheme) + 1) % order.length];
    applyColorScheme(next);
  }

  function handleThemeKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
    refs: React.RefObject<(HTMLButtonElement | null)[]>,
  ) {
    const isRtl = getComputedStyle(event.currentTarget).direction === 'rtl';
    const nextKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
    let nextIndex: number | null = null;

    if (event.key === nextKey || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % THEME_OPTIONS.length;
    } else if (event.key === prevKey || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + THEME_OPTIONS.length) % THEME_OPTIONS.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = THEME_OPTIONS.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      applyColorScheme(THEME_OPTIONS[nextIndex].value);
      refs.current[nextIndex]?.focus();
    }
  }

  const ActiveThemeIcon =
    THEME_OPTIONS.find((opt) => opt.value === colorScheme)?.Icon ?? Monitor;

  return (
    <div className="shellLayout" data-slot="app-shell">
      <header className="mobileTopBar" data-slot="mobile-header">
        <Link href="/" className="mobileBrandLink">
          <span className="brandAvatarSmall">
            <Image
              src={profileInfo.avatarUrl}
              alt=""
              width={28}
              height={28}
              className="avatarImage"
            />
          </span>
          <span className="mobileBrandName">{profileInfo.name}</span>
        </Link>

        <button
          type="button"
          className="iconControlBtn"
          aria-haspopup="dialog"
          aria-expanded={drawerOpen}
          aria-label="Open navigation menu"
          onClick={openDrawer}
        >
          <Menu size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </header>

      <aside
        className="desktopSidebar"
        data-slot="sidebar"
        data-collapsed={isCollapsed || undefined}
      >
        <div className="sidebarTopRow">
          {!isCollapsed && (
            <Link href="/" className="sidebarBrandLink">
              <span className="brandAvatar">
                <Image
                  src={profileInfo.avatarUrl}
                  alt=""
                  width={32}
                  height={32}
                  className="avatarImage"
                  priority
                />
              </span>
              <span className="sidebarBrandText">
                <span className="sidebarBrandName">{profileInfo.name}</span>
                <span className="sidebarBrandMeta">Cape Town</span>
              </span>
            </Link>
          )}

          <button
            type="button"
            className="iconControlBtn"
            aria-expanded={!isCollapsed}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            onClick={() => applySidebarCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <PanelLeftOpen size={16} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <PanelLeftClose size={16} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav className="sidebarNavList" data-slot="nav" aria-label="Primary navigation">
          {NAV_ITEMS.map(({ href, label, Icon, count }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                data-slot="nav-item"
                aria-current={isActive ? 'page' : undefined}
                aria-label={isCollapsed ? label : undefined}
                title={isCollapsed ? label : undefined}
                className="sidebarNavItem"
              >
                <span className="navIconSlot">
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
                {!isCollapsed && (
                  <>
                    <span className="navItemLabel">{label}</span>
                    {count !== undefined && (
                      <span className="navItemCount tabularNum">{count}</span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="sidebarBottomArea">
          {isCollapsed ? (
            <div className="collapsedFooterStack">
              <button
                type="button"
                className="iconControlBtn"
                onClick={cycleTheme}
                aria-label={`Switch color theme (currently ${colorScheme})`}
                title={`Theme: ${colorScheme}`}
              >
                <ActiveThemeIcon size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
              <a
                href={profileInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="iconControlBtn"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          ) : (
            <>
              <div
                className="themeToggleGroup"
                role="radiogroup"
                aria-label="Color theme"
                data-slot="theme-toggle"
              >
                {THEME_OPTIONS.map(({ value, label, Icon }, index) => {
                  const isChecked = colorScheme === value;
                  return (
                    <button
                      key={value}
                      ref={(el) => {
                        desktopThemeRefs.current[index] = el;
                      }}
                      type="button"
                      role="radio"
                      aria-checked={isChecked}
                      tabIndex={isChecked ? 0 : -1}
                      onClick={() => applyColorScheme(value)}
                      onKeyDown={(e) => handleThemeKeyDown(e, index, desktopThemeRefs)}
                      className="themeOptionBtn"
                    >
                      <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="sidebarSocialRow">
                {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="socialIconBtn"
                    aria-label={label}
                  >
                    <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </aside>

      <dialog
        ref={dialogRef}
        className="mobileDrawer"
        aria-label="Navigation menu"
        onClose={() => setDrawerOpen(false)}
        onClick={handleDialogBackdropClick}
      >
        <div className="mobileDrawerPanel" data-slot="mobile-drawer">
          <div className="sidebarTopRow">
            <Link href="/" className="sidebarBrandLink" onClick={closeDrawer}>
              <span className="brandAvatar">
                <Image
                  src={profileInfo.avatarUrl}
                  alt=""
                  width={32}
                  height={32}
                  className="avatarImage"
                />
              </span>
              <span className="sidebarBrandText">
                <span className="sidebarBrandName">{profileInfo.name}</span>
                <span className="sidebarBrandMeta">Cape Town</span>
              </span>
            </Link>

            <button
              type="button"
              className="iconControlBtn"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <nav className="sidebarNavList" aria-label="Mobile navigation">
            {NAV_ITEMS.map(({ href, label, Icon, count }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeDrawer}
                  className="sidebarNavItem"
                >
                  <span className="navIconSlot">
                    <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="navItemLabel">{label}</span>
                  {count !== undefined && (
                    <span className="navItemCount tabularNum">{count}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="sidebarBottomArea">
            <div
              className="themeToggleGroup"
              role="radiogroup"
              aria-label="Color theme"
            >
              {THEME_OPTIONS.map(({ value, label, Icon }, index) => {
                const isChecked = colorScheme === value;
                return (
                  <button
                    key={value}
                    ref={(el) => {
                      mobileThemeRefs.current[index] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={isChecked}
                    tabIndex={isChecked ? 0 : -1}
                    onClick={() => applyColorScheme(value)}
                    onKeyDown={(e) => handleThemeKeyDown(e, index, mobileThemeRefs)}
                    className="themeOptionBtn"
                  >
                    <Icon size={14} strokeWidth={1.5} aria-hidden="true" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <div className="sidebarSocialRow">
              {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="socialIconBtn"
                  aria-label={label}
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </dialog>

      <main className="mainCanvas" data-slot="main">
        <div className="mainInner">{children}</div>
      </main>
    </div>
  );
}
