import Part1 from '../components/Part1'
export default class extends React.Component {
    render() {
        return (
            <>
                <Part1 />
                <a href="/" id='k'>Заказать выполнение работ!</a>
                <p> <a href="/codeforces.com" id='f'>Узнать больше</a> </p>
                <p id='ff'> Нам уже 10 лет </p>
                
                <style>{`
                #ff{
                    background : green ;
                    background : #FF0000;
                    background : rgb(300,5,6) ;
                    color:yellow ;      
                    font-size: 5.5.em; 
                }
                #k{
                    background : yellow ;
                    background : #FF0000;
                    background : rgb(300,5,6) ;
                    color:yellow ;      
                    font-size: 2.3.em;                 
                }
                #f{
                    background : yellow ;
                    background : #FF0000;
                    background : rgb(300,6,6) ;
                    color:yellow ;      
                    font-size: 5.5.em;
                }
                h1{
                    background : red;
                    background : #FF0000;
                    background : rgb(300,0,0) ;
                    color: yellow ;
                    font-size: 3.3.em;

                    button {
                        font-weight:bold ;
                    }
                
                }
                h2{
                    background : yellow;
                    background : #FF0000;
                    background : rgb(200,5,10) ;
                    color: black ;
                    font-size: 3.3.em;

                    button {
                        font-weight:bold ;
                    }
                
                }
            `   
            }
            }</style>
                <link href="/static/base.css" rel="stylesheet"/>
                
            
                
            </>
        )
    }
}