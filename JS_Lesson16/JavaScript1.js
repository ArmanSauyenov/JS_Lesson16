//Практика:
//1. Создать плагин, который при подключении, делает все элементы у которых есть
//css класс "movable" передвигаемыми в пределах своего родительского элемента.
//В плагин можно передать параметр цвета, в случае если он передан, то
//при перемещение блока менять его цвет на заданный.Если параметр не передан,
//    цвет не менять.

//2. Сделать форму регистрации с полями имя фамилия(одно поле), дата рождения, любимый язык.
//В форме дата выбирается с помощью datepicker, ограничить выбор даты для 18 +
//    (отнять 18 лет от текущей даты)


//Домашене задание:
//1. Сделать плагин проверки поля input на соответствие регулярному выражению
//Плагин должен как параметр принимать регулярное выражение в виде строки
//и два цвета errorColor и successColor
//по регулярному выражению должно проверяться значение input, и если проверка
//успешна то покрасить фон input в цвет successColor, если проверка не проходит,
//    то в цвет errorColor

//1)
jQuery.fn.myPlugin = function (options) {
    // extend - объединение двух объектов, с заменой
    options = $.extend({
        color: null,
        hover: null
    }, options)
    var make = function () {
        if (options.color != null) {
            $(this).on('mouseup', function () {
                $(this).css('background-color', '')
            }).on('mousedown', function () {
                $(this).css('background-color', options.color)
            })
            
        }
        $(this).draggable({ axis: 'x,y', containment: $(this).parent() })
    }
    return this.each(make);
}

$('.movable, .movable2').myPlugin({ color: 'yellow' });


//2

//jQuery.fn.myPlugin2 = function (options) {
//    // extend - объединение двух объектов, с заменой
//    options = $.extend({
//        color: null,
//        hover: null
//    }, options)
//    var make2 = function () {
//        $("#input2").datepicker({
//            dateFormat: 'd.m.yy',
//            maxDate: '',
//            minDate: '-18y'
//        });
//    }
//    return this.each(make2);
//}

//$('#input2').myPlugin2();

//как вариант на вторую задачу
$('#input2').datepicker({
            dateFormat: 'd.m.yy',
            maxDate: '-18y',
            minDate: ''
        });