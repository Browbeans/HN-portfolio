import { css, height, styled } from '@mui/system';

export type IconProps = {
    color?: string;
    height?: number;
    width?: number;
    title?: string;
};

type Rotation = 'up' | 'down';
type Flip = 'right' | 'left';
type DirectionalIconProps = { direction: Rotation | Flip };

const DirectionalIcon = styled('span')<DirectionalIconProps>(({ direction }) => {
    const directionMap = {
        left: css`
            transform: rotate(180deg);
        `,
        right: css`
            transform: rotate(0deg);
        `,
        up: css`
            transform: rotate(-90deg);
        `,
        down: css`
            transform: rotate(90deg);
        `,
    };

    return css`
        display: inline-flex;
        ${directionMap[direction]};
    `;
});

export const ArrowIcon = ({ color, direction, ...props }: IconProps & DirectionalIconProps) => {
    const icon = (
        <svg
            width={props.width || 24}
            height={props.height || 24}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M13.1727 12.5L8.22266 7.54999L9.63666 6.13599L16.0007 12.5L9.63666 18.864L8.22266 17.45L13.1727 12.5Z"
                fill={color || 'currentcolor'}
            />
        </svg>
    );

    if (direction) {
        return <DirectionalIcon direction={direction}>{icon}</DirectionalIcon>;
    }

    return icon;
};
