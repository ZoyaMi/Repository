var dev = {
    cool: 'yes',
    stylish: 'no'
}
tmp = {};
for (i in dev) {
    tmp[dev[i]] = i;
}
console.log(tmp);
