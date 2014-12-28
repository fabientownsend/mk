var test = {}
test.util.lol 
var parser = {
    markdown: empty,
    html: empty,
    // parser.setMarkdown(text);
    setMarkdown: function(text) {
        if (typeof text !== 'string') {
            throw {
                name: 'TypeError',
                message: 'setMarkdown needs a string'
            };
        }
        this.markdown = text;
    },
    // parser.convertToHtml();
    convertToHtml: function() {
    },
    // parser.getHtml();
    getHtml: function() {
        return html;
    }
};
