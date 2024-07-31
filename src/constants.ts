export const COLOR = {
  GRAY100: "#f1f5f9",
  GRAY200: "#e5e5e5",
  GRAY300: "#cbd5e1",
  GRAY500: "#64748b",
  GRAY600: "#475569",
  DENGER_DEFAULT: "#dc2626",
  CAUTION_DEFAULT: "#facc15",
};
export const SPACING = {
  PX1: "1px",
  PX4: "4px",
  PX8: "8px",
  PX12: "12px",
  PX20: "20px",
  PX32: "32px",
  PX52: "52px",
  PX84: "84px",
  PX100: "100px",
  PX136: "136px",
};
export const FONT_SIZE = {
  PX10: "10px",
  PX12: "12px",
  PX13: "13px",
  PX14: "14px",
  PX16: "16px",
  PX20: "20px",
  PX24: "24px",
  PX36: "36px",
};

export const TIMELINE_ICONS = {
  home: "carbon:home",
  event: "carbon:group-presentation",
  career: "carbon:building",
  writing: "carbon:pen-fountain",
  development: "carbon:code",
};

type TimelineType = {
  slug: string;
  title: string;
  icon: "home" | "event" | "career" | "writing" | "development";
}[];

export const TIMELINE_TYPES: TimelineType = [
  {
    slug: "event",
    title: "イベント・登壇",
    icon: "event",
  },
  {
    slug: "career",
    title: "キャリア",
    icon: "career",
  },
  {
    slug: "writing",
    title: "書いたもの",
    icon: "writing",
  },
  {
    slug: "development",
    title: "作ったもの",
    icon: "development",
  },
];
export const SNS_LINKS = {
  x: "https://x.com/uchoco898",
  github: "https://github.com/yuto343",
};

export const COMPONENT_SIZE = {
  HEADER_HEIGHT: 56,
};
