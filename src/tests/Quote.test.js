import TestRenderer from 'react-test-renderer';
import Quote from '../components/pages/Quote';

it('Matches Snapshot for Quote component', () => {
    const QuoteShot = TestRenderer
    .create(<Quote />)
    .toJSON();
  expect(QuoteShot).toMatchSnapshot();
}) 