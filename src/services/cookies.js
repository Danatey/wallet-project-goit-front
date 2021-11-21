import Cookies from "js-cookie";

function save(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  Cookies.set(name, value, options);
}

function get(name, options = {}) {
  Cookies.get(name, options);
}

function remove(name, options = {}) {
  options = {
    path: "/",
    ...options,
  };
  Cookies.remove(name, options);
}

const cookie = {
  save,
  get,
  remove,
};
export default cookie;
