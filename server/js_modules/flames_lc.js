function flames(name1, name2) {

  var str = "",                 // to store concatenated names
    flames = "FLAMES",          // to store FLAMES result
    temp = "",                  // for string manipulation
    i = 0,                      // iterator
    j;                          // iterator

  str = name1 + name2;

  // Find pairs and eleminate to get a string of all unique elements

  while (i < str.length) {

    if (str.indexOf(str[i], i + 1) !== -1) {
      temp = "";

      for (j = 0; j < str.length; j++) {

        if (j !== i && j !== str.indexOf(str[i], i + 1))
          temp += str[j];
      }

      str = temp;
    } else
      i++;
  }

  /* Eliminate every elements which comes at (str.length) position, when counted in a circular manner, from FLAMES
     until there is only one element left in the string */

  while (flames.length !== 1) {

    i = (str.length - 1) % flames.length;
    temp = "";

    for (j = i + 1; j % flames.length !== i; j++) {

      temp += flames[j % flames.length];

    }

    flames = temp;
    console.log(flames);
  }

  return flames;
}

flames("jai","hind");
