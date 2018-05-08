var elements = [1,2,3,2,5,2,2];

var tmp ={};
var max = 0;
for (var i=0;i<elements.length;i++){
if (tmp[elements[i]]) {
tmp[elements[i]]++;
}
else {
tmp[elements[i]]=1;
}
if (tmp[elements[i]]>max) {
var result=elements[i];
}
}
console.log("Result is: " + result);