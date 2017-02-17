import { Injectable } from "@angular/core";

@Injectable()
export class DatamainboardServices {
    /**
     * 获取主页面四率中的综合能源利用率
     */
    get4lall(scope: string) {
         console.log(scope+"4lall");
         return {
            percentage: "75%",
            inputall: "12436Wh",  //总输入
            outputall: "12234Wh"  //总输出
        }
    }
    /**
     * 获取主页面四率中co2减排率
     */
    get4lco2(scope: string) {
        console.log(scope+"4lco2");
        return {
            percentage: "20%",
            cool_heat: "12436Wh",               //制冷热量
            rated_cool_heat: "12436Wh",         //额定制冷热量
            electric_produce: "12436Wh",        //发电量
            rated_electric_produce: "12436Wh"   //额定发电量 
        }
    }
    /**
     * 获取主页面四率中的节能率
     */
    get4lsave(scope: string) {
        console.log(scope+"4lsave");
        return {
            percentage: "30%",
            gas: "12333Wh",
            renewable: "12222Wh"
        }
    }
    /**
     * 获取主页面四率中的清洁能源利用率
     */
    get4lclear(scope: string) {
        console.log(scope+"4lclear");
        return {
            percentage: "22%",
            geothermal_energy: "44444Wh",   //地热
            light_energy: "12121Wh",        //光热
            electric_energy: "3333Wh"       //电热
        }
    }
}