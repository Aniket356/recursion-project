const fibs = n => {
    //iterative function to return an array of n numbers in fibonacci sequence
    let arr = [0, 1]

    let a = 0
    let b = 1
    let c

    while(n > 2){
        c = a + b
        arr.push(c)
        a = b
        b = c
        n--
    }

    return arr
}