export * from './easing';
export * from './vector';

export const Radius = (Degrees: number) => {
	return Degrees * Math.PI / 180;
};

export const Degrees = (Radians: number) => {
	return Radians * 180 / Math.PI;
};