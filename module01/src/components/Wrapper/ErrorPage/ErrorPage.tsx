import imagesArray from '../../../images/Images';

export default function ErrorPage() {
  return (
    <main className="main__error">
      <div className="error__image">
        <img src={imagesArray[0]} alt="error" />
      </div>
    </main>
  );
}
