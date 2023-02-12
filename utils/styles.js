const FontBase = 16;

export function pxToRem(size) {
  let checksize;
  if (typeof size === "number") {
    checksize = size;
  } else if (typeof size === "string") {
    const len = size.indexOf("px") === -1 ? size.length : size.indexOf("px");
    checksize = parseInt(size.substring(0, len), 10);
  } else {
    checksize = FontBase;
  }

  const remSize = checksize / FontBase;
  return `${remSize}rem`;
}

