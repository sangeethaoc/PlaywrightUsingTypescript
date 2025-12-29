enum Environment {
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}

function runTests(env : Environment) : void{
    console.log(`Tests started ----> Tests are running in : ${env}`);
    switch(env){
        case Environment.LOCAL:
            console.log("Tests are running in local server");
            break;
        case Environment.DEVELOPMENT:
            console.log("Tests are running in development environment");
            break;
        case Environment.STAGING:
            console.log("Tests are running in staging environment");
            break;
        case Environment.PRODUCTION:
            console.log("Tests are running in production environment");
            break;
        default:
            console.log("Tests are running in default environment");
    }
    console.log("Test execution completed")
}

runTests(Environment.LOCAL);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);