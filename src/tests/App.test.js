import React from 'react';
import { render } from '@testing-library/react';
import EntryPoint from '../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<EntryPoint />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
