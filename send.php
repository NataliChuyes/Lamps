<? // #начало Обработчик данных
header("Content-Type: text/html; charset=UTF-8");

if($_POST['name']) { $name = htmlspecialchars ($_POST['name']); }
if($_POST['phone']) { $phone = htmlspecialchars ($_POST['phone']); }
if($_POST['city']) { $city = htmlspecialchars ($_POST['city']); }
if($_POST['message']) { $message = htmlspecialchars ($_POST['message']); }
if($_POST['lamp']) { $lamp = htmlspecialchars ($_POST['lamp']); }
if($_POST['color']) { $color = htmlspecialchars ($_POST['color']); }
if($_POST['token']) { $token = htmlspecialchars ($_POST['token']); }
if($_POST['title']) { $title = htmlspecialchars ($_POST['title']); }
if($_POST['title']) { $title = htmlspecialchars ($_POST['title']); }
$ip_r = $_SERVER['REMOTE_ADDR'];

$product = "Кольцевая лампа"; // Подпись отправителя

$name1 =  substr(htmlspecialchars(trim($name)), 0, 100); 
$phone1 =  substr(htmlspecialchars(trim($phone)), 0, 20);

if(empty($name1)) {
	echo '<h2><p align=center><font color="red">Внимание! Запрещено отправлять пустые поля.<br> Вернитесь и заполните обязательные поля <b>"Имя"</b> и <b>"Телефон"</b></font><br><br><a href="javascript:history.back()">Вернуться назад</a></p></h2>';
	exit; }
	
if(empty($phone1)) {
	echo '<h2><p align=center><font color="red">Внимание! Запрещено отправлять пустые поля.<br> Вернитесь и заполните обязательные поля <b>"Имя"</b> и <b>"Телефон"</b></font><br><br><a href="javascript:history.back()">Вернуться назад</a></p></h2>';
	exit; } 
	
	if($_POST['tip']) { 
	
	if($_POST['tip'] == '1') { $model = 'Hover Ball 1 шт'; }
	if($_POST['tip'] == '2') { $model = 'Hover Ball 3 шт'; }
	if($_POST['tip'] == '3') { $model = 'Hover Ball 6 шт'; }
	
	} else { $model = '<span style="color:grey;">Данных нет</span>'; }
	
$tema_r = 'ЗАКАЗ: на Кольцевую лампу';	 
$to = "shopminsk-light@mail.ru"; // ЗДЕСЬ МЕНЯЕМ ПОЧТУ НА КОТОРУЮ ПРИХОДЯТ ЗАКАЗЫ!
$from="{$product} <noreply@{$_SERVER['HTTP_HOST']}>"; // Адрес отправителя

$subject="=?utf-8?B?". base64_encode("$tema_r"). "?=";
$header="From: $from"; 
$header.="\nContent-type: text/html; charset=\"utf-8\"";
$message = 'Имя: '.$name.' <br>Телефон: '.$phone.' 
 <br>Город: '.$city.'
 <br>Сообщение: '.$message.'
 <br>Модель: '.$lamp.'
 <br>Цвет: '.$color.'
<br>Страница заказа: '.$token.'

<br>Заказано с лендинга: '.$_SERVER['HTTP_REFERER'].' <br>IP адрес клиента: <a href="http://ipgeobase.ru/?address='.$ip_r.'">'.$ip_r.'</a><br>Время заказа: '.date("Y-m-d H:i:s").'';
?>

<?if(mail($to, $subject, $message, $header)):?>

<!-- ========================================================= НАЧИНАЕМ ФОРМИРОВАТЬ HTML СТРАНИЦУ ПОДТВЕРЖДЕНИЯ ======================================================== --> 
<!DOCTYPE html>
<html class="html" lang="ru-RU">

 <meta http-equiv="content-type" content="text/html;charset=UTF-8" /> 
