import ErrorRepository from '../app';

test('check error found', () => {
  const error = new ErrorRepository(404, 'Страница не найдена');
  const recieved = error.translate(404);
  const expected = 'Страница не найдена'
  expect(recieved).toEqual(expected);
});

test('check error not found', () => {
  const error = new ErrorRepository(404, 'Страница не найдена');
  const recieved = error.translate(401);
  const expected = 'Unknown error'
  expect(recieved).toEqual(expected);
});

