import { buildLegacyTheme } from "sanity";

const props = {
    "--white": "#fff",
    "--black": "#a1a1a1",
    "--brand": "#f4b400",
    "--red": "#db4437",
    "--yellow": "#f4b400",
    "--green": "#0f0d58",
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--black"],
    "--white": props["--white"],
    "--gray": "#666",
    "--gray-base": "#666",
    "--component-bg": props["--black"], "--component-text-color": props["--white"],
    /* Brand */
    "--brand-primary": props["--brand"],
    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--brand"], "--default-button-success-color": props["--green"],
    "--default-button-warning-color": props["--yellow"], "--default-button-danger-color": props["--red"],
    /* State */
    "--state-info-color": props["--brand"],
    "--state-success-color": props["--green"],
    "--state-warning-color": props["--yellow"],
    "--state-danger-color": props["--red"],
    /* Navbar */
    "--main-navigation-color": props["--black"],
    "--main-navigation-color--inverted": props["--white"],
    "--focus-color": props["--brand"],
});