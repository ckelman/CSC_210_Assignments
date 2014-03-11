// Web Programming Step by Step
// ASCII Art String Maker JS file

window.onload = function() {
    document.getElementById("convert").onclick = updateText;
};

// Sets the right area text to be an encoded string.
function updateText() {
    var inputArea = document.getElementById("displayarea");
    var outputArea = document.getElementById("alert");
    outputArea.value = makeString(inputArea.value);
}

// Converts the given String into a Javascript String literal.
function makeString(text) {
    text = text.replace("\r", "");
    var lines = text.split(/\n/);

    // trim any trailing blank lines
    while (lines.length > 0 && lines[lines.length - 1] == "") {
        lines.pop();
    }
    
    var newText = "";
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/\\/gi, "\\\\");
        lines[i] = lines[i].replace(/\"/gi, "\\\"");
        lines[i] = lines[i].replace(/\'/gi, "\\\'");
        // lines[i] = lines[i].replace(/\&/gi, "\\&");
        lines[i] = lines[i].replace(/\t/gi, "\\t");
        lines[i] = "\"" + lines[i] + "\\n\"";
    }
    return lines.join(" + \n") + ";";
}
