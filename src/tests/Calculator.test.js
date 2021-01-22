import TestRenderer from 'react-test-renderer';
import Calculator from '../components/pages/Calculator';

it('Snapshot test for Calculator component', () => {
    const CalculatorShot = TestRenderer
    .create(<Calculator />)
    .toJSON();
  expect(CalculatorShot).toMatchSnapshot();
}) 