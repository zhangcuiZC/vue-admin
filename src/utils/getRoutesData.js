import headerMenuList from "../config/headerMenu.js";
import siderMenuList from "../config/siderMenu.js";

export default function getRoutesData(path) {
  const pathArr = path.slice(1).split("/");
  const routesData = [];
  if (pathArr.length) {
    const rootRoute = headerMenuList.find(item => item.name === pathArr[0]);
    routesData.push(rootRoute);
    if (pathArr[1]) {
      const parentRoute = siderMenuList[pathArr[0]].find(
        item => item.name === pathArr[1]
      );
      routesData.push(parentRoute);
      if (parentRoute.children) {
        const childRoute = parentRoute.children.find(
          item => item.name === pathArr[2]
        );
        childRoute && routesData.push(childRoute);

        if (pathArr[3] && childRoute.children) {
          const innerRoute = childRoute.children.find(
            item => item.name === pathArr[3]
          );
          innerRoute && routesData.push(innerRoute);
        }
      }
    }
  }
  return routesData;
}
