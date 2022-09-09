import listReducer, { initialState } from '../../redux/lists/Lists';

describe('lists reducer', () => {
  test('should return the initial state', () => {
    expect(listReducer(undefined, {})).toEqual(initialState);
  });
  test('should fetch countrieslist', () => {
    const action = {
      type: 'components/lists/GET_COUNTRIES/fulfilled',
      payload: [
        {
          id: 1,
          name: 'kenya',
        },
        {
          id: 2,
          name: 'angolla',
        },
        {
          id: 3,
          name: 'lesotho',
        },
      ],
    };
    expect(listReducer(initialState, action)).toEqual([
    //   {
    //     id: 1,
    //     name: 'kenya',
    //   },
    //   {
    //     id: 2,
    //     name: 'angolla',
    //   },
    //   {
    //     id: 3,
    //     name: 'lesotho',
    //   },
    ]);
  });
});
