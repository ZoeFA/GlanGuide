import { render, screen } from '@testing-library/react';
import Grader from './Grader';
import '@testing-library/jest-dom';
import { expect } from 'vitest';

describe('Grader Component', () => {
  it('displays errors and warnings from dummy HTML', () => {
    const dummyHTML = `
      <img src="image.jpg">
      <input type="text">
      <a href="#">Click here</a>
      <button>Submit</button>
    `;

    render (<Grader html ={dummyHTML} />);

    const messages = [
      /Image missing alt text/i,
      /Link text is too vague/i,
      /Input field missing ARIA attribute/i,
      /Button is missing an ARIA attribute/i,
      /Accessibility Grade:/i
    ];
    
    messages.forEach(message => {
      expect(screen.getAllByText(message).length).toBeGreaterThan(0);
    });
  });
});