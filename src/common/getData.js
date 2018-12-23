import { loadData as loadUserData } from "../users/Users";
import { matchRoutes } from 'react-router-config';

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

function noOp() {}

export default function getData(path) {
    const matches = matchRoutes(routes, path);
    return matches
        .filter(m => !!m.route.loadData)
        .map(m => m.route.loadData().catch(noOp));
}
