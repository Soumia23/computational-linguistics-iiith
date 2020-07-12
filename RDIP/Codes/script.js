var english = [
	 [
		"John ate an apple before afternoon",
		"John ate an apple before afternoon",
		"before afternoon John ate an apple",
		"John before afternoon ate an apple"
	],
	[
		"some students like to study in the night",
		"at night some students like to study"
	],[
	
		"John and Mary went to church",
		"Mary and John went to church"
	],
	 [
		"John went to church after eating",
		"after eating John went to church",
		"John after eating went to church"
	],
	 [
		"did he go to market",
		"he did go to market"
	],
	 [
		"the woman who called my sister sells cosmetics",
		"the woman who sells cosmetics called my sister",
		"my sister who sells cosmetics called the woman",
		"my sister who called the woman sells cosmetics"
	],
	 [
		"John goes to the library and studies",
		"John studies and goes to the library"
	],
	[
		"John ate an apple so did she",
		"she ate an apple so did John"
	],
	 [
		"the teacher returned the book after she noticed the error",
		"the teacher noticed the error after she returned the book",
		"after the teacher returned the book she noticed the error",
		"after the teacher noticed the error she returned the book",
		"she returned the book after the teacher noticed the error",
		"she noticed the error after the teacher returned the book",
		"after she returned the book the teacher noticed the error",
		"after she noticed the error the teacher returned the book"
	],
	[
		"I told her that I bought a book yesterday",
		"I told her yesterday that I bought a book",
		"yesterday I told her that I bought a book",
		"I bought a book that I told her yesterday",
		"I bought a book yesterday that I told her",
		"yesterday I bought a book that I told her"
	]
];
var hindi = [
 [
		"राम और श्याम बाजार गयें",
		"राम और श्याम गयें बाजार",
		"बाजार गयें राम और श्याम",
		"गयें बाजार राम और श्याम"
	],[
		"राम सोया और श्याम भी",
		"श्याम सोया और राम भी",
		"सोया श्याम और राम भी",
		"सोया राम और श्याम भी"
	],[
		"मैंने उसे बताया कि राम सो रहा है",
		"मैंने उसे बताया कि सो रहा है राम",
		"उसे मैंने बताया कि राम सो रहा है",
		"उसे मैंने बताया कि सो रहा है राम",
		"मैंने बताया उसे कि राम सो रहा है",
		"मैंने बताया उसे कि सो रहा है राम",
		"उसे बताया मैंने कि राम सो रहा है",
		"उसे बताया मैंने कि सो रहा है राम",
		"बताया मैंने उसे कि राम सो रहा है",
		"बताया मैंने उसे कि सो रहा है राम",
		"बताया उसे मैंने कि राम सो रहा है",
		"बताया उसे मैंने कि सो रहा है राम"
	],[
		"राम खाकर सोया",
		"खाकर राम सोया",
		"राम सोया खाकर",
		"खाकर सोया राम",
		"सोया राम खाकर",
		"सोया खाकर राम"
	],[
		"बिल्लियों को मारकर कुत्ता सो गया",
		"मारकर बिल्लियों को कुत्ता सो गया",
		"बिल्लियों को मारकर सो गया कुत्ता",
		"मारकर बिल्लियों को सो गया कुत्ता",
		"कुत्ता सो गया बिल्लियों को मारकर",
		"कुत्ता सो गया मारकर बिल्लियों को",
		"सो गया कुत्ता बिल्लियों को मारकर",
		"सो गया कुत्ता मारकर बिल्लियों को"
	],[
		"एक लाल किताब वहाँ है",
		"एक लाल किताब है वहाँ",
		"वहाँ है एक लाल किताब",
		"है वहाँ एक लाल किताब"
	],[
		"एक बड़ी सी किताब वहाँ है",
		"एक बड़ी सी किताब है वहाँ",
		"बड़ी सी एक किताब वहाँ है",
		"बड़ी सी एक किताब है वहाँ",
		"वहाँ है एक बड़ी सी किताब",
		"वहाँ है बड़ी सी एक किताब",
		"है वहाँ एक बड़ी सी किताब",
		"है वहाँ बड़ी सी एक किताब"
	],
];

var actual_sentence = "";
var formed_sentence = "";
var count = 0;
var random = 0;
var length = 0;
function select() {
	let lang = document.getElementById("dropdown").value;
	if (lang === "english"||lang === "hindi") {
		document.getElementById("display").innerHTML = "<b>Form a sentence(Declarative or Interrogative or any other type) from the given words</b>" + "<br>" + "<i>(select the buttons in proper order)</i>";
		select_sentence(lang);
	} else {
		alert("Select language");
		return false;
	}
}
function select_sentence(lang){
		document.getElementById("icons").innerHTML="";
		if (lang === "english") {
		random = Math.floor(Math.random() * 10);
		var eng = english[random][0];
		jumble(eng);
		} else if (lang === "hindi") {
		random = Math.floor(Math.random() *7);
		var hin =  hindi[random][0];
		jumble(hin);
		}	
}
function jumble(line) {
	var text = line.toLowerCase().split(" "), length = text.length , temp , i , index = length - 1;
	do {
		i = Math.floor(Math.random() * length);
		temp = text[i];
		text[i] = text[index];
		text[index] = temp;
		index--;
	} while (index !== 0);
	for(var j = 0; j < text.length ; j++){
		var button = document.createElement("Button");
		button.setAttribute("id", j.toString());
		button.setAttribute("class", "words");
		button.setAttribute("value", text[j]);
		button.innerHTML = text[j];
		document.getElementById("icons").append(button);
	}
}
function display2(id){
	if(id === "icons"){
		return;
	}	
		document.getElementById("display2").innerHTML = "<b>Formed Sentence </b>"+"<i>(after selecting words):</i>";
}
function press(id){
	if(id === "icons"){
		return;
	}
	if (count === 0) {
		document.getElementById("formed").innerHTML = String(document.getElementById(id).value);
		document.getElementById("reform_button").style.display = "initial";
	} else {
		document.getElementById("formed").innerHTML = String(document.getElementById("formed").innerHTML) + " " + String(document.getElementById(id).value);
	}
	formed_sentence = document.getElementById("formed").innerHTML;
	document.getElementById(id).style.display = "none";
	count += 1;
	if (count == length) {
		document.getElementById("check").style.display = "initial";
	}
}
function display(style) {
	document.getElementById("display").style.display = style;
	document.getElementById("icons").style.display = style;
	document.getElementById("display2").style.display = style;
	document.getElementById("formed").style.display = style;
	document.getElementById("reform_button").style.display = style;
	document.getElementById("check").style.display = style;
	document.getElementById("correct").style.display = style;
	document.getElementById("right").style.display = style;
	document.getElementById("wrong").style.display = style;
	document.getElementById("actual_sentence").style.display = style;
}