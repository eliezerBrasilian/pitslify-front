export interface CabecalhoContextInterface {
  removeVisibility: () => void;
  activateVisibility: () => void;
  isVisible: boolean;
  currentNav: string;
  updateCurrentNav: (newNav: string) => void;
}
