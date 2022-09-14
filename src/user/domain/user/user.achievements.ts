import { ValueObject } from "../../../shared/domain/value-objects/value.object";

export class UserAchievements implements ValueObject<number> {
  constructor(private achievements: number) {
    this.validate();
  }

  validate() {
    if (!this.achievements) {
      throw new Error("User-Achievements is not valid");
    }
  }

  valueOf(): number {
    return this.achievements;
  }
}
