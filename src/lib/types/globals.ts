import { type IconType } from "react-icons";

/*Used in Switch and Toogles*/
export interface SwitchAndTooglesProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

/*Used in TaekwondoInfoSection*/
export interface TaekwondoCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

/*Used in Main Separator to reduce code*/
export type MainSeparatorProps = {
  title: string;
};

export interface CardsGridProps {
  cards: TaekwondoCard[];
}

export interface TechnologyInfo {
  name: string;
  icon: React.ReactNode;
}

export interface TaekwondoHistoryTimeLine {
  year: string;
  description: string;
}

/*Used in Philosopy page - taekwondo meaning code*/

export interface TaekwondoMeaningItem {
  term: string;
  korean: string;
  definition: string;
}

/*Used in Philosopy page - taekwondo values code*/
export interface ValueItem {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}
