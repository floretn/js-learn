export const COLOR = 'red'

export function compute(a, b) {
    return a + b
}

const privateVariable = 12

export default {
    log() {
        console.log(privateVariable)
    }
}