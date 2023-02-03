export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const pageview = () => {
  window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
