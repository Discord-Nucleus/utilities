export abstract class Regex {
  public static Global = class {
    public static Importable: RegExp = /^([^\.].*)(?<!\.d)\.(t|j)s$/;
    public static Any: RegExp = /.*/;
  };
  public static Route = class {
    public static Params: RegExp = /\[(.*?)\]/g;
    public static Extra: RegExp = /(?:index)?\.(t|j)s$/;
  };
}
