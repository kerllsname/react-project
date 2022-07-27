import { HomePageCardData } from './../components/Wrapper/HomePage/HomePage';

export interface CardGlobalContent {
  card: HomePageCardData;
  dispatchCard: (action: { type: string; cardStateData: HomePageCardData }) => void;
}

export const initialStateCard: HomePageCardData = {
  ownername: '',
  url_c: '',
  title: '',
  id: '',
  description: { _content: '' },
  views: '',
};

export const cardReducer = (
  state: HomePageCardData = initialStateCard,
  action: { type: string; cardStateData: HomePageCardData }
) => {
  switch (action.type) {
    case 'save-search-card':
      return action.cardStateData;
    default:
      return state;
  }
};
