import { Component } from '@angular/core';

@Component({
  selector: 'app-release-campaign',
  imports: [],
  templateUrl: './release-campaign.html',
  styleUrl: './release-campaign.scss',
})
export class ReleaseCampaign {
  public teachings = [
    '✓ fundamentos da filosofia budista',
    '✓ alicerce da disciplina búdica',
    '✓ técnicas para meditação ',
    '✓ Técnicas anti-burnout',
    '✓ o caminho do meio para encontrar o equilíbrio entre vida pessoal e profissional',
    '✓ open-source como um campo de méritos',
  ];
}
