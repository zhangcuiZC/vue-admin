import headerMenuList from "../config/headerMenu.js";
import siderMenuList from "../config/siderMenu.js";

export default function getBreadList(path) {
  const pathArr = path.slice(1).split("/");
  const breadList = [];
  if (pathArr.length) {
    const rootItem = headerMenuList.find(item => item.name === pathArr[0]);
    breadList.push(rootItem);
    if (pathArr[1]) {
      const parentItem = siderMenuList[pathArr[0]].find(
        item => item.name === pathArr[1]
      );
      const currentItem = parentItem.children.find(
        item => item.name === pathArr[2]
      );
      breadList.push(parentItem);
      if (currentItem.parent) {
        const childItem = parentItem.children.find(
          item => item.name === currentItem.parent
        );
        breadList.push(childItem);
      }
      breadList.push(currentItem);
    }
  }
  return breadList;
}
