import { CardData } from './CardsPage';

export default function Card(props: { data: CardData }) {
  return (
    <div className="cards-block__card">
      <div className="cards-block__img">
        <img src={props.data.image} alt="Mads Mikkelsen" />
      </div>
      <div className="cards-block__title">{props.data.name}</div>
      <div className="cards-block__description">{props.data.text}</div>
    </div>
  );
}
