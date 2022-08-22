import express from 'express';
import * as fsPromises from 'fs';
import * as path from 'path';
import resize from '../../helper/resize';
import { Request, Response } from 'express';

const imgRoute = express.Router();
const imgNames = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

imgRoute.get('/', (req: Request, res: Response) => {
  const name = req.query.name as unknown as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const imgPath = path.resolve(path.join('src/images/full/' + name + '.jpg'));
  const processedImgPath = path.resolve(
    path.join('src/images/processed/' + name + width + '-' + height + '.png')
  );
  const image = imgNames.includes(name);

  if (!name || !width || !height) {
    return res.send(
      ' incomplete query parameters, name, width and height are required'
    );
  } else if (!image) {
    return res.send('This image does not exist!');
  } else {
    /**
     * if the image present in the processed folder
     * serve it from the processed folder or resize it , save it and then serve it
     */
    fsPromises.readdir(
      path.resolve('src/images/processed'),
      (err, files): void => {
        if (err) {
          console.log(err);
        } else if (files.includes(processedImgPath)) {
          //console.log(processedImgPath);
          return res.sendFile(processedImgPath);
        } else {
          resize({ imgPath, width, height, processedImgPath }).then(() => {
            return res.sendFile(processedImgPath);
          });
        }
      }
    );
  }
});

export default imgRoute;
