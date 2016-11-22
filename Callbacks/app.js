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

var executeTasksSequentially = function() {

    asyncTask1(function (err, task1Resp) {
        if (err) {
            console.log(err);
        }
        else {
            asyncTask2(function (err, task2Resp) {
                if (err) {
                    console.log(err);
                }
                else {
                    asyncTask3(function (err, task3Resp) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            asyncTask4(function (err, task4Resp) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log('ALL TASKS COMPLETED SUCCESSFULLY');
                                }

                            })
                        }
                    })
                }
            })
        }
    })
};

executeTasksSequentially();