<head>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
    <title>Спасибо за заказ!</title>
    <style>
        input.btn-back {
            width: 200px;
            color: #{param_btn-text_color};
            line-height: 35px;
            text-align: center;
            color: #000000;
            text-decoration: none;
            padding: 5px 10px;
            background-color: #F4F4F4;
            -moz-box-shadow: 0px 4px 0px #FA501E;
            -webkit-box-shadow: 0px 4px 0px #FA501E;
            box-shadow: 0px 4px 0px #FA501E;
            -moz-border-radius: 0px;
            -webkit-border-radius: 0px;
            border-radius: 0px;
            outline: none;
            box-sizing: border-box;
            -moz-box-sizing: border-box; /*Firefox 1-3*/
            -webkit-box-sizing: border-box; /* Safari */
            cursor:pointer;
            -webkit-transition: all linear 0.3s;
            -moz-transition: all linear 0.3s;
            -ms-transition: all linear 0.3s;
            -o-transition: all linear 0.3s;
            transition: all linear 0.3s;
            outline:none;
        }

        input.btn-back:hover {
            background-color: #DEDEDE;
            -webkit-transition: none;
            -moz-transition: none;
            -ms-transition: none;
            -o-transition: none;
            transition: none;
        }

        input.btn-back:active {
            position: relative;
            top: 3px;
            -moz-box-shadow: 0px 1px 0px #FA501E;
            -webkit-box-shadow: 0px 1px 0px #FA501E;
            box-shadow: 0px 1px 0px #FA501E;
        }

        /*

        */

        .version.thank_you /* version checker */
{
            color: #0000EE;
            background-color: #FF7333;
        }

        .html
        {
            background-color: #FFFFFF;
        }

        #page
        {
            z-index: 1;
            width: 940px;
            min-height: 374px;
            background-image: none;
            border-style: none;
            border-color: #000000;
            background-color: transparent;
            /*padding-bottom: 6626px;*/
            margin-left: auto;
            margin-right: auto;
        }

        #u1193
        {
            z-index: 2;
            width: 820px;
            border-width: 6px;
            border-style: solid;
            border-color: #FCC92F;
            background-color: transparent;
            position: relative;
            margin-right: -10000px;
            margin-top: 68px;
            left: 22px;
            padding: 36px 32px 24.274999999999977px;
        }

        #u1191-6
        {
            z-index: 3;
            width: 820px;
            min-height: 33px;
            background-color: transparent;
            line-height: 58px;
            /*font-size: 40px;*/
            color: #FA501E;
            font-weight: 900;
            position: relative;
        }

        #u1194
        {
            z-index: 13;
            width: 200px;
            min-height: 49px;
            border-style: none;
            border-color: transparent;
            background-color: transparent;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
            margin-left: 310px;
            margin-top: 69px;
            position: relative;
        }

        #u1192-4
        {
            z-index: 9;
            width: 620px;
            min-height: 34px;
            background-color: transparent;
            line-height: 36px;
            text-align: center;
            font-size: 25px;
            color: #181615;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400;
            position: relative;
            margin-right: -10000px;
            margin-top: 226px;
            left: 160px;
        }

        body
        {
            position: relative;
            min-width: 940px;
        }

        #page .verticalspacer
        {
            clear: both;
        }

        body,div,dl,dt,dd,ul,ol,li,nav,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td,a
        {
            margin: 0;
            padding: 0;
            border-width: 0;
            -webkit-transform-origin: left top;
            -ms-transform-origin: left top;
            -o-transform-origin: left top;
            transform-origin: left top;
        }

        h1,h2,h3,h4,h5,h6
        {
            font-size: 100%;
            font-weight: inherit;
        }

        .form_text
        {
            color: #FFFFFF;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 34px;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            padding: 0px;
        }


        .grpelem /* a child element of a group */
{
            display: inline;
            float: left;
        }
    </style>

</head>
<body>

<div class="clearfix" id="page"><!-- group -->
    <div class="clearfix grpelem" id="u1193"><!-- column -->
        <div class="form_text clearfix colelem" id="u1191-6"><!-- content -->
            <h2>Спасибо!</h2>
            <h2>Ваша заявка <strong id="lead-id"></strong> успешно принята</h2>
        </div>
        <div class="colelem" id="u1194"><!-- custom html -->

            <input type="button" class="btn-back" value="Вернуться на сайт" onclick="history.back()">

        </div>
    </div>
    <div class="clearfix grpelem" id="u1192-4"><!-- content -->
        <h3>Мы свяжемся с Вами в ближайшее время!</h3>
    </div>
    <div class="verticalspacer"></div>
</div>


</body>
 
</html>

<!-- ======================================================== ОКОНЧАНИЕ СТРАНИЦЫ ПОДТВЕРЖДЕНИЯ ======================================================== --> 
	
<?endif;?>