import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import '@testing-library/jest-dom';

describe('Filter Component', () => {
  it('triggers filtering logic when filter option is selected and button clicked', () => {
    const dummyHtml = `
      <div><img src="image.jpg" alt="Sample image" /></div>
      <div><a href="https://example.com">Example link</a></div>
    `;

    const setHtmlMock = vi.fn();

    render(<Filter scrapedHtml={dummyHtml} setHtml={setHtmlMock} />);

    const selectElement = screen.getByLabelText(/Select which element to filter by/i);
    const filterButton = screen.getByRole('button', { name: /apply filter/i });

    fireEvent.change(selectElement, { target: { value: 'img' } });
    fireEvent.click(filterButton);

    expect(setHtmlMock).toHaveBeenCalled();
    expect(setHtmlMock.mock.calls[0][0]).toContain('<img');
  });
});
