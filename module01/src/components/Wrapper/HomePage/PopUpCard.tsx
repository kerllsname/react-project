import { HomePageCardData } from '../HomePage/HomePage';

export default function PopUpCard(props: { data: HomePageCardData }) {
  return (
    <div className="popup-card">
      <div className="popup-card__img">
        <img src={props.data.url_c} alt="" />
      </div>
      <div className="popup-card__img-description">
        <div className="popup-card__title-author">
          <div className="popup-card__title-close">
            <div className="popup-card__title">
              <b>{props.data.title}</b>
            </div>
          </div>
          <div className="popup-card__author">
            by <i>{props.data.ownername}</i>
          </div>
        </div>
        <div className="popup-card__description">
          {props.data.description._content || <i>{'no description'}</i>}
        </div>
        <div className="popup-card__views">views: {props.data.views}</div>
      </div>
    </div>
  );
}
