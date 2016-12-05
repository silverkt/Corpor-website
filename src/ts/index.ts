import * as $ from 'jquery'
class Persion {
    name: string;
    height: number;
    say() {
        $("body").html(this.name+"身高"+ this.height);
    }
}


let XiaoQing = new Persion();
XiaoQing.name = "小卿";
XiaoQing.height = 182;
XiaoQing.say();