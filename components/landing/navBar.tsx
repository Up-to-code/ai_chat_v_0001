"use client";
import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const t = useTranslations('');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const isAuthenticated = true;
  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  // Navigation links
  const navLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/features`, label: t('nav.features') },
    { href: `/${locale}/pricing`, label: t('nav.pricing') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  // Handlers
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const handleStartFreeTrial = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/${locale}/signup`);
    }, 800);
  };

  const handleSignIn = () => router.push(`/${locale}/login`);
  const handleDashboard = () => router.push(`/${locale}/dashboard`);
  const handleLogoClick = () => router.push(`/${locale}`);

  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-medium">{t('company.name')}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm ${
                    isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm border rounded-md"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </button>

            {isAuthenticated ? (
              <button
                onClick={handleDashboard}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md"
              >
                {t('nav.dashboard')}
              </button>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="px-4 py-2 text-gray-700 text-sm"
                >
                  {t('nav.signIn')}
                </button>
                <button
                  onClick={handleStartFreeTrial}
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md disabled:opacity-50"
                >
                  {isLoading ? '...' : t('nav.startFreeTrial')}
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm border rounded-md"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-2 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="pt-4 border-t space-y-3">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDashboard();
                  }}
                  className="w-full py-3 bg-blue-600 text-white rounded-md"
                >
                  {t('nav.dashboard')}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleSignIn();
                    }}
                    className="w-full py-3 text-gray-700 border rounded-md"
                  >
                    {t('nav.signIn')}
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleStartFreeTrial();
                    }}
                    disabled={isLoading}
                    className="w-full py-3 bg-blue-600 text-white rounded-md disabled:opacity-50"
                  >
                    {isLoading ? '...' : t('nav.startFreeTrial')}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}