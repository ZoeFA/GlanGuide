import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import '@testing-library/jest-dom';
import axios from 'axios';
import { expect, vi } from 'vitest';

//to help fix Hook error
import { MemoryRouter } from 'react-router-dom';

//test axios
vi.mock('axios');

describe('HomePage Scraper', () => {
  it('updates state with fetched HTML', async () => {
    const dummyResponse = { data: { html: '<p>Test HTML</p>' } };
    axios.post.mockResolvedValue(dummyResponse);

    //to help fix Hook error
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );//

    const input = screen.getByPlaceholderText(/enter a url to check/i);
    const button = screen.getByRole('button', { name: /check/i });

    fireEvent.change(input, { target: { value: 'https://example.com' }});
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('<p>Test HTML</p>')).toBeInTheDocument();
    });

  });
});