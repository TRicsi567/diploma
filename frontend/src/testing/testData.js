const AppData = {
  tutorials: {
    easy: [
      {
        id: 6,
        status: 'published',
        name: 'Változók',
        difficulty: 'easy',
        icon: null,
        description:
          'Egy programozó szerszámosládájának alapvető eszköze. Szó lesz a különböző változótípusokról és azoknak tulajdonságairól',
        url_alias: 'valtozok',
      },
    ],
    intermediate: [
      {
        id: 7,
        status: 'published',
        name: 'Pointerek',
        difficulty: 'intermediate',
        icon: 3,
        description:
          'Sok programozót rettegésben tartó szó, de nem kell félni egyáltalán nem bonyolultak. Engedd meg hogy megmutassuk.',
        url_alias: 'pointerek',
        image: {
          src:
            'http://localhost:8080/uploads/_/originals/0f8e8e55-faa4-4ed2-afc2-ccd50139a1f5.jpg',
          thumbnails: {
            'small-crop':
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=directus-small-crop',
            'small-contain':
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=directus-small-contain',
            'medium-crop':
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=directus-medium-crop',
            'medium-contain':
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=directus-medium-contain',
            'large-crop':
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=directus-large-crop',
            'large-contain':
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=directus-large-contain',
            thumbnail:
              'http://localhost:8080/C++/assets/t9pksz8yc1wk4c0w?key=thumbnail',
          },
        },
      },
    ],
    professional: [],
  },
  homePage: 'mock home page',
  loading: false,
  usefulLinks: {
    link1: 'http://link1.com',
    link2: 'http://link2.com',
  },
};
export default AppData;
