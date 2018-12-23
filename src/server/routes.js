import { loadData as loadUserData } from "../users/Users";

const routes = [
  {
    loadData: undefined,
    routes: [
      {
        path: "/",
        exact: true
      },
      {
        path: "/users",
        loadData: loadUserData
      }
    ]
  }
];

export default routes;
