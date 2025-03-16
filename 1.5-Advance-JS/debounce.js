/**
 * Debounce is and important part when we decide the interval in which we want our code/function to run
 * Multiple button clicks, Input search fields, Window Resize event all these are areas where debounce in a better option
 */

const initApp = () => {
    // button debounce implementation
    const button = document.querySelector('button')
    button.addEventListener('click', debounceButton(clicking, 2000));

    // input field debounce implementation
    const input = document.querySelector('input')
    const defaultText = document.getElementById('default')
    const debounceText = document.getElementById('debounce')
    const throttleText = document.getElementById('throttle')

    const updateDebounceText = debounceInput(text => {
        debounceText.textContent = text
    })

    const updateThrottleText = throttleInput(text => {
        throttleText.textContent = text
    })

    input.addEventListener('input', e => {
        let text = e.target.value
        defaultText.textContent = text
        updateDebounceText(text)
        updateThrottleText(text)
    })
}

const clicking = () => console.log('Clicked')

document.addEventListener('DOMContentLoaded', initApp)

const debounceButton = (fn, delay) => {
    let id;
    console.log(`ID at immediate load: ${id}`);
    return (...args) => {
        console.log(`Previous id: ${id}`)
        if(id) clearTimeout(id)
        id = setTimeout(() => {
            fn(...args);
        }, delay)
    }

}

function debounceInput(cb, delay = 1000) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

function throttleInput(cb, delay = 1000) {
    let wait = false
    let waitingArgs
    const timeoutFunc = () => {
        if(waitingArgs == null){
            wait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }
    return (...args) => {
        if(wait) {
            waitingArgs = args
            return
        }
        cb(...args)
        wait = true

        setTimeout(timeoutFunc, delay)
    }
}