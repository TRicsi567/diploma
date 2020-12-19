const TutorialData = {
  id: 1,
  name: 'Változók',
  description:
    'Egy programozó szerszámosládájának alapvető eszköze. Szó lesz a különböző változótípusokról és azoknak tulajdonságairól',
  slides: [
    [
      {
        text: 'slide1-step1',
      },
      {
        text: 'slide1-step2',
      },
    ],
    [
      {
        text: 'slide2-step1',
      },
      {
        text: 'slide2-step2',
      },
      { code: 'slide2-step3-code;' },
    ],
  ],
  exercise: {
    id: 1,
    question:
      'Írj egy olyan programot ami eltárolja (12 / 14.23) * 32.1 + 12 pontos végeredményét egy változóba majd kiírja az a standard outputra (cout)',
    solution: '39.0696',
    name: 'Változók',
    description: 'Gondoljunk a lebegőpontos ábrázolásra',
    quizzes: {
      '01b790cd-727f-471f-82d4-00f8718ff63a': {
        question: 'Al alábbiak közül melyik érvényes változónév?',
        options: {
          '1egyalmafa': false,
          int12: true,
          _valtozo: true,
          do: false,
          var: true,
          $foobar: true,
        },
      },
      '6e87181f-23e3-425b-9cef-06f4cecf3225': {
        question: 'Az alábbiak közül melyek a helyes deklarációk?',
        options: {
          'const int almafa;': false,
          'const int almafa=12;': true,
          'const int var1, var2 = 12;': false,
          'int var1, var2;': true,
        },
      },
      'e290ef19-b727-483c-ae64-b048afad7d78': {
        question: 'int var1, var2 = 15; esetén mi lesz var1 értéke?',
        options: { 15: false, 'nem definiált': true },
      },
    },
  },
};

export default TutorialData;
