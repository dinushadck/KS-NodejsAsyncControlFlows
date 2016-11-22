/**
 * Created by user-pc on 11/14/2016.
 */

var randomIOTask = function(taskId, callback){

    var rand = Math.round(Math.random() * (3000 - 500)) + 500;

    console.log('Random Task ' + taskId + ' Starting....');
    setTimeout(function(){
        console.log('Random Task ' + taskId + ' - Done');
        callback(null, true);
    }, rand);
};

var runTaskMultipleTimes = function(limit, callback){

    var tempCount = 0;
    var response = {
        errors: [],
        results: []
    };

    for(i=0; i<limit; i++){
        
        randomIOTask(i+1, function(err, res){
            tempCount++;

            if(err){
                response.errors.push(err);
            }
            else{
                response.results.push(res);
            }

            if(tempCount >= limit){
                if(response.errors.length > 0){
                    callback(new Error('Error occurred', response));
                }
                else{
                    callback(null, response);
                }

            }
        })
    }
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