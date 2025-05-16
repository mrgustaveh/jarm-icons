## jarm-icons

A lightweight collection of customizable React SVG icons built with TypeScript, typed, tree-shakable, and easily styleable.

### Installation

```bash
npm install jarm-icons
# or
yarn add jarm-icons
```

### Usage

```tsx
import { AnglesDown } from "jarm-icons";

function MyComponent() {
  return (
    ...
    <AnglesDown width={16} height={16} color={colors.success} />
  )
}
```

### Props

Each icon supports the following props:

| Prop   | Type     | Default | Description             |
| ------ | -------- | ------- | ----------------------- |
| width  | `number` | 24      | Width of the icon (px)  |
| height | `number` | 24      | Height of the icon (px) |
| color  | `string` | "black" | Stroke & fill color     |

### Tree shaking

This package supports tree-shaking. Import only the icons you use to keep your bundle size small.

### Contributing

1. Create a corresponding React component for your icon(s) in `src/icons`
2. Make sure to use valid jsx - so replace `fill-rule` with `fillRule` or `stroke-width` with `strokeWidth` e.t.c
3. Export it in `src/index.ts`
4. Run `npm run build`
5. Submit a PR

![npm](https://img.shields.io/npm/v/jarm-icons)
![downloads](https://img.shields.io/npm/dm/jarm-icons)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
