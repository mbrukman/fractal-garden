# Fern 4

This Fern is an [L-System Fractal](https://en.wikipedia.org/wiki/L-system). It is generated by the L-System Algorithm with the following settings: 

```ts
const fern4: Ruleset = {
    color: "#ffe10b",
    minIterations: 1,
    maxIterations: 9,
    axiom: "X",
    replace: {
      X: "F[+X]F[-X]+X",
      F: "FF",
    },
    divideFactor: 2,
    initLength(ctx) {
      return ctx.height * 0.4;
    },
    angle: 20,
    initTranslation(ctx) {
      return [ctx.width / 2, ctx.height];
    },
};
```

Ferns are cool, and they are one of the original applications of L-Systems. There is a great book out there called ABOP - [The Algorithmic Beauty of Plants](http://algorithmicbotany.org/papers/#abop). It covers how to model plants with algorithms in-depth and incidentally, and also has a long section on how to use L-Systems to generate grasses, bushes, trees and ferns.

This fractal, by its nature as an L-System, is also related to all the other L-System Fractals. A few you can check out: [Hilbert Curve](/l-system/hilbert-curve), [Sierpinski Triangle](/l-system/sierpinski-triangle), and the [Lévy Curve](/l-system/levy-curve).

You can also check out the other plant-like structures from the Fractal Garden – [the Barnsley Fern](/barnsley-fern) and [the Fractal Canopy](/fractal-canopy).

The alphabet to instructions set used to draw this fractal are the same as for the other L-Systems:

```ts
const drawRules: Record<string, () => void> = {
    V: () => {},
    W: () => {},
    X: () => {},
    Y: () => {},
    Z: () => {},
    G: drawForward,
    F: drawForward,
    f: () => ctx.translate(0, -len),
    "+": () => ctx.rotate(angle * rotationDirection),
    "-": () => ctx.rotate(angle * -rotationDirection),
    "|": () => ctx.rotate(180),
    "[": () => ctx.push(),
    "]": () => ctx.pop(),
    "#": () => (ctx.lineWidth = weight += weightIncrement) ,
    "!": () => (ctx.lineWidth = weight -= weightIncrement) ,
    ">": () => (len *= scale),
    "<": () => (len /= scale),
    "&": () => (rotationDirection = -rotationDirection),
    "(": () => (angle += angleIncrement),
    ")": () => (angle -= angleIncrement),
};
```