import { Command, CommandRunner } from 'nest-commander';
import { AdsSeed } from './ads.seed';

@Command({ name: 'seed:ads', description: 'Ajouter des `Ads`' })
export class AdsSeedCommand extends CommandRunner {
  constructor(private adsSeed: AdsSeed) {
    super();
  }
  async run() {
    await this.adsSeed.run();
  }
}
