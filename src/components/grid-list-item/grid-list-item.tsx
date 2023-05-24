import { Component, Host, h } from '@stencil/core';

/**
 * A simple list item component to nest within `grid-list`
 * components to achieve a CSS grid layout that supports LTR
 * & RTL languages.
 * 
 * Example: A grid layout with 3 columns
 * 
 * ```html
 * <grid-list layout="grid" columns="3">
 *   <grid-list-item>1</grid-list-item>
 *   <grid-list-item>2</grid-list-item>
 *   <grid-list-item>3</grid-list-item>
 *   <grid-list-item>4</grid-list-item>
 *   <grid-list-item>5</grid-list-item>
 *   <grid-list-item>6</grid-list-item>
 *   <grid-list-item>7</grid-list-item>
 *   <grid-list-item>8</grid-list-item>
 *   <grid-list-item>9</grid-list-item>
 *   <grid-list-item>10</grid-list-item>
 * </grid-list>
 * ```
 * 
 * @slot default - A slot to render custom content
 */
@Component({
  tag: 'grid-list-item',
  styleUrl: 'grid-list-item.css',
  shadow: true,
})
export class GridListItem {

  render() {
    return (
      <Host role="list-item">
        <slot></slot>
      </Host>
    );
  }

}
