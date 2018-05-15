var dev = {
    cool: 'yes',
    stylish: 'no'
};
var tmp = {};
for (var i in dev) {
    tmp[dev[i]] = i;
}
console.log(tmp);
