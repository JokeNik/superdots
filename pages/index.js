import ButtonWithCounter from '../components/ButtonWithCounter'

export default class extends React.Component{
    state = {
        "counter":0 ,
        "numbers" : [1 , 3 , 5 , 7] ,
    }
    handleOnClick = () => {
        this.setState({
            "counter":this.state.counter+1 ,
            "numbers": [...this.state.numbers , this.state.counter]
        })
        alert("Hello i am a button")
    }
    render() {
        let numberofHellos = this.state.counter
        if (numberofHellos>10){
            numberofHellos = 10
        }
        let listofHellos = this.state.numbers
            .filter((number, index)=> index < 10 )
            .map((number) => <li> {number} Hello </li>
        )
        let goodday = this.state.numbers
            .filter((number)=> number%3===1 && number<10)
            .map((number) => <ul> {number} Good day! </ul>)
        return (
            <>
                Привет!
                <a href="/contests">иди на контесты!</a>
                <button onClick={this.handleOnClick}>Кнопка></button>
                <p>{this.state.counter}</p>
                <ol>
                    {
                        listofHellos
                    }
                </ol>
            </>
        )
    }
}