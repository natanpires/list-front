'use client';

import { increment, decrement } from '@redux/features/counter/counterSlice';
import type { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Button from './button/button.component';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          disabled={count === 0}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
