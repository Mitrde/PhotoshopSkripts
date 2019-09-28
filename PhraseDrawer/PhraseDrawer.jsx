const charsInLine = 18; //change number of digits in line
const letterH = 8; //digit height
const letterW = 6; //digit width



var Phrase = prompt ("Input the phrase", "aab", "Phrase drawer");
numLines = Math.ceil(Phrase.length/charsInLine);
var heightFile = numLines*letterH;


var  alphabet = app.activeDocument;

var doc_1 = documents.add( charsInLine* letterW,heightFile);

//activeDocument = alphabet;

function readByChar(str, numLines){
    for(var i=0; i<numLines; i++)
    {
        for(var j=0; j<charsInLine;j++)
        {
            if (i*charsInLine+j<str.length){
                activeDocument = alphabet;
                alphabet.artLayers.getByName(str[i*charsInLine+j]).duplicate(doc_1, ElementPlacement.INSIDE);
                activeDocument = doc_1;
                //alert(j);
                doc_1.layers[0].translate(j*letterW, i*letterH);
            }else{
                break;
                }
        
        }
    }
}

readByChar (Phrase, numLines);

