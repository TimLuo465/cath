# Lempel–Ziv–Welch(LZW)

LZW is a universal lossless data compression algorithm created by [Abraham Lempel](https://en.wikipedia.org/wiki/Abraham_Lempel), [Jacob Ziv](https://en.wikipedia.org/wiki/Jacob_Ziv), and [Terry Welch](https://en.wikipedia.org/wiki/Terry_Welch). More details in [Wiki](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch).

## Usage

```js
    LZW.compress("用法a用法a"); // [29992, 27861, 97, 256, 97]
    LZW.decompress([29992, 27861, 97, 256, 97]); // "用法a用法a"
```

## Awesome

1. [lz-string](https://github.com/pieroxy/lz-string)
2. [LZW compression](http://rosettacode.org/wiki/LZW_compression)