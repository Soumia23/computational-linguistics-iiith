var english = ["The child liked the chocolate.", "She was stopped by the bravest knight.", "Mary baked a cake for his birthday.", "She decorated the cake carefully.", "Mary wore a dress with polka dots."];
var hindi = ["राम ने सीता के लिए फल तोड़ा।" , "छोटे बच्चे पाठशाला जल्दी आयेंगे।" , "मेहनत का फल मीठा होता है।" , "वाह! वह खूबसूरत है।" , "पेड़ से पत्ते गिर गए।"];

var lang = "";
var sentence = "";

function select_lang(){
	clr();
	lang = document.getElementById("select_lang").value;
	if (lang == "english"){
		document.getElementById("eng").style.display = "initial";
	} else if (lang == "hindi"){
		document.getElementById("hin").style.display = "initial";
	} else {
		alert("Select Language");
		return false;
	}
}

function clr(){
	document.getElementById("eng").style.display = "none";
	document.getElementById("hin").style.display = "none";
}