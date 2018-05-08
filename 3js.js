var elements = [man = {name:'man',cool: 'yes', old:'yes',married: 'yes'},
dog = {name:'dog',hair: 'short',cool: 'yes'},
squirrel = {name:'squirrel', tall: 'yes', cool: 'yes', fast: 'yes', powerfull: 'no'}];
for (w=0;w<elements.length;w++)
var lim=elements.length-2;
for (var i = lim ; i >= 0; i--) {
for (var j = 0; j <= i; j++) {
if (Object.keys(elements[i]).length< Object.keys(elements[i+1]).length) {
var tmp = elements[i];
elements[i] = elements[i+1];
elements[i+1] = tmp;
}
}
}
for (w=0;w<elements.length;w++){
console.log(elements[w].name +': ' + Object.keys(elements[w]).length)
}