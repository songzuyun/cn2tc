import trans from "./trans";

function isChinese(s) {
  return /[\u4e00-\u9fa5]/.test(s);
}

function traditionlize(value) {
  return trans(value);
}

export default function () {
  return {
    visitor: {
      StringLiteral(path) {
        if (isChinese(path.node.value)) {
          path.node.value = trans(path.node.value);
        }
      },
    },
  };
}
