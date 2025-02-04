import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Timer.style';
import Footer from '../../components/Footer/Footer';
import { useRecoilValue } from 'recoil';
import { ExerciseNameAtom } from '../../recoil/ExerciseAtoms';

function CircularTimer({ duration, onComplete, isAnimated = true }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const radius = 170;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        if (onComplete) onComplete();
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const progress = (timeLeft / duration) * circumference;
    setOffset(progress);
  }, [timeLeft, duration, circumference]);

  return (
    <div>
      <svg width="400" height="400">
        <circle
          cx="200"
          cy="200"
          r={radius} // 반지름
          fill="none"
          stroke="#f2f2f2" // 색
          strokeWidth="20" // 두께
          strokeLinecap="round" // 끝을 둥글게 설정
        />
        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="#ffceed"
          strokeWidth="20"
          strokeLinecap="round" // 끝을 둥글게 설정
          strokeDasharray={circumference}
          strokeDashoffset={isAnimated ? circumference - offset : 0} // 애니메이션 여부에 따른 조정
          style={{
            transition: isAnimated ? 'stroke-dashoffset 1s linear' : 'none', // 애니메이션 없애기
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <S.TimeText>{timeLeft}초</S.TimeText>
    </div>
  );
}

function Timer() {
  const [stage, setStage] = useState('intro'); // 초기 단계
  const [timeLeft, setTimeLeft] = useState(3); // 카운트다운용 시간 상태
  const [cycleCount, setCycleCount] = useState(0);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null); // 선택된 버튼 상태
  const exerciseName = useRecoilValue(ExerciseNameAtom);

  const handleClick = (choice) => {
    setSelected(choice); // 선택 상태 업데이트
  };

  // 운동 시작 전 인스로 텍스트 & 3초 타이머
  useEffect(() => {
    if (stage === 'intro') {
      const timeout = setTimeout(() => {
        setStage('countdown'); // 3초 카운트다운으로 전환
      }, 3000);
      return () => clearTimeout(timeout);
    }

    if (stage === 'countdown') {
      if (timeLeft > 0) {
        const countdown = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(countdown);
      } else {
        setStage('exercise'); // 운동 단계로 전환
        setTimeLeft(60); // 운동 시간 초기화
      }
    }
  }, [stage, timeLeft]);

  const handleComplete = () => {
    if (stage === 'exercise') {
      setStage('rest');
      setTimeLeft(20); // 휴식 시간 초기화
    } else if (stage === 'rest') {
      if (cycleCount < 2) {
        setCycleCount(cycleCount + 1);
        setStage('exercise');
        setTimeLeft(60); // 운동 시간 초기화
      } else {
        setStage('finished');
      }
    }
  };

  return (
    <S.Component>
      {stage === 'intro' && <S.Intro><span style={{ color: '#5061ff'}}>3초</span>&nbsp;후<br/>{exerciseName}<br/>운동이 시작됩니다.</S.Intro>}
      {stage === 'countdown' && <S.ThreeTimer>{timeLeft}</S.ThreeTimer>}
      {/* 운동 타이머 */}
      {stage === 'exercise' && 
        <div>
          <S.ExerciseName>'{exerciseName}'</S.ExerciseName>
          <S.SetBox>SET {cycleCount + 1}</S.SetBox>
          <S.ExerciseBox>
            운동중입니다.
          </S.ExerciseBox>
          <S.CircleTimer>
            <CircularTimer duration={60} onComplete={handleComplete} isAnimated={true} />
          </S.CircleTimer>
        </div>
      }
      {/* 쉬는 타이머 */}
      {stage === 'rest' && 
        <div>
          <S.ExerciseName>'{exerciseName}'</S.ExerciseName>
          <S.SetBox>SET {cycleCount + 1}</S.SetBox>
          <S.ExerciseBox>
            쉬는시간입니다.
          </S.ExerciseBox>
          <S.CircleTimer>
            <CircularTimer duration={20} onComplete={handleComplete} isAnimated={true} />
          </S.CircleTimer>
        </div>
      }
      {stage === 'finished' && (
        <div>
          <S.Finish>운동이 종료되었습니다.<br/>추천한 운동이 어땠나요?</S.Finish>
          <S.ChoiceBox>
            <S.ChoiceButton
              isSelected={selected === 'bad'}
              onClick={() => handleClick('bad')}
            >
              <div style={{fontSize:'50px'}}>😥</div>별로예요
            </S.ChoiceButton>
            <S.ChoiceButton
              isSelected={selected === 'good'}
              onClick={() => handleClick('good')}
            >
              <div style={{fontSize:'50px'}}>😊</div>좋았어요
            </S.ChoiceButton>
          </S.ChoiceBox>

          <S.ExitBtn
            isDisabled={selected}
            onClick={() => {
              if (selected != null) {
                navigate('/exercise');
              } else{
                alert('추천이 어땠는지 선택해 주세요.');
              }
            }}
          >
            종료하기
          </S.ExitBtn>
        </div>
      )}
    </S.Component>
  );
}

export default Timer;
