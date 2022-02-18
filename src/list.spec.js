/**
 * @jest-environment jsdom
 */
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render} from '@testing-library/svelte'

import List from './list.svelte'

describe('list', () => {
  
  it('shows content as paragraph if it is a string', () => {
    const {getByTestId} = render(List, {content: 'the line'})
    
    const p = getByTestId('singleContentParagraph')
    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent('the line');
  })
  
  it('shows content as list if it is an array', () => {
    const lines = ['first line', 'second line', 'third line']
    const {getByText, getByTestId} = render(List, {content: lines})
    
    const p = getByTestId('listContentParagraph')
    expect(p).toBeInTheDocument();
    lines.map(getByText).map(
      (li) => expect(p).toContainElement(li)
      );
    })
  });
    