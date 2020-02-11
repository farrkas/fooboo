function fooboo(tab){
const a=tab.length;

for (let i=0; i<a; i++){

if (typeof (tab[i])===String){
console.log("foo");
}

if (typeof tab[i]===Number){
    console.log("bar");
}
if (typeof tab[i]!==String || typeof tab[i]!==Number){
    console.log("boo");
}

}

}
const tabTest = [12, "maciek", 123, "un i uona", 3, true, 12, null];
fooboo(tabTest);