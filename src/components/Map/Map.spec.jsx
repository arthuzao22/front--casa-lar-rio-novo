import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Map } from './Map';

describe('Map Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Map />);
    expect(container).toBeDefined();
  });

  it('should display the correct text', () => {
    const { getAllByText } = render(<Map />);
    expect(getAllByText('Map').length).toBeGreaterThan(0);
  });
});