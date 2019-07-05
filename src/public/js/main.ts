interface LoggerOption {
  env: "development" | "production";
}

class Logger {

  private option: LoggerOption;

  constructor(
    option: LoggerOption,
  ) {
    this.option = option;
  }

  public debug(...items: any): void {
    if (this.option.env === "development") {
      items.forEach((item: any): void => {
        // tslint:disable-next-line: no-console
        console.debug(item);
      });
    }
  }

}

const logger: Logger = new Logger({
  env: "development",
});

const form = document.querySelector<"form">("form");
if (form) {
  form.addEventListener("submit", (e) => {
    logger.debug(e);
  });
}
