import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import CountryItem from '../../components/countryitem/CountryItem';

describe('CountryItem', () => {
  test('should match CountryItem snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <CountryItem />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
