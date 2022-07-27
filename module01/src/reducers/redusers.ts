import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { CardData } from '../components/Wrapper/FormsPage/Forms';
import { HomePageCardData } from '../components/Wrapper/HomePage/HomePage';
import { cardReducer } from './cardReducer';
import { formsPageReducer } from './formsPageReducer';
import { HomePageInitialData, homePageReducer } from './homePageReducer';

export interface Store {
  home: HomePageInitialData;
  forms: Array<CardData>;
  card: HomePageCardData;
}

const rootReducer = combineReducers({
  home: homePageReducer,
  forms: formsPageReducer,
  card: cardReducer,
});

const middleware = getDefaultMiddleware({
  thunk: true,
});

export const store = configureStore({ reducer: rootReducer, middleware });
