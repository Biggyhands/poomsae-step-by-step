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
