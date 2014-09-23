/*
 Christian Castaneda
 September 23rd, 2014
 SDI
 Lab 9
*/

// Problem 1 - Format a Number

    var rndNum = (Math.random() * 100);
    var rndNumDec = Math.floor(Math.random() * 5);
    
    var numFormat = function(num,decPlc)
    {
        var decNum = num.toFixed(decPlc);
        return decNum; 
    };
    
// Problem 2 - Number vs. String
    
    var myString = prompt("Enter a number:", 0);

    var strOrNum = function(string)
    {
      var strNum = string;
      var notNum = "That is not a number.";
      
      if(!isNaN(strNum) == true)
      {
        parseInt(strNum);  
      }
      else
      {
        strNum = notNum;
      };
      
      return strNum;
    };

// Problem 3 - Date Differences

    var birthday = new Date(prompt("Enter your date of birth in the form of MM/DD/YYY.", "MM/DD/YYYY"));
    var today    = new Date();
    var day      = today.getDate();
    var month    = today.getMonth() + 1;
    var year     = today.getFullYear();
        today    = new Date(month + "/" + day + "/" + year);
    var hOrD     = prompt("What would you like the difference from your birthday and now to be?\nhours or days?" , "days");
        
    var timeFromBirth = function(birth,now,timeFormat)
    {
      var dOB = birth;
      var dateNow = now;
      var diffDays;
      
      var dateDiff = Math.abs(dateNow.getTime() - dOB.getTime());
      if(timeFormat == "hours")
      {
        diffDays = Math.ceil(dateDiff / (1000 * 3600));
      }
      else
      {
        diffDays = Math.ceil(dateDiff / (1000 * 3600 * 24));  
      };
      return diffDays;
    };
    
// MAIN

    console.log("~~~~~~~~~~~~~~~~~~~~ PROBLEM ONE ~~~~~~~~~~~~~~~~~~~~");
        console.log("The number " + rndNum + " rounded to only " + rndNumDec + " decimal places is " + numFormat(rndNum, rndNumDec) + ".");
        
    console.log("~~~~~~~~~~~~~~~~~~~~ PROBLEM TWO ~~~~~~~~~~~~~~~~~~~~");
        console.log(strOrNum(myString));
        
    console.log("~~~~~~~~~~~~~~~~~~~ PROBLEM THREE ~~~~~~~~~~~~~~~~~~~");
        if(hOrD == "hours")
      {
        console.log("It is about " + timeFromBirth(birthday, today, hOrD) + " minutes from when you were born.");
      }
      else
      {
        console.log("It is about " + timeFromBirth(birthday, today, hOrD) + " days from when you were born.");
      };
        