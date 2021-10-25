// console.log('I am in world ')


var {
    setWorldConstructor,
    Before,
    After
} = require('')

function World({attach,parameters}){
this.attach=this.attach
this.parameters=this.parameters

}

Before(function(feature){
    this.scenario = feature;
    console.log('Execute Scenario: '+ JSON.stringify(this.scenario["pickle"]["name"]));
});

After(function(feature){
    this.scenario=feature;
    console.log('scenario name status: '+ JSON.stringify(this.scenario["result"]["status"]));
    console.log;("-----------------------------------")

});

setWorldConstructor(World)