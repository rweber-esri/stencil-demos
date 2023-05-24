import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'layout-list-item',
  styleUrl: 'layout-list-item.css',
  shadow: true,
})
export class LayoutListItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
