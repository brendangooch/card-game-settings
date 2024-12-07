/**
 * package barrel file
 */

export type tGameDifficulty = 'beginner' | 'easy' | 'normal' | 'hard' | 'expert';
export type tGameMode = 'demo' | 'client' | 'server';

export { DifficultySetting } from "./difficulty-setting.js";
export { ModeSetting } from "./mode-setting.js";
export { NumericSetting } from "./numeric-setting.js";
export { TimeLimitSetting } from "./time-limit-setting.js";