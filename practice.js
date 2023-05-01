Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz", and any number divisible by both 3 and 5 with the word "fizzbuzz".


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(fizzBuzz)
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz()



function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

    fizzBuzz()

    function fizzBuzz() {
        for (let i = 0; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('fizzBuzz')
            } else if (i % 5 === 0) {
                console.log('buzz')
            } else if (i % 3 === 0) {
                console.log('fizz')
            } else {
                console.log(i)
            }
        }
    }

    fizzBuzz()