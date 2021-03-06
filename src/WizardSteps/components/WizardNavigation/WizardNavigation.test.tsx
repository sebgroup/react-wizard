import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  NavigationInterface,
  useNavigationContext,
} from '../../../contexts/navigationContext';
import WizardNavigation, { WizardNavigationProps } from './WizardNavigation';

jest.mock('../../../contexts/navigationContext');

const { defaultNavigationInterface } = global;
const mockedUseNavigationContext = useNavigationContext as jest.Mock<NavigationInterface>;

describe('Component: WizardNavigation', () => {
  const wizardNavigationProps: WizardNavigationProps = {
    label: 'Step 1',
    path: '/step1',
    step: 0,
  };

  function renderWithRouter(
    props?: Partial<WizardNavigationProps>
  ): RenderResult {
    return render(
      <MemoryRouter initialEntries={['/']}>
        <WizardNavigation {...{ ...wizardNavigationProps, ...props }} />
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    mockedUseNavigationContext.mockImplementation(
      () => defaultNavigationInterface
    );
  });

  it('Should render correctly', () => {
    renderWithRouter();
    expect(screen.getByText(wizardNavigationProps.label)).toBeInTheDocument();
  });

  it('Should render active state', () => {
    const { container } = renderWithRouter();
    expect(
      container.querySelector('.wizard-navigation--active')
    ).toBeInTheDocument();
  });

  it('Should render completed state', () => {
    mockedUseNavigationContext.mockImplementation(() => ({
      ...defaultNavigationInterface,
      activeStep: 1,
    }));
    const { container } = renderWithRouter();
    expect(
      container.querySelector('.wizard-navigation--passed')
    ).toBeInTheDocument();
  });

  it('Should render disabled state', () => {
    const { container } = renderWithRouter({ disabled: true });
    expect(
      container.querySelector('.wizard-navigation--disabled')
    ).toBeInTheDocument();
  });

  it('Should render invalid state', () => {
    mockedUseNavigationContext.mockImplementation(() => ({
      ...defaultNavigationInterface,
      isNavigableStep: jest.fn().mockReturnValueOnce(false),
    }));
    const { container } = renderWithRouter();
    expect(
      container.querySelector('.wizard-navigation--disabled')
    ).toBeInTheDocument();
  });

  it('Should render danger state', () => {
    const { container } = renderWithRouter({ state: 'danger' });
    expect(
      container.querySelector('.wizard-navigation--danger')
    ).toBeInTheDocument();
  });

  it('Should render info state', () => {
    const { container } = renderWithRouter({ state: 'info' });
    expect(
      container.querySelector('.wizard-navigation--info')
    ).toBeInTheDocument();
  });

  it('Should render warning state', () => {
    const { container } = renderWithRouter({ state: 'warning' });
    expect(
      container.querySelector('.wizard-navigation--warning')
    ).toBeInTheDocument();
  });

  it('Should render success state', () => {
    const { container } = renderWithRouter({ state: 'success' });
    expect(
      container.querySelector('.wizard-navigation--success')
    ).toBeInTheDocument();
  });

  it('Should render navigation context active state', () => {
    mockedUseNavigationContext.mockImplementation(() => ({
      ...defaultNavigationInterface,
      activeState: 'danger',
    }));
    const { container } = renderWithRouter();
    expect(
      container.querySelector('.wizard-navigation--danger')
    ).toBeInTheDocument();
  });

  it('Should trigger navigation click handler when provided', () => {
    const mockedOnClick = jest.fn();
    renderWithRouter({ onClick: mockedOnClick });
    expect(mockedOnClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText(wizardNavigationProps.label));
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
});
