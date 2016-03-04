var $ = require('jquery');
module.exports = {
    init: function(){
        var self = this;
        this.content = $("#content");
        this.changeButton = $("#changeButton");

        self.changeButton.on('click', function(){
            self.changeContent("This is changed text.");
        });
    },
    changeContent: function(newContent){
        this.content.text(newContent);
    }
}