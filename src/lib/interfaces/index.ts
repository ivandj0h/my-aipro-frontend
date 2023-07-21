import React, {ButtonHTMLAttributes, InputHTMLAttributes, ReactNode} from "react";

export interface LabelProps {
    id: string;
    children: React.ReactNode;
};

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    type?: string;
    className?: string;
};

export type Variant = 'solid' | 'outline';
export type SolidColor = 'cyan' | 'white' | 'gray';
export type OutlineColor = 'gray';
export type Color = SolidColor | OutlineColor;

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    href?: string;
}

export interface SolidButtonProps extends ButtonBaseProps {
    variant: 'solid';
    color: SolidColor;
}

export interface OutlineButtonProps extends ButtonBaseProps {
    variant: 'outline';
    color: OutlineColor;
}

export type ButtonProps = SolidButtonProps | OutlineButtonProps;

export type SolidColorVariant = {
    [C in SolidColor]: string
}

export type OutlineColorVariant = {
    [C in OutlineColor]: string
}

export type VariantStyles = {
    solid: SolidColorVariant;
    outline: OutlineColorVariant;
}

export interface ProviderProps {
    children: ReactNode;
}

export interface AuthLayoutProps {
    children: ReactNode;
}
