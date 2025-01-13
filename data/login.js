const login = [
  {
    username: "root",
    password: "123456",
    token: "A1",
  },
  {
    username: "admin",
    password: "123456",
    token: "A2",
  },
  {
    username: "test",
    password: "123456",
    token: "A3",
  },
];
const userInfo = {
  A1: {
    userId: 1,
    username: "root",
    nickname: "超级管理员",
    avatar:
      "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
  },
  A2: {
    userId: 2,
    username: "admin",
    nickname: "系统管理员",
    avatar:
      "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
  },
  A3: {
    userId: 3,
    username: "test",
    nickname: "游客",
    avatar:
      "https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif",
  },
};
const roles = [
  {
    userId: 1,
    routesList: ["Root", "Admin", "Test"],
  },
  {
    routesList: ["Admin", "Test"],
    userId: 2,
  },
  {
    routesList: ["Test"],
    userId: 3,
  },
];
module.exports = {
  login,
  userInfo,
  roles,
};
