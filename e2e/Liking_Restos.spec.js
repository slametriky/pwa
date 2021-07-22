const assert = require('assert');
Feature('Liking and Unlike Restos');

   
Scenario('liking one resto', async ({ I }) => {   
    I.amOnPage('/');
   
    I.seeElement('.resto__title a');

    const firstResto = locate('.resto__title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);
   
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.resto-item');

    const likedRestoTitle = await I.grabTextFrom('.resto__title');
 
    assert.strictEqual(firstRestoTitle, likedRestoTitle);

});

Scenario('unliking one resto', ({ I }) => {  
    I.amOnPage('/');
  
    I.seeElement('.resto__title a');
    I.click(locate('.resto__title a').first());
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.seeElement('.resto__title a');
    I.click(locate('.resto__title a').first());
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
});