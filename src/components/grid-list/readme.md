# grid-list



<!-- Auto Generated Below -->


## Overview

A simple list component that uses CSS grid to arrange
nested `grid-list-item` elements in one or more columns
supporting LTR and RTL languages.

Example 1: A grid layout with 3 columns

```html
<grid-list columns="3">
  <grid-list-item>1</grid-list-item>
  <grid-list-item>2</grid-list-item>
  <grid-list-item>3</grid-list-item>
  <grid-list-item>4</grid-list-item>
  <grid-list-item>5</grid-list-item>
  <grid-list-item>6</grid-list-item>
  <grid-list-item>7</grid-list-item>
  <grid-list-item>8</grid-list-item>
  <grid-list-item>9</grid-list-item>
  <grid-list-item>10</grid-list-item>
</grid-list>
```

Example 2: A grid layout with a single column

```html
<grid-list>
  <grid-list-item>1</grid-list-item>
  <grid-list-item>2</grid-list-item>
  <grid-list-item>3</grid-list-item>
  <grid-list-item>4</grid-list-item>
  <grid-list-item>5</grid-list-item>
  <grid-list-item>6</grid-list-item>
  <grid-list-item>7</grid-list-item>
  <grid-list-item>8</grid-list-item>
  <grid-list-item>9</grid-list-item>
  <grid-list-item>10</grid-list-item>
</grid-list>
```

## Properties

| Property  | Attribute | Description                                                   | Type     | Default |
| --------- | --------- | ------------------------------------------------------------- | -------- | ------- |
| `columns` | `columns` | The number of columns when "layout" is "grid". Defaults to 1. | `number` | `1`     |


## Slots

| Slot        | Description                              |
| ----------- | ---------------------------------------- |
| `"default"` | A slot to render `grid-list-item`'s into |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
