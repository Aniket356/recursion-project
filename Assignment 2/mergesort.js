const merge = (arr1, arr2) => {
    //logic to merge two sorted arrays
    let i = 0
    let j = 0
    let mergedArr = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i])
            i++
        }
        else{
            mergedArr.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        mergedArr.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        mergedArr.push(arr2[j])
        j++
    }

    return mergedArr
}

const mergeSort = arr => {
    //returns a new sorted array, does not modify the original array
    const mid = arr.length/2

    if(arr.length > 1){
        const sortedLeftArr = mergeSort(arr.slice(0, mid))
        const sortedRightArr = mergeSort(arr.slice(mid, arr.length))
        arr = merge(sortedLeftArr, sortedRightArr)
    }

    return arr
}