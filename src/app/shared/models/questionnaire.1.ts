export class Question{
  contenu: string;
  type_reponse:Options;
  reponse_ouverte: Options_o;
  reponse_fermee: Options_f;
  nbr_choix:number;
}

type Options = "ouverte" | "fermee";
type Options_o = "numerique" | "texte";
type Options_f = "unique" | "multiple" | "ordonnee" | "echelle";