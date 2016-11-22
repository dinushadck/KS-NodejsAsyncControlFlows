/**
 * Created by user-pc on 11/14/2016.
 */
var Promise = require('promise');
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
    return new Promise(function(fulfill, reject){
        asyncTask1(function(err, result){
            if(err)
                reject(err);
            else
                fulfill(result);
        })
    })
};

var executeTask2 = function()
{
    return new Promise(function(fulfill, reject){
        asyncTask2(function(err, result){
            if(err)
                reject(err);
            else
                fulfill(result);
        })
    })
};

var executeTask3 = function()
{
    return new Promise(function(fulfill, reject){
        asyncTask3(function(err, result){
            if(err)
                reject(err);
            else
                fulfill(result);
        })
    })
};

var executeTask4 = function()
{
    return new Promise(function(fulfill, reject){
        asyncTask4(function(err, result){
            if(err)
                reject(err);
            else
                fulfill(result);
        })
    })
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