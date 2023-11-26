function calculateage() {
    const Dob = new Date(document.getElementById("date").value);
    const today = new Date();
    const age = today.getFullYear() - Dob.getFullYear()
    const month = today.getMonth() - Dob.getMonth();
    const date = today.getDate() - Dob.getDate()
    const error = "Enter the valid date"

    if(today<Dob){
        return document.getElementById("result").innerHTML =error;
    }

    else if (today.getFullYear() > Dob.getFullYear()) {
        if (today.getMonth() > Dob.getMonth()) {
            if (today.getDate() >= Dob.getDate()) {
                return document.getElementById("result").innerHTML = "Your Age is " + age + " Years " + month + " months and " + date + " days";
            }
            else if (today.getDate() < Dob.getDate()) {
                var dat = 30 + date;
                var mnth1 = month-1;
                return document.getElementById("result").innerHTML = "Your Age is " + age + " Years " + mnth1 + " months and " + dat + " days";
            }
        }
        else if(today.getMonth() == Dob.getMonth()){
            if (today.getDate() >= Dob.getDate()) {
                return document.getElementById("result").innerHTML = "Your Age is " + age + " Years " + month + " months and " + date + " days";
            }
            else if (today.getDate() < Dob.getDate()) {
                var dat = 30 + date;
                var mnth2 = 11;
                var age1 = age-1;
                return document.getElementById("result").innerHTML = "Your Age is " + age1 + " Years " + mnth2 + " months and " + dat + " days";
            }
        
        }
        else if(today.getMonth() < Dob.getMonth()){
            if (today.getDate() >= Dob.getDate()) {
              var  age2 = age-1
            var mnth3= 12+month;
            return document.getElementById("result").innerHTML = "Your Age is " + age2 + " Years " + mnth3 + " months and " + date + " days";

        }
        else if (today.getDate() < Dob.getDate()) {
            var  age3 = age-1
            var mnth4= 11+month;
            var dat = 30 + date;
            return document.getElementById("result").innerHTML = "Your Age is " + age3 + " Years " + mnth4 + " months and " + dat + " days";


        }

    }
    
}
    else if(today.getFullYear() == Dob.getFullYear()) {
        if (today.getMonth() > Dob.getMonth()) {
            if (today.getDate() >= Dob.getDate()) {
                return document.getElementById("result").innerHTML = "Your Age is " + age + " Years " + month + " months and " + date + " days";
            } 
            else if(today.getDate() < Dob.getDate()){
                var mnth4 = month-1;
                var dat5=30+date;
                return document.getElementById("result").innerHTML = "Your Age is " + age + " Years " + mnth4 + " months and " + dat5 + " days";
            }
        }
        else if (today.getMonth() == Dob.getMonth()) {
            if (today.getDate() >= Dob.getDate()) {
                return document.getElementById("result").innerHTML = "Your Age is " + age + " Years " + month + " months and " + date + " days";
            } 
        }
        else if(today.getMonth() < Dob.getMonth()){
            return document.getElementById("result").innerHTML =error;
        }

    }

}