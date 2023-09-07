import { observable, action } from 'mobx';
import { Language, SkillLevelEnum } from '../../utils/openapi';

class LanguageStore {
  @observable selectedLanguage: Language | null = null;
  @observable selectedSkillLevels: SkillLevelEnum[] = [];

  @action selectLanguage(language: Language | null) {
    this.selectedLanguage = language;
  }

  @action toggleSkillLevel(skillLevel: SkillLevelEnum) {
    if (this.selectedSkillLevels.includes(skillLevel)) {
      this.selectedSkillLevels = this.selectedSkillLevels.filter(
        (level) => level !== skillLevel,
      );
    } else {
      if (skillLevel === SkillLevelEnum.Native) {
        this.selectedSkillLevels = [SkillLevelEnum.Native];
      } else {
        if (
          this.selectedSkillLevels.length < 3 &&
          !this.selectedSkillLevels.includes(SkillLevelEnum.Native)
        ) {
          this.selectedSkillLevels = [...this.selectedSkillLevels, skillLevel];
        }
      }
    }
  }
}

const languageStore = new LanguageStore();
export default languageStore;
