var promise = new Promise(function (fulfill, reject) {
    setTimeout(
        ()=>{
//            fulfill('FULFILLED!')
            reject(new Error('REJECTED!'))
        }
    ,900)
  });

  function onReject (error) {
    console.log(error.message)
  }

  promise.then({},onReject)