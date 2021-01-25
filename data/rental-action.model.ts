import * as Yup from "yup";

export class RentalActionData {
  constructor(
    readonly postalCode: string,
    readonly prefectures: string,
    readonly municipality: string,
    readonly address: string,
    readonly buildingName: string
  ) {}

  static empty(): RentalActionData {
    return new RentalActionData("", "", "", "", "");
  }
}

const MAX_200_STRING_ERROR = "200文字以内で入力してください。";
export const RentalActionSchema = Yup.object().shape({
  postalCode: Yup.string().min(7, "郵便番号は７文字です"),
  prefectures: Yup.string().max(200, MAX_200_STRING_ERROR),
  municipality: Yup.string().max(200, MAX_200_STRING_ERROR),
  address: Yup.string().max(200, MAX_200_STRING_ERROR),
  buildingName: Yup.string().max(200, MAX_200_STRING_ERROR),
});
