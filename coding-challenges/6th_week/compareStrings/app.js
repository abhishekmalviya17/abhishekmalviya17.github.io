"use strict";

var compareStrings = function(a, b) {

    if (a.length != b.length) {
       console.log("Strings are not similar");
        return;
    }

    if (a.length == b.length) {
        var j = 0;
        for (var i = 0; i <= a.length; i++) {
            if (a[i] != b[i]) {
                 j++;

            }

        }
        console.log(j+" letters are not similar");


    }
}

compareStrings("abhishek","milkshek");