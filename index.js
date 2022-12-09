// Bai 1: Tinh tien luong nhan vien
function bai1(){
    var arr = document.getElementsByTagName("input");
    var salary = arr[0].value;
        calculateSalary();
}

function bai2(){
    var arr = document.getElementsByTagName("input");
    var average = arr[1].value;
    CalcAvg();
}

function bai3(){
    var arr = document.getElementsByTagName("input");
    var currency = arr[2].value;
    currencyConvert();
}

function bai4(){
    var arr = document.getElementsByTagName("input");
    var currency = arr[3].value;
    calculateRectangle();
}
function bai5(){
    var arr = document.getElementsByTagName("input");
    var currency = arr[4].value;
    calculateTens();
}

// Bài 1
function calculateSalary(){
    const salaryOneDay = 100;
    var day = prompt("Enter the days: ");
    var salary = salaryOneDay * day;
    alert("Your salary is $" + salary);
}

// Bài 2
function CalcAvg(){
    var number1 = Number(prompt("Enter number 1: "));
    var number2 = Number(prompt("Enter number 2: "));
    var number3 = Number(prompt("Enter number 3: "));
    var number4 = Number(prompt("Enter number 4: "));
    var number5 = Number(prompt("Enter number 5: "));

    var sum = number1+number2+number3+number4+number5;
    var average = sum/5;
    alert("The average of 5 numbers is: " + average.toFixed(0));
}


// Bài 3
function currencyConvert(){
    var amount = prompt("Enter the amount: ");
    var rate = prompt("Enter the rate: ");
    var result = amount * rate;
    alert("The result is: " + result.toFixed(3));
}

// Bài 4
function calculateRectangle(){
    var width = prompt("Enter the width: ");
    var height = prompt("Enter the height: ");
    var area = width * height;
    var circumference = (width + height) * 2;
    alert("The circumference of rectangle is: " + circumference);
    alert("The area of rectangle is: " + area);
}

// Bài 5
function calculateTens(){
    var number = prompt("Enter the number: ");
    var tens = number / 10;
    var unit = number % 10;
    sum = tens + unit;
    alert("The tens of number is: " + sum.toFixed(0));
}