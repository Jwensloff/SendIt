export type ResortData = {
  id: string;
  name: string;
  href: string;
  ll: number[]; // Adjust type to number[]
  timestamp: {
    lifts: number;
    opening: number;
    weather: number;
    webcams: number;
    deals: number;
  };
  lifts: {
    status: Record<string, string>;
    stats: {
      open: number;
      hold: number;
      scheduled: number;
      closed: number;
      percentage: {
        open: number;
        hold: number;
        scheduled: number;
        closed: number;
      };
    };
  };
  weather: {
    date: string;
    icon: string[];
    text: string;
    conditions: string;
    temperature: {
      max: number;
    };
    notice: {
      href: string;
      img: string;
      width: number;
      site: string;
    };
  };
  webcams: {
    name: string;
    source: string;
    image: string;
    notice: string;
  }[];
  open: boolean;
};
