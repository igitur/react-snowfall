export interface SnowflakeProps {
    /** The color of the snowflake, can be any valid CSS color. */
    color: string;
    /**
     * The minimum and maximum radius of the snowflake, will be
     * randomly selected within this range.
     *
     * The default value is `[0.5, 3.0]`.
     */
    radius: [number, number];
    /**
     * The minimum and maximum speed of the snowflake.
     *
     * The speed determines how quickly the snowflake moves
     * along the y axis (vertical speed).
     *
     * The values will be randomly selected within this range.
     *
     * The default value is `[1.0, 3.0]`.
     */
    speed: [number, number];
    /**
     * The minimum and maximum wind of the snowflake.
     *
     * The wind determines how quickly the snowflake moves
     * along the x axis (horizontal speed).
     *
     * The values will be randomly selected within this range.
     *
     * The default value is `[-0.5, 2.0]`.
     */
    wind: [number, number];
    /**
     * The frequency in frames that the wind and speed values
     * will update.
     *
     * The default value is 200.
     */
    changeFrequency: number;
    /**
     * An array of images that will be rendered as the snowflakes instead
     * of the default circle shapes.
     */
    images?: CanvasImageSource[];
    /**
     * The minimum and maximum rotation speed of the snowflake (in degrees of
     * rotation per frame).
     *
     * The rotation speed determines how quickly the snowflake rotates when
     * an image is being rendered.
     *
     * The values will be randomly selected within this range.
     *
     * The default value is `[-1.0, 1.0]`.
     */
    rotationSpeed: [number, number];
}
export declare type SnowflakeConfig = Partial<SnowflakeProps>;
export declare const defaultConfig: SnowflakeProps;
/**
 * An individual snowflake that will update it's location every call to `update`
 * and draw itself to the canvas every call to `draw`.
 */
declare class Snowflake {
    static offscreenCanvases: WeakMap<CanvasImageSource, Record<number, HTMLCanvasElement>>;
    private config;
    private params;
    private framesSinceLastUpdate;
    private image?;
    constructor(canvas: HTMLCanvasElement, config?: SnowflakeConfig);
    private selectImage;
    updateConfig(config: SnowflakeConfig): void;
    private updateTargetParams;
    update(canvas: HTMLCanvasElement, framesPassed?: number): void;
    private getImageOffscreenCanvas;
    draw(ctx: CanvasRenderingContext2D): void;
}
export default Snowflake;
