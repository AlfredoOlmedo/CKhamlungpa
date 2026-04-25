// kw-shared.jsx — small reusable primitives used across all parts.

function KwEyebrow({ children, color, style }) {
  return (
    <div className="kw-eyebrow" style={{ color: color, ...style }}>{children}</div>
  );
}

function KwOverline({ children, style }) {
  return <div className="kw-overline" style={style}>{children}</div>;
}

function KwDisplay({ children, size = 56, color, style }) {
  return (
    <div className="kw-display" style={{ fontSize: size, color, ...style }}>
      {children}
    </div>
  );
}

function KwBtn({ children, variant = 'primary', icon, style, onClick }) {
  return (
    <button className={`kw-btn ${variant}`} style={style} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
}

function KwPh({ label, h = 120, w = '100%', tone = '', style }) {
  return (
    <div
      className={`kw-ph ${tone}`}
      style={{ height: h, width: w, ...style }}
    >
      {label}
    </div>
  );
}

// Inline icons
function IconArrow({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconWA({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 21l1.6-5.2A8.5 8.5 0 1 1 8.2 19.4L3 21Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8.8 8.6c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.3 0 .5-.1.6l-.4.5c-.1.1-.2.3 0 .6.3.5.8 1.2 1.4 1.6.7.5 1.3.8 1.6.9.3.1.5 0 .6-.1l.6-.6c.1-.2.3-.2.5-.1l1.5.7c.3.1.5.2.5.4 0 .2 0 1.1-.4 1.5-.4.4-1.4.9-2 .8-.5 0-1.3-.2-2.8-.8-2.4-.9-3.9-3.3-4-3.5-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.9-2.1Z" fill={color}/>
    </svg>
  );
}
function IconClose({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
}
function IconMenu({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
}
function IconCalendar({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M8 3v4M16 3v4M3.5 10h17" stroke="currentColor" strokeWidth="1.4"/></svg>;
}
function IconHeart({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>;
}
function IconLotus({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12c2 4 5 5 7 5s5-1 7-5M5 12c0-3 3-5 7-5s7 2 7 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>;
}

// Abstract diamond mark (NOT sacred iconography — a generic geometric motif)
function KwMark({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" stroke={color} strokeWidth="1.2" />
      <rect x="7" y="7" width="6" height="6" transform="rotate(45 10 10)" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

Object.assign(window, {
  KwEyebrow, KwOverline, KwDisplay, KwBtn, KwPh, KwMark,
  IconArrow, IconWA, IconClose, IconMenu, IconCalendar, IconHeart, IconLotus,
});
