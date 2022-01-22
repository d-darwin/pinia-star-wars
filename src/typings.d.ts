declare module "*.css?module" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const filePath: string;
  export default filePath;
}
