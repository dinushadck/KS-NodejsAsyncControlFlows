var EventEmitter = require('events').EventEmitter;

var asyncTask1 = function(callback){

    console.log('Task 1 Starting....');
    setTimeout(function(){
        console.log('Task 1 - Done');
        callback(null, true);
    }, 2000);
};

var asyncTask2 = function(callback){

    console.log('Task 2 Starting....');
    setTimeout(function(){
        console.log('Task 2 - Done');
        callback(null, true);
    }, 1500);
};

var asyncTask3 = function(callback){

    console.log('Task 3 Starting....');
    setTimeout(function(){
        console.log('Task 3 - Done');
        callback(null, true);
    }, 1000);
};

var asyncTask4 = function(callback){

    console.log('Task 4 Starting....');
    setTimeout(function(){
        console.log('Task 4 - Done');
        callback(null, true);
    }, 1700);
};

var executeTask1 = function (e) {

    asyncTask1(function (err, task1Resp) {
        if (err) {
            e.emit('error', err);
        }
        else{
            e.emit('task1', task1Resp);
        }
    });
};

var executeTask2 = function (e) {

    asyncTask2(function (err, task2Resp) {
        if (err) {
            e.emit('error', err);
        }
        else{
            e.emit('task2', task2Resp);
        }
    });
};

var executeTask3 = function (e) {
    asyncTask3(function (err, task3Resp) {
        if (err) {
            e.emit('error', err);
        }
        else{
            e.emit('task3', task3Resp);
        }
    });
};

var executeTask4 = function (e) {
    asyncTask4(function (err, task4Resp) {
        if (err) {
            e.emit('error', err);
        }
        else{
            e.emit('task4', task4Resp);
        }
    });
};

var executeTasksSequentially = function() {

    var event = new EventEmitter();

    executeTask1(event);

    event.on('error', function(err){
        console.log(err);        
    });

    event.on('task1', function(data){
        executeTask2(event);
    });

    event.on('task2', function(data){
        executeTask3(event);
    });

    event.on('task3', function(data){
        executeTask4(event);
    });

    event.on('task4', function(data){
        console.log('ALL TASKS COMPLETED SUCCESSFULLY');
    });
};

executeTasksSequentially();
