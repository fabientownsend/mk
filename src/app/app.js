// UI
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

var fs = require('fs');
var app = {};

// This is where session variable are stored.
app.session = {
    path: '',
    data: ''
};

//
// File Functions.
//
app.file = {};

// Input:
// Output:
// Result:
// Notes:
app.file.open = function() {
    app.session.path = document.querySelector('#openFile').value;
    var target = document.querySelector('#myTextarea');

    fs.readFile(app.session.path, {encoding: 'utf-8'}, function(err, content) {
        if (err) {
            alert(err);
        }
        app.session.data = content;
        target.textContent = content;
    });
};

// Input:
// Output:
// Result:
// Notes:
app.file.saveAs = function() {
    app.session.data = document.querySelector("#myTextarea").value;
    app.session.path = document.querySelector('#selectFile').value;

    fs.writeFile(app.session.path, app.session.data, function (err) {
        if (err) {
            throw err;
        }
        alert('It\'s saved!');
    });
};

// Input:
// Output:
// Result:
// Notes:
app.file.save = function() {
    if (app.session.path === '') {
        return;
    } else {
        app.session.data = document.querySelector("#myTextarea").value;
        fs.writeFile(app.session.path, app.session.data, function (err) {
            if (err) {
                throw err;
            }
            alert('It\'s saved!');
        });
    }
};
