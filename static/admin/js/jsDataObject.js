var inputObjects = {
    MaxApplay: {
        title: '',
        input: '',
        saveFn: ''
    },
    formDisplay: {

        input: ' check ',
        saveFn: ''
    }
}

function EventHandler(element, eventType, fn) {
    const event = document.querySelector(`[${element}]`)
    event.addEventListener(eventType, fn);
}


// EventHandler('test','click',()=>{
//     console.log('Im Working')
// })




export { EventHandler, inputObjects } ;