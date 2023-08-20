import React, { useState } from "react";
import styles from "../LanguageLevel/LanguageLevel.module.scss";
import { Language, SkillLevelEnum } from "../../utils/openapi";

const skillLevelNames: Record<SkillLevelEnum, string> = {
  [SkillLevelEnum.Newbie]: "Новичок",
  [SkillLevelEnum.Amateur]: "Любитель",
  [SkillLevelEnum.Profi]: "Профи",
  [SkillLevelEnum.Expert]: "Эксперт",
  [SkillLevelEnum.Guru]: "Гуру",
  [SkillLevelEnum.Native]: "Носитель",
};

interface LanguagelevelProps {
  languagesData: Language[];
  selectedLanguage: Language | null;
  selectedSkillLevels: SkillLevelEnum[];
  onLanguageChange: (language: Language | null) => void;
  onSkillLevelsChange: (skillLevels: SkillLevelEnum[]) => void;
  onReset: () => void;
}

const Languagelevel: React.FC<LanguagelevelProps> = ({
  languagesData,
  selectedLanguage,
  selectedSkillLevels,
  onLanguageChange,
  onSkillLevelsChange,
  onReset,//функция обнуленя состояний, сдесь присутствует как пропс
}) => {
  // console.log("languagesData:", languagesData);
  // console.log("selectedLanguage:", selectedLanguage);
  // console.log("selectedSkillLevels:", selectedSkillLevels);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number | null>(null);

  const filteredLanguages = languagesData.filter(
    (language) =>
      language.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      language.name_local.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setInputValue(language.name);
    setIsOpen(false);
    setSelectedSuggestionIndex(null);
  };

  const handleSkillLevelChange = (skillLevel: SkillLevelEnum) => {
    if (selectedSkillLevels.includes(skillLevel)) {
      onSkillLevelsChange(selectedSkillLevels.filter((level) => level !== skillLevel));
    } else {
      if (skillLevel === SkillLevelEnum.Native) {
        onSkillLevelsChange([SkillLevelEnum.Native]);
      } else {
        if (
          selectedSkillLevels.length < 3 &&
          !selectedSkillLevels.includes(SkillLevelEnum.Native)
        ) {
          onSkillLevelsChange([...selectedSkillLevels, skillLevel]);
        }
      }
    }
  };

  const sortedLanguages = filteredLanguages.sort((a, b) =>
    a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' })
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => {
        if (prevIndex === null) {
          return 0;
        } else if (prevIndex < sortedLanguages.length - 1) {
          return prevIndex + 1;
        } else {
          return prevIndex;
        }
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) => {
        if (prevIndex === null) {
          return sortedLanguages.length - 1;
        } else if (prevIndex > 0) {
          return prevIndex - 1;
        } else {
          return prevIndex;
        }
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSuggestionIndex !== null) {
        handleLanguageSelect(sortedLanguages[selectedSuggestionIndex]);
      } else if (inputValue.trim() !== '') {
        const matchedLanguage = sortedLanguages.find(language =>
          language.name.toLowerCase() === inputValue.toLowerCase()
        );
        if (matchedLanguage) {
          handleLanguageSelect(matchedLanguage);
        }
      }
      setIsOpen(false);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      if (inputValue === '' && selectedSuggestionIndex === null) {
        onLanguageChange(null);
      }
      setInputValue('');
      setSelectedSuggestionIndex(null);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={styles.language}>
      <input
        type="text"
        className={styles.language__items}
        value={selectedLanguage ? selectedLanguage.name : inputValue}
        placeholder="Напишите или выберете"
        onClick={() => setIsOpen(!isOpen)}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
        {isOpen && (
          <div className={styles.language__languageList}>
            {sortedLanguages.map((language) => (
              <div
                key={language.isocode}
                className={styles.language__languageList_option}
                onClick={() => {
                  onLanguageChange(language);
                  setInputValue(language.name);
                  setIsOpen(false);
                }}
              >
                {language.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.language__level}>
        {Object.entries(skillLevelNames).map(([key, level]) => (
          <label key={level} className={styles.language__level_label}>
            <input
              type="checkbox"
              value={level}
              checked={selectedSkillLevels.includes(key as SkillLevelEnum)}
              onChange={() => handleSkillLevelChange(key as SkillLevelEnum)}
              className={styles.language__level_input}
              disabled={
                (key === SkillLevelEnum.Native && selectedSkillLevels.length > 0) ||
                (key !== SkillLevelEnum.Native &&
                  selectedSkillLevels.includes(SkillLevelEnum.Native))
              }
            />
            <span className={styles.language__level_checkbox_visible}></span>
            {level}
          </label>
        ))}
      </div>
    </>
  );
};

export default Languagelevel;
