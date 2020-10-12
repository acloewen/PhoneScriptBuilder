function opensubmenu(btnid, submnuid, conatinerdivid) {
    var testDiv = document.getElementById(btnid);
    var myEl = document.getElementById(submnuid);
    var containerdiv = document.getElementById(conatinerdivid);
    var scrollTop = containerdiv.scrollTop;

    myEl.style.top = (testDiv.offsetTop - scrollTop) + 13 + "px";
    myEl.style.left = testDiv.offsetLeft + "px";
}

function opensubmenuintable(btnid, submnuid, conatinerdivid) {
    var testDiv = document.getElementById(btnid);
    var myEl = document.getElementById(submnuid);
    var containerdiv = document.getElementById(conatinerdivid);
    var scrollTop = containerdiv.scrollTop;

    var x;
    var y = testDiv.offsetTop;

    x = testDiv.offsetParent.offsetParent.offsetLeft + testDiv.offsetParent.offsetLeft;
    y = y + testDiv.offsetParent.offsetTop + testDiv.offsetParent.offsetParent.offsetTop;
    if (btnid.startsWith('condresultbtn') || btnid.startsWith('condselectbtn')) {
        x = x + 6;
    }

    myEl.style.top = (y - scrollTop) + 13 + "px";
    myEl.style.left = x + "px";
}

function DataCollectionRequiredAlert() {
    alert("Answer required to continue.");
}

function saveAsFile(filename, bytesBase64) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/octet-stream;base64," + bytesBase64;
    document.body.appendChild(link); // Needed for Firefox
    link.click();
    document.body.removeChild(link);
}

function NoSpacesAllowedAlert() {
    alert("No spaces are allowed for Variable Names");
}

function NoDuplicatesAllowedAlert() {
    alert("There is already a variable defined with that name. Please use a different variable name.");
}

function Variablecantbeblank() {
    alert("Variable name cannot be blank.");
}

function CantchangevariableAlert(panel_number, navigation_title) {
    alert("This variable is used in a branching for panel: " + panel_number + " For the navigation: " + navigation_title + ". If you need to change the variable name first delete the branching condition that is using it.");
}

function MustChooseAllValuesAlert() {
    alert("You must select a value for all database variables to test out the script.");
}

function CantdeletevariableAlert(panel_number, navigation_title) {
    alert("This variable is used in a branching for panel: " + panel_number + " For the navigation: " + navigation_title + ". If you need to delete the variable name first delete the branching condition that is using it.");
}