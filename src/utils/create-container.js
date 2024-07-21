import { BaseContainer } from '../gui/base-container.gui.js';

export function createContainer(...containedElements) {
  // Crear un contenedor y añadir los textos
  const container = new BaseContainer(this, 0, 0, [...containedElements], {
    size: 'sm',
  });
  // const container = this.add.container(0, 0, [...containedElements]);

  // Traer texto al frente
  containedElements.forEach(el => container.bringToTop(el));

  // Calcular el tamaño del contenedor
  const containerWidth = Math.max(
    ...containedElements.map(({ width }) => width)
  );
  const containerHeight =
    containedElements.at(-1).y + containedElements.at(-1).height;

  // Centrar el contenedor
  container.setPosition(
    (this.game.config.width - containerWidth) / 2,
    (this.game.config.height - containerHeight) / 2
  );

  return container;
}
