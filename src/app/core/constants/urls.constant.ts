export const UrlsConstant = {

  api: (function () {

    if (window.location.href.match(/localhost:9500/)) {
      return 'https://localhost:9500/api/';
    }
    else {
      return 'https://um.rest38.ru/api/';
    }

  })()
};
