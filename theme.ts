import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--dear-diary-brand': '#F7AB0A',
  '--my-red': '#DB4437',
  '--my-yellow': '#F4B400',
  '--my-green': '#0F9D58',
};

export const myTheme = buildLegacyTheme({
  /* Base Theme Colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--dear-diary-brand'],

  /* Default Button */
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--dear-diary-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State Info */
  '--state-info-color': props['--dear-diary-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--dear-diary-brand'],
});
