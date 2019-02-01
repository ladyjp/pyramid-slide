function drawPyramid() {

    var height = document.getElementById("slide").value;
    var symbol = document.getElementsByName("brickType")[0].value;

    //console.log(height);
    //console.log(symbol);

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++)
        {
            var numBricks = row + 2;
            var numSpaces = height - row - 1;
            var rowStr = "";

            for (var i = 0; i < numSpaces; i++) {
            rowStr += "&nbsp;";
        }
    for (var i = 0; i < numBricks; i++) {
            rowStr += symbol  ; //  += appends to what is already there
        }
        //console.log(rowStr);

        // make a <p> element for this row, and insert it into the #pyramid area
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);

        document.getElementById("pyramidHeight").innerHTML = height;
}
}
