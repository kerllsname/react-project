import { HomePageCardData } from '../components/Wrapper/HomePage/HomePage';
import getData from '../data/requests/getDataFlckr';

export interface HomePageInitialData {
  homePageDataArray: Array<HomePageCardData>;
  sort: string;
  page: number;
  cardsCount: number;
}

export interface RequestParams {
  searchValue: string;
  sortValue: string;
  currentPage: number;
  numberOfCards: number;
}

export interface HomePageGlobalContent {
  homePageData: HomePageInitialData;
  dispatchSearchData: (action: { type: string; homePageStateData: HomePageInitialData }) => void;
}

export const initialStateHomePage: HomePageInitialData = {
  homePageDataArray: [
    {
      ownername: '',
      url_c: '',
      title: '',
      id: '',
      description: { _content: '' },
      views: '',
    },
  ],
  sort: 'interestingness-desc',
  page: 1,
  cardsCount: 20,
};

export const homePageReducer = (
  state: HomePageInitialData = initialStateHomePage,
  action: { type: string; homePageStateData: HomePageInitialData; requestParams: RequestParams }
) => {
  switch (action.type) {
    case 'save':
      // const data = await getData(
      //   action.requestParams.searchValue,
      //   action.requestParams.sortValue,
      //   action.requestParams.currentPage,
      //   action.requestParams.numberOfCards
      // );

      // action.homePageStateData.homePageDataArray = data;
      // return action.homePageStateData.homePageDataArray;
      return action.homePageStateData;
    default:
      return state;
  }
};
