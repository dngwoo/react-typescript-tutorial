import React, { Component } from 'react'

interface IState{
    counter: number
}

class App extends Component<{}, IState>{ // P는 props, S는 state를 의미한다.
    state = {
        counter: 0
    }
    add = (): void => { // 타입추론을 통해 알아서 return값이 void인것을 지정해준다. 하지만 명시해줘도 상관없다.
        this.setState(prev => {
            return {
                counter: prev.counter + 1 // 여기에 오류가 나게 되는데 Component부분에 타입을 지정해준다. (IState)
            }
        })
    }
    minus = (): void => {
        this.setState(prev => {
            return {
                counter: prev.counter - 1 // 여기에 오류가 나게 되는데 Component부분에 타입을 지정해준다. (IState)
            }
        })
    }
    render(){
        const { counter } = this.state
        return (
            <>
                {counter}
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </>
        )
    }
    
}

export default App