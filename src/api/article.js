import {fetchApi} from "@/libs/http/request_api";

const PREFIX = "/api/article";

export function ArticleList(params) {
    return fetchApi({method: "post", url: PREFIX + "/list", params});
}

export function GetArticle(params) {
    return fetchApi({method: "post", url: PREFIX + "/get", params});
}


