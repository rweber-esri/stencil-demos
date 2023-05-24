import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

/**
 * A simple list component that uses CSS grid to arrange
 * nested `grid-list-item` elements in one or more columns
 * supporting LTR and RTL languages.
 * 
 * Example 1: A grid layout with 3 columns
 * 
 * ```html
 * <grid-list columns="3">
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
 * Example 2: A list layout with a single column
 * 
 * ```html
 * <grid-list>
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
 * @slot default - A slot to render `grid-list-item`'s into
 */
@Component({
  tag: 'grid-list',
  styleUrl: 'grid-list.css',
  shadow: true,
})
export class GridList {

  mutationObserver: MutationObserver = null;

  @Element() element: HTMLGridListElement;

  /**
   * The number of columns when "layout" is "grid". Defaults to 1.
   */
  @Prop({ reflect: true }) columns?: number = 1;

  @Watch('columns')
  handleColumnsChanged () {
    this.applyItemStyles();
  }

  /**
   * @internal
   * TODO: Delete and use intl.direction instead
   */
  @Prop({ reflect: true }) direction: 'ltr' | 'rtl' = 'ltr';

  @Watch('direction')
  handleDirectionChanged () {
    this.applyItemStyles();
  }

  constructor () {
    // TODO: use `bind` util
    this.applyItemStyles = this.applyItemStyles.bind(this);
  }

  connectedCallback () {
    this.connect();
  }

  disconnectedCallback () {
    this.disconnect();
  }

  componentWillLoad () {
    // TODO: add intl
    this.connect();
    this.applyItemStyles();
  }

  connect () {
    if (!this.mutationObserver) {
      this.mutationObserver = new MutationObserver(this.applyItemStyles);
    }
    this.mutationObserver.observe(this.element, {
      childList: true,
    });
  }

  disconnect () {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  }

  // TODO: debounce
  // TODO: use intl.direction instead of this.direction
  applyItemStyles () {
    let row = 1;
    let col = this.direction === 'ltr'
      ? 1
      : this.columns;
    this.element
      .querySelectorAll('grid-list-item')
      .forEach((item: HTMLGridListItemElement) => {
        const styles: Record<string, string> = {
          '--grid-row-end': row.toString(),
          '--grid-row-start': row.toString(),
          '--grid-column-start': col.toString(),
          '--grid-column-end': col.toString(),
        };
        Object.entries(styles)
          .forEach(([key, value]) => item.style.setProperty(key, value))
        if (this.direction === 'ltr') {
          if (col < this.columns) {
            col += 1;
          } else {
            col = 1;
            row += 1;
          }
        } else {
          if (col > 1) {
            col -= 1;
          } else {
            col = this.columns;
            row += 1;
          }
        }
      });
  }

  get style (): Record<string, string> {
    return {
      '--grid-template-columns': `repeat(${this.columns}, 1fr)`
    };
  }

  render() {
    return (
      <Host
        role="list"
        style={this.style}
      >
        <slot></slot>
      </Host>
    );
  }

}
