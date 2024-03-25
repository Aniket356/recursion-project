const fibsRec = n => {
    //recursive function to return an array of n numbers in fibonacci sequence
    if(n === 1) return [0]
    else if (n === 2) return [0, 1]

    const prev = fibsRec(n-1)
    prev.push(prev.at(-1) + prev.at(-2))
    return prev
}