import { ComponentProps } from 'react';

type IconProps = ComponentProps<'svg'>;

export const CircleIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="11" cy="11" r="10.5" stroke="#9FA5B7" />
    </svg>
  );
};

export const CheckIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="11" cy="11" r="10.5" fill="#215BFB" stroke="#215BFB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2004 7.36586C16.3078 7.4733 16.3681 7.619 16.3681 7.77091C16.3681 7.92283 16.3078 8.06853 16.2004 8.17597L9.75967 14.6173C9.70114 14.6758 9.63166 14.7223 9.55518 14.754C9.4787 14.7856 9.39672 14.802 9.31394 14.802C9.23115 14.802 9.14918 14.7856 9.0727 14.754C8.99622 14.7223 8.92673 14.6758 8.86821 14.6173L5.6679 11.417C5.61467 11.3637 5.57244 11.3005 5.54363 11.231C5.51483 11.1614 5.5 11.0869 5.5 11.0116C5.5 10.9363 5.51483 10.8618 5.54363 10.7922C5.57244 10.7227 5.61467 10.6595 5.6679 10.6063C5.72113 10.553 5.78432 10.5108 5.85387 10.482C5.92342 10.4532 5.99796 10.4384 6.07324 10.4384C6.14851 10.4384 6.22305 10.4532 6.2926 10.482C6.36215 10.5108 6.42534 10.553 6.47857 10.6063L9.31451 13.4422L15.3897 7.36586C15.4972 7.25846 15.6429 7.19812 15.7948 7.19812C15.9467 7.19812 16.093 7.25846 16.2004 7.36586Z"
        fill="white"
      />
    </svg>
  );
};
