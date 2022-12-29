import { Command, CommandRunner } from 'nest-commander';
import { AdsSeedCommand } from './ads.seed.command';

@Command({ name: 'seed:init', description: 'Ajouter des fakes données' })
export class InitSeedCommand extends CommandRunner {
  constructor(private adsSeedCommand: AdsSeedCommand) {
    super();
  }
  async run() {
    await this.adsSeedCommand.run();
  }
}
