import { readdirSync, statSync } from "fs";
import { join } from "path";
import { Regex } from "../constants";

export const walk = (directory: string, filter: RegExp = Regex.Global.Any): Array<string> => {
  const results: Array<string> = new Array<string>();

  const read = (path: string): void => {
    readdirSync(path).forEach((file) => {
      const dir = join(path, file);

      if (!statSync(dir).isDirectory() && dir.match(filter)) results.push(dir);
      else read(dir);
    });
  };

  read(directory);

  return results;
};
