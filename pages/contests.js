export default class extends React.Component {
    render() {
    return(
        <>
            <style>{`
                h1{
                    background : red;
                    background : #FF0000;
                    background : rgb(255,0,0) ;
                    

                    button {
                        font-weight:bold ;
                    }
                }
            `    
            }</style>
            <script src="style.js"></script>
            <link rel="stylesheet" href="style.css"/>
            <link href="/static/base.css" rel="stylesheet"/>
            <a href="/">Домой!</a>
            <h1> Это список контестов!</h1>
        </>
        )
    }
}