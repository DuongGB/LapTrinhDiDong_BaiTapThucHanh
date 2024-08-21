function average_Scores(a, b, c){
    return (a + b + c) / 3;
}

var Dolphins1=average_Scores(96,108,89);
var Koalas1=average_Scores(88,91,110);

var Dolphins2=average_Scores(97,112,101);
var Koalas2=average_Scores(109,95,123);

var Dolphins3=average_Scores(97,112,101);
var Koalas3=average_Scores(109,95,106);

function compare_average_Scores(data1, data2){
    if(data1 >= 100 && data2 >= 100){
        if(data1 > data2){
            console.log(`Dolphins win (${data1.toFixed(2)} vs ${data2.toFixed(2)})`);
        }else if(data2 > data1){
            console.log(`Koalas win (${data2.toFixed(2)} vs ${data1.toFixed(2)})`);
        }else{
            console.log(`It's a draw (${data1.toFixed(2)} vs ${data2.toFixed(2)})`);
        }
    }else{
        console.log("No team wins the trophy");
    }
    
}

compare_average_Scores(Dolphins1, Koalas1);
compare_average_Scores(Dolphins2, Koalas2);
compare_average_Scores(Dolphins3, Koalas3);


