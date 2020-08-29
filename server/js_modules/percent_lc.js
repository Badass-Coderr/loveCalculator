module.exports = function() {
this.percent = function(name1,name2) {
    var str = "",      // to store the string to be checked
        a = [],        // array to store numbers for percentage calculation
        b = [],        // array to store values for array manipulation
        temp = "",     // string to store temporary values for string manipulation
        reg,           // store regular expression for matching similar elements in string
        i,             // iterator
        j;             // iterator

    // Arrange the string parameters is specific order and assign the value to the string to be checked

    if (name1.localeCompare(name2) > 0)
        str = name1 + "love" + name2;
    else
        str = name2 + "love" + name1;

    // Extract no. of instances of each element of the string present in that string

    while (str.length !== 0) {

        temp = "";
        reg = new RegExp(str[0],"gi");
        a.push ( str.match(reg).length );
        for (i=1; i<str.length; i++){
            if (str[i] !== str[0])
               temp += str[i];
        }

        str = temp;

    }

   /* Add the values of array in one-first-one-last manner and store the values in the same array
   until there are only 2 single digit elements left in the array */

    while (a.length !== 2) {

        i = 0;
        b = [];

        while (i <= (a.length-1-i)) {

            if (i === (a.length-1-i))
               b.push(a[i]);
            else
               b.push( a[i] + a[a.length-1-i] );
            i++;
        }

        // Convert all multiple digit element to single digit and push it to the array

        b = b.join(" ");                // returns a string containing all array elements separated by space.
        b = b.replace(/\s/g,"");        // removes all spaces.
        console.log(b);
        a = [];
        for (j=0; j<b.length; j++) {
            a.push( Number(b[j]) );
        }

    }

    return (a[0]*10) + a[1];
}
}
