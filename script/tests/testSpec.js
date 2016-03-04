var indexjs = require('../index.js');
var $ = require('jquery');

describe('indexjs has function ', function(){
    describe('changeContent which', function(){
        it('changes content on the page', function () {
            var newContent = 'This is the new content.';
            indexjs.init();
            expect(indexjs.content.text()).toBe('This is original text.');
            indexjs.changeContent(newContent);
            expect(indexjs.content.text()).toBe(newContent);
        });
    });
});