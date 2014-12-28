
// render display
var roundJob = function() {
    var myElement = document.querySelector("#myTextarea");
    var myTextArea = document.querySelector("#firstChild");
    var myElementParsed = document.querySelector("#secondDiv");
    var myButton = document.querySelector(".round");

    if(myElement.style.width == "50%") {
        myButton.style.right = "7.7%";
        myElement.style.width = "90%";
        myTextArea.style.width = "90%";
        myElementParsed.style.width = "10%";
    } else {
        myButton.style.right = "48%";
        myElement.style.width = "50%";
        myTextArea.style.width = "50%";
        myElementParsed.style.width = "50%";
    }
}

// Markdown parser
var getText = function() {

    var x = document
        .getElementById("myTextarea").value;

    function setTitle(match) {
        return "<h1>" + match.slice(1, match.length - 1) + "</h1>";
    }
    function setItalic(match) {
        var text = match.replace(/\*/g, "");
        return "<i>" + text + "</i>";
    }
    function setBold(match) {
        var text = match.replace(/\*/g, "");
        return "<strong>" + text + "</strong>";
    }
    function setList(match) {
        var text = match.replace(/^\*\s(.*)\n$/, "<li>" + match.slice(2, match.length - 1) + "</li>");
        return text;
    }
    function setUl(match) {
        return "<ul>" + match + "</ul>";
    }

    x = x.replace(/#{1}(.*)\n/g, setTitle); // Title
    x = x.replace(/\s\*{2}[^\s]([^\*]*)[^\s]\*{2}\s/g, setBold); // Bold
    x = x.replace(/\s\*{1}[^\s]([^\*]*)[^\s]\*{1}\s/g, setItalic); // Italic
    x = x.replace(/\*\s(.*)\n/g, setList); // li
    x = x. replace(/(\<li\>.*\<\/li\>)+/g, setUl);

    //x = x.replace(/\n/g, "\\n");
    //x = x.replace(/\s/g, "\\s");

    document.getElementById("parsedTest")
        .innerHTML = "";
    document.getElementById("parsedTest")
        .innerHTML = x;
};

// Markdown and HTML saves

var currentFile = '';

var openFile = function() {
    // TODO
};
var saveAs = function() {
    var fs = require('fs');
    var markdownArticle = document.querySelector("#myTextarea").value;
    
    var chooser = document.querySelector('#selectFile');
    currentFile = chooser.value;
    fs.writeFile(chooser.value, markdownArticle, function (err) {
        if (err) throw err;
        alert('It\'s saved!');
    });
};
var save = function() {
    if (currentFile === '') {
        return;
    } else {
        var fs = require('fs');
        var markdownArticle = document.querySelector("#myTextarea").value;
        
        fs.writeFile(currentFile, markdownArticle, function (err) {
            if (err) throw err;
            alert('It\'s saved!');
        });
    }
}

// save data
// https://github.com/rogerwang/node-webkit/wiki/File-dialogs
var saveMarkdown = function() {
    var fs = require('fs');
    var markdownArticle = document.querySelector("#myTextarea").value;
    
    var chooser = document.querySelector('#selectFile');
    fs.writeFile(chooser.value, markdownArticle, function (err) {
        if (err) throw err;
        alert('It\'s saved!');
    });

};

/*
var chooser = document.querySelector('#selectFile');
chooser.addEventListener("change", function(evt) {
        fs.writeFile(this.value, markdownArticle, function (err) {
            if (err) throw err;
            alert('It\'s saved!');
        });
    });
}, false);
*/

var saveHtml = function() {
    var fs = require('fs');
    var htmlArticle = document.querySelector("#secondDiv").value;
    
    // TODO
    // we have to verify if the file exist
    // if not, create it then save.
    fs.writeFile('save/article.html', htmlArticle, function (err) {
        if (err) throw err;
        alert('It\'s saved!');
    });
}
