1.ES6新增了let命令，让js有了块级作用域
2.普通的for循环：
	for(var i = 0;i < 10;i++){
		a[i] = function(){
			console.log(i);
		}
	}
打印的i都是10
	for(let i = 0;i < 10;i++){
		a[i] = function(){
			console.log(i);
		}
	}
如a[6]() // 6  每一个i都是新的，JS会记录上一次循环的i值，赋值给下一次循环。
3.let申明的变量不存在“变量提升”,所以必须先声明再使用
4.在es6严格模式下，避免在块级作用域中声明变量和函数。如果确实需要，应该写成函数表达式，而不是函数声明;
如:  
//函数声明语句
{
	let a = ""
	function f(){return a;}	
}
//函数表达式
{
	let a = "secret";
	let f = function(){
		return a;
	}
}
5.const 声明常量，一旦声明就必须立即初始化