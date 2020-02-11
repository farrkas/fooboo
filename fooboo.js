function fooboo(tab){
const a=tab.length;

for (let i=0; i<a; i++){

if (typeof (tab[i])==String){
console.log("foo");
}

if (typeof tab[i]==Number){
    console.log("bar");
}
if (typeof tab[i]!==String || Number){
    console.log("boo");
}

}

}
const tabTest = ["maciek", 123, "un i uona", asd43, true]
fooboo(tabTest)