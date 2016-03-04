var $ = require('jquery');
module.exports = {
    init: function(){
        var self = this;
        this.content = $("#content");
        this.changeButton = $("#changeButton");

        self.changeButton.on('click', function(){
            self.changeContent();
        });
    },
    changeContent: function(){
        this.content.text("This is changed text.");
    }
}