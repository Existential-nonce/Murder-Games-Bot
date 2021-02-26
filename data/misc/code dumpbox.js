/*
const Embed1 = new Discord.MessageEmbed()
            .setColor("#696969")
            .setDescription(`\`>Shutting down the process...\``)

        const Embed2 = new Discord.MessageEmbed()
            .setColor("#696969")
            .setDescription(":two:")

        var Msg = await message.channel.send(Embed); 
        Msg.edit(Embed2) 

        
    
};




/** os.cpuUsage(function(v){
            console.log( 'CPU Usage (%): ' + v );
        });
        
        os.cpuFree(function(v){
            console.log( 'CPU Free: ' + v );
        });
        */






/**
var os = require("os");

//Create function to get CPU information
function cpuAverage() {

  //Initialise sum of idle and time of cores and fetch CPU info
  var totalIdle = 0, totalTick = 0;
  var cpus = os.cpus();

  //Loop through CPU cores
    for(var i = 0, len = cpus.length; i < len; i++) {
        //Select CPU core
        var cpu = cpus[i];

        //Total up the time in the cores tick
        for(type in cpu.times) {
            totalTick += cpu.times[type];
        }     

        //Total up the idle time of the core
        totalIdle += cpu.times.idle;
    }

  //Return the average Idle and Tick times
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}

//Grab first CPU Measure
var startMeasure = cpuAverage();

//Set delay for second Measure
setTimeout(function() { 

  var endMeasure = cpuAverage(); 

  var idleDifference = endMeasure.idle - startMeasure.idle;
  var totalDifference = endMeasure.total - startMeasure.total;

  var percentageCPU = 100 - Math.trunc(100 * idleDifference / totalDifference);
  module.export = { percentageCPU }

  console.log(percentageCPU + "% CPU Usage.");

}, 100);

//module.exports = { percentageCPU }
*/