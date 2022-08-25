import { Injectable } from '@nestjs/common';
import { ICalculateDissselDto } from './dto/ICalculateDisssel.dto';
import { IprobabilityOfFailDto } from './dto/IprobabilityOfFail.dto'

@Injectable()
export class AppService {
    async calculateDisssel({ distance, fuelUsagePer100KM }: ICalculateDissselDto) {
        return +distance * +fuelUsagePer100KM / 100
    };

    async probabilityOfFail() {
        return Math.floor(Math.random() * 100) / 100;
    }
}
