'use strict'

var promise = new Promise( function(fulfill, reject) {
    setTimeout(
        ()=>{
            fulfill('FULFILLED!')
//            console.log('FULFILLED')
        }
    ,900)
})
promise.then(console.log)