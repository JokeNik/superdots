import Part1 from '../components/Part1'
import Part3 from '../components/Part3'
export default class extends React.Component {
    render() {
        return (
        <>
                <Part1 />
                <div id="wrapper">
                    <div id="nav">
                        <ul>
                            <br />

                            <li><a title="Памятка" href="documents/instruction.pdf">Памятка</a></li>


                            <li>&nbsp;</li>

                            <li><a title="Справка по системе" href="help">Помощь</a></li>

                            <li><a title="Войти в систему" href="login">Войти</a></li>
                        </ul>

                

                        <ul>
                            <li><a title="DOTS" href="http://dots.org.ua/">DOTS</a></li>
                            <li><a title="QBIT" href="http://qbit.org.ua/">QBIT</a></li>
                        </ul>
                    </div>
                    <div id="extra">
                        <p>&nbsp;</p>
                    </div>
                    <div id="content">
                </div>
                </div>    
                <Part3 />
        </>
            )
    }
}