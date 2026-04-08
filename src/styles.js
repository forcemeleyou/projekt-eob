// styles.js — wszystkie style wyciągnięte z App.jsx

export const COLORS = {
  bg: {
    primary: "#0d1117",
    secondary: "#161b22",
  },
  text: {
    primary: "#e6edf3",
    secondary: "#c9d1d9",
    muted: "#8b949e",
    hint: "#6e7681",
  },
  accent: {
    green: "#7ee8a2",
    blue: "#58a6ff",
    purple: "#d2a8ff",
    violet: "#b371e9",
    orange: "#ffa657",
    red: "#f78166",
  },
  border: {
    default: "rgba(255,255,255,0.08)",
    subtle: "rgba(255,255,255,0.07)",
    green: "rgba(126,232,162,0.15)",
    blue: "rgba(88,166,255,0.15)",
    purple: "rgba(210,168,255,0.2)",
  },
};

export const KEYFRAMES = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes gradMove {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const GLOBAL_CSS = `
  ${KEYFRAMES}

  .nav-link {
    cursor: pointer;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    transition: all 0.2s;
    color: ${COLORS.text.muted};
  }
  .nav-link:hover {
    color: ${COLORS.text.primary};
    background: rgba(255,255,255,0.08);
  }
  .nav-link.active {
    color: #e6b6e3;
    background: rgba(126,232,162,0.12);
  }

  .section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 104px;
    width: 100%;
    box-sizing: border-box;
  }

  .quote-card {
    animation: fadeInUp 0.5s ease both;
  }

  .tag {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
  }
`;

// Inline style objects dla komponentów

export const navStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0,
  zIndex: 100,
  background: "rgba(13,17,23,0.88)",
  backdropFilter: "blur(12px)",
  borderBottom: `1px solid ${COLORS.border.default}`,
  padding: "0 24px",
  height: 56,
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
};

export const heroTitleStyle = {
  fontSize: "clamp(32px, 6vw, 64px)",
  fontWeight: 700,
  lineHeight: 1.1,
  margin: "0 0 20px",
  letterSpacing: "-1.5px",
  background: "linear-gradient(135deg, #e6edf3 0%, #b37ec4 50%, #7fb1eb 100%)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradMove 5s ease infinite",
};

export const statCardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${COLORS.border.default}`,
  borderRadius: 16,
  padding: "28px 24px",
  textAlign: "center",
  flex: 1,
  minWidth: 160,
};

export const sectionCardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${COLORS.border.subtle}`,
  borderRadius: 16,
  padding: "28px 24px",
  margin: 50,
  textAlign: "left",
};

export const questionCardStyle = {
  background: "rgba(42, 77, 117, 0.05)",
  border: `1px solid ${COLORS.border.blue}`,
  borderRadius: 12,
  padding: "26px 28px",
};

export const quoteCardStyle = {
  background: "rgba(210,168,255,0.06)",
  border: `1px solid ${COLORS.border.purple}`,
  borderRadius: 20,
  padding: "40px 36px",
  maxWidth: 680,
  marginBottom: 32,
};

export const conclusionCardStyle = {
  display: "flex",
  gap: 24,
  alignItems: "flex-start",
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${COLORS.border.subtle}`,
  borderRadius: 16,
  padding: "24px 28px",
};

export const highlightBoxStyle = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  padding: 24,
  background: "rgba(126,232,162,0.05)",
  border: `1px solid ${COLORS.border.green}`,
  borderRadius: 16,
};

export const teamCardStyle = (color) => ({
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${color}25`,
  borderRadius: 16,
  padding: "24px 22px",
  borderTop: `3px solid ${color}`,
});

export const projectInfoBoxStyle = {
  background: "rgba(126,232,162,0.04)",
  border: `1px solid ${COLORS.border.green}`,
  borderRadius: 16,
  padding: "24px 28px",
};

export const footerStyle = {
  padding: "24px",
  textAlign: "center",
  fontSize: 13,
  color: COLORS.text.hint,
  borderTop: `1px solid rgba(255,255,255,0.06)`,
  background: COLORS.bg.primary,
};