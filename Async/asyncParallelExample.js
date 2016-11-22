var async = require('async');
var asyncTask1 = function(callback){

    console.log('Task 1 Starting....');
    setTimeout(function(){
        console.log('Task 1 - Done');
        callback(null, 1);
    }, 2000);
};

var asyncTask2 = function(callback){

    console.log('Task 2 Starting....');
    setTimeout(function(){
        console.log('Task 2 - Done');
        callback(null, 2);
    }, 1500);
};

var asyncTask3 = function(callback){

    console.log('Task 3 Starting....');
    setTimeout(function(){
        console.log('Task 3 - Done');
        callback(null, 3);
    }, 1000);
};

var asyncTask4 = function(callback){

    console.log('Task 4 Starting....');
    setTimeout(function(){
        console.log('Task 4 - Done');
        callback(null, 4);
    }, 1700);
};

var executeTasksParallel = function() {

    async.parallel([asyncTask1, asyncTask2, asyncTask3, asyncTask4],
        function(err, results) {
            if(err){
                console.log(err);
            }
            else{
                console.log(results);
            }
            console.log('ALL TASKS COMPLETED');
        });

};

var executeTasksSequentially = function() {

    async.series([asyncTask1, asyncTask2, asyncTask3, asyncTask4],
        function(err, results) {
            if(err){
                console.log(err);
            }
            else{
                console.log(results);
            }
            console.log('ALL TASKS COMPLETED');
        });

};


//executeTasksParallel();

executeTasksSequentially();



