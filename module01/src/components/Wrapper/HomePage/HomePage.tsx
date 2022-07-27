import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imagesArray from '../../../images/Images';
import getData from '../../../data/requests/getDataFlckr';
import HomePageCard from './HomePageCard';
import { Store } from '../../../reducers/redusers';

interface DataDescription {
  _content: string;
}

export interface HomePageCardData {
  ownername: string;
  url_c: string;
  title: string;
  id: string;
  description: DataDescription;
  views: string;
}

export default function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state: Store) => state.home);
  const [loading, setLoading] = useState<string>('start');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchInput = useRef<HTMLInputElement>(null);
  const inputPageValue = useRef<HTMLInputElement>(null);
  const numberOfCards = useRef<HTMLSelectElement>(null);
  let sortValue = `${data.sort}`;

  function valueHandler() {
    const savedText = localStorage.getItem('inputText');
    return savedText || '';
  }

  useEffect(() => {
    valueHandler();
    const currentSearchInput = searchInput.current;

    return () => {
      if (currentSearchInput) {
        localStorage.setItem('inputText', currentSearchInput.value);
      }
    };
  });

  // useEffect(() => {
  //   sendRequest();
  //   if (inputPageValue.current) {
  //     inputPageValue.current.value = `${currentPage}`;
  //   }
  // }, [currentPage]);

  async function searchHandler(event: { key: string }) {
    if (event.key === 'Enter') {
      await sendRequest();
    }
  }

  async function sendRequest() {
    const array: Array<HomePageCardData> = [];

    if (searchInput.current && numberOfCards.current) {
      setLoading('loading...');
      const data = await getData(
        searchInput.current.value,
        sortValue,
        currentPage,
        Number(numberOfCards.current.value)
      );

      await data.forEach((element: HomePageCardData) => {
        array.push(element);
      });

      dispatch({
        type: 'save',
        homePageStateData: {
          homePageDataArray: array,
          sort: sortValue,
          page: currentPage,
          cardsCount: Number(numberOfCards.current.value),
        },
      });

      setLoading('start');
    }
  }

  function getNextPage() {
    if (currentPage < 10 && inputPageValue.current) {
      setCurrentPage(currentPage + 1);
      inputPageValue.current.value = `${currentPage}`;
    }
  }

  function getPrevPage() {
    if (currentPage > 1 && inputPageValue.current) {
      setCurrentPage(currentPage - 1);
      inputPageValue.current.value = `${currentPage}`;
    }
  }

  return (
    <main className="main__homepage">
      <div className="homepage__searchbar">
        <span className="searchbar__icon">
          <img src={imagesArray[1]} alt="search" />
        </span>
        <input
          type="search"
          className="searchbar__input"
          defaultValue={valueHandler()}
          onKeyPress={searchHandler}
          placeholder={'search'}
          ref={searchInput}
        />
      </div>
      <div className="homepage__search-sort">
        <div className="search-sort__title">sort by:</div>
        <button
          className="search-sort__button"
          onClick={() => {
            sortValue = 'date-posted-desc';
            sendRequest();
          }}
        >
          date
        </button>
        <button
          className="search-sort__button"
          onClick={() => {
            sortValue = 'interestingness-desc';
            sendRequest();
          }}
        >
          interestingness
        </button>
        <button
          className="search-sort__button"
          onClick={() => {
            sortValue = 'relevance';
            sendRequest();
          }}
        >
          relevance
        </button>
      </div>
      <div className="homepage__search-page">
        <div className="search-page__pagination">
          <button
            onClick={() => {
              getPrevPage();
            }}
          >
            &lt;
          </button>
          <input
            className="search-page__current-page"
            type="number"
            defaultValue={data.page}
            min={1}
            ref={inputPageValue}
            disabled
          />
          <div>/</div>
          <input className="search-page__maximum-page" type="number" defaultValue={10} disabled />
          <button
            onClick={() => {
              getNextPage();
            }}
          >
            &gt;
          </button>
        </div>
        <select
          ref={numberOfCards}
          onChange={() => {
            sendRequest();
          }}
          defaultValue={data.cardsCount}
        >
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>
      </div>
      <div className="homepage__search-results">
        {loading === 'loading...' ? (
          <div>{loading}</div>
        ) : data.homePageDataArray.length > 1 ? (
          data.homePageDataArray.map((item: HomePageCardData) => (
            <HomePageCard data={item} key={item.id} />
          ))
        ) : null}
      </div>
    </main>
  );
}
