//* Haciendo el famoso ejercicio fizz-buzz

for(i = 1; i <= 100; i++){
    let result = `${i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}`;
    console.log(result || i);
}
