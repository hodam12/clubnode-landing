import Link from 'next/link';

/* ─── SVG ICONS ──────────────────────────────────────────────────── */
function Icon({ path, className = 'w-5 h-5' }: { path: string; className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}
const ICONS = {
  portal:   'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  users:    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  whistle:  'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
  briefcase:'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  domain:   'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  paint:    'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  whatsapp: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  sportlink:'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  screen:   'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  check:    'M5 13l4 4L19 7',
  arrow:    'M17 8l4 4m0 0l-4 4m4-4H3',
  star:     'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  shield:   'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  zap:      'M13 10V3L4 14h7v7l9-11h-7z',
  phone:    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  mail:     'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  menu:     'M4 6h16M4 12h16M4 18h16',
  x:        'M6 18L18 6M6 6l12 12',
  chart:    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
};

/* ─── NAVBAR ─────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(15,23,42,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)' }}
            >
              C
            </div>
            <span className="text-white font-bold text-[17px] tracking-tight">Clubnode</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: '#features', label: 'Functies' },
              { href: '#screens', label: 'Beeldschermen' },
              { href: '#pricing', label: 'Prijzen' },
              { href: '#faq', label: 'FAQ' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.65)' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@clubnode.online"
              className="hidden sm:inline-flex text-sm font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Inloggen
            </a>
            <a
              href="mailto:info@clubnode.online?subject=Demo aanvragen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            >
              Demo aanvragen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ─── PORTAL MOCKUP ──────────────────────────────────────────────── */
function PortalMockup() {
  const primary = '#2563eb';
  return (
    <div className="relative anim-4">
      {/* Glow behind */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.35) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'scale(1.1)',
        }}
      />
      {/* Browser chrome */}
      <div
        className="rounded-2xl overflow-hidden anim-float"
        style={{
          background: '#1e293b',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.5)',
          maxWidth: 520,
        }}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          </div>
          <div
            className="flex-1 mx-3 px-3 py-1 rounded-md text-xs font-mono flex items-center gap-2"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
          >
            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            portal.svbedum.nl
          </div>
        </div>

        {/* Portal content */}
        <div style={{ backgroundColor: '#f5f5f7' }}>
          {/* Club header */}
          <div
            className="px-5 py-5 flex items-center gap-4"
            style={{
              background: `linear-gradient(140deg, ${primary} 0%, #1e3a8a 100%)`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 80% 40%, rgba(255,255,255,0.1) 0%, transparent 65%)' }}
            />
            <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center text-white font-black text-lg shadow-xl flex-shrink-0">
              SV
            </div>
            <div>
              <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">Bedum · Clubportaal</div>
              <div className="text-white font-black text-xl leading-none tracking-tight">SV Bedum</div>
            </div>
          </div>

          {/* Nav */}
          <div
            className="px-4 flex gap-1"
            style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderBottom: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            {['Thuis', 'Vrijwilligers', 'Scheids', 'Vacatures'].map((tab, i) => (
              <div
                key={tab}
                className="px-3 py-3 text-[11px] font-semibold relative"
                style={{ color: i === 0 ? primary : '#a1a1aa' }}
              >
                {tab}
                {i === 0 && (
                  <div
                    className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-t-full"
                    style={{ backgroundColor: primary }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="p-3 space-y-2.5">
            {/* Tiles */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Vrijwilligers', icon: ICONS.users, color: '#2563eb' },
                { label: 'Scheids', icon: ICONS.whistle, color: '#7c3aed' },
                { label: 'Vacatures', icon: ICONS.briefcase, color: '#059669' },
              ].map(({ label, icon, color }) => (
                <div
                  key={label}
                  className="rounded-2xl overflow-hidden"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                >
                  <div
                    className="flex items-center justify-center py-4"
                    style={{
                      background: `radial-gradient(ellipse at 60% 30%, color-mix(in srgb, ${color} 80%, white) 0%, ${color} 65%, color-mix(in srgb, ${color} 70%, black) 100%)`,
                    }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                  <div className="bg-white px-2 py-2">
                    <div className="text-[10px] font-bold text-slate-800 leading-tight">{label}</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Bekijken →</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div
              className="bg-white rounded-2xl px-3 py-2.5 flex items-center justify-between"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Contact</div>
              <div className="flex gap-1.5">
                <div
                  className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: primary }}
                >
                  Bellen
                </div>
                <div className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  E-mail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100"
        style={{ zIndex: 10 }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">Dienst aangemeld</div>
            <div className="text-[10px] text-slate-400">via WhatsApp · 2 min geleden</div>
          </div>
        </div>
      </div>

      {/* Custom domain badge */}
      <div
        className="absolute -top-4 -left-4 bg-white rounded-2xl px-3.5 py-2.5 shadow-xl border border-slate-100"
        style={{ zIndex: 10 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#eff6ff' }}>
            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-700 font-mono">portal.svbedum.nl</span>
        </div>
      </div>
    </div>
  );
}

/* ─── SCREEN MOCKUP ──────────────────────────────────────────────── */
function ScreenMockup() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.3) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: '#0f172a',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.6)',
          aspectRatio: '16/9',
          maxWidth: 540,
        }}
      >
        {/* Screen chrome */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>scherm-1.clubnode.online</span>
          </div>
          <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>21:45</div>
        </div>

        {/* Screen content */}
        <div
          className="flex flex-col h-full p-5"
          style={{
            background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)',
            minHeight: 260,
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>SV Bedum</div>
              <div className="text-white font-black text-xl leading-tight">Komende wedstrijden</div>
            </div>
            <div
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)' }}
            >
              Live
            </div>
          </div>

          {/* Match cards */}
          <div className="space-y-2">
            {[
              { home: 'SV Bedum', away: 'FC Groningen B', time: 'Zat 14:30', field: 'Veld 2' },
              { home: 'SV Bedum B', away: 'Hoogezand', time: 'Zat 16:00', field: 'Veld 1' },
              { home: 'SV Bedum C1', away: 'Appingedam', time: 'Zon 10:00', field: 'Veld 3' },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className="w-1.5 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: i === 0 ? '#3b82f6' : i === 1 ? '#10b981' : '#8b5cf6' }}
                  />
                  <div className="min-w-0">
                    <div className="text-white text-[11px] font-bold truncate">{m.home} – {m.away}</div>
                    <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{m.field}</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-[11px] font-bold" style={{ color: '#60a5fa' }}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider info strip */}
          <div
            className="mt-4 flex items-center justify-between px-3 py-2 rounded-xl"
            style={{ backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-ring 2s infinite' }} />
              <span className="text-emerald-400 text-[10px] font-bold">Scheidsrechter gezocht: Zat 14:30</span>
            </div>
            <span className="text-emerald-400 text-[10px] font-semibold">Meld je aan →</span>
          </div>
        </div>
      </div>

      {/* TV/Monitor frame */}
      <div className="flex justify-center mt-2">
        <div className="w-12 h-3 rounded-b-full" style={{ backgroundColor: '#334155' }} />
      </div>
      <div className="flex justify-center">
        <div className="w-20 h-2 rounded-full" style={{ backgroundColor: '#1e293b' }} />
      </div>
    </div>
  );
}

/* ─── FEATURES DATA ──────────────────────────────────────────────── */
const features = [
  {
    icon: ICONS.portal, color: '#2563eb', bg: '#eff6ff',
    title: 'Ledenportaal',
    desc: 'Een professioneel clubportaal dat leden eenvoudig kunnen bereiken via hun browser of telefoon, altijd up-to-date.',
  },
  {
    icon: ICONS.users, color: '#7c3aed', bg: '#f5f3ff',
    title: 'Vrijwilligersbeheer',
    desc: 'Overzichtelijke planning van kantine-, fluit- en bardiensten. Leden melden zich aan via het portaal of WhatsApp.',
  },
  {
    icon: ICONS.whistle, color: '#dc2626', bg: '#fef2f2',
    title: 'Scheidsrechters',
    desc: 'Publiceer wedstrijden waarvoor een scheidsrechter nodig is. Vrijwilligers melden zich direct aan met een klik.',
  },
  {
    icon: ICONS.briefcase, color: '#059669', bg: '#ecfdf5',
    title: 'Vacatures',
    desc: 'Zet openstaande functies online en bereik geïnteresseerde leden rechtstreeks via het clubportaal.',
  },
  {
    icon: ICONS.screen, color: '#0891b2', bg: '#ecfeff',
    title: 'Informatiebeeldschermen',
    desc: 'Toon wedstrijden, diensten en nieuws op tv-schermen in de kantine of kantine — altijd actueel en automatisch bijgewerkt.',
  },
  {
    icon: ICONS.domain, color: '#6366f1', bg: '#eef2ff',
    title: 'Eigen domeinnaam',
    desc: 'Koppel uw eigen domeinnaam zoals portal.mijnclub.nl. SSL wordt automatisch geregeld door Cloudflare.',
  },
  {
    icon: ICONS.paint, color: '#d97706', bg: '#fffbeb',
    title: 'Clubhuisstijl',
    desc: 'Stel uw clubkleur en logo in. Het gehele portaal past zich automatisch aan uw huisstijl aan.',
  },
  {
    icon: ICONS.whatsapp, color: '#16a34a', bg: '#f0fdf4',
    title: 'WhatsApp notificaties',
    desc: 'Leden ontvangen een WhatsApp-bericht zodra ze zich aanmelden voor een dienst, inclusief een bevestigingslink.',
  },
  {
    icon: ICONS.sportlink, color: '#ea580c', bg: '#fff7ed',
    title: 'Sportlink koppeling',
    desc: 'Importeer automatisch diensten en wedstrijden vanuit Sportlink Open Data. Altijd gesynchroniseerd.',
  },
];

/* ─── PRICING DATA ───────────────────────────────────────────────── */
const plans = [
  {
    name: 'Starter',
    tagline: 'Voor kleine clubs die starten',
    price: null,
    highlight: false,
    features: [
      '1 module naar keuze',
      'Tot 250 leden',
      'Clubportaal',
      'Clubbranding (kleur + logo)',
      'Subdomeinnaam (slug.clubnode.online)',
      'E-mail support',
    ],
    cta: 'Neem contact op',
  },
  {
    name: 'Pro',
    tagline: 'Alles wat uw club nodig heeft',
    price: null,
    highlight: true,
    features: [
      'Alle modules onbeperkt',
      'Onbeperkt leden',
      'Eigen domeinnaam',
      'Sportlink koppeling',
      'WhatsApp notificaties',
      'Informatiebeeldschermen',
      'Prioriteit support',
    ],
    cta: 'Demo aanvragen',
  },
  {
    name: 'Club+',
    tagline: 'Voor grote clubs & koepels',
    price: null,
    highlight: false,
    features: [
      'Alles van Pro',
      'Meerdere clubs beheren',
      'Aangepaste integraties',
      'SLA-garantie',
      'Dedicated support',
      'On-premise optie',
    ],
    cta: 'Neem contact op',
  },
];

/* ─── FAQ DATA ───────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Werkt Clubnode met mijn bestaande website?',
    a: 'Ja. Clubnode is een zelfstandig portaal dat naast uw bestaande website werkt. U kunt er een link naartoe plaatsen, of een eigen domeinnaam koppelen zodat het naadloos aansluit op uw clubsite.',
  },
  {
    q: 'Hoe werkt de Sportlink koppeling?',
    a: 'Via Sportlink Open Data halen we automatisch wedstrijden en diensten op voor uw club. U heeft alleen het Client ID uit MijnSportlink nodig — wij regelen de rest. De gegevens worden elke dag automatisch bijgewerkt.',
  },
  {
    q: 'Kan ik mijn eigen domeinnaam gebruiken?',
    a: 'Absoluut. U wijst een CNAME-record in uw DNS naar clubnode.online en vult de hostnaam in het admin-dashboard in. SSL wordt automatisch geregeld via Cloudflare. Uw portaal is vervolgens bereikbaar op bijvoorbeeld portal.mijnclub.nl.',
  },
  {
    q: 'Hoe werken de informatiebeeldschermen?',
    a: 'U koppelt een tv of beeldscherm aan het internet en opent de speciale scherm-URL in de browser. Het scherm toont automatisch actuele wedstrijden, openstaande scheidsrechterdiensten en andere clubinformatie. Geen extra hardware of software nodig.',
  },
  {
    q: 'Hoe lang duurt het instellen?',
    a: 'De basisinstallatie — club aanmaken, kleuren instellen, modules activeren — duurt minder dan 10 minuten. De Sportlink koppeling is met één klik actief zodra u het Client ID heeft ingevuld.',
  },
  {
    q: 'Is er een proefperiode?',
    a: 'Neem contact op via de demo-knop en we zetten een proefomgeving voor u op. Geen creditcard nodig, geen verplichtingen.',
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero-bg grid-overlay relative overflow-hidden min-h-[92dvh] flex items-center">
        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 anim-1">
                <div
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold border"
                  style={{
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    borderColor: 'rgba(59,130,246,0.25)',
                    color: '#93c5fd',
                  }}
                >
                  <span className="mr-1.5">✦</span>
                  Nieuw: Automatische Sportlink synchronisatie
                </div>
              </div>

              <h1
                className="font-black leading-[1.08] tracking-tight mb-6 anim-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff' }}
              >
                Het complete platform{' '}
                <span className="gradient-text">voor uw sportclub</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8 anim-3" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480 }}>
                Van vrijwilligersdiensten tot scheidsrechters, vacatures en informatiebeeldschermen —
                allemaal op één plek, in uw clubkleuren, op uw eigen domein.
              </p>

              <div className="flex flex-wrap gap-3 mb-12 anim-3">
                <a
                  href="mailto:info@clubnode.online?subject=Demo aanvragen"
                  className="inline-flex items-center gap-2 font-bold text-white px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', boxShadow: '0 4px 20px rgba(59,130,246,0.4)' }}
                >
                  Demo aanvragen
                  <Icon path={ICONS.arrow} className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  Functies bekijken
                </a>
              </div>

              {/* Trust stats */}
              <div className="flex flex-wrap gap-6 anim-4">
                {[
                  { value: '1', label: 'Sportclub' },
                  { value: '~1.000', label: 'Leden bereikt' },
                  { value: '99.9%', label: 'Uptime' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-black text-white leading-none">{value}</div>
                    <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mockup */}
            <div className="flex justify-center lg:justify-end">
              <PortalMockup />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }}
        />
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ backgroundColor: '#eff6ff', color: '#1d4ed8' }}
            >
              Alle functies
            </div>
            <h2 className="font-black text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#0f172a' }}>
              Alles wat uw club nodig heeft
            </h2>
            <p className="text-lg" style={{ color: '#64748b', maxWidth: 540, margin: '0 auto' }}>
              Negen krachtige modules die samenwerken in één platform. Activeer alleen wat uw club nodig heeft.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="feature-card bg-white rounded-2xl p-6 border"
                style={{ borderColor: '#f1f5f9', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: f.bg }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={f.color} strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-[17px] mb-2" style={{ color: '#0f172a', letterSpacing: '-0.01em' }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENS SPOTLIGHT ── */}
      <section
        id="screens"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#0f172a' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(16,185,129,0.1) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Informatiebeeldschermen
              </div>

              <h2
                className="font-black leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff' }}
              >
                Uw kantine altijd{' '}
                <span style={{ color: '#34d399' }}>up-to-date</span>
              </h2>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Huur een goedkope tv-stick of gebruik een oude laptop — Clubnode zet elk scherm om tot
                een live informatiedisplay voor uw club. Wedstrijden, diensten en nieuws, altijd actueel.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { icon: ICONS.zap, text: 'Geen installatie of speciale hardware nodig — gewoon een browser' },
                  { icon: ICONS.calendar, text: 'Automatisch bijgewerkt vanuit Sportlink en uw eigen planning' },
                  { icon: ICONS.screen, text: 'Meerdere schermen per club, elk met eigen content' },
                  { icon: ICONS.paint, text: 'Volledig in uw clubkleuren en huisstijl' },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(16,185,129,0.15)' }}
                    >
                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@clubnode.online?subject=Demo beeldschermen"
                className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  color: '#34d399',
                }}
              >
                Demo beeldscherm bekijken
                <Icon path={ICONS.arrow} className="w-4 h-4" />
              </a>
            </div>

            {/* Screen mockup */}
            <div className="flex justify-center lg:justify-end">
              <ScreenMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ backgroundColor: '#f0fdf4', color: '#15803d' }}
            >
              Hoe het werkt
            </div>
            <h2 className="font-black text-4xl tracking-tight mb-4" style={{ color: '#0f172a' }}>
              In drie stappen live
            </h2>
            <p className="text-lg" style={{ color: '#64748b' }}>
              Binnen een kwartier heeft uw club een professioneel portaal.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div
              className="absolute top-10 left-[16.67%] right-[16.67%] h-px hidden sm:block"
              style={{
                background: 'linear-gradient(90deg, transparent, #e2e8f0, #3b82f6, #e2e8f0, transparent)',
              }}
            />

            {[
              {
                step: '01',
                color: '#3b82f6',
                bg: '#eff6ff',
                title: 'Club aanmaken',
                desc: 'Vul de clubnaam, kleuren en logo in. Activeer de modules die u wilt gebruiken.',
              },
              {
                step: '02',
                color: '#7c3aed',
                bg: '#f5f3ff',
                title: 'Koppelen & importeren',
                desc: 'Verbind Sportlink met één Client ID. Wedstrijden en diensten worden automatisch geïmporteerd.',
              },
              {
                step: '03',
                color: '#10b981',
                bg: '#ecfdf5',
                title: 'Delen met leden',
                desc: 'Deel de portaal-URL met uw leden of koppel uw eigen domeinnaam. Klaar.',
              },
            ].map(({ step, color, bg, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-black"
                  style={{ backgroundColor: bg, color, boxShadow: `0 8px 24px ${color}25` }}
                >
                  {step}
                </div>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#0f172a' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPORTLINK + WHATSAPP INTEGRATION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-black text-4xl tracking-tight mb-4" style={{ color: '#0f172a' }}>
              Krachtige integraties
            </h2>
            <p className="text-lg" style={{ color: '#64748b', maxWidth: 480, margin: '0 auto' }}>
              Clubnode werkt naadloos samen met de tools die uw club al gebruikt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sportlink */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                border: '1px solid #fed7aa',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#ea580c', boxShadow: '0 8px 24px rgba(234,88,12,0.3)' }}
              >
                <Icon path={ICONS.sportlink} className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3" style={{ color: '#7c2d12' }}>Sportlink Open Data</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#9a3412' }}>
                Verbind uw Sportlink Client ID en Clubnode haalt automatisch wedstrijden,
                teams en diensten op. Dagelijks gesynchroniseerd, altijd actueel.
              </p>
              <ul className="space-y-2">
                {['Automatische wedstrijdimport', 'Teamindeling & speelschema', 'Dagelijkse synchronisatie'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#7c2d12' }}>
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1px solid #bbf7d0',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#16a34a', boxShadow: '0 8px 24px rgba(22,163,74,0.3)' }}
              >
                <Icon path={ICONS.phone} className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3" style={{ color: '#14532d' }}>WhatsApp notificaties</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#166534' }}>
                Zodra een lid zich aanmeldt voor een dienst, ontvangt de beheerder automatisch een WhatsApp-bericht
                met bevestigingslink. Geen extra app, geen ingewikkelde configuratie.
              </p>
              <ul className="space-y-2">
                {['Aanmeldbevestiging per WhatsApp', 'Directe link naar dienstoverzicht', 'Instelbaar per club'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#14532d' }}>
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM DOMAIN FEATURE ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: '#f8fafc' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="flex justify-center">
              <div className="space-y-4 w-full max-w-md">
                {/* Domain card */}
                <div
                  className="bg-white rounded-2xl p-5"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Eigen domeinnaam</div>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-700"
                    >
                      portal.svbedum.nl
                    </div>
                    <div
                      className="px-3 py-2 rounded-lg text-xs font-bold"
                      style={{ backgroundColor: '#ecfdf5', color: '#16a34a' }}
                    >
                      ✓ Actief
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    Wijs een CNAME-record naar <code className="bg-slate-100 px-1 rounded font-mono">clubnode.online</code> om de koppeling te activeren.
                  </p>
                </div>

                {/* SSL badge */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="bg-white rounded-2xl p-4 flex items-center gap-3"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon path={ICONS.shield} className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">SSL</div>
                      <div className="text-[11px] text-slate-400">Automatisch</div>
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-2xl p-4 flex items-center gap-3"
                    style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Icon path={ICONS.zap} className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">CDN</div>
                      <div className="text-[11px] text-slate-400">Cloudflare</div>
                    </div>
                  </div>
                </div>

                {/* Branding preview */}
                <div
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0' }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 px-5 pt-4 pb-3">
                    Clubhuisstijl preview
                  </div>
                  <div className="flex gap-0">
                    {['#2563eb', '#7c3aed', '#059669', '#dc2626', '#d97706'].map((color) => (
                      <div
                        key={color}
                        className="flex-1 h-10"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <div className="px-5 py-3 text-xs text-slate-400">
                    Elk portaal past automatisch op uw clubkleur aan
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ backgroundColor: '#eff6ff', color: '#1d4ed8' }}
              >
                Eigen huisstijl & domein
              </div>
              <h2
                className="font-black tracking-tight leading-tight mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#0f172a' }}
              >
                Uw club,{' '}
                <span className="gradient-text">uw uitstraling</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#64748b' }}>
                Stel één keer uw clubkleur en logo in — het volledige portaal past zich automatisch aan.
                Koppel uw eigen domeinnaam en SSL wordt automatisch ingesteld via Cloudflare.
              </p>
              <ul className="space-y-4">
                {[
                  'Primaire en secundaire clubkleur instelbaar',
                  'Logo upload via URL',
                  'Eigen domein met automatische SSL',
                  'Volledig responsive op mobiel en desktop',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#eff6ff' }}
                    >
                      <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#334155' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ backgroundColor: '#f5f3ff', color: '#6d28d9' }}
            >
              Transparante prijzen
            </div>
            <h2 className="font-black text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#0f172a' }}>
              Kies uw pakket
            </h2>
            <p className="text-lg" style={{ color: '#64748b' }}>
              Prijzen op aanvraag — neem contact op voor een passend aanbod voor uw club.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="pricing-card rounded-3xl p-8 flex flex-col relative"
                style={
                  plan.highlight
                    ? {
                        background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)',
                        boxShadow: '0 20px 60px rgba(59,130,246,0.25)',
                        border: '1px solid rgba(59,130,246,0.3)',
                      }
                    : {
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                      }
                }
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black text-white"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)' }}
                  >
                    Meest gekozen
                  </div>
                )}

                <div className="mb-7">
                  <h3
                    className="font-black text-2xl mb-1.5"
                    style={{ color: plan.highlight ? '#ffffff' : '#0f172a' }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.55)' : '#94a3b8' }}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-5 mb-1">
                    <span
                      className="text-4xl font-black"
                      style={{ color: plan.highlight ? '#ffffff' : '#0f172a' }}
                    >
                      Op aanvraag
                    </span>
                  </div>
                  <p
                    className="text-xs"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.4)' : '#94a3b8' }}
                  >
                    Neem contact op voor de prijs
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: plan.highlight ? 'rgba(59,130,246,0.2)' : '#eff6ff',
                        }}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={plan.highlight ? '#60a5fa' : '#3b82f6'}
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: plan.highlight ? 'rgba(255,255,255,0.75)' : '#475569' }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:info@clubnode.online?subject=Pakket aanvraag"
                  className="w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 block"
                  style={
                    plan.highlight
                      ? {
                          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                          color: '#ffffff',
                          boxShadow: '0 4px 16px rgba(59,130,246,0.4)',
                        }
                      : {
                          backgroundColor: '#ffffff',
                          border: '1.5px solid #e2e8f0',
                          color: '#0f172a',
                        }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-8" style={{ color: '#94a3b8' }}>
            Alle pakketten inclusief gratis proefperiode · Geen creditcard vereist · Opzeggen wanneer u wilt
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-black text-4xl tracking-tight mb-4" style={{ color: '#0f172a' }}>
              Veelgestelde vragen
            </h2>
            <p className="text-lg" style={{ color: '#64748b' }}>
              Staat uw vraag er niet bij? Neem gerust contact op.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl overflow-hidden"
                style={{ border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 font-semibold text-[15px] cursor-pointer select-none"
                  style={{ color: '#0f172a' }}
                >
                  {faq.q}
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.2) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{
              backgroundColor: 'rgba(59,130,246,0.12)',
              color: '#93c5fd',
              border: '1px solid rgba(59,130,246,0.25)',
            }}
          >
            Gratis starten
          </div>

          <h2
            className="font-black leading-tight tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Klaar om uw club te{' '}
            <span className="gradient-text">moderniseren?</span>
          </h2>

          <p className="text-lg mb-10 mx-auto" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520 }}>
            Vraag een gratis demo aan en wij zetten een proefomgeving op voor uw club.
            Geen verplichtingen, geen creditcard.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@clubnode.online?subject=Demo aanvragen"
              className="inline-flex items-center gap-2 font-bold text-white px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                boxShadow: '0 4px 24px rgba(59,130,246,0.45)',
              }}
            >
              Demo aanvragen
              <Icon path={ICONS.arrow} className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@clubnode.online"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: 'rgba(255,255,255,0.8)',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <Icon path={ICONS.mail} className="w-4 h-4" />
              Contact opnemen
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#020617', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)' }}
                >
                  C
                </div>
                <span className="text-white font-bold text-[17px] tracking-tight">Clubnode</span>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 300 }}>
                Het complete platform voor sportclubs in Nederland. Professioneel, eenvoudig en betaalbaar.
              </p>
              <a
                href="mailto:info@clubnode.online"
                className="text-sm font-medium transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                info@clubnode.online
              </a>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Product
              </h4>
              <ul className="space-y-3">
                {['Functies', 'Beeldschermen', 'Integraties', 'Prijzen', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Contact
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Demo aanvragen', href: 'mailto:info@clubnode.online?subject=Demo aanvragen' },
                  { label: 'Inloggen', href: 'https://dashboard.clubnode.online' },
                  { label: 'Support', href: 'mailto:support@clubnode.online' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              © {new Date().getFullYear()} Clubnode. Alle rechten voorbehouden.
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Gemaakt voor Nederlandse sportclubs
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
