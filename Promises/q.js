/**
 * Created by user-pc on 11/14/2016.
 */
var Q = require('q');
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

var executeTask1 = function()
{
    var deferred = Q.defer();
    asyncTask1(function(err, result){
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(result);
    });
    return deferred.promise;
};

var executeTask2 = function()
{
    var deferred = Q.defer();
    asyncTask2(function(err, result){
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(result);
    });
    return deferred.promise;
};

var executeTask3 = function()
{
    var deferred = Q.defer();
    asyncTask3(function(err, result){
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(result);
    });
    return deferred.promise;
};

var executeTask4 = function()
{
    var deferred = Q.defer();
    asyncTask4(function(err, result){
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(result);
    });
    return deferred.promise;
};



var executeTasksSequentially = function()
{
    executeTask1()
        .then(function(res){
            return executeTask2();
        })
        .then(function (res) {
            return executeTask3();
        })
        .then(function (res) {
            return executeTask4();
        })
        .then(function (res) {
            console.log('ALL TASKS COMPLETED SUCCESSFULLY');
        })
        .catch(function(err){
            console.log(err);
        })
};

executeTasksSequentially();