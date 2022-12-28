import { Module } from '@nestjs/common';
import { AdsSeed } from './seed/ads.seed';
import { AdsSeedCommand } from './seed/ads.seed.command';
import { AdsModule } from 'src/ads/ads.module';
import { FileModule } from 'src/file/file.module';
import { InitSeedCommand } from './seed/init.seed.command';

@Module({
  imports: [AdsModule, FileModule],
  providers: [AdsSeed, AdsSeedCommand, InitSeedCommand],
  exports: [],
})
export class CliModule {}
