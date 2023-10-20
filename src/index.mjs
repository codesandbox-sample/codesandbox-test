/**
 * const、let等の変数宣言
 */
/**
 * val変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

/**
 * let変数宣言
 */
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

/**
 * const変数宣言
 */
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可;
// const val3 = "const変数を上書き";

// const変数は再宣言不可;
// const val3 = "const変数を再宣言";

/**
 * constで定義したオブジェクト
 */
const val4 = {
  name: "me",
  age: 55,
};
console.log(val4);

// プロパティの追加、変更が可能;
val4.age = 45;
console.log(val4);

val4.address = "nagano";
console.log(val4);

/**
 * constで定義した配列
 */
const val5 = ["dog", "cat"];
console.log(val5);

// 配列の追加、変更が可能;
val5[0] = "bird";
console.log(val5);

val5.push("monkey");
console.log(val5);

/**
 *　テンプレート文字列
 */
const name = "me";
const age = 55;

//　従来の方法 +で結合
const messeage1 = "messeage1 私の名前は" + name + "です。" + "年齢は" + age + "です。";
console.log(messeage1);

// テンプレート文字列　``内で変数を${}
const messeage2 = `messeage2 私の名前は${name}です。年齢は${age}です。`;
console.log(messeage2);
