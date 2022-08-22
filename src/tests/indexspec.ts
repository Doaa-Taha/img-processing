import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing the endpoints', () => {
  it('Using the endpoint without name', async (): Promise<void> => {
    await request
      .get('/img?')
      .expect(
        ' incomplete query parameters, name, width and height are required'
      );
  });

  it('Using the endpoint with name but without width and height', async (): Promise<void> => {
    await request
      .get('/img?name=fjord')
      .expect(
        ' incomplete query parameters, name, width and height are required'
      );
  });

  it('Using the endpoint with name and width but without height', async (): Promise<void> => {
    await request
      .get('/img?name=fjord&width=200')
      .expect(
        ' incomplete query parameters, name, width and height are required'
      );
  });

  it("if the image doesn't exist", async (): Promise<void> => {
    await request
      .get('/img?name=pyramids&width=200&height=200')
      .expect('This image does not exist!');
  });

  it('Using the endpoint with a valid parameters returns 200', async (): Promise<void> => {
    await request.get('/img?name=fjord&width=200&height=200').expect(200);
  });
});
