export interface JSXchildrenProps {
    children: JSX.Element;
}

export interface textChildrenProps{
    children: string
}

export interface ButtonInterface{
    children: string;
    cross?: boolean;
    type?: number;
    onClick?:React.MouseEventHandler<HTMLElement>
}