// TypeScript declaration for importing JPG files
// Allows: import myImage from './my-image.jpg';
declare module '*.jpg' {
  const value: string;
  export default value;
}
