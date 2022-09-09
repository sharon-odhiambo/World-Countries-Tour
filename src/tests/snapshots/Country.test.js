import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Country from '../../components/country/Country';

describe('Countries', () => {
  test('should match Country snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Country />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
