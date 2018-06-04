export default class Part3 extends React.Component {
render(){
    return (
    <>
            <div id="wrapper">
        <div id="nav">
            <ul>
                
                
                                <br/>

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
                     <div id="olymp">
                <p><font color="red"> <b>ИЮНЬ-ИЮЛЬ 2018:</b></font>  <b>ЛЕТНИЕ ИНТЕНСИВНЫЕ КУРСЫ ПО ПРОГРАММИРВАНИЮ</b> </p>
		<p><b>Организатор</b>: <a href="http://qbit.org.ua" target="blank">Молодёжное научное общество "Q-BIT"</a> </p>
          </div>

            <h1>ПРЕДСТАВЬТЕСЬ</h1>

                                    <p>&nbsp;</p>
            <form id="loginform" action="login" method="post" style="width: 400px; float: left;">
                <input type="hidden" name="from" value="" />
                <table id="loginformtable">
                    <tbody>
                        <tr>
                            <td><span class="ft">Логин:</span></td>
                            <td><input type="text" name="username" tabindex="1" value="" size="20" maxlength="60" class="e" style="width:150px" /></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td><span class="ft">Пароль:</span></td>
                            <td><input type="password" name="password" tabindex="2" value="" size="20" maxlength="60" class="e" style="width:150px" /></td>
                            <td>&nbsp;<a href="restore" class="fh">Забыли пароль?</a></td>
                        </tr>
                        <tr>
                            <td><span class="ft">&nbsp;</span></td>
                            <td><input type="checkbox" id="remember_me" name="remember_me" tabindex="3" value="1209600" class="e cb"/><label for="remember_me"> Запомнить вход</label></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;<input type="hidden" name="token" value="EV5qar5XtZ5IkT0g"/></td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><input type="submit" class="b" tabindex="4" value="Войти" /></td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </form>

			<br/>
			<b>Добро пожаловать в "Дистанционный практикум по программированию"</b>
			<br/>
			<br/>
		        <b>Методическое обеспечение проекта:</b>
			<ul>
			<li><a href="http://qbit.org.ua" target="blank">Молодёжное научное общество Q-BIT</a></li>
			<li><a href="http://ei.hneu.net/ru/faculty/departs/is/about" target="blank">Кафедра информационных систем ХНЭУ</a></li>

			</ul>
			Проект "Доступное программирование" осуществляется при поддержке			<a href="http://guonkh.gov.ua/" target="blank">Департамента науки и образования</a> Харьковской областной государственной администрации			<br/>
			<br/>
			<br/>
			</div>
 -->
     

        </div>
    </>
    )
}
}