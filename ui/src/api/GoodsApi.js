import {CoreApi} from "../core/api/core/CoreApi";

export const GoodsApi = {
    getList: () => {
        return CoreApi.apiList("/goods/list", {pageSize: 10})
    }
}
