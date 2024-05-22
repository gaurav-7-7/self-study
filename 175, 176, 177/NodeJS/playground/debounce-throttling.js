const input = document.querySelector("input");
const defaultTxt = document.getElementById('default')
const debounceTxt = document.getElementById('debounce')
const throttleTxt = document.getElementById('throttle')

const updateDebounceTxt = debounce((txt) => {
    debounceTxt.textContent = txt
}, 250)

input.addEventListener("input", e => {
    defaultTxt.textContent = e.target.value
    updateDebounceTxt(e.target.value)
})

function debounce(cb, delay) {
    // logic for the delay
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}