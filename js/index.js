for (var i = 0; i < 3; i++ ) {
    const inner = () => {
        debugger;
        console.log(i);
    }

    setTimeout(inner, 100);
}