var dev= {
cool: 'yes',
stylish: 'no'
}
for (i in dev){
var tmp=i;
var tmp2=dev[i];
delete dev[i];
dev[tmp2]=tmp;
}
for (i in dev){
console.log('property: ' + i + ' | ' + 'value: ' + dev[i]);
}