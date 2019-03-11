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
      .saveScreenshot(`${config.imgpath(browser)}top.png`)
      .pause(1000)
      .end();
  },
  'Eesti Ekspress search': function(browser) {
    browser
    .resizeWindow(1920, 1080)
      .url('https://ekspress.delfi.ee/')
      .waitForElementVisible('body')
      .assert.title('Eesti Ekspress')
      .setValue('.header-search__input', ['veerpalu', browser.Keys.ENTER])
      .pause(1200)
      .saveScreenshot(`${config.imgpath(browser)}search.png`)
      .pause(1000)
      .click('.headline')
      .pause(1000)
      .end();
  }
};