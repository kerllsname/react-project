export default async function getData(
  searchText: string,
  sort: string,
  page: number,
  numberOfCards: number
) {
  const adress = 'https://www.flickr.com/services/rest/';
  const apiKey = '8b3fde14b7037cfff14faeb1285bc143';
  const url = `${adress}?api_key=${apiKey}&text=${searchText}&orientation=landscape&sort=${sort}&method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_c,owner_name,description,views&per_page=${numberOfCards}&content_type=1&safe_search=1&media=photos&page=${page}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.photos.photo);
}
