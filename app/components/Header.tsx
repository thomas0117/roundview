'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: '總覽', href: '/#overview' },
  { label: '暖化指標', href: '/#indicators' },
  { label: '國家比較', href: '/#countries' },
  { label: '專題文章', href: '/#articles' },
  { label: '關於 ROUNDVIEW', href: '/#about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="logo">
            <span className="logo-mark">R</span>
            <span className="logo-text">ROUNDVIEW</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="切換選單"
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
