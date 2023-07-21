import { forwardRef, ForwardedRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ButtonProps, SolidColorVariant, OutlineColorVariant, VariantStyles } from "@/lib/interfaces";

const baseStyles = {
    solid:
        'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
    outline:
        'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors'
}

const variantStyles: VariantStyles = {
    solid: {
        cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
        white:
            'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
        gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80'
    },
    outline: {
        gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80'
    }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    props,
    ref
) {
    const { variant = 'solid', color = 'gray', className, href, ...restProps } = props;

    let variantStyle: string;
    if (variant === 'solid') {
        variantStyle = (variantStyles[variant] as SolidColorVariant)[color];
    } else {
        // Check if color is 'gray' before trying to access it in the OutlineColorVariant
        if (color === 'gray') {
            variantStyle = (variantStyles[variant] as OutlineColorVariant)[color];
        } else {
            throw new Error('Invalid color for outline variant');
        }
    }

    const buttonClassName = clsx(
        baseStyles[variant],
        variantStyle,
        className
    )

    return href ? (
        <Link href={href}>
            <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={buttonClassName} {...restProps as AnchorHTMLAttributes<HTMLAnchorElement>} />
        </Link>
    ) : (
        <button ref={ref} className={buttonClassName} {...restProps} />
    )
})

export default Button;
