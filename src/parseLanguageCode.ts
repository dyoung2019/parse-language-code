import extractLanguageKey from "./extractLanguageKey";
import extractRegionCode from "./extractRegionCode";
import extractRegionValue from "./extractRegionValue";
import extractScriptTypeCode from "./extractScriptTypeCode";
import formatLanguageDescription from "./formatLanguageDescription";
import formatName from "./formatName";
import formatRegion from "./formatRegion";
import formatScriptType from "./formatScriptType";
import getInternationalLanguageName from "./getInternationalLanguageName";
import getNativeLanguageName from "./getNativeLanguageName";
import getOverrideDescription from "./getOverrideDescription";

export default function parseLanguage(code: string | null) {
  const languageCode = code || '';
  const parts = languageCode.split('-');

  const languageKey = extractLanguageKey(parts);
  const internationalLanguageName = getInternationalLanguageName(languageKey)

  // region value
  const regionKey = extractRegionCode(parts);
  const regionValue = extractRegionValue(regionKey);

  const nativeLanguageName = getNativeLanguageName(languageCode, languageKey);
  const overrideDescription = getOverrideDescription(languageCode);

  const scriptTypeKey = extractScriptTypeCode(parts);
  const scriptTypeFormatted = formatScriptType(scriptTypeKey);

  const regionFormatted = formatRegion(regionKey)
  const languageFormatted = formatLanguageDescription(nativeLanguageName, internationalLanguageName);

  const fullDescription = formatName(
    overrideDescription,
    scriptTypeKey,
    internationalLanguageName,
    scriptTypeFormatted,
    regionFormatted,
    regionValue, 
    languageFormatted);

  return {
    name: fullDescription,
    code: languageCode,
    overrideDescription,
    nativeLanguageName,
    internationalLanguageName,
    languageKey,
    languageFormatted,
    regionKey, 
    regionValue,
    regionFormatted,
    scriptTypeKey,
    // scriptTypeValue,
    scriptTypeFormatted
  }
}