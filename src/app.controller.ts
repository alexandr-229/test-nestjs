import { Controller, Get, Query, Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ICalculateDissselDto } from './dto/ICalculateDisssel.dto';
import { IprobabilityOfFailDto } from './dto/IprobabilityOfFail.dto'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('calculateDissselUsageForDistance')
    async calculateDissselGet(
        @Query() dto: ICalculateDissselDto
    ) {
        try {
            const result = await this.appService.calculateDisssel(dto);
            return { result }
        } catch(e) {
            return { error: 'Error' }
        }
    }

    @Get('probabilityOfUnitInjectorFail')
    async probabilityOfFailGet(@Query() dto?: IprobabilityOfFailDto) {
        try {
            const result = await this.appService.probabilityOfFail();
            return { result, VIN: dto.VIN ? dto.VIN : null }
        } catch(e) {
            return { error: 'Error' }
        }
    }

    @HttpCode(200)
    @Post('calculateDissselUsageForDistance')
    async calculateDissselPost(
        @Body() dto: ICalculateDissselDto
    ) {
        try {
            const result = await this.appService.calculateDisssel(dto);
            return { result }
        } catch(e) {
            return { error: 'Error' }
        }
    }

    @HttpCode(200)
    @Post('probabilityOfUnitInjectorFail')
    async probabilityOfFailPost(@Body() dto?: IprobabilityOfFailDto) {
        try {
            const result = await this.appService.probabilityOfFail();
            return { result, VIN: dto.VIN ? dto.VIN : null }
        } catch(e) {
            return { error: 'Error' }
        }
    }
}
