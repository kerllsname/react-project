import { CardData } from './Forms';

export default function FormCard(props: { data: CardData }) {
  let img, sex, human;

  if (props.data.avatar) {
    img = URL.createObjectURL(props.data.avatar[0]);
  }

  if (props.data.human) {
    human = 'true';
  }

  if (props.data.sex) {
    sex = 'man';
  } else {
    sex = 'woman';
  }

  return (
    <div className="form-card">
      <div className="form-card__picture">
        <img src={img} alt="card-img" />
      </div>
      <div className="form-card__name">name: {props.data.name}</div>
      <div className="form-card__date">date: {props.data.date}</div>
      <div className="form-card__sex">sex: {sex}</div>
      <div className="form-card__is-human">human: {human}</div>
      <div className="form-card__country">country: {props.data.country}</div>
    </div>
  );
}
