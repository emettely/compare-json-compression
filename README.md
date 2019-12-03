# Comparing memory usage and compression sizes of big JSON files

## Versions

### Original

### BSON

Varying output sizes

### TSV

### JSONC

Doesn't work

### JSON Array

### Stream (Big-JSON)

## Outcome

```js
> node ./src/tsv.js

File size: 1.94 MB
Just words In memory 0.54 MB
TSV 0.61 MB
File size: 0.31 MB
===========Memory Usage===========
rss 41.88 MB
heapTotal 26.45 MB
heapUsed 11.5 MB
external 0.78 MB
==========Elapsed Time==========
0 s, 162.078 ms

> node ./src/jsonArray.js

File size: 1.94 MB
Just words In memory 0.54 MB
JSON array 0.54 MB
Stringified 0.82 MB
File size: 0.41 MB
===========Memory Usage===========
rss 37.21 MB
heapTotal 17.8 MB
heapUsed 11.25 MB
external 1.19 MB
==========Elapsed Time==========
0 s, 190.019 ms

> node ./src/tsvStream.js

File size: 1.94 MB
Just words In memory 0.54 MB
TSV: 0.61 MB
File size: 0.31 MB
===========Memory Usage===========
rss 46.31 MB
heapTotal 25.76 MB
heapUsed 10.83 MB
external 0.97 MB
==========Elapsed Time==========
0 s, 228.903 ms
```
