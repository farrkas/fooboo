function fooboo(tab) {
    const a = tab.length;

    do {

        if (typeof (tab[i]) === 'string') {
            console.log("foo");
            i++;
        }

        if (typeof tab[i] === 'number') {
            console.log("bar");
            i++;
        }
        if (typeof tab[i] !== 'string' && typeof tab[i] !== 'number') {
            console.log("boo");
            i++;
        }

    } while (i < a);

}
const tabTest = [12, "maciek", 123, "un i uona", 3, true, 12, null];
fooboo(tabTest);