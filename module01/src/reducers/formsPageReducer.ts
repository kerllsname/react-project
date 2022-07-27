import { CardData } from '../components/Wrapper/FormsPage/Forms';

export interface FormsPageGlobalContent {
  formsPageData: Array<CardData>;
  dispatchFormsData: (action: { type: string; formsPageStateData: Array<CardData> }) => void;
}

export const initialStateFormsPage: Array<CardData> = [
  { name: '', date: '', country: '', human: true, sex: '', avatar: null },
];

export const formsPageReducer = (
  state: Array<CardData> = initialStateFormsPage,
  action: { type: string; formsPageStateData: Array<CardData> }
) => {
  switch (action.type) {
    case 'save-cards':
      return action.formsPageStateData;
    default:
      return state;
  }
};
