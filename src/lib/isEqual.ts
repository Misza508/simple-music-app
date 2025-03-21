type AnyObject = {
  [key: string]: any;
};

export function isEqual<T extends AnyObject>(x: T, y: T): boolean {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;

  return x && y && tx === "object" && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every((key) => isEqual(x[key], y[key]))
    : x === y;
}
