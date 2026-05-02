import React from 'react';

const StarRating = ({rating}) => {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
                const full = rating >= star;
                const half = !full && rating >= star - 0.5;

                return (
                    <svg key={star} width="14" height="14" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id={`half-${star}`}>
                                <stop offset="50%" stopColor="#EF9F27" />
                                <stop offset="50%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            fill={full ? "#EF9F27" : half ? `url(#half-${star})` : "none"}
                            stroke="#EF9F27"
                            strokeWidth="1.5"
                        />
                    </svg>
                );
            })}
        </div>
    );
};

export default StarRating;