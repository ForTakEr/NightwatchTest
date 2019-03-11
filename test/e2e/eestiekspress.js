var config = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['eestiEkspress'],
  'Eesti Ekspress test': function(browser) {
    browser
    .resizeWindow(1920, 1080)
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .assert.title('Eesti Ekspress')
      .click('#top-news')
      .pause(150)
      .waitForElementVisible('div[class="article__info"]')
      .pause(150)
      .end();
  }
};