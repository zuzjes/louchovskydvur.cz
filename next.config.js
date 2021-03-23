module.exports = {
  exportTrailingSlash: true
};

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withCSS = require("@zeit/next-css");
module.exports = withCSS(module.exports);

const withSass = require("@zeit/next-sass");
module.exports = withSass(module.exports);
