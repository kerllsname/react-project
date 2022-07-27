import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../../reducers/redusers';

export default function PopUp() {
  const data = useSelector((state: Store) => state.card);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.url_c) {
      navigate('/');
    }
  });

  return (
    <div className="homepage__search-card">
      <div className="popup-card">
        <div className="popup-card__img">
          <img src={data.url_c} alt="" />
        </div>
        <div className="popup-card__img-description">
          <div className="popup-card__title-author">
            <div className="popup-card__title-close">
              <div className="popup-card__title">
                <b>{data.title}</b>
              </div>
            </div>
            <div className="popup-card__author">
              by <i>{data.ownername}</i>
            </div>
          </div>
          <div className="popup-card__description">
            {data.description._content || <i>{'no description'}</i>}
          </div>
          <div className="popup-card__views">views: {data.views}</div>
        </div>
      </div>
      <div className="popup-card__go_back">
        <button
          className="go_back"
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </button>
      </div>
    </div>
  );
}
