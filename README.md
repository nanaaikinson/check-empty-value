# check-empty-value

[![npm version](https://img.shields.io/npm/v/check-empty-value.svg?style=flat)](https://www.npmjs.com/package/check-empty-value)
[![npm downloads](https://img.shields.io/npm/dm/check-empty-value.svg?style=flat)](https://www.npmjs.com/package/check-empty-value)
[![License](https://img.shields.io/npm/l/check-empty-value.svg?style=flat)](LICENSE)

A tiny zero-dependency utility to check if a value is **empty**.

---

## ✨ Features

- ✅ Works with **null** / **undefined**
- ✅ Detects empty **string**, **array**, **object**
- ✅ Supports **Map**, **Set**, **File** (size check)
- ✅ Handles **functions** (no parameters)
- ✅ Handles **Error** objects (empty message)
- ✅ Zero dependencies, lightweight, tree-shakable
- ✅ TypeScript ready

---

## 📦 Installation

```bash
npm install check-empty-value
# or
yarn add check-empty-value
# or
pnpm add check-empty-value
```

## 🚀 Usage

```ts
import { isEmpty } from "check-empty-value";

isEmpty(null); // true
isEmpty(undefined); // true
isEmpty(""); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty(new Error("")); // true

isEmpty(0); // true
isEmpty(false); // false
isEmpty("hello"); // false
isEmpty([1, 2, 3]); // false
isEmpty({ key: "val" }); // false
```
