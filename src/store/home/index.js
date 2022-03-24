import { reqCategoryList, reqBanners, reqFloors } from "@/api";
const state = {
  categoryList: [],
  banners: [],
  floors: [],
};
const mutations = {
  RECIEVE_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList.slice(0, categoryList.length - 2);
  },
  RECIEVE_BANNERS(state, banners) {
    state.banners = banners;
  },
  RECIEVE_FLOORS(state, floors) {
    state.floors = floors;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    let result = await reqCategoryList();
    console.log("请求categorylist异步操作，await执行完毕。");
    if (result.code == 200) {
      commit("RECIEVE_CATEGORY_LIST", result.data);
    }
    console.log(result);
  },
  async getBanner({ commit }) {
    let result = await reqBanners();
    console.log("请求banners异步操作，await执行完毕。");
    if (result.code == 200) {
      commit("RECIEVE_BANNERS", result.data);
    }
    console.log(result);
  },
  async getFloors({ commit }) {
    let result = await reqFloors();
    console.log("请求floors异步操作，await执行完毕。");
    if (result.code == 200) {
      commit("RECIEVE_FLOORS", result.data);
    }
    console.log(result);
  },
};
export default { state, mutations, actions };
