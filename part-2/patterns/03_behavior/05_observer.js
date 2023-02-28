//Как-будто бы немного не обзёрвер...
class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    fire (action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }

}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'increment':
                this.state = ++this.state
                break
            case 'decrement':
                this.state = --this.state
                break
            case 'add':
                this.state += action.payload
                break
            default: this.state = this.initialState
        }
    }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type: 'increment'})
stream$.fire({type: 'increment'})
console.log(obs1.state);
console.log(obs2.state);
stream$.fire({type: 'decrement'})
stream$.fire({type: 'add', payload: 12})
console.log(obs1.state);
console.log(obs2.state);
