import {fetchApi} from "@/libs/http/request_api";

const PREFIX = "/api/article";


/**
 * @typedef {Object} PortalCreateParams
 * @property {string} name - The name of the portal.
 * @property {string} url - The URL of the portal.
 */

/**
 * Creates a new portal.
 * @param {PortalCreateParams} [params] - The parameters for creating the portal.
 * @returns {Promise} - A Promise that resolves with the result of the HTTP request.
 */
export function ArticleList(params) {
    return fetchApi({method: "post", url: PREFIX + "/list", params});
}


