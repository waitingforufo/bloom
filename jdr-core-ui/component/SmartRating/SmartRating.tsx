import React, { useState } from 'react';
import './SmartRating.css';
import { SmartRatingProps } from './SmartRating.type';

const SmartRating: React.FC<SmartRatingProps> = (props) => {
  const [rating, setRating] = useState(0); // 当前的评分

  const stars = Array.from({ length: 5 }, (_, i) => i + 1); // 生成5个星星

  return (
    <div className={`star-rating rating-${props.theme}`}>
      <h1>{props.title}</h1>
      {stars.map((star) => {
        const starCss = star <= rating ? 'starActive' : 'starInactive';
        return (
          <button
            key={star}
            disabled={props.disabled}
            data-testid={`${props.testIdPrefix}-${star}`}
            className={`${starCss} star`}
            onClick={() => setRating(star)}
          >
            <span>★</span>
          </button>
        );
      })}
    </div>
  );
};

export default SmartRating;