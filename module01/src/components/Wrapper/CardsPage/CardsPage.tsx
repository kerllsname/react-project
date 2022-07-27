import cardsPageData from '../../../data/cardsPageData';
import Card from './Card';

export interface CardData {
  name: string;
  text: string;
  image: string;
}

export default function CardsPage() {
  return (
    <main className="main__cardspage">
      <div className="cardspage__cards-block">
        {cardsPageData.map((data: CardData) => (
          <Card data={data} key={data.name} />
        ))}
      </div>
    </main>
  );
}
