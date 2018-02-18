import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" ;
const APIKEY = "&api-key=c0b4d2e16a014795bbdce9d7e4df8a95";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
