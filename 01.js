// What's a closure?

// A closure gives you acess to outer function's scope from an inner function. When functiom are nested, 
// the inner fuction have access to variable declared in outer function scope, even after the outer function
// has returned.

const craeateSecret = (secret)=>{
    return{
        getSecret: () => secret,
        setSecret: (newSecret) => {
            secret = newSecret;
        },

    };
};

const mySecret = craeateSecret("My secret");
console.log(mySecret.getSecret()); //My Secret

mySecret.setSecret("My new secret");
console.log(mySecret.getSecret()); //My new Secret