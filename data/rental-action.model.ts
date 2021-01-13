import * as Yup from 'yup';

export class RentalActionData {

  constructor(
    readonly postalCode: string) {

  }

  static empty(): RentalActionData {
    return new RentalActionData(
      '',
    );
  }
}

export const RentalActionSchema = Yup.object().shape({
  postalCode: Yup.string().min(7, "郵便番号は７文字です"),
});

