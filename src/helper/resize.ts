import sharp from 'sharp';

interface sharpProps {
  imgPath: string;
  width: number;
  height: number;
  processedImgPath: string;
}

const resize = async function ({
  imgPath,
  width,
  height,
  processedImgPath,
}: sharpProps): Promise<string | undefined> {
  try {
    await sharp(imgPath).resize(width, height).png().toFile(processedImgPath);

    return processedImgPath;
  } catch (err) {
    console.log(err);
  }
};

export default resize;
