import { Component, Host, h } from '@stencil/core';

/**
 * A simple list item component to nest within `layout-list`
 * components to achieve a CSS grid based `list` (single column)
 * or `grid` (multiple columns) layout that supports LTR & RTL
 * languages.
 * 
 * Example: A grid layout with 3 columns
 * 
 * ```html
 * <layout-list layout="grid" columns="3">
 *   <layout-list-item>1</layout-list-item>
 *   <layout-list-item>2</layout-list-item>
 *   <layout-list-item>3</layout-list-item>
 *   <layout-list-item>4</layout-list-item>
 *   <layout-list-item>5</layout-list-item>
 *   <layout-list-item>6</layout-list-item>
 *   <layout-list-item>7</layout-list-item>
 *   <layout-list-item>8</layout-list-item>
 *   <layout-list-item>9</layout-list-item>
 *   <layout-list-item>10</layout-list-item>
 * </layout-list>
 * ```
 * 
 * @slot default - A slot to render custom content
 */
@Component({
  tag: 'layout-list-item',
  styleUrl: 'layout-list-item.css',
  shadow: true,
})
export class LayoutListItem {

  render() {
    return (
      <Host role="list-item">
        <slot></slot>
      </Host>
    );
  }

}
