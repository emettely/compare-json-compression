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

TSV is faster and will reduce the file size slightly more.
If the file size of wordsOnly.json is 0.78 MB - the compression rate is 60% for TSV, 47% for JsonArray. They are similar in terms of needing to parse (with `TSV.parse(data)` and `JSON.parse(data)`) although one requires an extra dependency (TSV) but the other takes a fraction more time to parse.

TSVs are easy to reason about enough.

```js
> node ./src/gzip

In-memory size 0.54 MB
Stringify 1.55 MB
Gzipped in memory 0.9 MB
File size: 0.11 MB
===========Memory Usage===========
rss 42.37 MB
heapTotal 21.88 MB
heapUsed 13.54 MB
external 2.59 MB
==========Elapsed Time==========
0 s, 121.631 ms

> node ./src/tsv.js

Just words In memory 0.54 MB
TSV 0.61 MB
File size: 0.31 MB
TSV to JSON: 0.54 MB
===========Memory Usage===========
rss 42.27 MB
heapTotal 26.45 MB
heapUsed 11.5 MB
external 0.78 MB
==========Elapsed Time==========
0 s, 182.240 ms

> node ./src/jsonArray.js

Just words In memory 0.54 MB
Stringified 0.82 MB
File size: 0.41 MB
String to JSON 0.54 MB
===========Memory Usage===========
rss 36.71 MB
heapTotal 17.8 MB
heapUsed 10.56 MB
external 0.78 MB
==========Elapsed Time==========
0 s, 221.286 ms

> node ./src/tsvStream.js

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
