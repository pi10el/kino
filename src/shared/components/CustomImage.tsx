import Image, { ImageProps } from 'next/image';

export const CustomImage = (props: ImageProps) => (
  <Image
    unoptimized
    draggable={false}
    placeholder="blur"
    width="0"
    height="0"
    sizes="100vw"
    {...props}
  />
);
