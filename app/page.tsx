/* ─── ICONS ──────────────────────────────────────────────────────── */
const I = {
  users:    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  whistle:  'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
  briefcase:'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  domain:   'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  paint:    'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  phone:    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  link:     'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  screen:   'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  portal:   'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  check:    'M5 13l4 4L19 7',
  arrow:    'M17 8l4 4m0 0l-4 4m4-4H3',
  shield:   'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  zap:      'M13 10V3L4 14h7v7l9-11h-7z',
  mail:     'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  globe:    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  lock:     'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
};

function Svg({ d, size = 20, color = 'currentColor' }: { d: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

/* ─── PORTAL MOCKUP ──────────────────────────────────────────────── */
function PortalMockup() {
  const pri = '#2563eb';
  return (
    <div style={{ position: 'relative', maxWidth: 520 }} className="anim-4 anim-float">
      {/* Glow */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: 24, background: 'radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.35) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'scale(1.1)' }} />
      {/* Browser */}
      <div style={{ position: 'relative', zIndex: 1, borderRadius: 20, overflow: 'hidden', background: '#1e293b', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.5)' }}>
        {/* Chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ef4444','#f59e0b','#22c55e'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: c, opacity: 0.8 }} />)}
          </div>
          <div style={{ flex: 1, margin: '0 12px', padding: '4px 12px', borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Svg d={I.lock} size={12} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>portal.svbedum.nl</span>
          </div>
        </div>
        {/* Portal */}
        <div style={{ backgroundColor: '#f5f5f7' }}>
          {/* Header */}
          <div style={{ padding: '20px 24px', background: `linear-gradient(140deg, ${pri} 0%, #1e3a8a 100%)`, display: 'flex', alignItems: 'center', gap: 16, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: '100%', background: 'radial-gradient(ellipse at 80% 40%, rgba(255,255,255,0.1) 0%, transparent 65%)' }} />
            <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: 18 }}>SV</span>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 2 }}>Bedum · Clubportaal</div>
              <div style={{ color: '#fff', fontWeight: 900, fontSize: 22, lineHeight: 1, letterSpacing: '-0.02em' }}>SV Bedum</div>
            </div>
          </div>
          {/* Nav */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', padding: '0 16px' }}>
            {['Thuis','Vrijwilligers','Scheids','Vacatures'].map((t, i) => (
              <div key={t} style={{ padding: '12px 12px', fontSize: 11, fontWeight: 600, color: i === 0 ? pri : '#a1a1aa', position: 'relative' }}>
                {t}
                {i === 0 && <div style={{ position: 'absolute', bottom: 0, left: 8, right: 8, height: 2.5, borderRadius: 2, backgroundColor: pri }} />}
              </div>
            ))}
          </div>
          {/* Content */}
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
              {[{ label:'Vrijwilligers', c:'#2563eb' }, { label:'Scheids', c:'#7c3aed' }, { label:'Vacatures', c:'#059669' }].map(({ label, c }) => (
                <div key={label} style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                  <div style={{ background: `radial-gradient(ellipse at 60% 30%, color-mix(in srgb, ${c} 80%, white) 0%, ${c} 65%, color-mix(in srgb, ${c} 70%, black) 100%)`, padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Svg d={label === 'Vrijwilligers' ? I.users : label === 'Scheids' ? I.whistle : I.briefcase} size={28} color="#fff" />
                  </div>
                  <div style={{ backgroundColor: '#fff', padding: '8px 8px 10px' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#1e293b' }}>{label}</div>
                    <div style={{ fontSize: 9, color: '#94a3b8', marginTop: 2 }}>Bekijken →</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: '#fff', borderRadius: 16, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: 10, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', backgroundColor: pri, padding: '4px 10px', borderRadius: 999 }}>Bellen</span>
                <span style={{ fontSize: 10, fontWeight: 500, color: '#475569', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: 999 }}>E-mail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Badge: WhatsApp */}
      <div style={{ position: 'absolute', bottom: -16, right: -16, backgroundColor: '#fff', borderRadius: 16, padding: '12px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 10, zIndex: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Svg d={I.check} size={16} color="#16a34a" />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>Dienst aangemeld</div>
          <div style={{ fontSize: 10, color: '#94a3b8' }}>via WhatsApp · 2 min geleden</div>
        </div>
      </div>
      {/* Badge: domain */}
      <div style={{ position: 'absolute', top: -16, left: -16, backgroundColor: '#fff', borderRadius: 14, padding: '10px 14px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 8, zIndex: 10 }}>
        <div style={{ width: 24, height: 24, borderRadius: 8, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Svg d={I.globe} size={14} color="#3b82f6" />
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#334155', fontFamily: 'monospace' }}>portal.svbedum.nl</span>
      </div>
    </div>
  );
}

/* ─── SCREEN MOCKUP ──────────────────────────────────────────────── */
function ScreenMockup() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.3) 0%, transparent 70%)', filter: 'blur(48px)' }} />
      <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: '#0f172a', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.6)', maxWidth: 540, aspectRatio: '16/9' }}>
        {/* Chrome */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#34d399' }} />
            <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>scherm-1.clubnode.online</span>
          </div>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>21:45</span>
        </div>
        {/* Content */}
        <div style={{ padding: 20, background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)', minHeight: 200 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>SV Bedum</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>Komende wedstrijden</div>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#34d399', backgroundColor: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', padding: '4px 10px', borderRadius: 999 }}>Live</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { home: 'SV Bedum', away: 'FC Groningen B', time: 'Zat 14:30', c: '#3b82f6' },
              { home: 'SV Bedum B', away: 'Hoogezand', time: 'Zat 16:00', c: '#10b981' },
              { home: 'SV Bedum C1', away: 'Appingedam', time: 'Zon 10:00', c: '#8b5cf6' },
            ].map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
                  <div style={{ width: 4, height: 32, borderRadius: 2, backgroundColor: m.c, flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.home} – {m.away}</div>
                  </div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#60a5fa', flexShrink: 0, marginLeft: 8 }}>{m.time}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Ticker bar */}
        <div style={{ backgroundColor: '#2DD4BF', padding: '7px 16px', display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#0f172a' }}>Scheidsrechter gezocht: Zat 14:30 &nbsp;·&nbsp; Meld je aan via het portaal</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <div style={{ width: 48, height: 12, borderRadius: '0 0 8px 8px', backgroundColor: '#334155' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <div style={{ width: 80, height: 6, borderRadius: 4, backgroundColor: '#1e293b' }} />
      </div>
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────────────────── */
const features = [
  { icon: I.portal,     color: '#2563eb', bg: '#eff6ff', title: 'Ledenportaal',           desc: 'Een professioneel clubportaal dat leden eenvoudig bereiken via hun browser of telefoon, altijd actueel.' },
  { icon: I.users,      color: '#7c3aed', bg: '#f5f3ff', title: 'Vrijwilligersbeheer',    desc: 'Overzichtelijke planning van kantine-, fluit- en bardiensten. Leden melden zich aan via het portaal of WhatsApp.' },
  { icon: I.whistle,    color: '#dc2626', bg: '#fef2f2', title: 'Scheidsrechters',        desc: 'Publiceer wedstrijden waarvoor een scheidsrechter nodig is. Vrijwilligers melden zich direct aan.' },
  { icon: I.briefcase,  color: '#059669', bg: '#ecfdf5', title: 'Vacatures',              desc: 'Zet openstaande functies online en bereik geïnteresseerde leden rechtstreeks via het clubportaal.' },
  { icon: I.screen,     color: '#0891b2', bg: '#ecfeff', title: 'Informatiebeeldschermen',desc: 'Toon wedstrijden, diensten en nieuws op tv-schermen in de kantine — altijd actueel, automatisch bijgewerkt.' },
  { icon: I.domain,     color: '#6366f1', bg: '#eef2ff', title: 'Eigen domeinnaam',       desc: 'Koppel uw eigen domeinnaam zoals portal.mijnclub.nl. SSL wordt automatisch geregeld via Cloudflare.' },
  { icon: I.paint,      color: '#d97706', bg: '#fffbeb', title: 'Clubhuisstijl',          desc: 'Stel uw clubkleur en logo in. Het gehele portaal past zich automatisch aan uw huisstijl aan.' },
  { icon: I.phone,      color: '#16a34a', bg: '#f0fdf4', title: 'WhatsApp notificaties',  desc: 'Leden ontvangen een WhatsApp-bericht zodra ze zich aanmelden voor een dienst, inclusief een bevestigingslink.' },
  { icon: I.link,       color: '#ea580c', bg: '#fff7ed', title: 'Sportlink koppeling',    desc: 'Importeer automatisch diensten en wedstrijden vanuit Sportlink Open Data. Altijd gesynchroniseerd.' },
];

const plans = [
  { name: 'Starter',  tagline: 'Voor kleine clubs die starten',     highlight: false, features: ['1 module naar keuze','Tot 250 leden','Clubportaal','Clubbranding (kleur + logo)','Subdomeinnaam (slug.clubnode.online)','E-mail support'], cta: 'Neem contact op' },
  { name: 'Pro',      tagline: 'Alles wat uw club nodig heeft',     highlight: true,  features: ['Alle modules onbeperkt','Onbeperkt leden','Eigen domeinnaam','Sportlink koppeling','WhatsApp notificaties','Informatiebeeldschermen','Prioriteit support'], cta: 'Demo aanvragen' },
  { name: 'Club+',    tagline: 'Voor grote clubs & koepels',        highlight: false, features: ['Alles van Pro','Meerdere clubs beheren','Aangepaste integraties','SLA-garantie','Dedicated support','On-premise optie'], cta: 'Neem contact op' },
];

const faqs = [
  { q: 'Werkt Clubnode met mijn bestaande website?', a: 'Ja. Clubnode is een zelfstandig portaal dat naast uw bestaande website werkt. U kunt er een link naartoe plaatsen, of een eigen domeinnaam koppelen zodat het naadloos aansluit op uw clubsite.' },
  { q: 'Hoe werkt de Sportlink koppeling?', a: 'Via Sportlink Open Data halen we automatisch wedstrijden en diensten op voor uw club. U heeft alleen het Client ID uit MijnSportlink nodig — wij regelen de rest. De gegevens worden elke dag automatisch bijgewerkt.' },
  { q: 'Kan ik mijn eigen domeinnaam gebruiken?', a: 'Absoluut. U wijst een CNAME-record in uw DNS naar clubnode.online en vult de hostnaam in het admin-dashboard in. SSL wordt automatisch geregeld via Cloudflare.' },
  { q: 'Hoe werken de informatiebeeldschermen?', a: 'U koppelt een tv of beeldscherm aan het internet en opent de speciale scherm-URL in de browser. Het scherm toont automatisch actuele wedstrijden en diensten. Geen extra hardware of software nodig.' },
  { q: 'Hoe lang duurt het instellen?', a: 'De basisinstallatie duurt minder dan 10 minuten. De Sportlink koppeling is met één klik actief zodra u het Client ID heeft ingevuld.' },
  { q: 'Is er een proefperiode?', a: 'Neem contact op via de demo-knop en we zetten een proefomgeving voor u op. Geen creditcard nodig, geen verplichtingen.' },
];

/* ─── PAGE ───────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      {/* NAVBAR */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #3b82f6, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>Clubnode</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {[['#features','Functies'],['#screens','Beeldschermen'],['#pricing','Prijzen'],['#faq','FAQ']].map(([href, label]) => (
              <a key={href} href={href} className="nav-link" style={{ display: 'none' }}>{label}</a>
            ))}
            <div style={{ display: 'flex', gap: 32 }}>
              {[['#features','Functies'],['#screens','Beeldschermen'],['#pricing','Prijzen'],['#faq','FAQ']].map(([href, label]) => (
                <a key={href} href={href} className="nav-link">{label}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="https://dashboard.clubnode.online" className="nav-link">Inloggen</a>
            <a href="mailto:info@clubnode.online?subject=Demo aanvragen" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#fff', padding: '8px 18px', borderRadius: 10, background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', textDecoration: 'none', boxShadow: '0 2px 0 0 #1e3a8a' }}>
              Demo aanvragen
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-bg grid-overlay" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className="grid-2">
            {/* Left */}
            <div>
              <div className="badge anim-1" style={{ backgroundColor: 'rgba(59,130,246,0.12)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.25)', marginBottom: 24 }}>
                <span>✦</span> Nieuw: Automatische Sportlink synchronisatie
              </div>
              <h1 className="anim-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#fff', marginBottom: 24 }}>
                Het complete platform <span className="gradient-text">voor uw sportclub</span>
              </h1>
              <p className="anim-3" style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 480 }}>
                Van vrijwilligersdiensten tot scheidsrechters, vacatures en informatiebeeldschermen — allemaal op één plek, in uw clubkleuren, op uw eigen domein.
              </p>
              <div className="anim-3" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}>
                <a href="mailto:info@clubnode.online?subject=Demo aanvragen" className="btn-primary">
                  Demo aanvragen <Svg d={I.arrow} size={16} color="#fff" />
                </a>
                <a href="#features" className="btn-ghost">Functies bekijken</a>
              </div>
              <div className="anim-4" style={{ display: 'flex', gap: 32 }}>
                {[['1','Sportclub'],['~1.000','Leden bereikt'],['99.9%','Uptime']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PortalMockup />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* FEATURES */}
      <section id="features" className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', marginBottom: 16 }}>Alle functies</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 16 }}>Alles wat uw club nodig heeft</h2>
            <p style={{ fontSize: 18, color: '#64748b', maxWidth: 520, margin: '0 auto' }}>Negen krachtige modules in één platform. Activeer alleen wat uw club nodig heeft.</p>
          </div>
          <div className="grid-features">
            {features.map((f) => (
              <div key={f.title} className="feature-card" style={{ backgroundColor: '#fff', borderRadius: 16, padding: 24, border: '1px solid #e2e8f0', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Svg d={f.icon} size={20} color={f.color} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748b', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENS SPOTLIGHT */}
      <section id="screens" className="section" style={{ backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(16,185,129,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="grid-2">
            <div>
              <div className="badge" style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.25)', marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#34d399' }} /> Informatiebeeldschermen
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
                Uw kantine altijd <span style={{ color: '#34d399' }}>up-to-date</span>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>
                Huur een goedkope tv-stick of gebruik een oude laptop — Clubnode zet elk scherm om tot een live informatiedisplay. Wedstrijden, diensten en nieuws, altijd actueel.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {[
                  [I.zap,     'Geen installatie of speciale hardware nodig — gewoon een browser'],
                  [I.screen,  'Automatisch bijgewerkt vanuit Sportlink en uw eigen planning'],
                  [I.screen,  'Meerdere schermen per club, elk met eigen content'],
                  [I.paint,   'Volledig in uw clubkleuren en huisstijl'],
                ].map(([icon, text], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Svg d={icon as string} size={16} color="#34d399" />
                    </div>
                    <span style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)' }}>{text as string}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:info@clubnode.online?subject=Demo beeldschermen" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#34d399', padding: '14px 24px', borderRadius: 12, backgroundColor: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', textDecoration: 'none' }}>
                Demo beeldscherm bekijken <Svg d={I.arrow} size={16} color="#34d399" />
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ScreenMockup />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ backgroundColor: '#f0fdf4', color: '#15803d', marginBottom: 16 }}>Hoe het werkt</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 16 }}>In drie stappen live</h2>
            <p style={{ fontSize: 17, color: '#64748b' }}>Binnen een kwartier heeft uw club een professioneel portaal.</p>
          </div>
          <div className="grid-3">
            {[
              { n: '01', color: '#3b82f6', bg: '#eff6ff', title: 'Club aanmaken',        desc: 'Vul de clubnaam, kleuren en logo in. Activeer de modules die u wilt gebruiken.' },
              { n: '02', color: '#7c3aed', bg: '#f5f3ff', title: 'Koppelen & importeren',desc: 'Verbind Sportlink met één Client ID. Wedstrijden en diensten worden automatisch geïmporteerd.' },
              { n: '03', color: '#10b981', bg: '#ecfdf5', title: 'Delen met leden',      desc: 'Deel de portaal-URL met uw leden of koppel uw eigen domeinnaam. Klaar.' },
            ].map(({ n, color, bg, title, desc }) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, backgroundColor: bg, color, fontSize: 28, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 8px 24px ${color}25` }}>{n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#64748b', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 16 }}>Krachtige integraties</h2>
            <p style={{ fontSize: 17, color: '#64748b', maxWidth: 440, margin: '0 auto' }}>Clubnode werkt naadloos samen met de tools die uw club al gebruikt.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {/* Sportlink */}
            <div style={{ borderRadius: 24, padding: 32, background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', border: '1px solid #fed7aa' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, backgroundColor: '#ea580c', boxShadow: '0 8px 24px rgba(234,88,12,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Svg d={I.link} size={28} color="#fff" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: '#7c2d12', marginBottom: 12 }}>Sportlink Open Data</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#9a3412', marginBottom: 20 }}>Verbind uw Sportlink Client ID en Clubnode haalt automatisch wedstrijden, teams en diensten op. Dagelijks gesynchroniseerd.</p>
              {['Automatische wedstrijdimport','Teamindeling & speelschema','Dagelijkse synchronisatie'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Svg d={I.check} size={16} color="#ea580c" />
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#7c2d12' }}>{item}</span>
                </div>
              ))}
            </div>
            {/* WhatsApp */}
            <div style={{ borderRadius: 24, padding: 32, background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '1px solid #bbf7d0' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, backgroundColor: '#16a34a', boxShadow: '0 8px 24px rgba(22,163,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Svg d={I.phone} size={28} color="#fff" />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: '#14532d', marginBottom: 12 }}>WhatsApp notificaties</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#166534', marginBottom: 20 }}>Zodra een lid zich aanmeldt voor een dienst, ontvangt de beheerder automatisch een WhatsApp-bericht met bevestigingslink.</p>
              {['Aanmeldbevestiging per WhatsApp','Directe link naar dienstoverzicht','Instelbaar per club'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Svg d={I.check} size={16} color="#16a34a" />
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#14532d' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOMAIN FEATURE */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="grid-2">
            {/* Visual */}
            <div>
              <div style={{ maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ backgroundColor: '#fff', borderRadius: 16, padding: 20, border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', marginBottom: 12 }}>Eigen domeinnaam</div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ flex: 1, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: '10px 14px', fontSize: 14, fontFamily: 'monospace', color: '#334155' }}>portal.svbedum.nl</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#16a34a', backgroundColor: '#f0fdf4', padding: '6px 12px', borderRadius: 8 }}>✓ Actief</div>
                  </div>
                  <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 10, lineHeight: 1.5 }}>Wijs een CNAME-record naar <code style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: 4, fontFamily: 'monospace' }}>clubnode.online</code> om de koppeling te activeren.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ icon: I.shield, color: '#2563eb', bg: '#eff6ff', label: 'SSL', sub: 'Automatisch' }, { icon: I.zap, color: '#059669', bg: '#f0fdf4', label: 'CDN', sub: 'Cloudflare' }].map(({ icon, color, bg, label, sub }) => (
                    <div key={label} style={{ backgroundColor: '#fff', borderRadius: 14, padding: 16, border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Svg d={icon} size={18} color={color} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{label}</div>
                        <div style={{ fontSize: 11, color: '#94a3b8' }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8', padding: '14px 16px 10px' }}>Clubhuisstijl preview</div>
                  <div style={{ display: 'flex' }}>
                    {['#2563eb','#7c3aed','#059669','#dc2626','#d97706'].map(c => <div key={c} style={{ flex: 1, height: 40, backgroundColor: c }} />)}
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8', padding: '8px 16px 14px' }}>Elk portaal past automatisch op uw clubkleur aan</div>
                </div>
              </div>
            </div>
            {/* Text */}
            <div>
              <div className="badge" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', marginBottom: 24 }}>Eigen huisstijl & domein</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', lineHeight: 1.1, marginBottom: 24 }}>
                Uw club, <span className="gradient-text">uw uitstraling</span>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: '#64748b', marginBottom: 32 }}>
                Stel één keer uw clubkleur en logo in — het volledige portaal past zich automatisch aan. Koppel uw eigen domeinnaam en SSL wordt automatisch ingesteld via Cloudflare.
              </p>
              {['Primaire en secundaire clubkleur instelbaar','Logo upload via URL','Eigen domein met automatische SSL','Volledig responsive op mobiel en desktop'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Svg d={I.check} size={14} color="#3b82f6" />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#334155' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ backgroundColor: '#f5f3ff', color: '#6d28d9', marginBottom: 16 }}>Transparante prijzen</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 16 }}>Kies uw pakket</h2>
            <p style={{ fontSize: 17, color: '#64748b' }}>Prijzen op aanvraag — neem contact op voor een passend aanbod voor uw club.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {plans.map((plan) => (
              <div key={plan.name} className="pricing-card" style={{ borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', position: 'relative', ...(plan.highlight ? { background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)', boxShadow: '0 20px 60px rgba(59,130,246,0.25)', border: '1px solid rgba(59,130,246,0.3)' } : { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }) }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#2DD4BF', color: '#0f172a', fontSize: 11, fontWeight: 900, padding: '6px 16px', borderRadius: 999, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(45,212,191,0.4)' }}>
                    Meest gekozen
                  </div>
                )}
                <h3 style={{ fontSize: 24, fontWeight: 900, color: plan.highlight ? '#fff' : '#0f172a', marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.55)' : '#94a3b8', marginBottom: 24 }}>{plan.tagline}</p>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: plan.highlight ? '#fff' : '#0f172a' }}>Op aanvraag</span>
                </div>
                <p style={{ fontSize: 12, color: plan.highlight ? 'rgba(255,255,255,0.4)' : '#94a3b8', marginBottom: 28 }}>Neem contact op voor de prijs</p>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: plan.highlight ? 'rgba(59,130,246,0.2)' : '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Svg d={I.check} size={12} color={plan.highlight ? '#60a5fa' : '#3b82f6'} />
                      </div>
                      <span style={{ fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.75)' : '#475569' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="mailto:info@clubnode.online?subject=Pakket aanvraag" style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'opacity 0.2s', ...(plan.highlight ? { background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', color: '#fff', boxShadow: '0 4px 16px rgba(59,130,246,0.4)' } : { backgroundColor: '#fff', border: '1.5px solid #e2e8f0', color: '#0f172a' }) }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#94a3b8', marginTop: 24 }}>
            Alle pakketten inclusief gratis proefperiode · Geen creditcard vereist · Opzeggen wanneer u wilt
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: 16 }}>Veelgestelde vragen</h2>
            <p style={{ fontSize: 17, color: '#64748b' }}>Staat uw vraag er niet bij? Neem gerust contact op.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <summary style={{ padding: '18px 24px', fontWeight: 600, fontSize: 15, color: '#0f172a' }}>{faq.q}</summary>
                <div style={{ padding: '14px 24px 20px', fontSize: 14, lineHeight: 1.7, color: '#64748b', borderTop: '1px solid #f1f5f9' }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="badge" style={{ backgroundColor: 'rgba(59,130,246,0.12)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.25)', marginBottom: 24, display: 'inline-flex' }}>Gratis starten</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Klaar om uw club te <span className="gradient-text">moderniseren?</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto 40px' }}>
            Vraag een gratis demo aan en wij zetten een proefomgeving op voor uw club. Geen verplichtingen, geen creditcard.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <a href="mailto:info@clubnode.online?subject=Demo aanvragen" className="btn-primary">
              Demo aanvragen <Svg d={I.arrow} size={16} color="#fff" />
            </a>
            <a href="mailto:info@clubnode.online" className="btn-ghost">
              <Svg d={I.mail} size={16} color="rgba(255,255,255,0.8)" /> Contact opnemen
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#020617', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #3b82f6, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>Clubnode</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', maxWidth: 280, marginBottom: 16 }}>Het complete platform voor sportclubs in Nederland. Professioneel, eenvoudig en betaalbaar.</p>
              <a href="mailto:info@clubnode.online" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>info@clubnode.online</a>
            </div>
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Product</h4>
              {[['#features','Functies'],['#screens','Beeldschermen'],['#pricing','Prijzen'],['#faq','FAQ']].map(([href, label]) => (
                <div key={href} style={{ marginBottom: 12 }}><a href={href} className="footer-link">{label}</a></div>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>Contact</h4>
              {[['mailto:info@clubnode.online?subject=Demo aanvragen','Demo aanvragen'],['https://dashboard.clubnode.online','Inloggen'],['mailto:support@clubnode.online','Support']].map(([href, label]) => (
                <div key={href} style={{ marginBottom: 12 }}><a href={href} className="footer-link">{label}</a></div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} Clubnode. Alle rechten voorbehouden.</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[['#','Privacybeleid'],['#','Algemene voorwaarden'],['#','Cookiebeleid']].map(([href, label]) => (
                <a key={label} href={href} style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')} onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>{label}</a>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Gemaakt voor Nederlandse sportclubs</p>
          </div>
        </div>
      </footer>
    </>
  );
}
