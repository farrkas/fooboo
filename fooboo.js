function fooboo(tab){
const a=tab.length;

for (let i=0; i<a; i++){

if (typeof (tab[i])==='string'){
console.log("foo");
}

if (typeof tab[i]==='number'){
    console.log("bar");
}
if (typeof tab[i]!=='string' && typeof tab[i]!=='number'){
    console.log("boo");
}

}

}
const tabTest = [12, "maciek", 123, "un i uona", 3, true, 12, null];
fooboo(tabTest);