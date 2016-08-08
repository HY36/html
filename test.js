/**
 * Created by Administrator on 2016/8/4.
 */
//var
//    fileInput = document.getElementById('test-image-file'),
//    info = document.getElementById('test-file-info'),
//    preview = document.getElementById('test-image-preview');
//// 监听change事件:
//fileInput.addEventListener('change', function () {
//    // 清除背景图片:
//    preview.style.backgroundImage = '';
//    // 检查文件是否选择:
//    if (!fileInput.value) {
//        info.innerHTML = '没有选择文件';
//        return;
//    }
//    // 获取File引用:
//    var file = fileInput.files[0];
//    // 获取File信息:
//    info.innerHTML = '文件: ' + file.name + '<br>' +
//        '大小: ' + file.size + '<br>' +
//        '修改: ' + file.lastModifiedDate;
//    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
//        alert('不是有效的图片文件!');
//        return;
//    }
//    // 读取文件:
//    var reader = new FileReader();
//    reader.onload = function(e) {
//        var
//            data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'
//        preview.style.backgroundImage = 'url(' + data + ')';
//    };
//    // 以DataURL的形式读取文件:
//    reader.readAsDataURL(file);
//});

function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
};

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');
//function make_pow(n){
//    return function (x) {
//        return Math.pow(x,n);
//    };
//}
//
//var pow2 = make_pow(2);
//var pow3 = make_pow(3);
//
//console.log(pow2(5));
//console.log(pow3(7));
//
//var Student = {
//    name:'Robot',
//    height:1.2,
//    run: function(){
//        console.log(this.name + 'is running...');
//    }
//};
//
//function createStudent(name) {
//    var s = Object.create(Student);
//    s.name = name;
//    return s;
//}
//
//var xiaoming = createStudent('小明');
//xiaoming.run();
//console.log(xiaoming.__proto__ == Student);

//function Student(props) {
//    this.name = props.name || '匿名';
//}
//
//Student.prototype.hello = function () {
//    alert('Hello, ' + this.name + '!');
//};
//
//function createStudent(props){
//    return new Student(props || {})
//}
//
//var xiaoming = createStudent({name:'小明'});
//xiaoming.name;
//xiaoming.hello();
// PrimaryStudent构造函数:
//class Student {
//    constructor(name) {
//        this.name = name;
//    }
//    hello() {
//        alert('Hello, '+this.name+'!');
//    }
//}
//
//var xiaoming = new Student('小明');
//xiaoming.hello();
//
//class PrimaryStudent extends Student {
//    constructor(name, grade){
//        super(name);
//        this.grade = grade;
//    }
//
//    myGrade() {
//        alert('I am at grade '+this.grade);
//    }
//}
// 获取<p>javascript</p>节点:
//var js = document.getElementById('test-js');
//
//
//// 修改文本为JavaScript:
//// TODO:
//js.innerHTML = 'JavaScript'
//// 修改CSS为: color: #ff0000, font-weight: bold
//// TODO:
//js.style.color='#ff0000';
//js.style.fontSweight='bold';