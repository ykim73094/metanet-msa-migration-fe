// src/atoms.js (또는 다른 적절한 파일)

import { atom } from 'recoil';

// 닉네임 상태
export const userIdAtom = atom({
  key: 'userIdAtom', // unique ID
  default: '', // 기본값은 빈 문자열
});

// 비밀번호 상태
export const passwordAtom = atom({
  key: 'passwordAtom', // unique ID
  default: '', // 기본값은 빈 문자열
});

// 이름 상태
export const userNameAtom = atom({
    key: 'userNameAtom', // unique ID
    default: '', // 기본값은 빈 문자열
  });

// 생년월일 상태
export const userBirthAtom = atom({
    key: 'userBirthAtom', // unique ID
    default: '', // 기본값은 빈 문자열
});

// 성별 상태
export const userGenderAtom = atom({
    key: 'userGenderAtom', // unique ID
    default: '', // 기본값은 빈 문자열
});

// 장애 유형 상태
export const userDisabilityAtom = atom({
    key: 'userDisabilityAtom', // unique ID
    default: '', // 기본값은 빈 문자열
});

// 장애 등급 상태
export const userDisabilityRankAtom = atom({
    key: 'userDisabilityRankAtom', // unique ID
    default: '', // 기본값은 빈 문자열
});

// 장애 상세 정보 상태
export const userDisabilityDetailAtom = atom({
    key: 'userDisabilityDetailAtom', // unique ID
    default: '', // 기본값은 빈 문자열
})

// 운동 경험 상태
export const userExerciseExperienceAtom = atom({
    key: 'userExerciseExperienceAtom', // unique ID
    default: '', // 기본값은 빈 문자열
})

// 운동 경험 상태
export const userExercisePurposeAtom = atom({
    key: 'userExercisePurposeAtom', // unique ID
    default: '', // 기본값은 빈 문자열
})
