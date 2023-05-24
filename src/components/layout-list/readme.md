# layout-list



<!-- Auto Generated Below -->


## Overview

A simple list component that uses CSS grid to arrange
nested `layout-list-item` elements in either a `list`
(single column) or `grid` (multiple columns) layout
that supports LTR & RTL languages.

Example 1: A grid layout with 3 columns

```html
<layout-list layout="grid" columns="3">
  <layout-list-item>1</layout-list-item>
  <layout-list-item>2</layout-list-item>
  <layout-list-item>3</layout-list-item>
  <layout-list-item>4</layout-list-item>
  <layout-list-item>5</layout-list-item>
  <layout-list-item>6</layout-list-item>
  <layout-list-item>7</layout-list-item>
  <layout-list-item>8</layout-list-item>
  <layout-list-item>9</layout-list-item>
  <layout-list-item>10</layout-list-item>
</layout-list>
```

Example 2: A list layout with a single column

```html
<layout-list layout="list">
  <layout-list-item>1</layout-list-item>
  <layout-list-item>2</layout-list-item>
  <layout-list-item>3</layout-list-item>
  <layout-list-item>4</layout-list-item>
  <layout-list-item>5</layout-list-item>
  <layout-list-item>6</layout-list-item>
  <layout-list-item>7</layout-list-item>
  <layout-list-item>8</layout-list-item>
  <layout-list-item>9</layout-list-item>
  <layout-list-item>10</layout-list-item>
</layout-list>
```

## Properties

| Property  | Attribute | Description                                                   | Type               | Default  |
| --------- | --------- | ------------------------------------------------------------- | ------------------ | -------- |
| `columns` | `columns` | The number of columns when "layout" is "grid". Defaults to 1. | `number`           | `1`      |
| `layout`  | `layout`  | The list layout. Can be either "list" or "grid"               | `"grid" \| "list"` | `'list'` |


## Slots

| Slot        | Description                                |
| ----------- | ------------------------------------------ |
| `"default"` | A slot to render `layout-list-item`'s into |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
