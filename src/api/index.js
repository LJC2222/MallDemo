//当前这个模块：API进行统一管理
import requests from "./request";
//导入mock模块
import mockAjax from "./ajaxMock";

//三级联动接口
///api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => {
  //发请求
  return requests.get("/product/getBaseCategoryList");
};

export const reqBanners = () => {
  return mockAjax.get("/banners");
};

export const reqFloors = () => {
  return mockAjax.get("/floors");
};
