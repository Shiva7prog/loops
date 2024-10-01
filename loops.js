// Find day of the week using switch case

// Find month of the year using switch case

// Find even numbers in first 10 numbers using while loop

// Countdown timer using while loop and the countdown should starts from 10

// 1) 

 var day='day 1';
 switch(day){
     case 'day 1':
         console.log('sunday');
         break;

     case 'day 2':
         console.log('monday');
         break;
    
     case 'day 3':
         console.log('tuesday');
         break;

     case 'day 4':
         console.log('wednesday');
         break;

     case 'day 5':
         console.log('thursday');
        
     case 'day6':
         console.log('friday');
         break;

     case 'day 7':
         console.log('saturday');
         break;

     default:
         console.log("improper day");
        
        
 }

 // 2)
 var monthNumber = 4;  
 var monthName;
 
 switch (monthNumber) {
     case 1:
         monthName = "January";
         break;
     case 2:
         monthName = "February";
         break;
     case 3:
         monthName = "March";
         break;
     case 4:
         monthName = "April";
         break;
     case 5:
         monthName = "May";
         break;
     case 6:
         monthName = "June";
         break;
     case 7:
         monthName = "July";
         break;
     case 8:
         monthName = "August";
         break;
     case 9:
         monthName = "September";
         break;
     case 10:
         monthName = "October";
         break;
     case 11:
         monthName = "November";
         break;
     case 12:
         monthName = "December";
         break;
     default:
         monthName = "Invalid month number";
 }
 
 console.log(monthName);

 // 3)
var a=0;
while(a<=10){
    if(a%2==0){
        console.log(a);   
    }
    a++
}

// 4)
 
var attempts=3;
while(attempts>=1){
    console.log('number of attempts left : '+attempts);
    attempts--
}console.log('please try again after some time');