import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from './pages/HomePage';
import Grader from './Grader';
import Filter from './Filter';

expect.extend(toHaveNoViolations);

describe('Accessibility checks', () => {
  it('HomePage should have no accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Grader should have no accessibility violations', async () => {
    const cleanHtml = "<img src='image.jpg' alt='Descriptive text about the image' />";
    const { container } = render(<Grader html={cleanHtml} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();

  });

  it('Filter should have no accessibility violations', async () => {
    const { container } = render(<Filter scrapedHtml="<img src='image.jpg' alt='description' />" setHtml={() => {}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
