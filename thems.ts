import { buildLegacyTheme } from "sanity";

const props = {
    "--white": "#efefef",
    "--black": "#101112",
    "--blue": "#189ab4",
    "--red": "#db4437",
    "--yellow": "#f4b400",
    "--green": "#0f0d58",
}

export const myTheme = buildLegacyTheme({
    // /* Base theme colors */
    // "--black": props["--black"],
    // "--white": props["--white"],
    // "--gray": "#666",
    // "--gray-base": "#666",
    // "--component-bg": props["--black"], "--component-text-color": props["--white"],
    // /* Brand */
    // "--brand-primary": props["--brand"],
    // // Default button
    // "--default-button-color": "#666",
    // "--default-button-primary-color": props["--brand"], "--default-button-success-color": props["--green"],
    // "--default-button-warning-color": props["--yellow"], "--default-button-danger-color": props["--red"],
    // /* State */
    // "--state-info-color": props["--brand"],
    // "--state-success-color": props["--green"],
    // "--state-warning-color": props["--yellow"],
    // "--state-danger-color": props["--red"],
    // /* Navbar */
    // "--main-navigation-color": props["--black"],
    // "--main-navigation-color--inverted": props["--white"],
    // "--focus-color": props["--brand"],

    
    /* Base theme colors */
    '--black': props['--black'],
    '--white': props['--white'],

    '--gray': '#666',
    '--gray-base': '#666',

    '--component-bg': props['--white'],
    '--component-text-color': props['--black'],

    /* Brand */
    '--brand-primary': props['--blue'],

    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--blue'],
    '--default-button-success-color': props['--green'],
    '--default-button-warning-color': props['--yellow'],
    '--default-button-danger-color': props['--red'],

    /* State */
    '--state-info-color': props['--blue'],
    '--state-success-color': props['--green'],
    '--state-warning-color': props['--yellow'],
    '--state-danger-color': props['--red'],

    /* Navbar */
    '--main-navigation-color': props['--white'],
    '--main-navigation-color--inverted': props['--black'],

    '--focus-color': props['--blue'],
});