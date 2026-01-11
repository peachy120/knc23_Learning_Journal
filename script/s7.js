window.addEventListener("load", function(){

    console.log("Document loaded - ready to go...");

    // write your tutorial code here

    


// 2
var a = document.querySelector("#elem1");
console.log(a.textContent);

var b = document.getElementById("elem1");
console.log(b.textContent);

// 3
// 3a
var c = document.getElementsByTagName("p");
for(var i = 0; i < c.length; i++) {
    console.log(c[i].textContent);
}

var d = document.querySelectorAll("p");
for(var i = 0; i < d.length; i++) {
    console.log(d[i].textContent);
}

// 3b
var e = document.getElementsByClassName("highlight");
for(var i = 0; i < e.length; i++) {
    console.log(e[i].textContent);
}

var f = document.querySelectorAll(".highlight");
for(var i = 0; i < f.length; i++) {
    console.log(f[i].textContent);
}
// 3c
var g = document.querySelectorAll("#first li");
for(var i = 0; i < g.length; i++) {
    console.log(g[i].textContent);
}
// 3d
var h = document.querySelectorAll("li.highlight");
for(var i = 0; i < h.length; i++) {
    console.log(h[i].textContent);
}
// 3e
var k = document.querySelectorAll("li.highlight, p.highlight");
for(var i = 0; i < k.length; i++) {
    console.log(k[i].textContent);
}

// 4


// 5
var l = document.querySelector("ul")
var m = l.querySelectorAll(".highlight");
console.log(m.length);
    
// 6
var n = document.querySelector("#first");

var o = n.firstChild;
console.log("Node Type : ", o.nodeType);
console.log("Node Name : ", o.nodeName);
console.log("Text Content : ", o.textContent);

var p = n.nextSibling;
console.log("Node Type : ", p.nodeType);
console.log("Node Name : ", p.nodeName);
console.log("Text Content : ", p.textContent);

var q = n.parentNode;
console.log("Node Type : ", q.nodeType);
console.log("Node Name : ", q.nodeName);
console.log("Text Content : ", q.textContent);

});