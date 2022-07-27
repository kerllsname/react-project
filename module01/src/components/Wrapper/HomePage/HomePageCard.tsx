import { HomePageCardData } from '../HomePage/HomePage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function HomePageCard(props: { data: HomePageCardData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function openCard() {
    dispatch({ type: 'save-search-card', cardStateData: props.data });
    navigate('/card');
  }
  return (
    <div className="search-results___card" onClick={openCard}>
      <div className="search-card__img">
        <img src={props.data.url_c} alt="" />
      </div>
      <div className="search-card__description">
        <div className="search-card__title">{props.data.title}</div>
        <div className="search-card__name">by {props.data.ownername}</div>
      </div>
    </div>
  );
}
