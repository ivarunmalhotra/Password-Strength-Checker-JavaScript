var a, b=0, c=0, d=0, e=0, f=0, g=0, w=0, x=0, y=0, z=0, minus=0, n, ch, char;
  
  $(document).ready(function(){

        $("#pwd").keyup(function(){

    	a = $("#pwd").val();            // To import the String
        n = a.length;                   // To initialize th String length 
        ch = a.substring(n-1, n);       // To seperate characters from String
	
        // When we press characters from A to Z
        if(ch >= 'A' && ch <= 'Z' && b == 0 && n != 0)
        {
        	w = w+83.3333333;
                b = b+1;
                $("#pb").css("width", w);
		if(x != w)
                {
                        x = w;
                        char = ch;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
	        }
        }

        // When we press characters from a to z
        if(ch >= 'a' && ch <= 'z' && c == 0 && n != 0)
        {
        	w = w+83.3333333;
                c = c+1;
                $("#pb").css("width", w);
		if(x != w)
		{
                        x = w;
                        char = ch;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
		}
        }
        
        // When we press numbers from 0 to 9
        if(ch >= '0' && ch <= '9' && d == 0 && n != 0)
        {
        	w = w+83.3333333;
                d = d+1;
                $("#pb").css("width", w);
		if(x != w)
		{
                        x = w;
                        char = ch;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
	        }
        }
        
        // When characters are greater than 3 and less than 8
        if(n < 8 && e == 0 && n >=3)
        {
        	w = w+83.3333333;
                e = e+1;
                $("#pb").css("width", w);
	        if(x != w)
	        {
                        x = w;
                        char = ch;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
                }
        }

        // When characters enter are greater than 8
        if(n >= 8 && f == 0 && n != 0)
        {
        	w = w+83.3333333;
                f = f+1;
                $("#pb").css("width", w);
	        if(x != w)
	        {
                        x = w;
                        char = ch;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
		}
        }

        // Format for all special characters
        var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

	//When we press any of the above special characters
        if( ch.match(format) && g==0  && n!=0)
        {
  	        w = w+83.3333333;
                g = g+1;
                $("#pb").css("width", w);
		if(x != w)
	        {
                        x = w;
                        char = ch;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
	        }
	}

        // Value for Backspace key or Delete key
        var key = event.keyCode || event.charCode;

        // When we press Backspace key or Delete key
        if (w > 0 && key == 8 || key == 46)
        {
                n = n+1;
                minus=w/n;
                w = w-minus;
                n = n-1;
                $("#pb").css("width", w);
                if(x != w)
		{
                        x = w;

                        // To change the colour of bar at specific width
                        if(x<=166)
                                $("#pb").css("background-color","red");
		        else if(x<=277.3333333 && x>166)
		                $("#pb").css("background-color","yellow");
                        else if(x<=388.3333333 &&x>277.3333333)
                                $("#pb").css("background-color","orange");
                        else if(x>388.3333333)
                                $("#pb").css("background-color","green");
                        
                        // Initialize the deleted character count to 0 to increase the bar when pressed again
                        if(char >= 'A' && char <= 'Z')          // For alphabets A-Z
                                b=0;
                        if(char >= 'a' && char <= 'z')          // For alphabets a-z
                                c=0;
                        if(char >= '0' && char <= '9')          // For numbers 0-9
                                d=0;
                        else if(n < 8 && e == 1)                // For length less than 8 
                                e=0;
                        else if(n >= 8 && f == 1)               // For length greater than or equals to 8
                                f=0;
                        if(char.match(format))                  // For special characters
                                g=0;

                        //When width of the bar decreases to 0, length of characters enter becomes 0
                        if(w == 0)
                                n = 0;
                        
                }
        }
        
        // When length of characters becomes 0 than initializing the deleted characters count to 0 to increase the bar when pressed again
        if( n==0 )
        {
		$("#pb").css("width","0");
                a=b=c=d=e=f=g=w=0;               // For every variables A-z, a-z, 0-9, special characters, length less than or greater than equals to 8
	}
        
        });
  
  });