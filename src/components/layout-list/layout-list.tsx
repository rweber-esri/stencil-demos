import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

/**
 * A simple list component that uses CSS grid to arrange
 * nested `layout-list-item` elements in either a `list`
 * (single column) or `grid` (multiple columns) layout
 * that supports LTR & RTL languages.
 * 
 * Example 1: A grid layout with 3 columns
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
 * Example 2: A list layout with a single column
 * 
 * ```html
 * <layout-list layout="list">
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
 * @slot default - A slot to render `layout-list-item`'s into
 */
@Component({
  tag: 'layout-list',
  styleUrl: 'layout-list.css',
  shadow: true,
})
export class LayoutList {

  mutationObserver: MutationObserver = null;

  @Element() element: HTMLLayoutListElement;

  /**
   * The list layout. Can be either "list" or "grid"
   */
  @Prop({ reflect: true }) layout: 'list' | 'grid' = 'list';

  @Watch('layout')
  handleLayoutChanged () {
    this.applyItemStyles();
  }

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
      : this._columns;
    this.element
      .querySelectorAll('layout-list-item')
      .forEach((item: HTMLLayoutListItemElement) => {
        const styles: Record<string, string> = {
          '--grid-row-end': row.toString(),
          '--grid-row-start': row.toString(),
          '--grid-column-start': col.toString(),
          '--grid-column-end': col.toString(),
        };
        Object.entries(styles)
          .forEach(([key, value]) => item.style.setProperty(key, value))
        if (this.direction === 'ltr') {
          if (col < this._columns) {
            col += 1;
          } else {
            col = 1;
            row += 1;
          }
        } else {
          if (col > 1) {
            col -= 1;
          } else {
            col = this._columns;
            row += 1;
          }
        }
      });
  }

  get _columns (): number {
    return this.layout === 'list'
      ? 1
      : this.columns;
  }

  get style (): Record<string, string> {
    return {
      '--grid-template-columns': `repeat(${this._columns}, 1fr)`
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
