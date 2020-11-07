import React from 'react';

interface IInputProps{
    value: string;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({value, onChange}) => <input type="text" value={value} onChange={onChange}/>
export const Form: React.FunctionComponent = ({children}) => <form>{children}</form> // children은 오류가 나지 않는다. 모든 리액트 컴포넌트는 children이라는 값을 받을 수 있기 때문이다.