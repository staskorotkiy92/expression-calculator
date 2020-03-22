function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    return parseFloat(expr.replace(/(\d+)[/+*-](\d+)/g, function (a, b, c){
      console.log(a + "-a");
      console.log(b + "-b");
      console.log(c + "-c");
        if (a.includes('+')) return +b + +c;
        if (a.includes('-')) return parseFloat(b-c);
        if (a.includes('*')) return parseFloat(b*c);
        if (a.includes('/'))  return parseFloat(b/c);
     
    }));
}

module.exports = {
    expressionCalculator
}