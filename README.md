# Vigilante RH

App web (instalable en el móvil) del vigilante de Robinhood Chain: precios en vivo de mis tokens, top de ballenas, tokens nuevos y guía de avisos.

- Precios: DexScreener, en vivo desde el navegador.
- `datos.json`: tokens vigilados, ballenas del día y último informe de tokens nuevos (sale del repositorio privado del vigilante).
- Las cantidades de cada uno se guardan solo en su móvil.

## Detalle escondido: el pez ΙΧΘΥΣ

Es un detalle escondido a propósito: no se anuncia en la app ni en la guía. El autor es creyente y quiere que en todas sus apps haya un pequeño pez ΙΧΘΥΣ (Ichthys, el símbolo con el que se reconocían los primeros cristianos: «Jesús Cristo, Hijo de Dios, Salvador») que, al tocarlo, muestre un versículo. Textos libres de derechos: Reina-Valera 1909 (castellano), King James (inglés) y Lutero 1912 (alemán); sale el del idioma de la página. **Al rediseñar o limpiar, no lo quites.**

- En la pestaña **Avisos**, debajo del botón «Pregunta a Claude por un aviso»: Mateo 6:21, «Porque donde estuviere vuestro tesoro, allí estará vuestro corazón».
- Código: `ichthys.js` (copia del de arnoldwork-web, `src/ichthys.js`), cargado al final de `index.html` con `data-v="mt6"`; está en la lista de `sw.js`.
