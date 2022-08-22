import resize from '../helper/resize';
import path from 'path';

describe('Testing functionality of resize', () => {
  const width: number = 200;
  const height: number = 200;
  const name: string = 'fjord';
  const imgPath = path.resolve(path.join('src/images/full/' + name + '.jpg'));
  const processedImgPath = path.resolve(
    path.join('src/images/processed/' + name + width + '-' + height + '.png')
  );

  it('testing the image file added to the correct path ', async (): Promise<void> => {
    const result = await resize({ imgPath, width, height, processedImgPath });
    expect(result).toEqual(processedImgPath);
  });

  it('width should be number', (): void => {
    expect(typeof width).toBe('number');
  });

  it('height should be number', (): void => {
    expect(typeof height).not.toBe('string');
  });
});
