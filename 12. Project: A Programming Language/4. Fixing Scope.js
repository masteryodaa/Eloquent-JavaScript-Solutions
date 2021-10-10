//FIXING SCOPES

//Add a special form set, similar to define, which gives a binding a new value, updating the binding in an outer scope if it doesn’t already exist in the inner scope. If the binding is not defined at all, throw a ReferenceError (another standard error type).



specialForms.set = (args, env) => {
    if (args.length != 2 || args[0].type != "word") {
      throw new SyntaxError("Bad use of set");
    }
    let varName = args[0].name;
    let value = evaluate(args[1], env);
  
    for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
      if (Object.prototype.hasOwnProperty.call(scope, varName)) {
        scope[varName] = value;
        return value;
      }
    }
    throw new ReferenceError(`Setting undefined variable ${varName}`);
  };
  
  run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
  // → 50
  run(`set(quux, true)`);
  // → Some kind of ReferenceError