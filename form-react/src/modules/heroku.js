import { foobarUrl, beertypesUrl, orderUrl } from "./Vars";
function getData(callback) {
  fetch(foobarUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {});
}
function postOrder(callback, data) {
  const postData = JSON.stringify(data);
  fetch(orderUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((orders) => console.log(orders));
}

export const Heroku = {
  getData,
  postOrder,
};
