function add([x,y]){
	return x + y;
}
add([3,4]);

var map_array = new Map();

map_array.set(262,"standard");//键为数字
map_array.has(262); //true
map_array.get(262); //"standard"

//键遍历
for ( let key of map.key() ) {
    console.log("key: %s", key);
}

//值遍历
for ( let value of map.value() ) {
    console.log("value: %s", value);
}

//全部遍历
for ( let item of map.entries() ) {
    console.log("Key: %s, Value: %s", item[0], item[1]);
}

