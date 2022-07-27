import { rest } from 'msw';

const adress = 'https://www.flickr.com/services/rest/';
const apiKey = '8b3fde14b7037cfff14faeb1285bc143';
const searchText = 'London';

export const handler = [
  rest.get(
    `${adress}?api_key=${apiKey}&text=${searchText}&orientation=landscape&sort=interestingness-desc&method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_c,owner_name,description,views&per_page=20&content_type=1&safe_search=1&media=photos`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([{ ownername: 'talv_ss' }]));
    }
  ),
];
