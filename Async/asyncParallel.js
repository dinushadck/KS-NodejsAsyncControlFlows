/**
 * Created by user-pc on 11/14/2016.
 */
var async = require('async');

var randomIOTask = function(taskId, callback){

    var rand = Math.round(Math.random() * (3000 - 500)) + 500;

    console.log('Random Task ' + taskId + ' Starting....');
    setTimeout(function(){
        console.log('Random Task ' + taskId + ' - Done');
        callback(null, true);
    }, rand);
};

var runTaskMultipleTimes = function(limit, callback){

    var taskArray = [];

    for(i=0; i<limit; i++){
        taskArray.push(randomIOTask.bind(this, i));
    }

    async.parallel(taskArray,
        function(err, results) {
            callback(err, results);
        });
};

runTaskMultipleTimes(5, function(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
    console.log('ALL TASKS COMPLETED');
});