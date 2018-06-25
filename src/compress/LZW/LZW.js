var LZW = {
    compress: function (uncompressed) {
        "use strict";

        var dictionary = {};
        var result = [];
        var dictSize = 256;
        var w = "";
        var len = uncompressed.length;
        var i, c, wc;

        for (i = 0; i < len; i += 1) {
            c = uncompressed.charAt(i);
            wc = w + c;
            //Do not use dictionary[wc] because javascript arrays 
            //will return values for array['pop'], array['push'] etc
            if (dictionary.hasOwnProperty(wc)) {
                w = wc;
                continue;
            } 

            if (w && !dictionary.hasOwnProperty(w)) {
                dictionary[w] = w.charCodeAt();
            }

            if (dictionary.hasOwnProperty(w)) {
                result.push(dictionary[w]);
                dictionary[wc] = dictSize++;
            }
            // Add wc to the dictionary.
            w = String(c);
        }

        // Output the code for w.
        if (w !== "") {
            result.push(dictionary[w] || w.charCodeAt());
        }

        return result;
    },
    decompress: function (compressed) {
        "use strict";

        var dictionary = [];
        var entry = "";
        var dictSize = 256;
        var len = compressed.length;
        var i, w, result, k;

        result = w = String.fromCharCode(compressed[0]);

        for (i = 1; i < len; i += 1) {
            k = compressed[i];
            
            if (dictionary[k]) {
                entry = dictionary[k];
            } else if(k === dictSize) {
                entry = w + w.charAt(0);
            } else {
                entry = String.fromCharCode(k);
            }

            result += entry;

            // Add w+entry[0] to the dictionary.
            dictionary[dictSize++] = w + entry.charAt(0);

            w = entry;
        }

        return result;
    }
};