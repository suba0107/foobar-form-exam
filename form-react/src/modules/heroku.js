import { foobarUrl, beertypesUrl, orderUrl } from "./vars";
function getData(callback, name) {
  fetch(foobarUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((e) => e.json())
    .then((data) => {
      callback(data[name]);
    });
  // .then((res) => res.json())
  // .then((data) => {});
}
function postOrder(data) {
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
