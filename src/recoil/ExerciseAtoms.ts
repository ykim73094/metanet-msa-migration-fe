import { atom } from 'recoil';

// 운동이름 상태
export const ExerciseNameAtom = atom({
  key: 'ExerciseNameAtom', // unique ID
  default: '', // 기본값은 빈 문자열
});