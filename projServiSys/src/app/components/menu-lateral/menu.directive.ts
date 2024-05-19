// menu.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBotaoMenuDirective]'
})
export class BotaoMenuDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appBotaoMenuDirective(userType: string) {
    // Limpa o conteúdo existente
    this.viewContainerRef.clear();

    // Lógica para decidir qual componente de botão exibir com base no userType
    if (userType === 'admin') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (userType === 'regular') {
      // Caso tenha um componente de botão diferente para usuários regulares
      // this.viewContainerRef.createEmbeddedView(this.templateRefOutroComponente);
    }
  }
}
