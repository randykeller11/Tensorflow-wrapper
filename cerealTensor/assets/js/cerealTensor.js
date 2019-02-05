// array of cereals w/ variables (fiber, sugar and h/less h/unhealthy)

var cerealTest = [
{
    fiber: 20,
    sugar: 6,
    score: 1
},
{
    fiber: 6.25,
    sugar: 3.45,
    score: 1
},
{
    fiber: 6.25,
    sugar: 5.75,
    score: 1
},
{
    fiber: 3.75,
    sugar: 4.67,
    score: 1
},
{
    fiber: 6.25,
    sugar: 5.6,
    score: 1
},
{
    fiber: 3,
    sugar: 1,
    score: 1
},
{
    fiber: 3,
    sugar: 6,
    score: 1
},
{
    fiber: 7.5,
    sugar: 5.75,
    score: 1
},
{
    fiber: 28,
    sugar: 0,
    score: 1
},
{
    fiber: 11.25,
    sugar: 6,
    score: 1
},
{
    fiber: 12.5,
    sugar: 3.75,
    score: 1
},
{
    fiber: 5,
    sugar: 4.5,
    score: 1
},
{
    fiber: 2.25,
    sugar: 2.25,
    score: 1
},
{
    fiber: 2.25,
    sugar: 4.5,
    score: 1
},
{
    fiber: 8,
    sugar: 2,
    score: 1
},
{
    fiber: 6,
    sugar: 0,
    score: 1
},
{
    fiber: 6.25,
    sugar: 6,
    score: 1
},
{
    fiber: 13.5,
    sugar: 6,
    score: 1
},
{
    fiber: 10,
    sugar: 0,
    score: 1
},
{
    fiber: 3.75,
    sugar: 5.3,
    score: 1
},
{
    fiber: 2.7,
    sugar: 12,
    score: 2
},
{
    fiber: 2,
    sugar: 3,
    score: 2
},
{
    fiber: 1,
    sugar: 2,
    score: 2
},
{
    fiber: 2.7,
    sugar: 12,
    score: 2
},
{
    fiber: 1,
    sugar: 3,
    score: 2
},
{
    fiber: 3,
    sugar: 9,
    score: 2
},
{
    fiber: 0.75,
    sugar: 3,
    score: 2
},
{
    fiber: 10,
    sugar: 9,
    score: 2
},
{
    fiber: 4,
    sugar: 9.33,
    score: 2
},
{
    fiber: 2.7,
    sugar: 8,
    score: 2
},
{
    fiber: 10,
    sugar: 9,
    score: 2
},
{
    fiber: 1.6,
    sugar: 5.6,
    score: 2
},
{
    fiber: 2.7,
    sugar: 8,
    score: 2
},
{
    fiber: 2.7,
    sugar: 10.7,
    score: 2
},
{
    fiber: 5,
    sugar: 9,
    score: 2
},
{
    fiber: 0,
    sugar: 2.4,
    score: 2
},
{
    fiber: 0,
    sugar: 4,
    score: 2
},
{
    fiber: 4,
    sugar: 12,
    score: 2
},
{
    fiber: 4,
    sugar: 9.33,
    score: 2
},
{
    fiber: 3,
    sugar: 9,
    score: 2
},
{
    fiber: 2.7,
    sugar: 9.33,
    score: 2
},
{
    fiber: 8,
    sugar: 12,
    score: 2
},
{
    fiber: 3,
    sugar: 12,
    score: 3
},
{
    fiber: 4,
    sugar: 16,
    score: 3
},
{
    fiber: 2.7,
    sugar: 13.33,
    score: 3
},
{
    fiber: 3.2,
    sugar: 13.6,
    score: 3
},
{
    fiber: 0,
    sugar: 13.33,
    score: 3
},
{
    fiber: 4,
    sugar: 14.67,
    score: 3
},
{
    fiber: 5,
    sugar: 16,
    score: 3
},
{
    fiber: 3,
    sugar: 12,
    score: 3
},
{
    fiber: 1,
    sugar: 13.33,
    score: 3
},
{
    fiber: 0,
    sugar: 12,
    score: 3
},
{
    fiber: 10,
    sugar: 20,
    score: 3
},
{
    fiber: 4,
    sugar: 14.67,
    score: 3
},
{
    fiber: .67,
    sugar: 6.67,
    score: 3
},
{
    fiber: 4,
    sugar: 20,
    score: 3
},
{
    fiber: 4,
    sugar: 14.67,
    score: 3
},
{
    fiber: 2.67,
    sugar: 13.33,
    score: 3
},
{
    fiber: 4,
    sugar: 19,
    score: 3
},
{
    fiber: 7,
    sugar: 18,
    score: 3
},
{
    fiber: 4,
    sugar: 16,
    score: 3
},
{
    fiber: 6.67,
    sugar: 20,
    score: 3
},
{
    fiber: 8,
    sugar: 12,
    score: 3
},
{
    fiber: 10,
    sugar: 15,
    score: 3
},
{
    fiber: 1,
    sugar: 10,
    score: 3
}];

//shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};  

//make data function
//test variables start with arbitraty data to stop error message from tensor function below
var test_x = [];
var test_y = [];
var test_start_y = [];
var train_x = [];
var train_y = [];
var train_start_y = [];


function makeData(){         
    shuffle(cerealTest);
    for (var i = 0; i < cerealTest.length; i++){
        if (i <= 7){
            test_x.push(cerealTest[i].fiber);
            test_x.push(cerealTest[i].sugar);            
            test_start_y.push(cerealTest[i].score); 
        } else if (i > 7){
            train_x.push(cerealTest[i].fiber);
            train_x.push(cerealTest[i].sugar); 
            train_start_y.push(cerealTest[i].score);        
        } else {
            console.log("error in data creation");
        }

    };

};


function build_train_y(){
    for (var i = 0; i < train_start_y.length; i++){
    if (train_start_y[i] === 1){
        train_y.push(1,0,0);
    } else if (train_start_y[i] === 2){
        train_y.push(0,1,0);
    } else if (train_start_y[i] === 3){
        train_y.push(0,0,1);
    }; 
};

};

function build_test_y(){
    for (var i = 0; i < test_start_y.length; i++){
    if (test_start_y[i] === 1){
        test_y.push([1,0,0]);
    } else if (test_start_y[i] === 2){
        test_y.push([0,1,0]);
    } else if (test_start_y[i] === 3){
        test_y.push([0,0,1]);
    }; 
};

};


function start(){
    makeData();
    build_test_y();
    build_train_y();
};

start();

//build tensors function


const tf_test_xs = tf.tensor2d(Uint8Array.from(test_x), [8, 2]);
const tf_train_xs = tf.tensor2d(Uint8Array.from(train_x), [57, 2]);
const tf_train_ys = tf.tensor2d(Uint8Array.from(train_y), [57, 3]);

// //----------------model---------------------
const model = tf.sequential();

const hidden1 = tf.layers.dense({
    inputShape: [2],
    units: 3,
    activation: 'relu'

});


const output = tf.layers.dense({
    inputShape: [2],
    units: 3,
    activation: 'sigmoid'

});

model.add(hidden1);
model.add(output);

const opt = tf.train.sgd(0.1);

model.compile({
    optimizer: opt,
    loss: 'meanSquaredError'
});

const config = {
    epochs: 100
};

async function train(){
    for(var i = 0; i <= 50; i++){
        const response = await model.fit(tf_train_xs, tf_train_ys, config);
        console.log(response.history.loss[0]);        
    }
};

train().then(() => console.log("training complete"));


function optData(){

}

function predict(){
    let outputs = model.predict(tf_test_xs);
    console.log("predictions");
    outputs.print();
    console.log("answers");
    console.log(test_y);
};













