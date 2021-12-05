
function* foo(index = 0) {
    console.log(`before while idx = ${index}`);
    while (index < 2) {
        yield index;
        index++;
        console.log(`in while end idx = ${index}`);
    }
    console.log(`after while idx = ${index}`);
}

const iterator = foo();

console.log(iterator.next());
// expected output: 0

console.log(iterator.next());
// expected output: 1

console.log(iterator.next());
