import { Command, CommandRunner } from 'nest-commander';
import { AdsSeed } from './ads.seed';

@Command({ name: 'seed:init', description: 'Ajouter des fakes données' })
export class InitSeedCommand extends CommandRunner {
  constructor(private adsSeed: AdsSeed) {
    super();
  }
  async run() {
    await this.adsSeed.run();
  }
}
