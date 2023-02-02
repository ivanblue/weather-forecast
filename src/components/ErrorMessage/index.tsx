import React from 'react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="text-white absolute bottom-3 left-[75px]">{message}</div>;
};

export default ErrorMessage;
