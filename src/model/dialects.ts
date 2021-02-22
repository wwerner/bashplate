import gnuTemplate from "~templates/gnu.hbs";
import posixTemplate from "~templates/posix.hbs";

export enum Dialects {
  gnu,
  posix,
}

export const templates: any = {
  [Dialects.gnu]: gnuTemplate,
  [Dialects.posix]: posixTemplate,
};
