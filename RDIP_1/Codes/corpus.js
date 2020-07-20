var stemmer = new Snowball('English');
//stemmer.setCurrent('asked');
//stemmer.stem();
//console.log(stemmer.getCurrent());

var corpus1 = "A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse. \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.\"";
var corpus2 = "A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.";
var corpus3 = "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair.";

var corpus = "";
var str = "";
var tokens = 0;
var types = 0;
var newtypes = 0;
var set;
var words;
var newset;

function select() {
	clr();
	document.getElementById("corpusdisplay").style.display = "initial";
	let corpus = document.getElementById("select").value;
	if (corpus === "corpus1") {
		document.getElementById("corpusdisplay").innerHTML = corpus1;
		str = corpus1;
		displaymsg();
	} else if (corpus === "corpus2") {
		document.getElementById("corpusdisplay").innerHTML = corpus2;
		str = corpus2;
		displaymsg();
	} else if (corpus === "corpus3") {
		document.getElementById("corpusdisplay").innerHTML = corpus3;
		str = corpus3;
		displaymsg();
	} else {
		alert("Select a corpus");
		return false;
	}
}

function displaymsg() {
	document.getElementById("msgdisplay").innerHTML = "Enter the number of tokens and types for the above corpus:";
	document.getElementById("msg").style.display = "initial";
	document.getElementById("submit").style.display = "initial";
}

function tokens_check() {
	str = str.trim().match(/\w+/gi).join(" ");
	set = new Set();
	words = str.toLowerCase().split(" ");
	tokens = words.length;
	for (let i = 0; i < tokens; i++) {
		set.add(words[i]);
	}
	types = set.size;
	document.getElementById("tokens").style.color = "black";
	document.getElementById("types").style.color = "black";
	let submitted_tokens = document.getElementById("tokens").value;
	let submitted_types = document.getElementById("types").value;
	//console.log(words);
	//console.log(set);
	if( submitted_tokens == tokens ){
		document.getElementById("tokens").style.backgroundColor = "green";
 		document.getElementById("tokens").value = submitted_tokens;
		
	}
	else{
		document.getElementById("tokens").style.backgroundColor = "red";
		document.getElementById("tokens").value = submitted_tokens;
	}
	if (submitted_types == types) {
		document.getElementById("types").style.backgroundColor = "green";
		document.getElementById("types").value = submitted_types;
	} else {
		
		document.getElementById("types").style.backgroundColor = "red";
		document.getElementById("types").value = submitted_types;
	}
	if (submitted_tokens == tokens && submitted_types == types) {
		document.getElementById("right").innerHTML = "Right Answer";
		document.getElementById("right").style.color = "green";
		document.getElementById("continue").style.display = "initial";
	} else {
		document.getElementById("right").innerHTML = "Wrong Answer";
		document.getElementById("right").style.color = "red";
	}
}

function nextstep(){
	document.getElementById("right").innerHTML = "";
	document.getElementById("continue").style.display = "none";
	document.getElementById("newtypes_display").style.display = "initial";
	document.getElementById("submit").style.display = "none";
}

function submit2(){
	var submitted_newtypes = document.getElementById("newtypes").value;
	var heard = /heard/g, 
	his = / him | himself | he /g,
	_do = / done | does | did /g,
	have = / had | has /g, 
	find = /found/g, 
	grow = /grown|grew/g, 
	eat = / ate /g,
	are = / were | was | are /g,
	no = / not /g,
	run = / ran /g,
	i = / me /g,
	_this = /that/g,
	s = / s /g;
	str = str.replace(heard,"hear");
	str = str.replace(his," his ");
	str = str.replace(_do," do ");
	str = str.replace(have," have ");
	str = str.replace(find,"find");
	str = str.replace(grow,"grow");
	str = str.replace(eat," eat ");
	str = str.replace(are," is ")
	str = str.replace(no, " no ");
	str = str.replace(run," run ");
	str = str.replace(i ," i ");
	str = str.replace(_this,"this");
	str = str.replace(s," ");
	str = str.replace("into","in to");
	words = str.toLowerCase().split(" ");
	//console.log(words);
	newset = new Set();
	for(i=0; i<words.length; i++){
		stemmer.setCurrent(words[i]);
		stemmer.stem();
		newset.add(stemmer.getCurrent());
		
	}
	newtypes = newset.size;
	//console.log(newset);
	if(newtypes == submitted_newtypes){
		document.getElementById("newtypes").style.backgroundColor = "green";
		document.getElementById("newtypes").value = submitted_newtypes;
		document.getElementById("result").innerHTML = "Right Answer";
		document.getElementById("result").style.color = "green";
	} else {		
		document.getElementById("newtypes").style.backgroundColor = "red";
		document.getElementById("newtypes").value = submitted_newtypes;	
		document.getElementById("result").innerHTML = "Wrong Answer";
		document.getElementById("result").style.color = "red";
	}
}

function clr(){
	document.getElementById("tokens").style.backgroundColor = "white";
	document.getElementById("types").style.backgroundColor = "white";
	document.getElementById("newtypes").style.backgroundColor = "white";
	document.getElementById("tokens").value = "";
	document.getElementById("types").value = "";
	document.getElementById("newtypes").value = "";
	document.getElementById("msg").style.display = "none";
	document.getElementById("right").innerHTML = "";
	document.getElementById("continue").style.display = "none";
	document.getElementById("newtypes_display").style.display = "none";
}