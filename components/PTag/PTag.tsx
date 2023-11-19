import styles from './PTag.module.css';
import {JSX} from "react";
import {PTagProps} from "./PTag.props";
import cn from "classnames";

export function PTag({size = 'medium', children, className, ...props}: PTagProps): JSX.Element {
    return (
        <p
            className={cn(styles.ptag, className, {
                [styles.small]: size == 'small',
                [styles.medium]: size == 'medium',
                [styles.large]: size == 'large',
            })}
            {...props}
        >
            {children}
        </p>
    );
}