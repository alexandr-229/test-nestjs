import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {ICalculateDissselDto} from '../src/dto/ICalculateDisssel.dto';
import {IprobabilityOfFailDto} from '../src/dto/IprobabilityOfFail.dto'

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const testCalculateDisssel: ICalculateDissselDto = {
    distance: '450',
    yearOfProduction: '2010',
    fuelUsagePer100KM: '10'
  }

  const testProbabilityOfFail: IprobabilityOfFailDto = {
    VIN: '123'
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/calculateDissselUsageForDistance (GET)', async () => {
    return request(app.getHttpServer())
      .get('/calculateDissselUsageForDistance?distance=450&yearOfProduction=2010&fuelUsagePer100KM=10')
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.result).toBeDefined()
      })
  });

  it('/probabilityOfUnitInjectorFail (GET)', async () => {
    return request(app.getHttpServer())
      .get('/probabilityOfUnitInjectorFail')
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.result).toBeDefined()
      })
  });

  it('/calculateDissselUsageForDistance (POST)', async () => {
    return request(app.getHttpServer())
      .post('/calculateDissselUsageForDistance')
      .send(testCalculateDisssel)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.result).toBeDefined()
      })
  });

  it('/probabilityOfUnitInjectorFail (POST)', async () => {
    return request(app.getHttpServer())
      .get('/probabilityOfUnitInjectorFail')
      .send(testProbabilityOfFail)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.result).toBeDefined()
      })
  });
});
