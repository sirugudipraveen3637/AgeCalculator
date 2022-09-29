//const container;
//const error;


function getAge(){
   return document.getElementById("dob").value;
}

function calcAge(){ 
    let selecteddob=getAge();

    var dob = new Date(selecteddob);
    if(selecteddob==null || selecteddob=='') {
      document.getElementsByClassName("error")[0].innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    //calculate difference from current date in time
    var diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    return age;
    }

}


function calcAgebyDays(){ 
    let selecteddob=getAge();

    var dob = new Date(selecteddob);
    if(selecteddob==null || selecteddob=='') {
      document.getElementsByClassName("error")[0].innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
        var dobYear = dob.getYear();
        var dobMonth = dob.getMonth();
        var dobDate = dob.getDate();
        
        //get the current date from the system
        var now = new Date();
        //extract the year, month, and date from current date
        var currentYear = now.getYear();
        var currentMonth = now.getMonth();
        var currentDate = now.getDate();
        
        //declare a variable to collect the age in year, month, and days
        var age = {};
        var ageString = "";
      
        //get years
        yearAge = currentYear - dobYear;
        
        //get months
        if (currentMonth >= dobMonth)
          //get months when current month is greater
          var monthAge = currentMonth - dobMonth;
        else {
          yearAge--;
          var monthAge = 12 + currentMonth - dobMonth;
        }
    
        //get days
        if (currentDate >= dobDate)
          //get days when the current date is greater
          var dateAge = currentDate - dobDate;
        else {
          monthAge--;
          var dateAge = 31 + currentDate - dobDate;
    
          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }
        //group the age in a single variable
        age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
    
    // return  ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
    console.log(age); 
    return age;
    }

}


function displayAge(){
    //display the calculated age
     document.getElementsByClassName("desc")[0].innerHTML =`Your Age is : ${calcAge()}`;
     document.getElementById("years").innerHTML =calcAgebyDays().years;
     document.getElementById("months").innerHTML =calcAgebyDays().months;
     document.getElementById("days").innerHTML =calcAgebyDays().days;
}

